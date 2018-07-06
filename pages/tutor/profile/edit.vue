<template>
<b-container fluid>

 
</b-nav>
    <br>
    <b-row>
     
         <b-col cols="12">
      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
   
  <b-row class="my-1">
    <b-col cols="12" sm="10" style="margin-top: 14px;  ">
      <b-form-input style="margin-top: -6px;" v-model="phone" class="formpor" id="input-large"   type="text" placeholder="เบอร์โทร ">{{phone}}</b-form-input>
    </b-col>
  
  </b-row>
         </b-col> 
             
    </b-row>
<b-container fluid style="   padding: 0!important">

 <div class="ere">
   <!-- <b-row class="my-1">
    <b-col sm="10">
      <b-form-input class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input>
    </b-col>
  </b-row> -->
   </div></b-container>
 <p style="margin-bottom: 0px; color: rgb(117, 119, 120);  margin-top: 17px;">วิชาที่คุณสอน
</p>
  <b-row class="my-1">
    <b-col sm="10">
       <b-form-textarea style="    padding-top: 0px;
" class="formpor" id="textarea1"
                     v-model="subject"
                     placeholder=""
                     :rows="2"
                     :max-rows="6">
    </b-form-textarea>
      <!-- <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input> -->
    </b-col>
  </b-row>
  <!-- <div class="por" >
        <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">ENG</b-link>
                  <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">เคมี</b-link></div> -->
<br>
                 <p style=" margin-bottom: 0px;   padding-top: 0px !important;
color: rgb(117, 119, 120); border:1px !important;">โปรไฟล์ของคุณ</p>
    <b-form-textarea class="formpor"  id="textarea1"
                     v-model="profile"
                     :rows="5"
                     :max-rows="9">
    </b-form-textarea>
    <br>
    <b-button @click="onSubmit" size="lg" style="background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">สมัคร</b-button>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
   data () {
    return {
    course: {},
    phone: '',
    profile: '',
    subject: '',
    text2: '',
    tag:''

  
    }
  },
  mounted() {
    this.phone = this.$store.state.user.phone,
    this.profile = this.$store.state.user.profile,
    this.subject = this.$store.state.user.subject
  },
//   asyncData (context, callback) {
//  var por = ';;'
//    return   axios.get('http://localhost:8000/user/profile', por )
//     .then((res) => {
//       // this.profile = res.data.profile
//       // this.phone = res.data.phone                
         
//             })
    
//   }
//   ,
    methods: {
      onSubmit(){
          var str1 = this.subject

var math1 = ["PAT1", "PAT 1", "math", "คณิต", "คณิตศาสตร์", "เลข"];
var eng1 = ["GAT ENG","ENG","Eng","Gat Eng","IELTS", "Ielts", "อังกฤษ", "Speaking","speaking", "ielts","eng" ]
var science = ["เคมี","chemistry","Chemistry","วิทย์","ฟิสิกส์", "Physics", "Physic", "วิทยาศาสตร์", "Science","science" ]
var chinese = ["จีน","Chinese","chinese"]
var japan = ["ญี่ปุ่น","Japanese","Japan", "japanese","japan"]
var korea = ["เกาหลี", "Korean", "korean"]
var thai = ["ภาษาไทย", "Thai", "ไทย"]
var social = ["สังคม"]




var math2 = math1.some(el => str1.includes(el));
var eng2 = eng1.some(el => str1.includes(el));
var science2 = science.some(el => str1.includes(el));
var chinese2 = chinese.some(el => str1.includes(el));
var japan2 = japan.some(el => str1.includes(el));
var korea2 = korea.some(el => str1.includes(el));
var thai2 = thai.some(el => str1.includes(el));
var social2 = social.some(el => str1.includes(el));



if ( math2 === true ) {
  this.tag = "คณิต"
} else if ( eng2 === true ) {
   this.tag = "ENG"
}  else if ( science2 === true ) {
   this.tag = "วิทย์"
} else if ( chinese2 === true ) {
   this.tag = "จีน"
} else if ( japan2 === true ) {
   this.tag = "ญี่ปุ่น"
}  else if ( korea2 === true ) {
   this.tag = "Korean"
} else if ( thai2 === true ) {
   this.tag = "ไทย"
} else if ( social2 === true ) {
   this.tag = "สังคม"
} 
 
 

 
 



 var data = {
             profile : this.profile, 
             phone : this.phone,
             subject: this.subject,
             name: this.$store.state.user.name, 
             tag: this.tag

           }

  var data2 = {
             profile : this.profile, 
             phone : this.phone,
             subject: this.subject,
             name: this.$store.state.user.name,
             email: this.$store.state.user.email,
             _id: this.$store.state.user._id,
             picture: this.$store.state.user.picture,
             tag: this.tag
              
           }
                       console.log(data2);

          //  axios.patch('https://tutor-8e729.firebaseio.com/chawwww.json', data).then((res) =>

           axios.patch('http://localhost:8000/update', data).then((res) =>
           {
            console.log(res.data);

               this.$store.dispatch('setUser', data2 )
              this.$store.dispatch('setProfile', true )


           }).catch((error) =>{ console.log(error) })
           

      }

  }
}
</script>



<style scoped>
<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
    padding-left: 4px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #33C1C1;
    padding: 5px;
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 4px;
    font-size: 18px;

}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
box-shadow: 0 0 0 0rem rgba(0, 123, 255, .25) !important;
}
</style>
