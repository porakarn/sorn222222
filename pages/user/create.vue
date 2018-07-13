<template>
<b-container fluid style="padding: 0px">
  <b-nav fill tabs>
  <b-nav-item style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
">กรอกเอง</b-nav-item>
 <b-nav-item @click="nextPage">ใช้แบบฟอร์ม</b-nav-item>
 
</b-nav>

<b-container fluid>
<br><br>
  <div> <div class="my-3">
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

           
 {{day}}
    
    <button @click="addarray"> add  </button>
    <br>
      <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
          </form>
  </div>
</b-container>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
    
      job: '',
      subject: [],
      day: []
  
    }
  },
 methods: {
   addarray(){
   this.day.push("จันทร์")
   },
  
    nextPage(){
   this.$router.push('/user/createform')

    }

   ,
    onCreate() {
 var job1 = this.job

var separators = [ '------', '-----', '----', '---', '\n\n', '______', '_____', '____','___'];
var job2 = job1.split(new RegExp(separators.join('|'), 'g'));
console.log(job2);


var i;
for (i = 0; i < job2.length; i++) {

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
  this.subject.push("คณิต")
} 
 if ( eng2 === true ) {
   this.subject.push("ENG") 
}  
 if ( science2 === true ) {
   this.subject.push("วิทย์")
} 
if ( chinese2 === true ) {
   this.subject.push("จีน") 
}
 if ( japan2 === true ) {
   this.subject.push("ญี่ปุ่น") 
}  
 if ( korea2 === true ) {
   this.subject.push("Korean")  
} 
if ( thai2 === true ) {
   this.subject.push("ไทย") 
} 
 if ( social2 === true ) {
   this.subject.push("สังคม") 
} 
 



if ( mon2 === true ) {
  this.day.push("จันทร์")  
} 
if ( tues2 === true ) {
    this.day.push("อังคาร")  
} 
 if ( wed2 === true ) {
      this.day.push("พุธ") 
} 
 if ( thu2 === true ) {
      this.day.push("พฤหัส")  
}
if ( fri2 === true ) {
    this.day.push("ศุกร์")  
} 
if ( sat2 === true ) {
    this.day.push("เสาร์")  
} 
 if ( sun2 === true ) {
    this.day.push("อาทิตย์")  
} 



  let createPost = {
      
        job: str2,
        day : this.day,
        subject : this.subject,
        tutorid: this.$store.state.user._id,
        subjectss :  ["Green", "red"]

      }
   console.log(createPost);
      console.log(this.day + ': thisday');

   
    if ( str2.length < 7 ) {
    console.log("น้อยกว่า 7")
    
    } else {
        axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
                // axios.post('http://localhost:8000/multi', createPost)

          .then((res) => { 
              
              console.log(res.data)
              
  
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
</style>
