<template>
<b-container fluid style="padding: 10px; ">

<b-navbar  style=" background-color:#ffffff00!important;   padding-bottom: 15px;
    padding-top: 15px;   "toggleable variant="light">
     <i @click="goback" style=" font-size: 23px;
    padding-left: 4px;
    color: #c1c1c1;
" class="fa fa-arrow-left responsive" aria-hidden="true"> ระดับชั้น</i> 
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
   
        
       
       
    </b-navbar>


<b-container fluid>
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

  <b-form-group >
      <b-form-radio-group v-model="selected"
                          :options="options"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <!-- <b-form-group v-if="selected"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น ต้องการสอบเข้าเตรียมอุดม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="form"
                      placeholder="อื่นๆ">
        </b-form-input>
      </b-form-group> -->



<br><br>


 <div  style="text-align :center">          <b-button @click="onSubmit"
   style="background-color: #EFBAB5; border: 0px;     padding-left: 64px;
    padding-right: 64px;
    
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 22px;">เรียบร้อย</b-button> </div> 
</b-container>

<b-container fluid class="bv-example-row  " style="    padding-left: 28px;
    
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
      value: 60,
       loading: false,
           profile2: false,
           selected: null,
      options: [
      
        { value: 'อนุบาล', text: 'อนุบาล' },
        { value: 'ประถม', text: 'ประถม' },
        { value: 'มัธยมต้น', text: 'มัธยมต้น' },
        { value: 'มัธยมปลาย', text: 'มัธยมปลาย' },
        { value: 'มหาลัย', text: 'มหาลัย' },
        { value: 'บุคคลทั่วไป', text: 'บุคคลทั่วไป' },

    
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
    if (this.$store.state.job.level) {
     this.selected = this.$store.state.job.level   
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
level :this.selected, 
day : this.$store.state.job.day, 
time : this.$store.state.job.time, 
duration : this.$store.state.job.duration, 
province: this.$store.state.job.province, 
location: this.$store.state.job.location, 
extra : this.$store.state.job.extra, 
}

   this.$store.dispatch('setJob', job)
//  this.$router.push('/student/demo2')
   this.$router.push('/student/testcreatejob/datetime')

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
