// Genera 10 mail tramite api e
// stampale in una lista

var app = new Vue ({
    el: '#app',
    data: {
        single: '',
        mailArray: [],
        nomeMittente: []
    },
    methods: {
        generaMail(){
            for(let i = 0; i < 10; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    
                    this.mailArray.push(result.data.response)
                    console.log(this.mailArray);
                })

                axios.get("https://flynn.boolean.careers/exercises/api/random/name")
                .then((result) => {

                    this.nomeMittente.push(result.data.response);
                })
            }
        }
    }
})