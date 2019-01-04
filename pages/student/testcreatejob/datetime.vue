<template>
<b-container fluid style="padding: 10px; ">

<b-navbar  style=" background-color:#ffffff00!important;   padding-bottom: 15px;
    padding-top: 15px;   "toggleable variant="light">
     <i @click="goback" style=" font-size: 23px;
    padding-left: 4px;
    color: #c1c1c1;
" class="fa fa-arrow-left responsive" aria-hidden="true"> วัน เวลาที่สะดวก</i>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
   
        
       
       
    </b-navbar>


<b-container fluid>
  <br>
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


   <b-form-group label="วันที่สะดวก">
      <b-form-checkbox-group plain stacked v-model="selected2" name="flavour2" :options="options2">
      </b-form-checkbox-group>
    </b-form-group>
<br>
  <b-form-group >

 <b-form-group v-if="selected2"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น 5-7 โมงเย็น">
        <b-form-input  class="formpor" id="exampleInput1" 
                      type="text"
                      required
                       size="lg" 
                      v-model="time"
                      placeholder="เวลาที่สะดวก">
        </b-form-input>
      </b-form-group>


      <b-form-radio-group  v-if="selected2" v-model="selected"
                          :options="options"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

 


<br>


 <div  style="text-align :center">       <b-button @click="onSubmit" size="lg" style=" color:white;  background-color: #DFAEA9; border: 0px; 
    width:80%;">เรียบร้อย</b-button>   </div> 
</b-container>
<b-container fluid class="bv-example-row  "   style="padding-left:28px;padding-rigth:28px; position: fixed;     width: 100%;

  bottom: 0px; 
  background-color: white;
  height: 58px;">
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
      time: '',
      value:80;
       loading: false,
           profile2: false,
            selected2: [], // Must be an array reference!
      options2: [
        {text: 'จันทร์', value: 'จันทร์'},
        {text: 'อังคาร', value: 'อังคาร'},
        {text: 'พุธ', value: 'พุธ'},
        {text: 'พฤหัส', value: 'พฤหัส'},
        {text: 'ศุกร์', value: 'ศุกร์'},
        {text: 'เสาร์', value: 'เสาร์'},
        {text: 'อาทิตย์', value: 'อาทิตย์'},

      ],
           selected: null,
      options: [
      
        { value: ' เรียนสั้น 1- 3 ครั้ง', text: 'เรียนสั้น 1- 3 ครั้ง' },
        { value: 'เรียน 4 - 7 ครั้ง', text: 'เรียน 4 - 7 ครั้ง' },
        { value: 'เรียนยาว ( 8 ครั้งขึ้นไป )', text: 'เรียนยาว ( 8 ครั้งขึ้นไป )' },
       

    
      ],

    

    }
},
 


mounted() {
    if (this.$store.state.job.day) {
     this.selected2 = this.$store.state.job.day   
    }

 if (this.$store.state.job.time) {
     this.time = this.$store.state.job.time  
    }

 if (this.$store.state.job.duration) {
     this.selected = this.$store.state.job.duration  
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
     var job = { 
subject : this.$store.state.job.subject,
subjectDetail : this.$store.state.job.subjectDetail,
purpose : this.$store.state.job.purpose,
level :this.$store.state.job.level, 
day : this.selected2, 
time : this.time, 
duration : this.selected, 
province: this.$store.state.job.province, 
location: this.$store.state.job.location, 
extra : this.$store.state.job.extra, 
}
this.$store.dispatch('setJob', job)
 this.$router.push('/student/demo2')
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
