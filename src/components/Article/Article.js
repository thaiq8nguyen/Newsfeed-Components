import React, {useState} from 'react'
import cx from "classnames";

import styles from "./Article.less";

const Article = ({ article, onAddToReadingList }) => {
  
  
  const [expand, setExpand] = useState(false);
  

  let contentExpansion = expand ? "card-content" : "card-content is-hidden";

  const readMore = () => {
    setExpand(!expand);

  }
  const handleReadLater = () => {
    
    onAddToReadingList(article)
  }
  const handleLike = () => {

  }
  const handleDislike = () => {

  }
  return (
    <div className={cx("card", styles.article)}>
      <header className="card-header">
        <h2 className="card-header-title is-size-5">{article.title}</h2>
        <a href="#" className="card-header-icon" onClick={readMore}>More...</a>
      </header>
      <div className={contentExpansion}>
        <h4 className="is-size-4 subtitle">{article.date}</h4>
        <p className="content">{article.firstParagraph}</p>
        <p className="content">{article.secondParagraph}</p>
        <p className="content">{article.thirdParagraph}</p>
      </div>
      <footer className="card-footer">
        <a className="is-info card-footer-item" onClick={handleReadLater}>Read Later</a>
        <a className="is-info card-footer-item">Like</a>
        <a className="is-info card-footer-item">Dislike</a>
      </footer>
    </div>
  )
}

export default Article

/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/


/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/
