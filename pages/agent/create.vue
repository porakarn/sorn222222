<template>
<b-container fluid style="padding: 0px">
  <b-nav fill tabs style="margin-top:-7px;    background-color: #cdf4d7; box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;">
  <b-nav-item style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #5b7a69; padding-right: 12px;
    padding-left: 12px;
">กรอกเอง</b-nav-item>
 <b-nav-item @click="nextPage">ใช้แบบฟอร์ม</b-nav-item>
 
</b-nav>

<b-container fluid>
<br><br>
    <b-row> <b-col md="6" offset-md="3"> <div> <div class="my-3">
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
      <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">โพสงาน</b-button>
      <div style="color: grey" class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    <div class="loading-page" v-if="loading2">
    <p style="color: #54c686;margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 เรียบร้อย</p>
  </div>
  
   </form>
          
  </div>
  </b-col></b-row>
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
      subject: '',
      day: ''
  
    }
  },
 methods: {
  
    nextPage(){
   this.$router.push('/agent/createform')

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

var str1 = job2[i] 
 var str2 = str1.replace('\n\n',"");

  var subject = []
 var day = []

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
var science = ["เคมี","chemistry","Chemistry","วิทย์","ฟิสิกส์", "Physics", "Physic", "วิทยาศาสตร์", "Science","science" ]
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
        _creator: this.$store.state.agent._id,
         day : day,
        subject : subject,
        contact: this.$store.state.agent.contact,
        contactUrl: this.$store.state.agent.contactUrl,
        creator_name : this.$store.state.agent.pagename

    


      }
   console.log(createPost);
   
    if ( str2.length < 7 ) {
    console.log("น้อยกว่า 7")
    
    } else {
        axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
          .then((res) => { 
              
              console.log(res.data)
              day.length = 0
              subject.length = 0
        this.$nuxt.$loading.finish()
          this.loading = false
               this.loading2 = true
               this.job = ''
          })
          .catch(error => console.log(error))
    }

 

}

}
 },
      layout: 'agent'
   

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
</style>
