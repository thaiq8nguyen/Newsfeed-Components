import React from 'react'

const ReadingListArticle = ({title, onRead}) => {
    const buttonStyles = {
        marginRight: "0.5rem"
    }

    const handleRead = () => {
        onRead(title);
    }
    return (
        
        <div className="columns">
            <div className="column">
                {title}
            </div>
            <div className="column">
                <a className="button is-info" style={buttonStyles} onClick={handleRead}>Read</a>
                <a className="button is-outlined" style={buttonStyles}>Remove</a>
            </div>
        </div>   
        
    )
}

export default ReadingListArticle
