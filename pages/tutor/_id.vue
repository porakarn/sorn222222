<template>
<b-container fluid style="padding: 0px;">

<b-navbar  style="     border: 3px solid #DFAEA9;
    padding-bottom: 13px;
    padding-top: 15px;
    background-color: #DFAEA9!important; ; height: 150px; margin-bottom: -110px; "toggleable variant="light">
     <i @click="goback" style=" font-size: 25px;
    padding-left: 4px;
    color: white;
    margin-top:-84px;
" class="fa fa-arrow-left responsive" aria-hidden="true"></i>

       
    </b-navbar>


<b-container fluid style="padding:0px">
  <!-- <div style="   background-color: #dfaea9;; height: 130px; margin-bottom: -110px;"> -->

  <!-- </div> -->
<b-container fluid>
  <br><br>
  <b-row>
  
<b-col md="6" offset-md="3">

<div style="text-align:center" >
                     <img :src="courses.picture" style="border-radius: 8px" height="150"> 
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
    <!-- <b-col cols="12" >
    <i class="fa fa-phone" aria-hidden="true"></i> {{courses.phone}}  &nbsp;&nbsp; Line: <a :href="linelink">{{courses.line}}</a>
    </b-col> -->

  </b-row>
 </div>

 <div  @click="track" style="text-align:center; margin-top:10px;">
     <b-button  :href="linelink" size="lg" style=" width:60%;     color: white; background-color: #DFAEA9; border: 0px; 
 ">ติดต่อ</b-button>  
</div>

<br>

   <div v-if="youtubeurl2" style="text-align:center;">
 <iframe width="100%" height="230" :src="youtubeurl2" frameborder="0" allowfullscreen></iframe>
</div>

   <br>
  <b-row> <b-col >
       


  

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

    <a  v-show="courses.location" style=" color: #9dd8bf;
    text-decoration: none;
   
    
   margin-bottom:10px ;
    font-weight: 600px;
    font-size: 16px;
    border-radius: 11px;"  href="#" 
           ><i class="fa fa-map-marker" aria-hidden="true"></i> {{courses.location}}</a>

<br><br>
<social-sharing :url="url"
                      :title="title"
                      :description="title"
                      hashtags="Sorns,tutor"
                      :quote="title"

                      inline-template>
 <div>
    
      <network style=" background-color: #3B5998;
    color: white;
    border-radius: 5px;
    font-weight: 500;    font-size: 14px;  margin-left: 3px;
    margin-right: 3px;
    padding: 4px;" network="facebook">
        <i class="fa fa-facebook"></i> share 
      </network>
     
      <network style="    background-color: #00B900;
    color: white;
    border-radius: 5px;
    font-weight: 500;    font-size: 14px;   margin-left: 3px;
    margin-right: 3px;
    padding: 4px; padding-left: 6px; padding-right: 6px;" network="line">
     LINE
      </network>
      
      
    
      <network style="  background-color: #1DA1F3;
    color: white;
    border-radius: 5px;
    font-weight: 500;    font-size: 14px;
    padding: 4px;     margin-left: 3px;
    margin-right: 3px;" network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
    
     </div>

</social-sharing>

  <b-row> <b-col >
      <br>
    <p style="    margin-bottom: 8px;">รีวิว ({{reviews.length}})   </p>  
  <p style="font-weight:400; color:#3e9dd6;" @click="showreview1" >See all</p>  

  <div  v-if="showreview" v-for="review in reviews" >
    <b-row style="margin-bottom: 15px; border-bottom: 1px solid #f5f4f4;    padding-bottom: 12px;
">
   <b-col cols="2">
    <img  style="width: 60px;     margin-top: 7px;    border-radius: 50%;"  :src="review.studentid.picture"  alt="">

   </b-col>
     <b-col  cols="10" style="padding-left: 20px ;    flex: none; width: fit-content;">
     <b-row style="  margin-bottom:4px;   margin-left: 1px;
">
   <strong style="     margin-top: 1px;
    font-size: 16px;
    margin-right: 10px;  ">{{review.studentid.name.split(" ").slice(0, -1).join(" ")}}   </strong>  

 <star-rating  v-bind:read-only="true"	 border-color="#d8d8d8"  v-bind:increment="0.50"  v-model="review.rating" v-bind:show-rating="false" v-bind:star-size="20"  :border-width="1"  :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
   ></star-rating> <strong style="padding-left: 3px; font-weight: 400">{{review.rating}}</strong>

 <strong style="    color: rgb(165, 202, 228);
    font-size: 13px;
    margin-top: 3px;
    float: right;
    margin-bottom: 0px;
    font-weight: 400;
    margin-left: 6px;">{{ displayTimestamp(review.createdAt) }}  </strong>  


</b-row>
     
     <div style="font-weight: 400;
    font-size: 16px;
    padding: 0px 12px;
    border-radius: 14px;
 ">{{review.review_write}}  </div>

    



   </b-col>
    <!-- <b-col  cols="2" style="    padding-right: 9px;" >
<p><i style="color: #F8E217;" class="fa fa-star" aria-hidden="true"></i> {{ review.rating}} </p>
   </b-col> -->

    </b-row>



 

  </div>

<p>เอกสารการสอน (0)</p>
    <!-- <b-row class="my-1">
    <b-col >
   <br> 
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
    
   -->

    
   
   






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

</b-container>
</template>

<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import StarRating from 'vue-star-rating'
import moment from 'moment'

Vue.use(SocialSharing)
import axios from 'axios';


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
    jobs:{},
    showreview: false,
    url:'',
    line: '',
    youtubeurl2: '',
 

  
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
          reviews: res.data._review,
          title: 'สมัครเรียนติวเตอร์กับ ' + res.data.name,
          youtubeurl: res.data.youtube_url,
            }        

    })
  


  },
  mounted() {

    if (this.youtubeurl) {
this.youtubeurl2 = this.youtubeurl.replace(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g,'https://www.youtube.com/embed/$1')
      
    }

var data5 = {
  tutorid : this.$route.params.id
}
                // axios.post('http://localhost:8000/multi', createPost)

     axios.post('https://frozen-mesa-40722.herokuapp.com/user/profile3', data5).then((res) =>{

            console.log(res.data)
      
            
            

           }).catch((error) =>{ console.log(error) })
 
    console.log( this.$route.params.id);
    
 this.url = 'https://sorns-co-beta.herokuapp.com/tutor/' + this.$route.params.id
     console.log(this.url);


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
    track(){

if (this.$store.state.student.name) {
  var data = {
    studentname:  this.$store.state.student.name,
    picture: this.$store.state.student.picture, 
 _studentid:  this.$store.state.student._id,
    tutorid: this.courses._id,
    tutorname: this.courses.name, 
}
console.log(data);

  // axios.post('http://localhost:8000/track', data)

  axios.post('https://frozen-mesa-40722.herokuapp.com/track', data)
          .then((res) => { 
              
              console.log(res.data)
                  
          })
          .catch(error => console.log(error))
}

   
   




    },


    displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
     

        goback(){
            this.$router.go(-1)

        },
      
      showreview1(){
            this.showreview = !this.showreview 
      } ,


       displayTimestamp(t){
                return moment(t).fromNow()
            },

     
      

    

  },
   components: {
    StarRating
  },
        layout: 'auth',
          scrollToTop: true
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

.btn-secondary{
  border-color: #effdf3;
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


.responsive {
  display: none;
}

.responsive2 {
  display: block;
}

/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
        display: block;
    }
    .responsive2 {
  display: none;
}
}
span{
    margin-top: -2px !important;
}
.text-class{
margin-top :0px;
color: blue;
}
</style>
