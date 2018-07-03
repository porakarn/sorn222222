<template>
<b-container fluid>
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

var math1 = ["PAT1", "PAT 1", "math", "คณิต", "คณิตศาสตร์", "เลข"];
var eng1 = ["GAT ENG","ENG","Eng","Gat Eng","IELTS", "Ielts", "อังกฤษ" ]

var mon = ["จันทร์", "จัน", "Monday", "monday", ]
var tues = ["อังคาร", "Tue", "Tuesday", "อ-" ]
var wed = ["พุธ", "wed", "Wednesday", "พ-" ]
var thu = ["พถ", "พฤหัส", "Thu", "พฤ" ]
var fri = ["ศุกร์", "Fri", "ศุก", "fri" ]
var sat = ["เสาร์", "ส.", "ส-" ]
var sun = ["อาทิตย์", "อาทิต", "อ-", "sun" ]


var math2 = math1.some(el => str1.includes(el));
var eng2 = eng1.some(el => str1.includes(el));

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
      
        job: job2[i],
        _creator: this.$store.state.user._id,
        day : this.day,
        subject : this.subject

      }
   console.log(createPost);
   
 
        axios.post('http://localhost:8000/job/create', createPost)
          .then((res) => { 
              
              console.log(res.data)
              
  
          })
          .catch(error => console.log(error))


}

}
 }   

}
</script>
