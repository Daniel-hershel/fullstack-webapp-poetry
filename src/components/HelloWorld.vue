<template>
  <div class="hello">
  <div class = "title">
  <h1> {{this.welcome}} </h1>
  </div>
  <div class = "instructions">
  <div v-for="int in intro">
  <h3> {{int}} </h3>
  </div>
  </div>
  <div class = "next">
   <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">START</a>

  </div>
  </div>
</template>

<script>
import router from '../main.js'
export default {
  name: 'HelloWorld',
 data(){
   return {
     welcome: 'Creative Reflection Poetry',
     intro: [
      'This little app is designed to guide you through the process of writing a form poem.', 
      'A form poem is (you guessed it) a poem that follows a form.',
      'In the case of this app, you will respond to 3 guided prompts which will lead you through a quick creative process of reflecting on your past, present, and future self...',
      'In only three easy steps you will have created your own Creative Reflection Poem!']


   }
 },

 methods: {
   navigate(){
     router.push({name: "Shedding"})
   },
     navigateGallery(){
       console.log('navigating')
     router.push({name: "Gallery"})
   }
   
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chivo:400,700,900');

.hello{
  display: grid;
  width: 100vw;
  height: 100vh;
  margin-top:0;
  grid-gap: 2.9vh;
  grid-template-rows: 18vh 60vh 15vh;
  grid-template-columns: 95vw;
  margin:auto;
  margin-top:0;
  padding-top:0;
  background: #29252c;
  color: #ffea85;
}

.next{
font-size: 9vw;
color: #f76262;

}
.title{
font-size: 3.1vw;
color:#f76262;
}

.instructions{
  display: flex;
  flex-direction: column;
  width: 75%;
    margin-left:auto;
  margin-right:auto;
  justify-content: center;

  /* not working or has no effect right now */
  /* align-items: center; */

}

h3{
  width: 68%;
  margin-left:auto;
  margin-right:auto;
  font-size: 2.5vw;
  color: #ffea85;
}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */
 
/* Portrait */
@media only screen
and (min-device-width: 375px)
and (max-device-width: 667px)
and (-webkit-min-device-pixel-ratio: 2)
and (orientation: portrait) {
/* Styles */
h3{
  font-size:3.9vw;
}

}

/* Landscape */
 
@media only screen
and (min-device-width: 375px)
and (max-device-width: 667px)
and (-webkit-min-device-pixel-ratio: 2)
and (orientation: landscape) {
 h3{
     font-size:3.9vw;
    /* background: pink; */
 }
}
 
/* ----------- Large Screens ----------- */
@media screen and (min-width: 1500px) {
  h3{
    font-size: 2.2vw;
  }
  .instructions{
      /* background: pink; */

  }
}
@media screen and (min-width: 1700px) {
  h3{
    font-size: 1.7vw;
  }
  .instructions{

  }
}
</style>
