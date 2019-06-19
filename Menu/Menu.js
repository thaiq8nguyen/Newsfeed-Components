
class SideNavMenu {
  constructor(menu) {
    this.menu = menu;
    this.menuBtn = document.querySelector(".menu-button");
    this.articlesContainer = document.querySelector(".articles");
    this.documentBody = document.querySelector("body");


    this.menuBtn.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu() {

    
    this.menu.classList.toggle("menu--open")
    this.articlesContainer.classList.toggle("articles-push")
    
  }
}


const menu = document.querySelector(".menu");

new SideNavMenu(menu);