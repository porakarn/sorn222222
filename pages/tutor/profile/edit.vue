<template>
<b-container fluid>

 
</b-nav>
    <br>
    <b-row>





         <b-col cols="12"  sm="6" offset-sm="3" >
      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
   
  <b-row class="my-1" style="    height: 70px;
">
    <b-col cols="6"style="margin-top: 14px;  ">
       <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เบอร์ติดต่อ">
      <b-form-input
       style="margin-top: -6px;" 
      v-model="phone" 
      class="formpor" 
      id="input-large"   
      type="text" 
      placeholder="เบอร์โทร ">{{phone}}</b-form-input></b-form-group>
    </b-col>

     <b-col cols="6"style="margin-top: 14px;  ">
     <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="line">
      <b-form-input
       style="margin-top: -6px;"
       v-model="line"
        class="formpor"
        id="input-large"   
        type="text" 
        placeholder="Line">{{line}}</b-form-input></b-form-group>
    </b-col>
  
  </b-row>
     
             
   
<b-container fluid style="   padding: 0!important">

 </b-container>




 <p style="margin-bottom: 0px; color: rgb(117, 119, 120);  margin-top: 17px;">วิชาที่คุณสอน
</p>
  <b-row class="my-1">
    <b-col >
       <b-form-textarea style="  white-space: pre-wrap;   padding-top: 0px;
" class="formpor" id="textarea1"
                     v-model="subject"
                     placeholder=""
                     :rows="2"
                     :max-rows="6">
    </b-form-textarea>
      <!-- <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input> -->
    </b-col>
  </b-row>
 
<br>
                 <p style=" margin-bottom: 0px;  white-space: pre-wrap;  padding-top: 0px !important;
color: rgb(117, 119, 120); border:1px !important;">โปรไฟล์ของคุณ</p>
    <b-form-textarea class="formpor"  id="textarea1"
                     v-model="profile"
                     :rows="5"
                     :max-rows="9">
    </b-form-textarea>
    <br>
    <b-button @click="onSubmit"  style="background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;    box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
">สมัคร</b-button>
 <div style="color: grey" class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
      </b-col> 
    </b-row>
    <br><br><br>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
   data () {
    return {
   loading: false,
    course: {},
    phone: '',
    profile: '',
    subject: '',
    text2: '',
    
    line:''

  
    }
  },
  mounted() {
    this.phone = this.$store.state.user.phone,
    this.profile = this.$store.state.user.profile,
    this.subject = this.$store.state.user.subject
    this.line = this.$store.state.user.line
  },
//   asyncData (context, callback) {
//  var por = ';;'
//    return   axios.get('https://frozen-mesa-40722.herokuapp.com/user/profile', por )
//     .then((res) => {
//       // this.profile = res.data.profile
//       // this.phone = res.data.phone                
         
//             })
    
//   }
//   ,
    methods: {
      onSubmit(){
        this.loading = true
          var str1 = this.subject

var tag = []

var math1 = ["PAT1", "PAT 1", "math", "คณิต", "คณิตศาสตร์", "เลข", "Math", "MATH"];
var eng1 = ["GAT ENG","ENG","Eng","Gat Eng","IELTS", "Ielts", "อังกฤษ", "Speaking","speaking", "ielts","eng" ]
var science = ["วิทย์", "วิทยาศาสตร์", "Science","science","PAT 2","Pat 2", "Pat2" ]
var physic = ["ฟิสิกส์", "Physics", "Physic", "PAT3", "Pat3", "PAT 3", "Pat 3"]
var chemistry = ["เคมี","chemistry","Chemistry","PAT 2","Pat 2", "Pat2"]
var biology = ["ชีวะ","Biology","biology", "PAT 2","Pat 2", "Pat2"]


var chinese = ["จีน","Chinese","chinese"]
var japan = ["ญี่ปุ่น","Japanese","Japan", "japanese","japan"]
var korea = ["เกาหลี", "Korean", "korean"]
var thai = ["ภาษาไทย", "Thai", "ไทย"]
var social = ["สังคม"]




var math2 = math1.some(el => str1.includes(el));
var eng2 = eng1.some(el => str1.includes(el));
var science2 = science.some(el => str1.includes(el));
var physic2 = physic.some(el => str1.includes(el));
var chemistry2 = chemistry.some(el => str1.includes(el));
var biology2 = biology.some(el => str1.includes(el));
var chinese2 = chinese.some(el => str1.includes(el));
var japan2 = japan.some(el => str1.includes(el));
var korea2 = korea.some(el => str1.includes(el));
var thai2 = thai.some(el => str1.includes(el));
var social2 = social.some(el => str1.includes(el));




if ( math2 === true ) {
   tag.push("คณิต")
} 

if ( eng2 === true ) {
   tag.push("ENG")
}  
if ( science2 === true ) {
     tag.push("วิทย์")
} 
if ( physic2 === true ) {
     tag.push("ฟิสิกส์")
} 
if ( chemistry2 === true ) {
     tag.push("เคมี")
} 
if ( biology2 === true ) {
     tag.push("ชีวะ")
} 


 if ( chinese2 === true ) {
     tag.push("จีน")
} 
 if ( japan2 === true ) {
   tag.push("ญี่ปุ่น")
} 
 if ( korea2 === true ) {
   tag.push("Korean")
} 
if ( thai2 === true ) {
   tag.push("ไทย")
} 
 if ( social2 === true ) {
   tag.push("สังคม")
} 
 
 

 
 
console.log(tag);



 var data = {
             profile : this.profile, 
             phone : this.phone,
             subject: this.subject,
             name: this.$store.state.user.name, 
             tag: tag,
             line: this.line

           }

  var data2 = {
             profile : this.profile, 
             phone : this.phone,
             subject: this.subject,
             name: this.$store.state.user.name,
             email: this.$store.state.user.email,
             _id: this.$store.state.user._id,
             picture: this.$store.state.user.picture,
             tag: tag,
            line: this.line

           }
                       console.log(data2);

          //  axios.patch('https://tutor-8e729.firebaseio.com/chawwww.json', data).then((res) =>

           axios.patch('https://frozen-mesa-40722.herokuapp.com/update', data).then((res) =>
           {
            console.log(res.data);

               this.$store.dispatch('setUser', data2 )
              this.$store.dispatch('setProfile', true )
                      this.loading = false

this.$router.go(-1)

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
