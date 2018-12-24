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


   <b-form-group label="วันที่สะดวก">
      <b-form-checkbox-group plain stacked v-model="selected2" name="flavour2" :options="options2">
      </b-form-checkbox-group>
    </b-form-group>
<br>
  <b-form-group >

 <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น 5-7 โมงเย็น">
        <b-form-input  class="formpor" id="exampleInput1" 
                      type="text"
                      required
                      v-model="form"
                      placeholder="เวลาที่สะดวก">
        </b-form-input>
      </b-form-group>


      <b-form-radio-group v-model="selected"
                          :options="options"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

 


<br><br>


 <div  style="text-align :center">       <nuxt-link class="nav-item" style="color:#345d46; " to="/student/createjob">   <b-button 
   style="background-color: #EFBAB5; border: 0px;     padding-left: 64px;
    padding-right: 64px;
    
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 22px;">ลงประกาศหาติวเตอร์</b-button></nuxt-link> </div> 
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
  testbtn(){
console.log(this.selected);

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
