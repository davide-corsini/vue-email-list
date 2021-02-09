// Genera 10 mail tramite api e
// stampale in una lista

var app = new Vue ({
    el: '#app',
    data: {
        single: '',
        // mailArray: [

        //     {
        //         nomeMittente: [],

        //     }

        // ]
        mailArray: [],
        
    },
    created(){
        
        

    },
    methods: {
        generaMail(){
            for(let i = 0; i < 10; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    
                    this.mailArray.push(
                        {mail: result.data.response}
                        )

                        console.log(this.mailArray);
                })

                // axios
                // .get("https://flynn.boolean.careers/exercises/api/random/name")
                // .then((result) => {
                //     this.mailArray.forEach(element => {
                //         if(element.nomeMittente){
                //             element.nomeMittente.push(result.data.response);

                //         }
                //         console.log( element.nomeMittente,'IO SONO NOME MITTENTE' );

                //     });
                //     console.log(this.mailArray, 'iO SONO MAIL ARRAY PRINCIPALE');
                // });
                setTimeout(() => {
                if(this.mailArray.length < 21){
                    
                    console.log(this.mailArray);
                    axios
                        .get("https://flynn.boolean.careers/exercises/api/random/name")
                        .then((result) => {
                            this.mailArray.push(
                                { nome: result.data.response }
                            )
                                    
                            console.log(this.mailArray);
                        })
                }    
                }, 200);
                    


            }
            console.log(this.mailArray);

            



            
        },

    }
})