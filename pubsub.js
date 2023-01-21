const PubSub = {

    eventCollection : [],

    publish: (event) => {
        this.eventCollection[event]();
    },

    subscribe: (event, callback) => {
        this.eventCollection[event] = callback;
    }
};