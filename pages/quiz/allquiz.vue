<template>
<b-container fluid>
    <b-row>
         <b-col cols="12"  sm="6" offset-sm="3" >
  <b-card @click="gotocourse(course._id)" style="box-shadow: -1px 1px 6px 0px #f3f3f3; border-radius:4px;
" v-for="course in courses" :title="course.name"
          :img-src="course.picture"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2">
    <p class="card-text">
 <strong v-if="course._questions">({{course._questions.length}}) ข้อ</strong>
          </div>
    </p>
     
  </b-card>
</b-col>
    </b-row>
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

methods: {

gotocourse(x){
      
       this.$router.push(`/quiz/doquiz/${x}`)
   

}

},


         layout: 'auth'
  }

  
</script>


<style scoped>
.card-img-top {
    width: auto;
    max-height: 180px;
}
.mb-2{
    max-width: 100%;


}
.card{
}
</style>
