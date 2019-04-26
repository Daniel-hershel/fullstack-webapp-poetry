<template>
<div class = "end">
    <div class = "finalPoem">
      <transition 
    v-on:before-enter="beforeEnter"
    v-on:enter="enter">           
    <div class = "poemHolder" v-for="item in items.slice(items.length-1, items.length)" :key="item['.key']">

        <h3>{{item.prompt}}</h3>

        <h2>{{item.responseOne}}</h2>
        <h3>{{item.promptTwo}}</h3>
        <h2>{{item.responseTwo}}</h2>
        <h3>{{item.promptThree}}</h3>
        <h2>{{item.responseThree}}</h2>
    </div>
    </transition>
    </div>
    <div class = "options">
    <button type="submit" @click.prevent="navigateHome()">START AGAIN</button>
    
    <button type="submit" @click.prevent="navigateGallery()">GALLERY OF POEMS</button>
    </div>
</div>
</template>

<script>
import { db } from '../config/db';
import router from '../main.js'


export default {
    name: 'end',
    firebase: {
        items: db.ref('poems'),
    },
    mounted() {
    

    },
    data (){
        return{
        items: []
        }
    },
    methods: {
        beforeEnter(el,done){
             Velocity(el, { opacity:0 }, { duration: 60,complete:done})
            },
        enter(el,done){
             Velocity(el, { opacity:1 }, { duration: 1600,complete:done})
            console.log('working')

        },
        navigateHome(){
            router.push({name: "HelloWorld"})
        },
        navigateGallery(){
     router.push({name: "Gallery"})
   }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Chivo:400,700,900');

.end{
     display: grid;
  width: 100vw;
  height: 100vh;
  margin-top:0;
  grid-template-rows: 80vh 20vh;
  grid-gap: 5vh;
  grid-template-columns: 95vw;
  margin:0;
  padding:0;
  margin-top:0;
  padding-top:0;
  background: #f83e4b;
  color: #f7e185;
  /* color: #8ecccc; */
}

.finalPoem{
    font-family: 'Chivo', sans-serif;
    /* border: 2px solid #d35823; */
    padding: 10px;
    margin:auto;
    width: 85%;
}

h3{
font-size: 3.3vw;
font-weight: 700;

}

h2{
font-size: 3.6vw;
font-weight: 400;
width: 75%;
margin: auto;
}

button{
font-size: 2.2vw;
width: 30vw;
height: 5vh;
background: #f7e185;
font-family: 'Chivo', sans-serif;
font-weight: 700;
color:#f83e4b ;
margin: 25px;
border: none;

}
</style>