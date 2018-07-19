<template>
<b-container fluid style="padding: 0px;">

<b-container fluid>
  <br><br>
  <b-row>
  
<b-col md="6" offset-md="3">

<div style="text-align:center" >
                     <img :src="courses.picture" style="border-radius: 5px" height="100"> 
</div>
<br>
 <div style="text-align:center;">
<b-row class="my-1">
    <b-col >
  <h3>{{courses.name}}</h3> 
    </b-col>
  </b-row> </div>
   
<div style="text-align:center;">
  <b-row class="my-1">
    <b-col cols="12" >
    <i class="fa fa-phone" aria-hidden="true"></i> {{courses.phone}}  &nbsp;&nbsp; Line: <a :href="linelink">{{courses.line}}</a>
    </b-col>

  </b-row>
 </div>

 <div style="text-align:center; margin-top:10px;">
     <b-button  :href="linelink" size="lg" style=" width:60%;     color: white; background-color: #33C1C1; border: 0px; 
 ">ติดต่อ</b-button>  
</div>



    

   <br>
  <b-row> <b-col >
       

 <!-- <p style="margin-bottom: 0px; color:#484848;  margin-top: 17px; font-size: 19px">วิชาที่คุณสอน
</p> -->

  

  <b-row class="my-1">
    <b-col >
   
     <p style=" white-space: pre-wrap;" 
>วิชาที่สอน: {{courses.subject}} </p>

      <!-- <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input> -->
    </b-col>
  </b-row>
 
  <!-- <div class="por" >
        <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">ENG</b-link>
                  <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">เคมี</b-link></div> -->

                 <!-- <p style=" margin-bottom: 0px;   padding-top: 0px !important; font-size: 19px;
color: #484848; border:1px !important;">โปรไฟล์ของคุณ</p> -->
   <p style=" white-space: pre-wrap;" 
> {{courses.profile}} </p>
 </b-col></b-row>






  <b-row> <b-col >
      <br>
    <p>รีวิว ({{reviews.length}})</p>  
   

  <div v-for="review in reviews" >
    <b-row style="margin-bottom: 8px;">
   <b-col cols="2">
    <img  style="width: 60px;     border-radius: 50%;"  :src="review.studentid.picture"  alt="">

   </b-col>
     <b-col  cols="10" style="padding-left: 20px ;    flex: none; width: fit-content;">
     <div style="font-weight: 400;
    font-size: 16px;
    background-color: #f5f5f5;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 14px;
 ">{{review.review_write}}  </div>

     <p style="     margin-top: 6px;   font-size: 15px;">{{review.studentid.name.split(" ").slice(0, -1).join(" ")}} <i style="color: #F8E217;" class="fa fa-star" aria-hidden="true"></i> {{ review.rating}}   </p>  
</p>



   </b-col>
    <!-- <b-col  cols="2" style="    padding-right: 9px;" >
<p><i style="color: #F8E217;" class="fa fa-star" aria-hidden="true"></i> {{ review.rating}} </p>
   </b-col> -->

    </b-row>



 

  </div>

    <b-row class="my-1">
    <b-col >
   <br> <br>
     <p style="" 
>งานที่โพสหาติวเตอร์ ({{jobs.length}})  </p>


 <div v-for="job in jobs" >


   <b-row>
   <b-col>
    <b-card  style="   margin-bottom: 5px; 
    box-shadow: rgba(146, 146, 146, 0.1) 0px 1px 3px 0px;
" 
           > <b-row>  <b-col cols="10" style="    padding-right: 0px;
">
        <p style=" white-space: pre-wrap; font-size: 16px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{ job.job}}</p>
 <div class="por" >
       
</div></b-col> 
                        <b-col style="    padding-left: 10px;
    padding-right: 3px;" cols="2">{{job.status}}</b-col> </b-row>
    <b-row>
      <b-col cols="8" style="padding-left: 8px;">
 <a   href="#" v-show="job.subject.length >0"
           class="card-link">{{job.subject.toString().split(',').join(' ')}}</a>
        <b-link href="#" v-show="job.day.length >0"
                class="card-link"   >{{job.day.toString().split(',').join(' ')}}</b-link> 
                
</b-col>


<b-col cols="4" style="margin-top: -15px;  padding-left: 20px; ">
  <strong v-if="job._creator" style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{job.creator_name}}  </strong> 

   <strong v-else style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{job.creator_name.replace(/\w+[.!?]?$/, '')}}  </strong> 

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(job.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>



</b-row>
    
  

    
   
   






</div>




      <!-- <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input> -->
    </b-col>
  </b-row>

     </b-col></b-row>
  <br><br><br> <br>
</b-col></b-row>

     </b-col> 
             
    </b-row>
</b-container>



</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment'


export default {
  
   data () {
    return {
    course: {},
    phone: '',
    profile: '',
    text2: '',
    text:'',
    subject:'',
    reviews:'',
    name:'',
    picture: '',
    jobs:{}
  
    }
  },
  
 asyncData (context) {

    
       var createpost = {
        tutorid: context.route.params.id

 }
 console.log(createpost);
 
    return axios.post('https://frozen-mesa-40722.herokuapp.com/user/profile2', createpost)
    .then((res) => { console.log(res.data)
      return { 
          courses: res.data,
          linelink: 'http://line.me/ti/p/~' + res.data.line,   
          phoneprompt : 'tel:' + res.data.phone,
          reviews: res.data._review
            }        

    })
  


  },
  mounted() {
  

     

var data = {
    tutorid: this.$route.params.id
}

 axios.post('https://frozen-mesa-40722.herokuapp.com/job/tutorown', data).then((res) =>{

            console.log(res.data)
             this.jobs = res.data
            console.log(this.jobs);
            

           }).catch((error) =>{ console.log(error) })

  },
    computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
//   asyncData (context, callback) {
//  var por = ';;'
//    return   axios.get('https://frozen-mesa-40722.herokuapp.com/user/profile', por )
//     .then((res) => {
//       // this.profile = res.data.profile
//       // this.phone = res.data.phone                
         
//             })
    
//   }
//   ,
    methods: {
 


       displayTimestamp(t){
                return moment(t).fromNow()
            },

     
      

    

  },
        layout: 'auth'
}
</script>



<style scoped>
<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
    padding-left: 4px;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
    
        padding-bottom: 6px;
    padding-top: 8px;
}



.card-text{
        color: #2f2f2f;
    margin-bottom: 6px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #82D9D9;
    padding: 2px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 15px;

}

.por{
    margin-left: -7px
}
.card{
      margin-bottom: 5px;
box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(193, 193, 193, 0.12);
    border-radius: 6px;
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
box-shadow: 0 0 0 0rem rgba(0, 123, 255, .25) !important;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

</style>
