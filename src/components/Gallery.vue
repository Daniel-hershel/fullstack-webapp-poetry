<template>
<div class = "gallery">
<div class="poem" v-for="item in items" :key="item['.key']">
    <h2>{{item.prompt}}</h2>
    <h3>{{item.responseOne}}</h3>
    <h2>{{item.promptTwo}}</h2>
    <h3>{{item.responseTwo}}</h3>
    <h2>{{item.promptThree}}</h2>
    <h3>{{item.responseThree}}</h3>
  
</div>
<div class ="backHome">
<a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Back Home</a>
</div>
</div>
</template>

<script>
import { db } from '../config/db';
import router from '../main.js'

export default {
    name: 'gallery',
    firebase: {
        items: db.ref('poems'),
    },
    data (){
        return{
        items: []
        }
    },
     methods: {
   navigate(){
     router.push({name: "Home"})
   }
 }
}
</script>

<style scoped>

.gallery{
     display: grid;
  width: 90vw;
  /* height: 100vh; */
  margin-top:0;
  /* grid-template-rows: 35vh 40vh 9vh; */
  grid-template-columns: 95vw;
  margin:auto;
  padding:0;
  margin-top:0;
  padding-top:0;
  /* background: #36485e; */
  color: #fafb97;
}

.poem{
  border: 2px Solid #fafb97;
  width: 78%;
  margin:auto;
  background: #fffff8;
  color: #444;
}

.poem:nth-child(odd) { background: #29252c;color: #fafb97; }

h2{
  font-size: 2.5vw;
  font-weight: 700;
}
h3{
  font-size: 2.2vw;
  font-weight: 400;
}

.backHome{
  height: 5vh;
  position:fixed;
  top:1vh;
  left:1vw;
  /* border: 2px solid #fafb97; */
  font-size: 2.1vw;
  font-family: 'Chivo', sans-serif;
  font-weight: 400;
}
</style>