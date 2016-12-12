'use strict'
import Dispatcher from './dispatcher'
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from '../constants/newsActionTypes'

const config = {
    newsUrl: 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=e4f61131ae2a4c888846c71d56ebb5c0',
};

const { createAction } = Dispatcher.create();

export function getNews() {
    createAction(GET_NEWS_REQUEST)();
    fetch(config.newsUrl, {mode: 'cors'})
        .then(response => response.json())
        .then(jsonResponse => {
            createAction(GET_NEWS_SUCCESS)(jsonResponse.articles);
    })
    .catch( error => {
        console.log(error);
        createAction(GET_NEWS_ERROR)();
    });
}