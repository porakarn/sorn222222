<template>
<b-container fluid style="padding: 0px">
  <b-nav fill tabs style="margin-top:-7px;    background-color: #dfaea9; box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;">
  <b-nav-item style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #ffffff; padding-right: 12px;
    padding-left: 12px;
">กรอกเอง</b-nav-item>
 <b-nav-item @click="nextPage">ใช้แบบฟอร์ม</b-nav-item>
 
</b-nav>

<b-container fluid>
<br>

<div v-if="!line" style="text-align: center;">
<p style=" color:#86a5ca" > ติวเตอร์ก็สามารถโพสงานสอนเหมือนนายหน้าได้
 กรุณากรอกเบอร์โทร กับ Line ก่อน จึงสามารถโพสงานสอนของคุณได้</p>
  <nuxt-link to="/tutor/profile/edit">
    <b-button   style="box-shadow: 0 1px 1px 1px rgba(111, 111, 111, .23);
    width: auto;  background-color: #33C1C1; border: 0px; padding-left: 46px; color:white;
    padding-right: 46px;">กรอกโปรไฟล์</b-button>  </nuxt-link>
</div>

<br>

  <div>    <b-row> <b-col md="6" offset-md="3"> <div class="my-3">
  <p style="float:right;  color: #8f9aa4;"  topleft          placement="placement"

 v-b-popover.hover="'07029 : อังกฤษ * เพิ่มเกรด \n - ช.1 คน ม.5 (สาธิตสวนสุนันทา) \n - บางบัวทอง ติดมบ.กฤษฎา นคร 11 ถ.บางกรวย-ไทรน้อย \n- อาทิตย์ 9.00-11.00 \n - 2 ชม.600 : fee 1,200'">
ตัวอย่าง 
  </p>
</div>
          <form @submit.prevent="onCreate">

              

    <h5 style="color: #8f9aa4;">วางงานของคุณที่นี่</h5>
    <b-form-textarea required id="textarea1"
                     v-model="job"
                     placeholder="Enter something"
                     :rows="8"
                     :max-rows="9">
    </b-form-textarea>
    <!-- <pre class="mt-3">{{ text }}</pre> -->

           
           

    



    <br>
      <b-button v-if="line" type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
     <div style="color: grey" class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    <div class="loading-page" v-if="loading2">
    <p style="color: #54c686;margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 เรียบร้อย</p>
  </div>
          </form>
 </b-col></b-row> </div>
</b-container>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
       loading: false,
       loading2: false,
      job: '',
      line: '',

      // subject: [],
      // day: []
  
    }
  },
  mounted() {
    this.line = this.$store.state.user.line
    this.contact = this.$store.state.user.phone
  },
 methods: {
   addarray(){
   this.day.push("จันทร์")
   },
  
    nextPage(){
   this.$router.push('/user/alltutorform')

    }

   ,
    onCreate() {
         this.$nuxt.$loading.start()
              this.loading = true
 var job1 = this.job

var separators = [ '------', '-----', '----', '---', '\n\n', '______', '_____', '____','___'];
var job2 = job1.split(new RegExp(separators.join('|'), 'g'));
console.log(job2);


var i;
for (i = 0; i < job2.length; i++) {

 var subject = []
 var day = []

var str1 = job2[i] 
 var str2 = str1.replace('\n\n',"");

 

if (str2.substr(str2.length - 1) === '\n'){
   str2 =  str2.slice(0,-1)
// str2 = str2.replace( '\n', '' ) 
}

// str2.indexOf( '\' ) == 0 ? str2 = str2.replace( '|', '' ) : str2;

// 2 ตัวหน้า

   if (str2.substr(0,1) === '\n'){
    str2 =  str2.slice( 1)
}




var math1 = ["PAT1", "PAT 1", "math", "คณิต", "คณิตศาสตร์", "เลข", "Math"];
var eng1 = ["GAT ENG","ENG","Eng","Gat Eng","IELTS", "Ielts", "อังกฤษ", "Speaking","speaking", "ielts" ]
var science = ["วิทย์", "วิทยาศาสตร์", "Science","science","PAT 2","Pat 2", "Pat2" ]
var physic = ["ฟิสิกส์", "Physics", "Physic", "PAT3", "Pat3", "PAT 3", "Pat 3"]
var chemistry = ["เคมี","chemistry","Chemistry","PAT 2","Pat 2", "Pat2"]
var biology = ["ชีวะ","Biology","biology", "PAT 2","Pat 2", "Pat2"]
var chinese = ["จีน","Chinese","chinese"]
var japan = ["ญี่ปุ่น","Japanese","Japan", "japanese","japan"]
var korea = ["เกาหลี", "Korean", "korean"]
var thai = ["ภาษาไทย", "Thai", "ไทย"]
var social = ["สังคม"]


var mon = ["จันทร์", "จัน", "Monday", "monday", ]
var tues = ["อังคาร", "Tue", "Tuesday", "อ-" ]
var wed = ["พุธ", "wed", "Wednesday", "พ-" ]
var thu = ["พถ", "พฤหัส", "Thu", "พฤ" ]
var fri = ["ศุกร์", "Fri", "ศุก", "fri" ]
var sat = ["เสาร์", "ส.", "ส-" ]
var sun = ["อาทิตย์", "อาทิต", "อ-", "sun" ]



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


var mon2 = mon.some(el => str1.includes(el));
var tues2 = tues.some(el => str1.includes(el));
var wed2 = wed.some(el => str1.includes(el));
var thu2 = thu.some(el => str1.includes(el));
var fri2 = fri.some(el => str1.includes(el));
var sat2 = sat.some(el => str1.includes(el));
var sun2 = sun.some(el => str1.includes(el));




if ( math2 === true ) {
  subject.push("คณิต")
} 
 if ( eng2 === true ) {
   subject.push("ENG") 
}  
 if ( science2 === true ) {
   subject.push("วิทย์")
} 

if ( physic2 === true ) {
     subject.push("ฟิสิกส์")
} 
if ( chemistry2 === true ) {
     subject.push("เคมี")
} 
if ( biology2 === true ) {
     subject.push("ชีวะ")
} 


if ( chinese2 === true ) {
   subject.push("จีน") 
}
 if ( japan2 === true ) {
   subject.push("ญี่ปุ่น") 
}  
 if ( korea2 === true ) {
   subject.push("Korean")  
} 
if ( thai2 === true ) {
   subject.push("ไทย") 
} 
 if ( social2 === true ) {
   subject.push("สังคม") 
} 
 



if ( mon2 === true ) {
  day.push("จันทร์")  
} 
if ( tues2 === true ) {
    day.push("อังคาร")  
} 
 if ( wed2 === true ) {
      day.push("พุธ") 
} 
 if ( thu2 === true ) {
      day.push("พฤหัส")  
}
if ( fri2 === true ) {
    day.push("ศุกร์")  
} 
if ( sat2 === true ) {
    day.push("เสาร์")  
} 
 if ( sun2 === true ) {
    day.push("อาทิตย์")  
} 



  let createPost = {
      
        job: str2,
        day : day,
        subject : subject,
        tutorid: this.$store.state.user._id,
         contact: this.contact,
         line: this.line,
         picture: this.$store.state.user.picture,
         is_student: 'tutor',
         
        creator_name : this.$store.state.user.name
      }
   console.log(createPost);

   
    if ( str2.length < 7 ) {
    console.log("น้อยกว่า 7")
    
    } else {
        axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
                // axios.post('http://localhost:8000/multi', createPost)

          .then((res) => { 
              
              console.log(res.data)
              day.length = 0
              subject.length = 0
              console.log(day);
              console.log(subject);
          this.$nuxt.$loading.finish()
          this.loading = false
          this.loading2 = true
                this.job = ''

  
          })
          .catch(error => console.log(error))
    }

 

}

}
 }   

}

</script>

<style scoped>
.nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
    border-bottom: 2px solid !important;
}

button{
       box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
}

a{

   color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}

.nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
    border-bottom: 0px solid !important;
}
</style>
