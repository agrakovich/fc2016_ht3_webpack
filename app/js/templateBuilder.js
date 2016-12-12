import HtmlHelper from './htmlHelper'

class TemplateBuilder{

    constructor(){
        this.htmlHelper = new HtmlHelper();
    }

    getInfoHtml(infoMessage){
        return this.htmlHelper.renderHtml`<div class="info">
                    <div class="label">Info:</div>
                    <div class="message">${infoMessage}</div>
                </div>`;
    }

    getLoaderHtml(loaderMessage){
        return this.htmlHelper.renderHtml`<div class="loader">                    
                    <div class="message">${loaderMessage}</div>
                    <img src="app/assets/images/ring.svg">
                </div>`;
    }

    getErrorHtml(errorMessage){
        return this.htmlHelper.renderHtml`<div class="error">
                    <div class="label">Error:</div>
                    <div class="message">${errorMessage}</div>
                </div>`;
    }

    getArticlesHtml(articles){
        return articles.map(article => this.htmlHelper.renderHtml`
            <article>
                <div class="image">
                    <a href="${article.url}">
                        <img src="${article.urlToImage}">
                    </a>
                </div>
                <div class="asset">                    
                    <a href="${article.url}">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                    </a>
                    <div class="publishat">${article.publishedAt}</div>
                    <div class="byline">${article.author}</div>
                </div>
            </article>`).join("");
    }
}

export default TemplateBuilder
