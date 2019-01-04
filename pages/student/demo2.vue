<template>

<b-container fluid style="padding: 0px; background-color:#FAFAFA  ;
">

<b-navbar  style=" background-color:#DFAEA9!important;   padding-bottom: 20px;
    padding-top: 20px;   "toggleable variant="light">
     <i @click="goback" style=" font-size: 21px;
    padding-left: 4px;
    color: white;
" class="fa fa-arrow-left responsive" aria-hidden="true"> สร้างประกาศหาติวเตอร์</i> 
</b-navbar>
<b-container fluid style="padding:0px;" >
       <br>
        <!-- <p style=" color:#86a5ca ; text-align: center;
" >
 ติวเตอร์ทั้งหมด ({{ tutors.length }})</p> -->

  <br>
    <br>

 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">

<b-container  style="margin-top :-26px;    padding-left: 16px;
    padding-right: 16px;">


    <b-card @click="seeeach('subject')" class="card1" >
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
วิชาที่อยากเรียน   </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i> <Strong style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{subject}}</Strong> 
    </b-card>
      <b-card @click="seeeach('purpose')" class="card1" >
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
จุดประสงค์ในการเรียน    </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i> <Strong style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{purpose}}</Strong>
    </b-card>
      <b-card @click="seeeach('level')" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
ระดับชั้น    </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i><Strong style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{level}}</Strong>
    </b-card>
       <b-card @click="seeeach('datetime')" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
วัน เวลา ที่สะดวก </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i><Strong v-if="day" style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{day.toString()}}</Strong>
    </b-card>
       <b-card @click="seeeach('location')" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
สถานที่เรียน  </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i><Strong style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{location}}</Strong>
    </b-card>
       <b-card @click="seeeach('extra')" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
เพิ่มเติม (ถ้ามี)</strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i><Strong style="float:right; font-weight:400;color:#c1c1c1;margin-right:13px;">{{extra}}</Strong>
    </b-card>
    
     </b-container>
   </b-col>
    </b-row>
    <br>
 
     
   <div  style="text-align :center">        <b-button @click="onSubmit"
   style="background-color: #EFBAB5; border: 0px;     padding-left: 64px;
    padding-right: 64px;
    
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 22px;">ลงประกาศหาติวเตอร์</b-button> </div> 

    <button @click="clearup">Clear</button>

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
      tutors:{},
       loading: false,
       subject:'',
       subjectDetail:'',
       purpose:'',
       level:'',
       day:'',
       time:'',
       duration: '',
       province:'',
       location:'',
       extra:'',

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
 


mounted() {

 if (!this.$store.state.job) {
   this.$store.dispatch('setJob', '')
}

      if (this.$store.state.job) {
  this.subject = this.$store.state.job.subject
   this.purpose = this.$store.state.job.purpose
   this.level = this.$store.state.job.level
   this.day = this.$store.state.job.day
   this.location = this.$store.state.job.location
   this.extra = this.$store.state.job.extra
    }
//         if (this.$store.state.job.subject) {
//     this.subject = this.$store.state.job.subject
//     }
//         if (this.$store.state.job.purpose) {
//     this.purpose = this.$store.state.job.purpose
// }
//       if (this.$store.state.job.level) {
// this.level = this.$store.state.job.level
// }

// if (this.$store.state.job.day) {
// this.day = this.$store.state.job.day
// }

// if (this.$store.state.job.location) {
// this.location = this.$store.state.job.location
// }

// if (this.$store.state.job.extra) {
// this.extra = this.$store.state.job.extra
// }



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

        goback(){
              this.$router.push('/student/demo2')


        },
      clearup(){
          console.log(this.$store.state.student.picture);
                    console.log(this.$store.state.student);

var job = {



}


   this.$store.dispatch('setJob', '')
      },
 
   onSubmit(){
var job = {
subject : this.$store.state.job.subject,
subjectDetail : this.$store.state.job.subjectDetail,
purpose : this.$store.state.job.purpose,
level :this.$store.state.job.level, 
day : this.$store.state.job.day, 
time : this.$store.state.job.time, 
duration : this.$store.state.job.duration, 
province: this.$store.state.job.province, 
location: this.$store.state.job.location, 
extra : this.$store.state.job.extra, 

creator_pic:this.$store.state.student.picture,
creator_contact:this.$store.state.student.phone,
creator_line: this.$store.state.student.line,
creator_name: this.$store.state.student.name,
creator_id_student: this.$store.state.student._id,
creator_gender: this.$store.state.student.gender,
creator_grade: this.$store.state.student.grade,
// creator_id_tutor: { type: Schema.ObjectId, ref: 'Tutor2'},
}
//   axios.post('http://localhost:8000/job2/create', job)

  axios.post('https://frozen-mesa-40722.herokuapp.com/job2/create', job)
          .then((res) => { 
              console.log(job);
              
              console.log(res.data)
                  
 
     
    //    this.form.email = ''
    //    this.form.subject = ''
    //     this.form.note = ''
    //     this.form.tuitionfee = ''
    //     this.form.school = ''
    //    this.form.dayandtime = ''
    //     this.form.location = ''
    //     this.form.food = null
    //     this.form.gender = null
     
              

  
          })
          .catch(error => console.log(error))

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
 
     this.$router.push(`/student/testcreatejob/${x}`)
    // console.log(`${x}`);
    
    // //  this.$router.push('/student/testcreatejob')
    //  alert(`${x}`)
       
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
      margin-top: 2px;
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

.card1{
    margin-bottom:0px;  
     border: 0px solid;  
        border-bottom-width: 1px;
    border-bottom: 1px solid whitesmoke !important;  
     margin-bottom:5px;  
       padding-top: 9px;
    padding-bottom: 9px;
    box-shadow: 0 0 6px 0px #f7f7f7;

    border-radius: 6px;      
   
}

</style>
