<template>

<b-container fluid style="padding:0px;">
 <b-navbar  style="   box-shadow: -1px 2px 6px 0px #9c9c9c44   padding-bottom: 13px;
    padding-top: 13px;  background-color:#dfaea9!important; "toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
 
  
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
              
            <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/user/seeall">  <i class="fa fa-search " aria-hidden="true"></i>  Search  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/user/create">  <i class="fa fa-pencil" aria-hidden="true"></i> Add New  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/user/alltutor"> <i class="fa fa-book" aria-hidden="true"></i> All Tutor </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/tutor/profile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/choose"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                
                
                


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

<b-container fluid style="padding:0px;" >
       <br>

<b-container fluid>
        <b-row>
       <b-col cols="6" style="padding-right: 6px;" >  
 <b-button v-b-modal.modal1  class="responsive" style="font-size: 17px;
    color: white; 
    background-color: #dfaea9;
       border: 0px solid #EFBAB5;

    border-radius: 6px;
    width: 100%;
"> งานทั้งหมด</b-button>


       </b-col>
        <b-col style="padding-left: 6px;" cols="6" >  
 <b-button v-b-modal.modal1  class="responsive" style="font-size: 17px;
    color: #dfaea9; 
    background-color:white ;
    border: 1px solid #dfaea9;
    border-radius: 6px;
    width: 100%;
"> งานที่สมัคร</b-button>



       </b-col>
       
        </b-row> 
</b-container>
<br>

<br>
 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">




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
  margin-bottom: 2px;
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
<p style="    color: #464646;
    font-size: 15px;
    margin-bottom: 0px;margin-bottom: 0px;margin-bottom: 1px;
" v-if="job.day">
{{job.day.toString()}} {{job.time}} {{job.location}}</p>
<p style=" color: #464646;margin-top:-2px; font-size:16px ; margin-bottom: 0px;" >
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

   </b-col>
    </b-row>
    <br>


<br>
   <b-modal no-fade hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
    <div style="text-align:center;">
     <p> หลังจากที่คุณ Login แล้ว จะสามารถดูโปรไฟล์ + contact ติวเตอร์ได้ </p> 
 
      <nuxt-link  to="/student/profile">   <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">Login</b-button></nuxt-link>
    </div>  
    <br>
   </b-modal>
<br>
<br>
<br>
<br>

    </b-col>

</b-container>
</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';


 export default {
    data(){
    return {
      jobs:{},
       loading: false,
           profile2: false,
        selected: [], // Array reference
      options: [
        { value: 'ENG', text: 'ENG' },
        { value: 'คณิต', text: 'คณิตศาสตร์' },
        { value: 'วิทย์', text: 'วิทยาศาสตร์' },
        { value: 'ไทย', text: 'ไทย' },
        { value: 'สังคม', text: 'สังคม' },
        { value: 'ฟิสิกส์', text: 'ฟิสิกส์' },
        { value: 'เคมี', text: 'เคมี' },
        { value: 'ชีวะ', text: 'ชีวะ' },
        { value: 'จีน', text: 'ภาษาจีน' },
        { value: 'ญี่ปุ่น', text: 'ภาษาญี่ปุ่น' },
        { value: 'เกาหลี', text: 'ภาษาเกาหลี' },


      ],
    
    

    }
},
  asyncData (context) {

    return axios.get('https://frozen-mesa-40722.herokuapp.com/job2/all')
    .then((res) => { console.log(res.data)
      return { jobs: res.data,
               
            }        

    })
  },


mounted() {

    var data = {
        tutorid : this.$store.state.user._id
    }
    console.log(data);
    
  axios.post('http://localhost:8000/myregisterjob', data)
                // axios.get('http://localhost:8000/job/all')

          .then((res) => { 
              
              console.log(res.data)
            //   this.courses = res.data
              this.jobs = res.data.job_enroll
       

          })
          .catch(error => console.log(error))

},
//   computed: {
//     calculateScore (x) {
//      console.log(x);
     
// // this.sum = x.reduce(function(a, b) {
// //   return a + b;
// // });
//     }
//   },



  methods: {
    calculateScore (x) {
console.log( x.length);

if (x.length > 0) {
      var por2 =   x.reduce((a, b) => ( (a + b)     ) , 0) 
     var por3 = por2 / x.length
     var por = por3.toFixed(1)
} else {
     var por = 0
}
    // var por =   x.reduce((a, b) => ( (a + b)     ) , 0) / 
   
  
// console.log(por);


      
  return por
// this.sum = x.reduce(function(a, b) {
//   return a + b;
// });
    },

    sendout(){
this.loading = true
  this.$nuxt.$loading.start()
    
            console.log(this.selected);
         

let createPost = {
      
    
  
        subject :this.selected,
     

       

      }
      console.log(createPost);
      

      if (this.selected.length > 0) {
           axios.post('https://frozen-mesa-40722.herokuapp.com/tutor/filter', createPost)
                // axios.get('http://localhost:8000/job/all')

          .then((res) => { 
              
              console.log(res.data)
            //   this.courses = res.data
              this.tutors = res.data,
             this.$refs.myModalRef4.hide()
             this.loading = false
               this.$nuxt.$loading.finish()

          })
          .catch(error => console.log(error))
      } else {
            axios.get('https://frozen-mesa-40722.herokuapp.com/tutor/all')
                // axios.get('http://localhost:8000/job/all')

          .then((res) => { 
              
              console.log(res.data)
            //   this.courses = res.data
              this.tutors = res.data,
             this.$refs.myModalRef4.hide()
             this.loading = false
               this.$nuxt.$loading.finish()

          })
          .catch(error => console.log(error))
      }

      
    },


   seeeach(x){
 

       if (this.$store.state.isUserLoggedIn) {
 this.$router.push(`/newjob/tutorseejob/${x}`)
       } else{
                                    this.$refs.myModalRef.show() 

       }
       
   },

       displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
            nextPage(){
    this.$router.push('/tutor/sheetall')
},
nextPage2(){
    this.$router.push('/tutor/job')


}, 

 



                         // axios.get('http://localhost:8000/job/all')

     
}
,
    // layout: 'noheadtutor'
    layout: 'auth'



}
</script>



<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.form-control{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
}

.scrolling-wrapper {
   overflow-x: scroll !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
 &::-webkit-scrollbar {
    display: none!important;
  }
 
}


.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
   padding-left: 4px;

}

.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    /* border-bottom: 2px; */
    
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}

.card-body{
  padding-left: 10px;
    padding-top: 2px;
    padding-right: 10px;
      padding-bottom: 8px;
      
          margin-top: 7px;
    margin-bottom: 5px;
}

.card-title {
    margin-bottom: 12px;
    margin-bottom: 0.75rem;
    font-size: 20px;
    color: #5a5a5a;
}
a{
/* color: #708f7e; */
/* color: #ffffff; */
    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}

.mybtn{
    border:1px solid #F3F3F3;
    margin-left: 4px;
    font-size: 19px; 
    font-weight: 400;
    padding: 5px;
    padding-right: 16px;
    padding-left: 16px; 
    border-radius: 17px;
    margin-bottom: 10px;
    color:#BEBABA!important;
}

</style>