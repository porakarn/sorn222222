<template>
<b-container fluid style="padding: 0px; background-image: linear-gradient(to bottom, #fff0f0, #fef4f6, #fdf8fb, #fdfcfe, #ffffff);">

<b-navbar  style=" background-color:#ffffff00!important;   padding-bottom: 15px;
    padding-top: 15px;   "toggleable variant="light">
     <i @click="goback" style=" font-size: 23px;
    padding-left: 4px;
    color: #c1c1c1;
" class="fa fa-long-arrow-left responsive" aria-hidden="true"> วิชา</i> 
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
   
        
       
       
    </b-navbar>


<b-container fluid style="padding:35px!important;">
  <br><br>
    <!-- <div>จังหวัด: <strong style="    background-color: #c6f1d0;
    padding: 5px;
    border-radius: 9px;
    color: #086542;
    margin-left: 5px;
    padding-right: 10px;" v-for="selecting2 in selected2" >{{selecting2}}</strong></div>
        <div>เขต: <strong style="    background-color: #c6f1d0;
    padding: 5px;
    border-radius: 9px;
    color: #086542;
    margin-left: 5px;
    padding-right: 10px;"  v-for="selecting in selected">{{ selecting }}</strong></div>    

        -->
 <div  style="text-align :center; "> 
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="     font-size: 17px;
    color: #858484;   border-radius: 5px; 
    
        border: 0px;
    box-shadow: 0 1px 3px #74686833;" class="formpor" id="exampleInput3" size="lg"
                      :options="options"
                    
                      v-model="selected">
        </b-form-select>
      </b-form-group>
 </div>
 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->
 <div  style="text-align :center"> 
  <b-form-group v-if="selected"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input style="border-radius:5px;  
      font-size: 17px;
    border: 0px;    
    box-shadow: 0 1px 3px #74686833;   padding-top: 10px;
    padding-bottom: 10px;" class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="subjectDetail"
                      placeholder="รายละเอียดวิชา">
        </b-form-input>
      </b-form-group>
 </div>



  <!-- <b-form-textarea style="  white-space: pre-wrap;   padding-top: 0px;
" class="formpor" id="textarea1"
                     
                     placeholder=""
                     :rows="2"
                     :max-rows="6">
    </b-form-textarea> -->

<br><br>
<!-- <button @click="testbtn">Test</button> -->


<br><br><br><br>
 <div  style="text-align :center">        <b-button  @click="onSubmit"
   style="background-color: #EFBAB5; border: 0px;   
    width:100%;
    
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 4px;">เรียบร้อย</b-button> </div> 
<br><br><br><br><br>
    
 
   <br><br>
</b-container>
<b-container fluid class="bv-example-row  "   style="    padding-left: 28px;
    
    position: fixed;
    width: 100%;
    bottom: 0px;
    background-color: white;
    height: 58px;
    padding-right: 28px;
    right: 10px;
    left: 0px;">
<Strong style="font-weight:400; font-size:13px; color:#929292; padding-left:23px;padding-right: 25px;">วิชา </Strong>
  <Strong style="font-weight:400; font-size:13px;color:#929292; padding-right: 17px;"> จุดประสงค์ </Strong>
   <Strong style="font-weight:400; font-size:13px;color:#929292; padding-right: 26px;"> ระดับชั้น </Strong>
    <Strong style="font-weight:400; font-size:13px;color:#929292; padding-right: 23px;"> วัน เวลา </Strong>
        <Strong style="font-weight:400; font-size:13px;color:#929292;"> สถานที่ </Strong>

    <b-progress style="margin-top:1px;" height="4px" :value="value"></b-progress>
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
      forms: '',
      subjectDetail: '',
 value: 19,
       loading: false,
           profile2: false,
           selected: null,
      options: [
        { value: null, text: 'วิชาที่อยากเรียน' },
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
        { value: 'อื่นๆ', text: 'อื่นๆ' },

    
      ],
    //     selected2: null,
    //   options2: [
    //     { value: null, text: 'เขต' },
    //     { value: 'สยาม', text: 'สยาม' },
    //     { value: 'อโศก', text: 'อโศก' },
    //     { value: 'บางซื่อ', text: 'บางซื่อ' },
    //     { value: 'ราชเทวี', text: 'ราชเทวี' },
    //     { value: 'พญาไท', text: 'พญาไท' },

    //   ],
    
    

    }
},
 


mounted() {
      if (this.$store.state.job) {
    if (this.$store.state.job.subject) {
     this.selected = this.$store.state.job.subject  
    }
     if (this.$store.state.job.subjectDetail) {
     this.subjectDetail = this.$store.state.job.subjectDetail  
    }
}

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
  onSubmit(){


//   let createPost = {
//         parent_or_student: this.selected,
//         phone: this.form.phone,
//         line : this.form.line,
//         gender: this.form.gender,
//         grade: this.form.grade,
//         _id: this.$store.state.student._id

//       }

    // var name = person ? person.name : "stranger";
var job = {
subject : this.selected,
subjectDetail : this.subjectDetail,
purpose : this.$store.state.job.purpose,
level :this.$store.state.job.level, 
day : this.$store.state.job.day, 
time : this.$store.state.job.time, 
duration : this.$store.state.job.duration, 
province: this.$store.state.job.province, 
location: this.$store.state.job.location, 
extra : this.$store.state.job.extra, 
}

   this.$store.dispatch('setJob', job)
//  this.$router.push('/student/demo2')
  this.$router.push('/student/testcreatejob/purpose')


 
console.log(job);


  },

  goback(){
            this.$router.go(-1)
 this.$router.push('/student/demo2')
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
 this.$router.push(`/tutor/${x}`)
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
    layout: 'auth'



}
</script>

<style>
.progress-bar {
background-color:#e7ada8;
}
</style>
