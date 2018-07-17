<template>
<b-container fluid style="padding:0px;">
  <!-- <b-nav tabs>
  <b-nav-item>All</b-nav-item>
    <b-nav-item>ว่าง</b-nav-item>
  <b-nav-item>รอจ่ายเงิน</b-nav-item>
  <b-nav-item>ปิดแล้ว</b-nav-item>
</b-nav> -->
<b-nav fill tabs  style="margin-top:-7px;    background-color: #cdf4d7; box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;">
  <b-nav-item style="padding-right: 12px;
    padding-left: 12px;" @click="nextPage">ทั้งหมด</b-nav-item>
    <b-nav-item  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #5b7a69;
">งานแนะนำ</b-nav-item>
 
</b-nav>

<b-container fluid> 
<br>
  
   <div v-for="course in courses" >


   <b-row>
   <b-col offset-lg="3" lg="6">
    <b-card @click="showModal(course)" style="   margin-bottom: 5px; 
    box-shadow: rgba(146, 146, 146, 0.1) 0px 1px 3px 0px;
" 
           > <b-row>  <b-col cols="10" style="    padding-right: 0px;
">
        <p style=" white-space: pre-wrap; font-size: 16px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{ course.job}}</p>
 <div class="por" >
       
</div></b-col> 
                        <b-col style="    padding-left: 10px;
    padding-right: 3px;" cols="2">{{course.status}}</b-col> </b-row>
    <b-row>
      <b-col cols="8" style="padding-left: 8px;">
 <a   href="#" v-show="course.subject.length >0"
           class="card-link">{{course.subject.toString().split(',').join(' ')}}</a>
        <b-link href="#" v-show="course.day.length >0"
                class="card-link"   >{{course.day.toString().split(',').join(' ')}}</b-link> 
</b-col>

<b-col cols="4" style="margin-top: -15px; ">
   <strong style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{course.creator_name }}  </strong>  

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(course.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>



</b-row>
    
   

    
   
   






</div>

 <b-modal hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
          <div style="white-space: pre-wrap;">{{job3}}</div>

      
             <p style="color: grey"> ส่งโปรไฟล์ของคุณ</p>
         <b-form-textarea id="textarea1"
                     placeholder="Enter something"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
    <p style="color: grey">  Copy</p>
   <b-row>
             <b-col cols="9" >
     <b-button size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  
             </b-col>
               <b-col cols="3">
      <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />

               </b-col>         

         </b-row>
      </div>
    </b-modal>

     <!-- <b-modal hide-header  hide-footer id="modal-center" centered title="Bootstrap-Vue">
 <p style=" color:#2f2f2f" class="card-text">A123 IELTS ขอพี่ จุฬา
             <br>ช ม 4 ( สวนกุหลาบ ) 
<br>  สยามพารากอน ส-อ 12-14 น
<br> ค่าสอน 600 fee 1200
 {{ job}}
         </p> 
         
               
             <p style="color: grey"> ส่งโปรไฟล์ของคุณ</p>
         <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
    <p style="color: grey">  Copy</p>
   <b-row>
             <b-col cols="9" >
     <b-button size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  
             </b-col>
               <b-col cols="3">
      <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />

               </b-col>         

         </b-row>
          </b-modal>

 -->





</b-container>

</b-container fluid>

</template>
<script>
import axios from 'axios';
import moment from 'moment'
export default {
   data () {
    return {
      courses: null,
      job3: '',
     
  
    }
  },
mounted() {
  
if(this.$store.state.user.tag.length>1){
let suggest = {
      
        tag: this.$store.state.user.tag
        

      }
      console.log(suggest);

      
    return axios.post('https://frozen-mesa-40722.herokuapp.com/job/suggest', suggest)
    .then((res) => { 
      console.log(res.data)
     this.courses = res.data
               
            })        

    }
  


},



  //  fetch ({ context, params }) {
  //   return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
  //   .then((res) => {
  //     console.log(context.store.state.user.tag);
      

  //   })
  // },

//   asyncData (context) {
// if(context.store.state.user.tag.length>1){
// let suggest = {
      
//         tag: context.store.state.user.tag,
        

//       }
//       console.log(suggest);
//       console.log(context);
      
//     return axios.post('https://frozen-mesa-40722.herokuapp.com/job/suggest', suggest)
//     .then((res) => { console.log(res.data)
//       return { courses: res.data,
               
//             }        

//     })
  
// }

//   },

    methods: {
      displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
     

por(){
let suggest = {
      
        tag: this.$store.state.user.tag,
        

      }
      console.log(suggest);
      
    axios.get('https://frozen-mesa-40722.herokuapp.com/job/suggest', suggest )
    .then((res) => {
     this.courses = res.data
       console.log(res.data);
       
    }).catch(error => console.log(error))

},


  nextPage(){
                    this.$router.push('/user/seeall')

      },


    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item.job
      console.log(item.job  );
      

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>


<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
    padding-top: 6px;
}



.card-text{
        color: #2f2f2f;
    margin-bottom: 6px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #82D9D9;
    padding: 2px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 15px;

}

.por{
    margin-left: -7px
}
.card{
      margin-bottom: 5px;
box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(193, 193, 193, 0.12);
    border-radius: 6px;
}


a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}
</style>
