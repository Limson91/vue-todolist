console.log('test');

const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message: 'Hello World!',
            todoList: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },

                {
                    text: 'Fare la spesa',
                    done: true,
                },
        
                {
                    text: 'Fare il bucato',
                    done: false,
                },

                {
                    text: 'Dare da mangiare al gatto',
                    done: true,
                }
            ]
        }
    },

    methods: {
        checkTask() {
            console.log("click on check!")
        }
    }
}).mount('#app')