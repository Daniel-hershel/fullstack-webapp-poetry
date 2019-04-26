<template>
<div class="remaining">
  <div class = "prompt">
    <fit-text> {{this.secondResponse.prompt}}... </fit-text>
  </div>

  <div class = "response">
    <form>
      <textarea v-model="secondResponse.userResponse" class = "userInput" type="text"/></textarea>
    </form>
  </div>
  <div class = "prev">
     <div v-for="(item, index) in items.slice(items.length-1,items.length)" :key="item['.key']">
      <button type="submit" @click.prevent="addSecondResponse(item)">NEXT</button>
        <p>{{ item.prompt }}</p>
        <p>{{ item.responseOne }}</p>

        <!-- <button type="submit" @click.prevent="addSecondResponse(item)">Add</button> -->
      </div>
  </div>   
</div>
</template>

<script>
import { db } from '../config/db';
import router from '../main.js'

export default {
  name: 'remaining',
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
        items: [],
        secondResponse:{
      prompt: 'I am remaining',
      userResponse: ''
        }
    }
  },
  methods: {
      addSecondResponse(poem){
          console.log(poem)
          console.log(this.secondResponse.prompt)
          let poemKey = poem['.key']
        //   let 
        //   console.log(this.$firebaseRefs.items.child(poemKey))
          this.$firebaseRefs.items.child(poemKey).child('responseTwo').set(this.secondResponse.userResponse)
          this.$firebaseRefs.items.child(poemKey).child('promptTwo').set(this.secondResponse.prompt)

        // write code to add second prompt and response to most recent database entry
        // this.$firebaseRefs.items.push({
        //     prompt: this.firstResponse.prompt,
        //     responseOne: this.firstResponse.userResponse
        // })

        this.secondResponse.userResponse = ''
        router.push({name: "Becoming"})


      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chivo:400,700,900');

.remaining{
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
  background: #ffebbc;
  color: #5da7ae;
}
.prompt{
  padding: 50px;
  font-family: 'Chivo', sans-serif;
  font-weight: 900;
}

.response{

}

.prev{
color: #292830;
font-size: 1.6vw;
width: 50vw;
margin:auto;
}
.userInput{
  height: 15vh;
  width: 65vw;
  font-size: 3.1vw;
  color: #ffebbc;
  background: #5da7ae;
    outline: none;
  border: none;
  /* font-family: 'Chivo', sans-serif; */
  /* font-weight: 900; */
}
button{
font-size: 5vw;
width: 50vw;
height: 10vh;
background: #543d46;
/* font-family: 'Chivo', sans-serif; */
font-weight: 700;
color: #5da7ae;
}
</style>
