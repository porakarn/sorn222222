<template>

<b-container fluid style="padding:0px;">


<b-container fluid style="padding:0px;" >
       <br>
        <!-- <p style=" color:#86a5ca ; text-align: center;
" >
 ติวเตอร์ทั้งหมด ({{ tutors.length }})</p> -->

  
    <br>

 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">




     <b-card @click="seeeach(tutor._id)"  style="margin-bottom:0px;       border: 0px solid;     
   

"  v-for="tutor in tutors" :key="tutor._id"  v-if="tutor.subject" >
         
        
       <b-row style="margin-top: 10px;">

        <b-col cols="2">
                     <img :src="tutor.picture" style="width: 48px;
  height: 48px;
  border-radius: 14px;
  box-shadow: 0 1px 1px 0 rgba(205, 205, 205, 0.24);" width="100%"> 

        </b-col>
         <b-col cols="10" style="margin-left: -1px;padding-left: 6px; padding-right: 2px;">
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
  padding-left:4px;
  color: #2c2929;">{{tutor.name.substring(0,21)}}   <strong style=" background-color: #ffc107;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    padding-right: 3px;
    padding-left: 4px;
    font-size: 14px;    float: right;
    margin-right: 10px;
        padding-top: 2px;
    margin-top: 4px;"> 500 - 
 </strong></p>
<p style="color:#545454; font-size:16px;margin-bottom: 0px;margin-bottom: 3px;
" v-if="tutor.subject">
    {{tutor.subject.substring(0,70)}}</p>
<p style="color:#545454; font-size:14px   ;  margin-bottom: 0px;" v-if="tutor.profile">
    {{tutor.profile.substring(0,15)}}...</p>   <strong style="float: right;
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

   </b-col>
    </b-row>
    <br>
 <p style=" color:#86a5ca ; text-align: center;
" >
 มีติวเตอร์อีกมากกว่า 200 คน</p>
     
   <div  style="text-align :center">       <nuxt-link class="nav-item" style="color:#345d46; " to="/student/createjob">   <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">โพสหาติวเตอร์</b-button></nuxt-link> </div> 

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

    return axios.get('https://frozen-mesa-40722.herokuapp.com/tutor/all')
    .then((res) => { console.log(res.data)
      return { tutors: res.data,
               
            }        

    })
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
    layout: 'student2'



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


</style>
