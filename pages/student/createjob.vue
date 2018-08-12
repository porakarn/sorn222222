<template>
<b-container fluid style="padding:0px">

<b-container fluid>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onCreate">
<b-row>
  <b-col offset-lg="3" lg="6">
              <div v-if="step === 1">

   <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="วิชาที่อยากเรียน">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.subject"
                      required
                      placeholder="วิชาที่อยากเรียน">
        </b-form-input>
      </b-form-group>
     

   <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="grades"
                      required
                      v-model="form.grade">
        </b-form-select>
      </b-form-group>


<br><br>

  
  
  


    <!-- <pre class="mt-3">{{ text }}</pre> -->
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

              </div>

 <div v-if="step === 2">

<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="สถานที่เรียน">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.location"
                      required
                      placeholder="สถานที่เรียน">
        </b-form-input>
      </b-form-group>
     

  <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="วันเวลา เรียน">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.day"
                      required
                      placeholder="วันเวลา เรียน">
        </b-form-input>
      </b-form-group>
     
  
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>


    <div v-if="step === 3">

<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น 300 บาท/ชม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.tuitionfee"
                      required
                      placeholder="ค่าสอน ">
        </b-form-input>
      </b-form-group>

<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เพิ่มเติม (ถ้ามี)">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.note"
                      required
                      placeholder="เพิ่มเติม (ถ้ามี)">
        </b-form-input>
      </b-form-group>
      
      
         <b-button  type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>

  
              <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    

    
    <br>
  </b-col></b-row>
          </form>
          <div class="loading-page" v-if="loading2">
    <p style="color: #54c686; margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 เรียบร้อย</p>
  </div>
  </div>

<b-modal  hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
         <div style="white-space: pre-wrap;">{{str5}} </div> 
         <p>ช่องทางการติดต่อ Line : {{this.$store.state.student.line}}</p>
      </div>  <br>
          <b-button @click="onSubmit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">ยืนยัน</b-button> <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click="hideModal">แก้ไข</b-button>
    </b-modal>
</b-container>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
         selected: 'radio1',
      options: [
        { text: 'นักเรียน', value: 'นักเรียน' },
        { text: 'ผู้ปกครอง', value: 'ผู้ปกครอง' },
        
      ],
      loading: false,
      loading2: false,
    
       step:1,
       str5:'',
       subject:'',
      job: '',
      day: '',
       form: {
        email: '',
        subject: '',
        note: '',
        tuitionfee: '',
        school: '',
        dayandtime: '',
        location: '',
        food: null,
        gender: null,
        grade: null,
        checked: []
      },
     
       genders: [
        { text: 'เพศนักเรียน', value: null },
       'ชาย', 'หญิง',
      ],
        grades: [
         { text: 'ระดับชั้น', value: null },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
      ],
    }
  },



mounted() {
      if (!this.$store.state.student) {
     this.$router.push('/student/login')

    }
},
methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    nextPage(){
   this.$router.push('/agent/create')

    }

   ,
     hideModal () {
      this.$refs.myModalRef.hide()
    },
    onCreate() {
       this.$nuxt.$loading.start()
              this.loading = true
          this.str5 = this.form.subject + ' ' + this.form.note +'\n- '+ this.$store.state.student.gender + ' \n- '+this.form.location +'\n- '+this.form.day +'\n- ค่าสอน ' + this.form.tuitionfee 
          
        this.$refs.myModalRef.show() 
    },
    onSubmit(){
    
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



var math2 = math1.some(el => this.str5.includes(el));
var eng2 = eng1.some(el => this.str5.includes(el));
var science2 = science.some(el => this.str5.includes(el));
var physic2 = physic.some(el => this.str5.includes(el));
var chemistry2 = chemistry.some(el => this.str5.includes(el));
var biology2 = biology.some(el => this.str5.includes(el));
var chinese2 = chinese.some(el => this.str5.includes(el));
var japan2 = japan.some(el => this.str5.includes(el));
var korea2 = korea.some(el => this.str5.includes(el));
var thai2 = thai.some(el => this.str5.includes(el));
var social2 = social.some(el => this.str5.includes(el));


var mon2 = mon.some(el => this.str5.includes(el));
var tues2 = tues.some(el => this.str5.includes(el));
var wed2 = wed.some(el => this.str5.includes(el));
var thu2 = thu.some(el => this.str5.includes(el));
var fri2 = fri.some(el => this.str5.includes(el));
var sat2 = sat.some(el => this.str5.includes(el));
var sun2 = sun.some(el => this.str5.includes(el));

var subject = []
 var day = []

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
      
        job: this.str5,
        _creator: this.$store.state.student._id,
        day : day,
        subject : subject,
        line: this.$store.state.student.line,
        creator_name : this.$store.state.student.name,
        picture: this.$store.state.student.picture,
        is_student: 'student'
  
      }

    
   console.log(createPost);
   
   
        axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
          .then((res) => { 
              
              console.log(res.data)
                  
   this.$refs.myModalRef.hide()
     
     
       this.form.subject = ''
        this.form.note = ''
        this.form.grade = ''
       
       this.form.day = ''
        this.form.location = ''
   
     
              this.loading = false
               this.loading2 = true
                this.$nuxt.$loading.finish()

  
          })
          .catch(error => console.log(error))
   
   
      
    }
},
     layout: 'student'

}
</script>
      
<style scoped>



.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
    padding-left: 4px;
}


.form-group {
  
    margin-bottom: 30px;
}

.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}
button{
      box-shadow: 0 1px 3px 1px rgba(40, 36, 36, 0.23);
}
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    /* border-bottom: 2px; */
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}

a{
 color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}

.btn {
   

}

.btn-secondary{
    color: #fff;
    background-color: #9bc3eb;
    border-color: #ffffff;
}

.btn-outline-primary{
    color: green;
}
</style>
