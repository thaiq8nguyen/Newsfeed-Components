// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    // create a reference to the ".expandButton" class. 
    this.dynamicButton = this.domElement.querySelector(".read-more-btn");
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    //this.expandButton.textContent = "Expand";
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.dynamicButton.addEventListener("click", event => {
      this.expandArticle(event);
    });
    
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    const article = event.target.closest(".article");
    
    article.classList.toggle("article-open");

    this.handleArticleButton(article)
    
  }

  handleArticleButton(article) {

    const button = this.dynamicButton;

    if(article.classList.contains("article-open")) {
      button.textContent = "Close";
      button.classList.remove("read-more-btn");
      button.classList.add("close-article-btn");

    } else {
      button.textContent = "Read More"
      button.classList.remove("close-article-btn");
      button.classList.add("read-more-btn");

    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(article => {
  new Article(article);
})
