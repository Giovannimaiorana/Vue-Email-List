const { createApp } = Vue

createApp({
  data() {
    return {
      emailCasuali:[

      ]
    }
  },
  mounted(){
    for(let i=0; i<10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response)=>{
    this.emailCasuali.push({email:response.data.response});
  
  });}
  }
}).mount('#app')