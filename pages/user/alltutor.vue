<template>

<b-container fluid style="padding:0px;">
<b-nav fill tabs style=" margin-top:-7px;    background-color: #dfaea9;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item  class="responsive"  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #ffffff; 
">ค้นหาติวเตอร์ </b-nav-item>
 <b-nav-item style="padding-right: 10px;
    padding-left: 10px;" class="responsive"  @click="nextPage">ค้นหาชีทสอน</b-nav-item>
 
</b-nav>

<b-container fluid style="padding:0px;" >
       <br>
        <!-- <p style=" color:#86a5ca ; text-align: center;
" >
 ติวเตอร์ทั้งหมด ({{ tutors.length }})</p> -->
<div style="text-align:center;">
     <b-button v-b-modal.modal1  class="responsive" style="font-size: 17px;
    color: #5f5f5f; 
    background-color: #f5f5f5;
    border-color: rgba(108, 117, 125, 0);
    border-radius: 18px;
    padding-left: 17px;
    padding-right: 20px;
"><i style=" font-size: 20px; color: #5f5f5f;   " class="fa fa-search nav-item " aria-hidden="true"></i> ค้นหาติวเตอร์ตามวิชา</b-button>
<div v-show="selected.length >0">
 <br> <strong  v-for="selecting in selected" style="    background-color: #c6f1d0;
    padding: 5px;
    border-radius: 9px;
    color: #086542;
    margin-left: 5px;
    padding-right: 10px;"> {{ selecting.toString() }}</strong>
</div>

  </div>
    <br>

 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">


 <b-modal no-fade hide-header  hide-footer ref="myModalRef4"  id="modal1" >

<div>
  <p style="font-size:20px;"> ค้นหาติวเตอร์ตามวิชา <i style=" font-size: 20px; color: #667a6b;" class="fa fa-search nav-item " aria-hidden="true"></i></p>

    <b-form-select style="  padding-top: 10px;
    padding-bottom: 10px;" multiple :select-size="6"    v-model="selected" :options="options" class="mb-3">
    </b-form-select>
  <strong  v-for="selecting in selected" style="    background-color: #c6f1d0;
    padding: 5px;
    border-radius: 9px;
    color: #086542;
    margin-left: 5px;
    padding-right: 10px;"> {{ selecting.toString() }}</strong></div>
  </div>





<button @click="kuytest">test</button>


   
<br>
  <!-- <button @click="sendout">send</button> -->
    <b-button  @click="sendout" style="    width: 100%;  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ทำการค้นหา</b-button>  
      <div style="color: grey" class="loading-page" v-if="loading">
    Loading...
  </div>
  </div>
  </b-modal>


    <b-card @click="seeeach(tutor._id)"  style="margin-bottom:0px;     border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1px;     box-shadow: rgba(148, 142, 142, 0) 0px 1px 3px -1px, rgba(255, 251, 251, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px;

"  v-for="tutor in tutors" :key="tutor._id"  v-if="tutor.subject" >
         
        
       <b-row style="margin-top: 10px;">

        <b-col cols="4">
                     <img :src="tutor.picture" style="border-radius: 3px" width="100%"> 

        </b-col>
         <b-col cols="8" style="margin-left:-5px;padding-left: 0px; padding-right: 2px;">
<p style=" padding-left: 0px;margin-bottom: 0px; font-weight:600; font-size:17px; margin-top: -6px;">{{tutor.name.replace(/ .*/,'')}}   <strong style=" background-color:#EEC0BB;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;    float: right;
    margin-right: 4px;
        padding-top: 1px;
    margin-top: 4px;">{{ calculateScore(tutor.reviewscore)}} <i style="color:white;" class="fa fa-star" aria-hidden="true"></i>
 </strong></p>
<p style="color:#545454; font-size:16px;margin-bottom: 0px;margin-bottom: 3px;
" v-if="tutor.subject">
    {{tutor.subject.substring(0,70)}}</p>
<p style="color:#545454; font-size:16px   ;  margin-bottom: 0px;" v-if="tutor.profile">
    {{tutor.profile.substring(0,65)}}...</p>


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
<div style="   
    
" class=" scrolling-wrapper">
               <a   style=" color: #ECC1BC;
    text-decoration: none;
   
    padding: 3px 8px;
    margin-left: 2px;
    margin-top: 7px;
    font-size: 16px;
    border-radius: 11px;"  href="#" 
           class="card-link">
{{tutor.location}}</a>
</div>
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
<b-col cols="3" style="  padding-left: 20px; ">


   <!-- <strong style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{sheet.owner.replace(/\w+[.!?]?$/, '')}}  </strong>  -->
<!-- color:#a5cae4; -->
  <strong style=" color:#a5cae4;  font-size: 15px; margin-top: -0px; 
  float:right;  margin-bottom: 0px; font-weight:400"><i class="fa fa-eye" aria-hidden="true"></i>
 {{tutor.view }}  </strong>  
</b-col>

     </b-row>
    


    </b-row>

    </b-card>

   </b-col>
    </b-row>

     



  
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
kuytest(){
// https://sorns-co-beta.herokuapp.com/tutor/5b524e926f31160014f2f13a
       this.$router.push('tutor/5b524e926f31160014f2f13a')


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
       this.$router.push(`/tutor/${x}`)
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
// ,
//     layout: 'auth'



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

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
   padding-left: 4px;

}

.scrolling-wrapper {
   overflow-x: scroll !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
 &::-webkit-scrollbar {
    display: none!important;
  }
 
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
    font-family: kanit; 
}

p{
    font-family: kanit;
}

</style>
