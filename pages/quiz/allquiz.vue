<template>
<b-container fluid>
  <b-card v-for="course in courses" :title="course.name"
          :img-src="course.picture"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
<div>{{course.subject}}</div> <strong v-if="course._questions">จำนวนข้อ : {{course._questions.length}}</strong>
        {{course._id}}
          </div>
    </p>
     <a href="#"
           class="card-link">Card link</a>
        <b-link href="#"
                class="card-link">Another link</b-link>
            <b-link href="#"
                class="card-link">เพิ่ม Question</b-link>
  </b-card>

</b-container>    
</template>

<script>

import axios from 'axios';
  export default {
    data() {
        return {
         courses: ''
    }

},

mounted() {
      
    axios.get('https://chatpor.herokuapp.com/quiz/all')
    .then((res) => { console.log(res.data)
     this.courses = res.data
               
            }        

    )
},


         layout: 'auth'
  }

  
</script>


<style scoped>
.card-img-top {
    width: auto;
    max-height: 180px;
}
</style>
