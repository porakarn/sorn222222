<template>
<b-container fluid>
  <b-nav fill tabs>
  <b-nav-item @click="nextPage">กรอกเอง</b-nav-item>
 <b-nav-item style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
">ใช้แบบฟอร์ม</b-nav-item>
 
</b-nav>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onCreate">

              <div v-if="step === 1">

    <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="form.subject"
                      placeholder="วิชาที่อยากเรียน">
        </b-form-input>
      </b-form-group>
      <!-- <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group> -->
  
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>

    <!-- <pre class="mt-3">{{ text }}</pre> -->
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

              </div>

 <div v-if="step === 2">
  <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="genders"
                      required
                      v-model="form.gender">
        </b-form-select>
      </b-form-group>

  <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="โรงเรียน หรือ มหาลัยของนักเรียน">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.school"
                      required
                      placeholder="โรงเรียน ">
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
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.dayandtime"
                      required
                      placeholder="วัน เวลาเรียน ">
        </b-form-input>
      </b-form-group>
      
        <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.location"
                      required
                      placeholder="สถานที่เรียน">
        </b-form-input>
     
 </b-form-group>

        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>

   <div v-if="step === 4">

        <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ค่าสอน 300/ชม ค่าแนะนำ 600 บาท (ถ้ามี)">
        <b-form-input class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.tuitionfee"
                      required
                      placeholder="ค่าสอน">
        </b-form-input>
      </b-form-group>

       <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input id="exampleInput1" size="lg"  class="formpor"
                      type="text"
                      v-model="form.note"
                      required
                      placeholder="หมายเหตุเพิ่มเติม (ถ้ามี)">
        </b-form-input>
      </b-form-group>
       <b-button  type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>
            </div>

    
    <br>
 
          </form>
  </div>

<b-modal  hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
         <div style="white-space: pre-wrap;">{{str5}}</div> 
      </div>  <br>
          <b-button @click="onSubmit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
    </b-modal>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
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
        checked: []
      },
      foods: [
        { text: 'ระดับชั้น', value: null },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
      ],
       genders: [
        { text: 'เพศนักเรียน', value: null },
       'ชาย', 'หญิง',
      ],
  
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
   this.$router.push('/user/create')

    }

   ,
    onCreate() {
      this.str5 = this.form.subject + ' ' + this.form.note +'\n- '+ this.form.gender + ' ' + this.form.food + ' (' + this.form.school +') \n- '+this.form.location +'\n- '+this.form.dayandtime +'\n- '+this.form.tuitionfee
    // alert(this.str5)
        this.$refs.myModalRef.show() 
    },
    onSubmit(){
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



var math2 = math1.some(el => this.str5.includes(el));
var eng2 = eng1.some(el => this.str5.includes(el));
var science2 = science.some(el => this.str5.includes(el));
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
      
        job: this.str5,
        _creator: this.$store.state.agent._id,
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
</style>
