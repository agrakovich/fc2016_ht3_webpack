'use strict'

let _dispatcher = null

class Dispatcher {

    constructor(){
        if(!_dispatcher){
            this._stores = [];
            _dispatcher = this;
        } else {
            return _dispatcher;
        }
    }

    register(store) {
        if (!store || !store.update) {
            throw new Error('You should provide a store that has an `update` method.');
        } else {
            let consumers = [];
            const change = function () {
                consumers.forEach(function (l) {
                    l(store.state);
                });
            };
            const subscribe = function (consumer) {
                consumers.push(consumer);
            };

            this._stores.push({ store: store, change: change });
            return subscribe;
        }
        return false;
    }

    dispatch(action) {
        if (this._stores.length > 0) {
            this._stores.forEach(function (entry) {
                entry.store.update(action, entry.change);
            });
        }
    }

}

module.exports = {
    create: function () {
        const dispatcher = new Dispatcher();

        return {
            createAction: function (type) {
                if (!type) {
                    throw new Error('Please, provide action\'s type.');
                } else {
                    return function (payload) {
                        return dispatcher.dispatch({ type: type, payload: payload });
                    }
                }
            },
            createSubscriber: function (store) {
                return dispatcher.register(store);
            }
        }
    }
};