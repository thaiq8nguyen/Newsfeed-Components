import React, {useState} from 'react'
import ReadingListArticle from "../ReadingListArticle/ReadingListArticle";

const ReadingList = ({list}) => {
    
    const [modal, setModal] = useState(false);
    const [readArticle, setReadArticle] = useState("");
    

    const openModal = (title) => {

        const article = findArticle(title);
        setReadArticle(article[0]);  
        setModal(true); 
    }

    const closeModal = () => {
        setReadArticle("");
        setModal(!modal);
    }

    const findArticle = (title) => {
        return list.filter(article => {
            return article.title === title;
        })
    }

    
    const hasArticles =  list.length 
    ? <ul className="content">{list.map(article => 
        (<ReadingListArticle key={article.title} title={article.title} onRead={openModal}/>))}
        </ul>
    : <h3 className="has-text-centered">Your reading list is empty</h3>

    return (
        <div>
            <div className="card">
                <header className="card-header">
                    <h2 className="card-header-title">Reading List</h2>
                </header>
                <div className="card-content">
                    {hasArticles}
                </div>
            </div>
            <ArticleModal open={modal} article={readArticle} onClose={closeModal}/>
        </div>
        
    )
}

const ArticleModal = ({article, open, onClose}) => {

    const modalClass = open ? "modal is-active" : "modal"

    return(
        <div className={modalClass}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h2 className="title">{article.title}</h2>
                    <p className="subtitle">{article.date}</p>
                    <p className="content">{article.firstParagraph}</p>
                    <p className="content">{article.secondParagraph}</p>
                    <p className="content">{article.thirdParagraph}</p>
                </div> 
            </div>
            <button className="modal-close" onClick={onClose}></button>
        </div>
    )
}

export default ReadingList
