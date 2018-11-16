<template>

<b-container fluid style="padding:0px; background-color:#FAFAFA;">
<div style="width: 100%;
    height: 122px;
    background-color: #efbab5;">
  <!-- <Strong style="color:white; font-weight:300px; font-size:18px;">  <i class="fa fa-arrow-left" aria-hidden="true"></i>
 สร้างประกาศหาติวเตอร์
</Strong> -->
    </div>

<b-container fluid style="padding:0px;" >
       <br>
        <!-- <p style=" color:#86a5ca ; text-align: center;
" >
 ติวเตอร์ทั้งหมด ({{ tutors.length }})</p> -->

  
    <br>

 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">

<b-container  style="margin-top :-26px;">


    <b-card @click="seeeach(tutor._id)" class="card1" >
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
วิชาที่อยากเรียน   </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
      <b-card @click="seeeach(tutor._id)" class="card1" >
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
จุดประสงค์ในการเรียน    </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
      <b-card @click="seeeach(tutor._id)" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
ระดับชั้น    </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
       <b-card @click="seeeach(tutor._id)" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
วัน เวลา ที่สะดวก </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
       <b-card @click="seeeach(tutor._id)" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
สถานที่เรียน  </strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
       <b-card @click="seeeach(tutor._id)" class="card1" >
           <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
เพิ่มเติม (ถ้ามี)</strong>
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 19px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
    
     </b-container>
   </b-col>
    </b-row>
    <br>
 
     
   <div  style="text-align :center">       <nuxt-link class="nav-item" style="color:#345d46; " to="/student/createjob">   <b-button 
   style="background-color: #EFBAB5; border: 0px;     padding-left: 64px;
    padding-right: 64px;
    
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 22px;">ลงประกาศหาติวเตอร์</b-button></nuxt-link> </div> 

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

    border-radius: 5px;      
   
}

</style>
