const { createApp } = Vue

createApp({
  data() {
    return {
      emailCasuali:[

      ]
    }
  },
  mounted(){
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then((response)=>{
    this.emailCasuali = response.data.response;
    
  })
  }
}).mount('#app')