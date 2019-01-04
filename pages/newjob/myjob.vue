<template>
<b-container fluid style="padding: 0px;">

<b-container fluid style=" padding-left: 0px;
    padding-right: 0px;">

 
    <br>



       
       





    
  <div style="text-align:center;">
  <b-button size="lg" @click="onSubmit" style=" font-size:18px;background-color: #DFAEA9; border-radius:25px;     margin-top: 9px;  box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
; border: 0px;      padding-top: 12px;
    padding-bottom: 12px;   width:80%">สร้างประกาศหาติวเตอร์</b-button>
    </div>

             
  
<br><br>
   <br>
  <p style="padding-left:23px;">ประกาศที่คุณโพส (0)</p>


     <b-card @click="seeeach(job._id)"  style="margin-bottom:0px;   border: 0px solid;     border-bottom-width: 1px;
    border-bottom: 1px solid whitesmoke !important;        
   

"  v-for="job in jobs" :key="job._id"  v-if="job.subject" >
         
        
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
  color: #2c2929;">{{job.subject+ ''+ job.subjectDetail}}    <strong style=" background-color:#EEC0BB;
    border-radius: 6px;
    color: white;
    font-weight: 500;
    padding-right: 3px;
    padding-left: 5px;
    font-size: 15px;    float: right;
    margin-right: 8px;
        padding-top: 3px;
        padding-bottom: 1px;
    margin-top: 0px;"> {{job.status}}
 </strong></p>
<p style="color:#545454; font-size:16px;margin-bottom: 0px;margin-bottom: 3px;
" v-if="job.day">
    {{job.day.toString()}} {{job.time}}</p>
<p style="color:#545454; font-size:14px   ;  margin-bottom: 0px;" >
   {{job.location}} ...</p>   <strong style="float: right;
    margin-top: -18px;
    font-weight: 400;
    font-size: 13px;
    color: grey;
    padding-right: 13px;">11.22</strong>

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


     </b-row>
    


    </b-row>

    </b-card>

  </div>
   

</b-container>




</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment'


export default {
  
   data () {
    return {
      jobs:{},
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
      
      console.log(this.$store.state.student._id);
      
      var myid = {
          myid : this.$store.state.student._id,
      }
      axios.post('https://frozen-mesa-40722.herokuapp.com/job2/studentown', myid)

// axios.post('https://frozen-mesa-40722.herokuapp.com/job2/studentown')
    .then((res) => {
      
       console.log(res.data)
      this.jobs = res.data
               
  }).catch(error => console.log(error))
  }
  ,
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

       fuck(){
     console.log(this.job.status);
     
       },

       seeeach(x){
           this.$router.push(`/newjob/seemyjob/${x}`)
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
