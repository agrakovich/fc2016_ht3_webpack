'use strict'
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from '../constants/newsActionTypes'

export const NewsStore = {

    state: {
        articles: [],
        hasError: false,
        errorMessage: '',
        isPending: false,
        isSuccess: false
    },

    update:  function(action, change) {
        switch(action.type){
            case GET_NEWS_REQUEST: {
                this.state.isPending = true;
                break;

            }
            case GET_NEWS_SUCCESS: {
                this.state.articles = action.payload;
                this.state.hasError = false;
                this.state.isPending = false;
                this.state.isSuccess = true;
                break;
            }
            case GET_NEWS_ERROR: {
                this.state.articles = [];
                this.state.hasError = true;
                this.state.isPending = false;
                this.state.isSuccess = false;
                break;
            }
        }
        change();
    }
};