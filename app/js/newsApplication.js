import HtmlHelper from './htmlHelper'
import TemplateBuilder from './templateBuilder'

class NewsApplication {
    constructor(config) {
        this.newsUrl = config.newsUrl;
        this.newsElementId = config.newsElementId;
        this.htmlHelper = new HtmlHelper();
        this.templateBuilder = new TemplateBuilder();
    }

    run(){
        fetch(this.newsUrl, {mode: 'cors'})
            .then(response => response.json())
            .then(jsonResponse => {
                let articles = jsonResponse.articles.map(article => {
                    return this.getArticleProxy(article);
                });

                let articlesHtml = this.templateBuilder.getArticlesHtml(articles);

                this.htmlHelper.fillElement(this.newsElementId, articlesHtml || this.templateBuilder.getInfoHtml('Sorry. Today there is no news =('));
            })
            .catch( error => {
                 this.htmlHelper.fillElement(this.newsElementId,  this.templateBuilder.getErrorHtml('Sorry. Something wrong =('));
                 console.error(error.message);
            });
    }

    getArticleProxy(article){
        return new Proxy(article, {
            get(target, prop) {
                if (prop == 'publishedAt') {
                    let date = new Date(target[prop]);
                    return date.toLocaleString()
                }
                return target[prop];
            }
        });
    }
}

export  { NewsApplication }