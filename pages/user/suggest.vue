<template>
<b-container fluid style="padding:0px;">
  <!-- <b-nav tabs>
  <b-nav-item>All</b-nav-item>
    <b-nav-item>ว่าง</b-nav-item>
  <b-nav-item>รอจ่ายเงิน</b-nav-item>
  <b-nav-item>ปิดแล้ว</b-nav-item>
</b-nav> -->
<b-nav fill tabs  style="margin-top:-7px;    background-color: #dfaea9; box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;">
  <b-nav-item style="padding-right: 12px;
    padding-left: 12px;" @click="nextPage">ทั้งหมด</b-nav-item>
    <b-nav-item  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #ffffff;
">งานแนะนำ</b-nav-item>
 
</b-nav>

<b-container fluid> 
   <p style="  color:#86a5ca ;  margin-top:15px;  text-align: center;
" v-if="courses.length < 1" >คุณยังไม่มีงานแนะนำ</p>

        <br>
 
<div v-if="!subject" style="text-align:center">

 <p style="  color:#86a5ca ; 
"  >กรุณากรอกโปรไฟล์ให้ครบก่อน หลังจากนั้น ระบบจะช่วย recommend งานสอนตามวิชาที่คุณสอนกับโปรไฟล์ของคุณ</p>

    <nuxt-link to="/tutor/profile/edit">
    <b-button   style="box-shadow: 0 1px 1px 1px rgba(111, 111, 111, .23);
    width: auto;  background-color: #33C1C1; border: 0px; padding-left: 46px; color:white;
    padding-right: 46px;">กรอกโปรไฟล์</b-button>  </nuxt-link>

</div>


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

<b-col cols="4" style="margin-top: -15px;  padding-left: 20px; ">
   <strong v-if="course._creator" style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{course.creator_name}}  </strong> 

   <strong v-else style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{course.creator_name.replace(/\w+[.!?]?$/, '')}}  </strong> 

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(course.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>



</b-row>
    
   

    
   
   






</div>

 <b-modal hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
          <div style=" font-size: 14px;  margin-bottom: 10px;white-space: pre-wrap;">{{job3}}</div>

      
              <strong style="color: grey"> Copy โปรไฟล์ของคุณ</strong>
            <nuxt-link v-if="tutorid2"  :to="tutorid3">    <strong style="    color: rgb(49, 103, 183);
    font-size: 17px;
    margin-top: 0px;
    float: right;
    margin-bottom: 3px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-user-o" style="    font-size: 16px;
    color: grey;" aria-hidden="true"></i> {{creator_name2.replace(/\w+[.!?]?$/, '') }}  </strong> </nuxt-link>

    <nuxt-link v-if="agentid2"  :to="agentid3">    <strong style="    color: rgb(49, 103, 183);
    font-size: 17px;
    margin-top: 0px;
    float: right;
    margin-bottom: 3px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-user-o" style="    font-size: 16px;
    color: grey;" aria-hidden="true"></i> {{creator_name2.replace(/\w+[.!?]?$/, '') }}  </strong> </nuxt-link>
         <b-form-textarea id="textarea1"
                     v-model="text"
                     style="font-size: 14px;"
                     placeholder="Enter something"
                     :rows="5"
                     :max-rows="6">
    </b-form-textarea>




<b-row style="    margin-bottom: 16px;">

     <b-col cols="12">
      <!-- <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" /> -->
        <p style="    color: rgb(49, 103, 183);
    font-size: 16px;
     margin-top: 6px;
    margin-bottom: 0px;
    font-weight: 400;
    padding-right: 10px;
"> ช่องทางการติดต่อ
   </p>  
      
         <strong style="    color: rgb(49, 103, 183);
    font-size: 16px;
  
    margin-bottom: 0px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-phone" aria-hidden="true"></i> {{  contact2 }}
   </strong>  

       <strong style="    color: rgb(49, 103, 183);
    font-size: 16px;
  
    margin-bottom: 0px;
    font-weight: 400;
    padding-right: 10px;
">Line: {{ line2 }}
   </strong>  
               </b-col>   
</b-row>

   <b-row>
             <b-col cols="12" >



     <b-button  :href="linelink" style=" width:100%;     color: white; background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  
             </b-col>
                  

         </b-row>
      </div>
    </b-modal>


<br><br>




</b-container>

</b-container fluid>

</template>
<script>
import axios from 'axios';
import moment from 'moment'
export default {
   data () {
    return {
      courses: {},
      job3: '',
        isblank: '',
      text:'',
      profile2: false,
      creator_name2 : '',
      subject:'',
      contact2:'',
      line2 :'',
      linelink:'',
       tutorid2:'',
      tutorid3:'',
      agentid2:'',
      agentid3:''
     
  
    }
  },
mounted() {
  
this.subject = this.$store.state.user.subject

if(this.$store.state.user.tag.length>0){
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
       this.text = this.$store.state.user.profile + '\n ' + 'วิชาที่สอน: ' + this.$store.state.user.subject + '\n ' +'เบอร์ติดต่อ: '+ this.$store.state.user.phone 
    this.creator_name2 = item.creator_name 
   this.contact2 = item.contact
    this.line2 = item.line
    this.linelink = 'http://line.me/ti/p/~' + item.line
      this.tutorid2 = item.tutorid
    this.tutorid3 = '/tutor/' + item.tutorid
    this.agentid2  = item._creator 
    this.agentid3 = '/agent/' + item._creator

    
    
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
