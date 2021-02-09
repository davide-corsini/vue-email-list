// Genera 10 mail tramite api e
// stampale in una lista

var app = new Vue ({
    el: '#app',
    data: {
        single: '',
        mailArray: [],
        newArray: [],
        salvataggio: []
        
    },
    created(){
        //mounted *importantissimo
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {

                    this.salvataggio.push(result.data.response);
                    //{in questo momento lui mi crea 10 variabili salvataggio quanto é indice ciclo.
                    console.log(this.salvataggio);
                })
        }

        for (let i = 0; i < 10; i++) {

            console.log(this.mailArray);
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/name")
                .then((result) => {
                    this.mailArray.push(
                        {
                            mail: this.salvataggio[i],
                            nome: result.data.response
                        }
                    )

                    console.log(this.mailArray);
                })



        }
        console.log(this.mailArray);
    }


    
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
                // setTimeout(() => {
                // if(this.mailArray.length < 21){
