<template>
<div class = "end" v-bind:class="{'alt':bgc}">
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
    <button v-bind:class="{'alt':bgc}" type="submit" @click.prevent="navigateHome()">START AGAIN</button>
    <button v-bind:class="{'alt':bgc}" type="submit" @click.prevent="navigateGallery()">GALLERY OF POEMS</button>
    <!-- <button type="submit" @click.prevent="changeTheme()">CHANGE THEME</button> -->
    <div class = "label">
    Alternate Theme
    </div>
    <toggle-button class="toggle"  :labels="true"  :color="{checked: '#f83e4b', unchecked: '#f7e185'}" :font-size="18" :width="220"
          :height="40" @change="changeTheme()"/>
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
        items: [],
        bgc:false
        }
    },
    methods: {
        beforeEnter(el,done){
             Velocity(el, { opacity:0 }, { duration: 60,complete:done})
            },
        enter(el,done){
             Velocity(el, { opacity:1 }, { delay: 800, duration: 2600,complete:done})
            console.log('working')

        },
        navigateHome(){
            router.push({name: "HelloWorld"})
        },
        navigateGallery(){
     router.push({name: "Gallery"})
        },
        changeTheme(){
        this.bgc = !this.bgc
      
          

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
  grid-template-rows: 70vh 25vh;
  grid-gap: 5vh;
  grid-template-columns: 100vw;
  margin:0;
  padding:0;
  margin-top:0;
  padding-top:0;
  background: #f83e4b;
  color: #f7e185;
  /* color: #8ecccc; */
}

.toggle{
    color: #444;
}
.label{
    font-size: 26px;
}
.alt{
background: #fffff8;
color: #444;
}
.finalPoem{
    font-family: 'Chivo', sans-serif;
    /* border: 2px solid #d35823; */
    padding: 10px;
    margin:auto;
    width: 85%;
}

h3{
font-size: 2.9vw;
font-weight: 700;
width: 65%;
margin-left: auto;
margin-right: auto;
text-align: left;
}

h2{
font-size: 2.4vw;
font-weight: 400;
width: 65%;
margin: auto;
text-align: left;
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
/* border: .2px solid #444; */
outline: none;

}
</style>