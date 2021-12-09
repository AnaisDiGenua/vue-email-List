// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. 


const app = new Vue({
    el: '#root',
    data: {
        emailArray: []
    },
    methods: {

    },
    created() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                this.emailArray.push(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
        console.log(this.emailArray);
    }
});