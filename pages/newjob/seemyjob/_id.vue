<template>
<b-container fluid style="padding: 0px;">

<b-container fluid style=" padding-left: 0px;
    padding-right: 0px;">

 
    <br>

    <b-card   style="margin-bottom:0px;   border: 0px solid;     border-bottom-width: 1px;
    border-bottom: 1px solid whitesmoke !important;        
   

"   v-if="job.subject" >
         
        
       <b-row style="margin-top: 10px;">

        <b-col style="padding-left: 18px;" cols="2">
                     <img :src="job.creator_pic" style="width: 53px;
  height: 53px;margin-top: 3px;
  border-radius: 14px;
  box-shadow: 0 1px 1px 0 rgba(205, 205, 205, 0.24);" width="100%"> 

        </b-col>
         <b-col cols="10" style="margin-left: -1px;padding-left: 15px; padding-right: 2px;">
<p style="
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0px;
  color: #2c2929;">{{job.subject+ ' '+ job.subjectDetail}}    <strong v-if="status= 'ว่าง'" style=" background-color:#EEC0BB;
    border-radius: 6px;
    color: white;
    font-weight: 500;
    padding-right: 7px;
    padding-left: 7px;
    font-size: 15px;    float: right;
    margin-right: 8px;
        padding-top: 3px;
        padding-bottom: 1px;
    margin-top: 0px;"> {{job.status}}
 </strong></p>
<p style="color:#545454; font-size:16px;margin-bottom: 0px;
" v-if="job.day">
{{job.day.toString()}} {{job.time}} {{job.location}}</p>
<p style="color:#545454; font-size:16px ; margin-bottom: 0px;" >
{{job.creator_gender}} {{job.creator_grade}} {{job.purpose}} </p> 
 <strong style="float: right;
    margin-top: -18px;
    font-weight: 400;
    font-size: 13px;
    color: grey;
    padding-right: 13px;">{{ displayTimestamp(job.createdAt) }} </strong>

        </b-col>

     </b-row>
     <b-row style=" margin-bottom:-23px;   margin-top: 4px;">
  <b-col cols="9" style="    padding-left: 9px;
    padding-right: 0px;">

              <br>  
</b-col>


     </b-row>
    


    </b-row>

    </b-card> 

  </div>
   
    <!-- <b-row>
  <b-col style="" cols="6" >
 <div style="text-align:center">
  <b-button size="lg" @click="onSubmit" style=" font-size:18px;background-color: #DFAEA9; border-radius:3px;     margin-top: 9px;  box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
; border: 0px;      padding-top: 12px;
    padding-bottom: 12px;   width:90%">แก้ไข</b-button>
</div>
  </b-col>
   <b-col style="" cols="6" >
  <div style="text-align:center">
  <b-button size="lg" @click="onSubmit" style=" font-size:18px;background-color: #DFAEA9; border-radius:3px;     margin-top: 9px;  box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
; border: 0px;      padding-top: 12px;
    padding-bottom: 12px;   width:90%">ปิดโพส</b-button>
  </div>
  </b-col>
    </b-row> -->
<br>
<div style="text-align:center;">
  <b-button  size="lg" style=" color:white;  background-color: #DFAEA9; border: 0px; 
    width:60%;">แก้ไข</b-button>
    <b-button  @click="changestatus" size="lg" style="    color: #dfaea9;
    background-color: rgb(255, 255, 255);
    border: 0px;
    width: 60%;
    margin-top: 8px;
    border: solid 1px;">ปิดงาน</b-button>
     <b-button  @click="changestatus2" size="lg" style="    color: #dfaea9;
    background-color: rgb(255, 255, 255);
    border: 0px;
    width: 60%;
    margin-top: 8px;
    border: solid 1px;">เปิดงาน</b-button>
</div>
    </div>
<br>
<b-container fluid>
<!-- <p>ติวเตอร์ที่สนใจ (0)</p> -->
<p style="text-align:center">หากมีติวเตอร์สนใจ ทีมงานจะติดต่อหาท่านทาง Line </p>
<p style="text-align:center">กรุณากดปิดงาน หากคุณอยากยกเลิกการหาติวเตอร์ </p>
</b-container>




</b-container>

//ssssssssssssssssss

  <b-card  style="margin-bottom:0px;     border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1px;     box-shadow: rgba(148, 142, 142, 0) 0px 1px 3px -1px, rgba(255, 251, 251, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px;

"  v-for="tutor in tutors" :key="tutor._id"  v-if="tutor.subject" >
         
        
       <b-row style="margin-top: 10px;">

        <b-col cols="4">
                     <img :src="tutor.picture" style="border-radius: 3px" width="100%"> 

        </b-col>
         <b-col cols="8" style="margin-left:-5px;padding-left: 0px; padding-right: 2px;">
<p style=" padding-left: 0px;margin-bottom: 0px; font-weight:600; font-size:17px; margin-top: -6px;">{{tutor.name.replace(/ .*/,'')}}   <strong style=" background-color:#EEC0BB;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;    float: right;
    margin-right: 4px;
        padding-top: 1px;
    margin-top: 4px;">{{ calculateScore(tutor.reviewscore)}} <i style="color:white;" class="fa fa-star" aria-hidden="true"></i>
 </strong></p>
<p style="color:#545454; font-size:16px;margin-bottom: 0px;margin-bottom: 3px;
" v-if="tutor.subject">
    {{tutor.subject.substring(0,70)}}</p>
<p style="color:#545454; font-size:16px   ;  margin-bottom: 0px;" v-if="tutor.profile">
    {{tutor.profile.substring(0,65)}}...</p>


        </b-col>

     </b-row>
     <b-row style=" margin-bottom:-23px;   margin-top: 4px;">
  <b-col cols="9" style="    padding-left: 9px;
    padding-right: 0px;">
 <!-- <a v-show="tutor.tag.length >0" style="    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgb(130, 217, 217);
    padding-top: 3px;
        margin-top: 7px;
    padding-bottom: 3px;
    font-size: 16px;
    padding-right: 6px;
    border-radius: 7px;
    font-weight:400;
    padding-left: 6px;"  href="#" 
           class="card-link">{{tutor.tag.toString().split(',').join(' ')}}</a> -->

      <!-- <a v-for="tag in tutor.tag" v-show="tutor.tag.length >0" style=" color: #9dd8bf;
    text-decoration: none;
    border: 1px solid #8bd2b4;
    padding: 3px 8px;
    margin-left: 6px;
    margin-top: 7px;
    font-size: 15px;
    border-radius: 11px;"  href="#" 
           class="card-link">{{tag.toString()}}</a> -->
<div style="   
    
" class=" scrolling-wrapper">
               <a   style=" color: #ECC1BC;
    text-decoration: none;
   
    padding: 3px 8px;
    margin-left: 2px;
    margin-top: 7px;
    font-size: 16px;
    border-radius: 11px;"  href="#" 
           class="card-link">
{{tutor.location}}</a>
</div>
              <!-- <a v-for="tag in tutor.tag" v-show="tutor.tag.length >0" style="    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgb(130, 217, 217);
    padding-top: 3px;
    margin-left: 6px;
    margin-top: 7px;
    padding-bottom: 3px;
    font-size: 16px;
    padding-right: 8px;
    border-radius: 5px;
    padding-left: 8px;"  href="#" 
           class="card-link">{{tag.toString()}}</a> -->
              <br>  
</b-col>
<b-col cols="3" style="  padding-left: 20px; ">


   <!-- <strong style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{sheet.owner.replace(/\w+[.!?]?$/, '')}}  </strong>  -->
<!-- color:#a5cae4; -->
  <strong style=" color:#a5cae4;  font-size: 15px; margin-top: -0px; 
  float:right;  margin-bottom: 0px; font-weight:400"><i class="fa fa-eye" aria-hidden="true"></i>
 {{tutor.view }}  </strong>  
</b-col>

     </b-row>
    


    </b-row>

    </b-card>


</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment'


export default {
  
   data () {
    return {
      job:{

      },
    status: '',
    course: {},
    phone: '',
    profile: '',
    text2: '',
    text:'',
    subject:'',
    reviews:'',
    name:'',
    picture: '',
    location: '',
  
    }
  },
  
 
  mounted() {
      
console.log('sds'+ this.$route.params.id);




    //   console.log(this.$store.state.student._id);
      
      var myid = {
          route_id :  this.$route.params.id,
      }
      axios.post('https://frozen-mesa-40722.herokuapp.com/findjob2/byid/populate', myid)

// axios.post('https://frozen-mesa-40722.herokuapp.com/job2/studentown')
    .then((res) => {
      
       console.log(res.data)
      this.job = res.data
      this.status = res.data.status
      this.tutors = res.data.tutor_interest
         console.log(this.job);
               
  }).catch(error => console.log(error))
  }
  ,
    computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    },

    calculateScore (x) {
     console.log(x);
     
this.sum = x.reduce(function(a, b) {
  return a + b;
});
    },
  


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
    fuck(){
    this.status = 'ควย'
    this.$router.go(0)
    }, 

     changestatus(){
    var data = {
     status: 'ปิด',
     _id: this.job._id
    }

  axios.patch('https://frozen-mesa-40722.herokuapp.com/job2/update', data).then((res) =>{

            console.log(res.data)
             this.status = res.data.status 
            this.$router.go(0)

           }).catch((error) =>{ console.log(error) })
           

     },
  changestatus2(){
    var data = {
     status: 'เปิด',
     _id: this.job._id
    }

  axios.patch('https://frozen-mesa-40722.herokuapp.com/job2/update', data).then((res) =>{

            console.log(res.data)
             this.status = res.data.status 
            this.$router.go(0)

           }).catch((error) =>{ console.log(error) })
           

     },


       displayTimestamp(t){
                return moment(t).fromNow()
            },

      porakarn(){
    
    var data = {
      tutorid : this.$store.state.user._id
    }
  // axios.post('http://localhost:8000/user/profile2', data).then((res) =>{
            axios.post('https://frozen-mesa-40722.herokuapp.com/user/profile2', data).then((res) =>{

            console.log(res.data)
             this.reviews = res.data._review
            

           }).catch((error) =>{ console.log(error) })
           

      },
      nextPage(){
             this.$router.push('/tutor/job')
      }
      ,

      onSubmit(){
       this.$router.push('/student/demo2')
},
  },
    layout: 'studentapp'

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

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #33C1C1;
    padding: 5px;
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 4px;
    font-size: 18px;

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



.card1{
    margin-bottom:0px;  
     border: 0px solid;  
        border-bottom-width: 1px;
    border-bottom: 1px solid whitesmoke !important;  
     margin-bottom:5px;  
       padding-top: 1px;
    padding-bottom: 1px;
 

    border-radius: 6px;      
   
}

.card-body{
  padding-left: 10px;
    padding-top: 2px;
    padding-right: 10px;
      padding-bottom: 8px;
      margin-top: 2px;
}

.card-title {
    margin-bottom: 12px;
    margin-bottom: 0.75rem;
    font-size: 20px;
    color: #5a5a5a;
}


body{
      font-family: Roboto !important;  
}
</style>
