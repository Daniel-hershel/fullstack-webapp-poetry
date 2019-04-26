<template>
  <div class="shedding">
    <div class = "prompt">
   <fit-text> {{this.firstResponse.prompt}}... </fit-text>
     </div>
     <div class = "response">
     <form>
        <textarea v-model="firstResponse.userResponse" class = "userInput" placeholder="respond to the prompt here" type="text"/></textarea>
  <button type="submit" @click.prevent="addResponse()">NEXT</button>
    </form>
  </div>

  </div>
</template>

<script>
import { db } from '../config/db';
import router from '../main.js'
 import fitText from '../vue-fit-text/fitText.vue';
export default {
  name: 'shedding',
  components:{
fitText
  },
  firebase: {
      items:db.ref('poems')
  },
  data () {
    return {
        items: [],
        firstResponse:{
    //   id: this.items.length,       
      prompt: 'I am shedding',
      userResponse: '',

        }
    }
  },
  methods: {
      addResponse(){
        this.$firebaseRefs.items.push({
            prompt: this.firstResponse.prompt,
            responseOne: this.firstResponse.userResponse,
            id: this.items.length
        })

        this.firstResponse.userResponse = ''
        router.push({name: "Remaining"})


      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Chivo:400,700,900');
.shedding{
   display: grid;
  width: 100vw;
  height: 100vh;
  margin-top:0;
  grid-template-rows: 35vh 40vh 9vh;
  grid-template-columns: 95vw;
  margin:0;
  padding:0;
  margin-top:0;
  padding-top:0;
  /* background: #402785;
  color: #fafb97; */
    background: #29252c;
  color: #ffea85;
}
.prompt{
  padding: 50px;
  font-family: 'Chivo', sans-serif;
  font-weight: 900;
}
/* h1{
  font-size:6vw;
} */

.userInput{
  height: 15vh;
  width: 65vw;
  font-size: 3.1vw;
  background: #ffea85;
  color: #29252c;
  font-family: 'Chivo', sans-serif;
  font-weight: 900;
    outline: none;
  border: none;
}

.addNext{
}

button{
font-size: 5vw;
width: 50vw;
height: 10vh;
background: #9effa9;
font-family: 'Chivo', sans-serif;
font-weight: 700;
color: #333146;
}
</style>
