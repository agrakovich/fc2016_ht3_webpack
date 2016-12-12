import './assets/styles/app.scss'
import './assets/styles/articles.scss'

import NewsView from './js/flux/newsView'
import Dispatcher from './js/flux/dispatcher'
import { NewsStore } from './js/flux/newsStore'
import { getNews } from './js/flux/newsActions'


const { createSubscriber } = Dispatcher.create();
const newsStoreSubscriber = createSubscriber(NewsStore);
NewsView(newsStoreSubscriber, 'articles');
getNews();
