import React, { useState } from "react";
import Article from "../Article/Article";
import ReadingList from "../ReadingList/ReadingList";
import feeds from "../../data/feeds"

const ArticleContainer = () => {
    
    const[readingList, setReadingList] = useState([])
    const[modalContent, setModalContent] = useState("");
    const [modal, setModal] = useState(false);


    const openModal = (content) => {

        setModalContent(content)
        setModal(true); 
    }

    const closeModal = () => {
        setModalContent("content")
        setModal(!modal);
    }


    const addToReadingList = (article) => {
        const index = readingList.map(article => {
            return article.title
        }).indexOf(article.title);

        console.log(index)

        index === -1 ? setReadingList([...readingList,article]): openModal("The article is already on your reading list.")

    }
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                {feeds.map(feed => (
                    <Article key={feed.title} 
                    article={feed}
                    onAddToReadingList={addToReadingList}
                />
                ))}
            </div>
                <div className="column">
                    <ReadingList list={readingList}/>
                </div>
            </div>
            <ErrorModal content={modalContent} open={modal} onClose={closeModal}/>
            
            
        </div>
    )
}

const ErrorModal = ({content, open, onClose}) => {

    const modalClass = open ? "modal is-active" : "modal"

    return(
        <div className={modalClass}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="card">
                    <div className="card-header has-background-warning">
                        <h2 className="card-header-title has-text-white">Information</h2>
                    </div>
                    <div className="card-content has-text-centered">
                        <p className="content is-size-5">{content}</p>
                    </div>
                </div> 
            </div>
            <button className="modal-close" onClick={onClose}></button>
        </div>
    )
}
export default ArticleContainer
