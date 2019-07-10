import React from "react"
import {render} from "react-dom";
import "bulma/css/bulma.min.css";

import Header from "./components/Header/Header";
import ArticleContainer from "./components/ArticleContainer/ArticleContainer";


const App = () => {
    const inlineStyles = {
        padding: "1rem"
    }
    return(
        <section className="section">
            <Header/>
            <div className="columns has-background-white-ter">
                <div className="column is-three-quarters" style={inlineStyles}>
                    <ArticleContainer/>
                </div>
                
            </div>
            
        </section>
    )
}

render(<App/>, document.getElementById("app"))