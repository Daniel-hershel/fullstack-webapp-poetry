<template>
<div class="becoming">
  <div class = "prompt">
    <fit-text> {{this.thirdResponse.prompt}}...</fit-text>
  </div>
  <div class = "response">
    <form>
    <textarea v-model="thirdResponse.userResponse" class = "userInput" type="text"/></textarea> 
    </form>
   
    </div>
    <div class ="prev">
      <div v-for="(item, index) in items.slice(items.length-1,items.length)" :key="item['.key']">
        <button type="submit" @click.prevent="addThirdResponse(item)">FINISH</button>            
            <p>{{ item.prompt }}</p>
            <p>{{ item.responseOne }}</p>
            <p>{{ item.promptTwo }}</p>
            <p>{{ item.responseTwo }}</p>
            <p>{{ item.promptThree }}</p>
            <p>{{ item.responseThree }}</p>
            </div>
    </div>
</div>
</template>
<script>
import { db } from '../config/db';
import router from '../main.js'

export default {
  name: 'becoming',
  firebase: {
      items:db.ref('poems'),
      itemsObj: {
          source:db.ref('poems'),
          asObject: true
      }
  },
  created(){
      let item = this.itemsObj[this.$route.params.id]
    //   console.log(this.items['.key'])

  },
  data () {
    return {
        items:[],
        thirdResponse: {
            prompt: 'I am becoming',
            userResponse: ''
        }
    
    }
  },
methods: {
    addThirdResponse(poem){
        console.log(poem)
        let poemKey = poem['.key']
        this.$firebaseRefs.items.child(poemKey).child('responseThree').set(this.thirdResponse.userResponse)
        this.$firebaseRefs.items.child(poemKey).child('promptThree').set(this.thirdResponse.prompt)

        this.thirdResponse.userResponse = ''
        router.push({name: "End"})

    }
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chivo:400,700,900');

.becoming{
     display: grid;
  width: 100vw;
  height: 100vh;
  margin-top:0;
  grid-template-rows: 25vh 30vh 20vh;
  grid-template-columns: 95vw;
  margin:0;
  padding:0;
  margin-top:0;
  padding-top:0;
  background: #212121;
  color: #8ecccc;
}
.prompt{
  padding: 50px;
  font-family: 'Chivo', sans-serif;
  font-weight: 900;

}

.response{

}

.prev{
color: #8ecccc;
font-size: 1.6vw;
width: 50vw;
margin:auto;
}
.userInput{
  height: 15vh;
  width: 65vw;
  font-size: 3.1vw;
  color: #212121;
  background: #8ecccc;
  outline: none;
  border: none;
  /* font-family: 'Chivo', sans-serif; */
  /* font-weight: 900; */
}
button{
font-size: 5vw;
width: 50vw;
height: 10vh;
color: #8ecccc;
font-family: 'Chivo', sans-serif;
font-weight: 700;
background: #3a4042;
}
</style>