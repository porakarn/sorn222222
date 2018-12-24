<template>
<b-container fluid style="padding: 0px;">

<b-navbar  style="  box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;   padding-bottom: 15px;
    padding-top: 15px;  background-color:#DFAEA9!important; "toggleable variant="light">
     <i @click="goback" style=" font-size: 25px;
    padding-left: 4px;
    color: white;
" class="fa fa-arrow-left responsive" aria-hidden="true"></i>
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

  <b-form-group label="จุดประสงค์ของการเรียน">
      <b-form-radio-group v-model="selected"
                          :options="options"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <b-form-group v-if="selected"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น ต้องการสอบเข้าเตรียมอุดม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="form"
                      placeholder="อื่นๆ">
        </b-form-input>
      </b-form-group>



<br><br>


 <div  style="text-align :center">       <b-button @click="onSubmit"
   style="background-color: #EFBAB5; border: 0px;     padding-left: 64px;
    padding-right: 64px;
    
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 22px;">ลงประกาศหาติวเตอร์</b-button> </div> 
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
       loading: false,
           profile2: false,
           selected: null,
      options: [
      
        { value: 'เพิ่มความรู้', text: 'เพิ่มความรู้' },
        { value: 'สอบเข้าเรียนต่อ', text: 'สอบเข้าเรียนต่อ' },
        { value: 'เพิ่มเกรด ', text: 'เพิ่มเกรด' },
        { value: 'สอบวัดระดับต่างๆ', text: 'สอบวัดระดับต่างๆ' },
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
purpose : this.selected,
// gradelevel :this.$store.state.job.gradelevel, 
// day : this.$store.state.job.day, 
// time : this.$store.state.job.time, 
// duration : this.$store.state.job.duration, 
// province: this.$store.state.job.province, 
// location: this.$store.state.job.location, 
// extra : this.$store.state.job.extra, 
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
