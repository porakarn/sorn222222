<template>
<b-container fluid>
  <b-nav fill tabs>
  <b-nav-item>ทั้งหมด</b-nav-item>
 <b-nav-item @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>
<br><br>
  <div>
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
    padding-right: 36px;">เรียบร้อย</b-button>
          </form>
  </div>

</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      job: '',
      subject: '',
      day: ''
  
    }
  },
 methods: {
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
  this.subject = "คณิต"
} else if ( eng2 === true ) {
   this.subject = "ENG"
}  else if ( science2 === true ) {
   this.subject = "วิทย์"
} else if ( chinese2 === true ) {
   this.subject = "จีน"
} else if ( japan2 === true ) {
   this.subject = "ญี่ปุ่น"
}  else if ( korea2 === true ) {
   this.subject = "Korean"
} else if ( thai2 === true ) {
   this.subject = "ไทย"
} else if ( social2 === true ) {
   this.subject = "สังคม"
} 
 



if ( mon2 === true ) {
  this.day = "จันทร์"
} else if ( tues2 === true ) {
    this.day = "อังคาร"
} else if ( wed2 === true ) {
      this.day = "พุธ"
} else if ( thu2 === true ) {
      this.day = "พฤหัส"
} else if ( fri2 === true ) {
    this.day = "ศุกร์"
} else if ( sat2 === true ) {
    this.day = "เสาร์"
} else if ( sun2 === true ) {
    this.day = "อาทิตย์"
} 



  let createPost = {
      
        job: str2,
        _creator: this.$store.state.agent._id,
        day : this.day,
        subject : this.subject

      }
   console.log(createPost);
   
    if ( str2.length < 7 ) {
    console.log("น้อยกว่า 7")
    
    } else {
        axios.post('http://localhost:8000/job/create', createPost)
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
