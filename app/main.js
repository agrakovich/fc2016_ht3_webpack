import './assets/styles/app.scss'
const config = {
    newsUrl: 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=e4f61131ae2a4c888846c71d56ebb5c0',
    newsElementId: 'articles',
    newsButtonId: 'show-news-button'
};

const showNewsButton = document.getElementById(config.newsButtonId);
const testJson = require("../test-data/test.json");

console.log(testJson);

showNewsButton.onclick = () => {
    require.ensure([], (require) => {
        let appClass = require('./js/newsApplication');
        require('./assets/styles/articles.scss');
        let app = new appClass.NewsApplication(config);
        app.run();
    }, 'articles');
};
