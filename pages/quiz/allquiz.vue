<template>
<b-container fluid>
    <br>
    <b-row>
         <b-col cols="12"  sm="6" offset-sm="3" >
  <b-card @click="gotocourse(course._id)" style="box-shadow: -1px 1px 8px 0px #f3f3f3; border-radius:12px;
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
<br>
  <p style="text-align:center;color:grey;">เตรียมพบกับแบบฝึกหัดออนไลน์อีกมากมายเร็วๆนี้</p>
 <div style="text-align:center;">
  <a href="https://line.me/ti/g2/XCHDP8K2M9"> <b-button style="    color: #477e56;
    background-color: #cafbd7;
    border-color: #f0f0f0;
">เข้าร่วมกลุ่ม Line</b-button></a>
 </div>
    <br><br><br>
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


         layout: 'student2.1'
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
