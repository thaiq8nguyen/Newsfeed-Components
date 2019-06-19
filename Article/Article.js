
const articlesData = [
  {"title": "Lambda School Students: \"We're the best!\" ",
    "date": "Nov 5th, 2017",
    "content": "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker ",
    "view_counts": 0
  },
  {"title": "Lambda School Students: \"We're the best!\" ",
    "date": "Nov 5th, 2017",
    "content": "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker ",
    "view_counts": 0
  },
  {"title": "Lambda School Students: \"We're the best!\" ",
    "date": "Nov 5th, 2017",
    "content": "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker ",
    "view_counts": 0
  },
  {"title": "Lambda School Students: \"We're the best!\" ",
    "date": "Nov 5th, 2017",
    "content": "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker ",
    "view_counts": 0
  }
];
class BaseArticle {
  constructor(content) {
    this.content = content;
    this.container = document.createElement("div");
    this.container.classList.add("article");
    this.container

  }

  expandArticle() {

  }
}

/* END EXPERIMENT */

class Article {
  constructor(domElement) {
    
    this.article = domElement
    
    this.dynamicButton = this.article.querySelector(".read-more-btn");
    
    this.dynamicButton.addEventListener("click", this.expandArticle.bind(this));
    
  }

  expandArticle() {
    
    this.article.classList.toggle("article-open");

    this.handleArticleButton()
    
  }

  handleArticleButton() {

    const button = this.dynamicButton;

    if(this.article.classList.contains("article-open")) {
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

let articles = document.querySelectorAll(".article");

articles.forEach(article => {
  new Article(article);
})
