'use strict'
import HtmlHelper from '../htmlHelper'
import TemplateBuilder from '../templateBuilder'

export default function NewsView(subscribeToStore, elementId) {
    let articles = [];
    let isPending = false;
    let isSuccess = false;
    let hasError = false;

    const htmlHelper = new HtmlHelper();
    const templateBuilder = new TemplateBuilder();

    const render = () => {
        if(isPending){
            htmlHelper.fillElement(elementId, templateBuilder.getLoaderHtml('Wait, please. We get news for you.'));
        }
        if(isSuccess) {
            const articlesHtml = templateBuilder.getArticlesHtml(articles);
            htmlHelper.fillElement(elementId, articlesHtml || templateBuilder.getInfoHtml('Sorry. Today there is no news =('));
        }
        if(hasError) {
            htmlHelper.fillElement(elementId, templateBuilder.getErrorHtml('Sorry. Something wrong =(.'));
        }
    }

    const updateState = (state) => {
        articles = state.articles;
        isPending = state.isPending;
        isSuccess = state.isSuccess;
        hasError = state.hasError;
    }

    subscribeToStore(updateState);
    subscribeToStore(render);
};