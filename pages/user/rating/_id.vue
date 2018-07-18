<template>
<b-container fluid>
<br>
<b-col md="6" offset-md="3">

<div style="text-align:center" >
    <b-img centered  style="width: 90px; border-radius:15px ;
    
 
    width:40%
"  :src="picture"/>

</div>
<br><br>
<div style="width: 267px;
    padding-left: auto;
    margin-left: auto;
    margin-right: auto;
"  >
  <star-rating  v-bind:increment="0.50"  v-model="rating" :border-width="1" border-color="#d8d8d8" :rounded-corners="true"
   :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
</div>

<br>

<b-form-textarea class="formpor" id="textarea1" size="lg"
                     v-model="review_write"
                     placeholder="Enter something"
                     :rows="1"
                     :max-rows="4">
    </b-form-textarea>
    <br>
   <b-button @click="por" size="lg" type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
    <br> <br> <p style="color:#1ea71e;">{{message}}</p> 
    
    <p style="color: red;">{{error}}</p>
     <br><br><br>
</b-col>
</b-container>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios';

export default {
      data () {
    return {
    
    rating: 0,
    review_write: '',
    topic: '',
    studentid: '',
    tutorid: '',
    picture: '',
    message: '',
    error: ''
     
    }
  },

mounted() {
    if (!this.$store.state.student) {
     this.$router.push('/student/login')

    }
 var createpost = {
        tutorid: this.$route.params.id

 }

  axios.post('http://localhost:8000/findtutorbyid', createpost)
          .then((res) => { 
              this.picture = res.data.picture
              console.log(res.data)
          }).catch(error => console.log(error))
},



  methods:{
      por(){
             var createpost = {

                 rating: this.rating,
                 review_write: this.review_write,
                //  topic: this.topic,
                 studentid: this.$store.state.student._id,
                 tutorid:this.$route.params.id

             }
           

             console.log(createpost);

if (this.rating > 0) {
     //  axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
                axios.post('http://localhost:8000/review', createpost)
          .then((res) => { 
              
              console.log(res.data)
              this.review_write = ''
              this.message = 'คุณได้ทำการรีวิวติวเตอร์เรียบร้อย Thank you '
              this.error =''
              this.rating = 0
          })
          .catch(error => console.log(error))
} else {

    this.error = 'ต่ำสุดคือ 0.5 คะแนน'
}

           
    

      }
  },
  components: {
    StarRating
  },
  
         layout: 'auth'
  
}
</script>


<style scoped>
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
    padding-left: 4px;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    /* border-bottom: 2px; */
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}


</style>
