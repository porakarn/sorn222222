<template>
<b-container fluid style="padding:0px">
 <i @click="gohome" style="color:#eaeaea; padding:10px; font-size:23px;" class="fa fa-times" aria-hidden="true"> </i>

<b-container fluid>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onCreate">
<b-row>
  <b-col offset-lg="3" lg="6">
              <div v-if="step === 1">

  <div  style="text-align :center; "> 
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="     font-size: 17px;
    color: #858484;   
    border-radius:6px;  
     
    " class="formpor" id="exampleInput3" size="lg"
                      :options="options"
                    
                      v-model="selected">
        </b-form-select>
      </b-form-group>
 </div>
 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->
 <div  style="text-align :center"> 
  <b-form-group v-if="selected"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input style="border-radius:6px;  
      font-size: 17px;
   
    padding-top: 10px;
    padding-bottom: 10px;" class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="subjectDetail"
                      placeholder="รายละเอียดวิชา">
        </b-form-input>
      </b-form-group>
 </div>



  <!-- <b-form-textarea style="  white-space: pre-wrap;   padding-top: 0px;
" class="formpor" id="textarea1"
                     
                     placeholder=""
                     :rows="2"
                     :max-rows="6">
    </b-form-textarea> -->

<br><br>
<!-- <button @click="testbtn">Test</button> -->


<br><br><br><br>
 <div  style="text-align :center">        <b-button  @click.prevent="next()"
   style="background-color: #EFBAB5; border: 0px;   
    width:100%;
    
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 4px;">เรียบร้อย</b-button> </div> 
<br><br><br><br><br>
    
 
    

              </div>

 <div v-if="step === 2">
 <b-form-group style=" " label="จุดประสงค์ของการเรียน">
      <b-form-radio-group v-model="selected_purpose"
                          :options="options_purpose"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <b-form-group v-if="selected"  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น ต้องการสอบเข้าเตรียมอุดม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="form"
                      placeholder="อื่นๆ">
        </b-form-input>

      </b-form-group>



<br><br>


 <div  style="text-align :center">       <b-button  @click.prevent="next()"
   style="background-color: #EFBAB5; border: 0px;  width:80%
    
    padding-top: 11px!important;
    padding-bottom: 11px!important;
    border-radius: 4px;">เรียบร้อย</b-button> 
 </div>
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>


    <div v-if="step === 3">

 <b-form-group >
      <b-form-radio-group v-model="selected_level"
                          :options="options_level"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>

   <div v-if="step === 4">

      <div>
    <b-form-select style="border-radius: 6;" multiple :select-size="4" v-model="selected_date" :options="options_date" class="mb-3">
    </b-form-select>
  </div>


 <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น 5-7 โมงเย็น">
        <b-form-input  class="formpor" id="exampleInput1" 
                      type="text"
                      required
                       size="lg" 
                      v-model="time"
                      placeholder="เวลาที่สะดวก">
        </b-form-input>
      </b-form-group>
 <div  style="text-align :center; "> 
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="    
       border-radius: 6;
     
       " class="formpor" id="exampleInput3" size="lg"
                      :options="options_duration" 
                    
                      v-model="selected_duration">
        </b-form-select>
      </b-form-group>
 </div>
   
       <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>
            </div>

   <div v-if="step === 5">


<b-form-select style="border-radius: 6;"  :select-size="2" v-model="selected_province" size="lg"  :options="options_province" class="mb-3">
    </b-form-select>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" เช่น สยาม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="location"
                      placeholder="สถานที่เรียน">
        </b-form-input>
      </b-form-group>

  <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

   </div>
    
 <div v-if="step === 6">

<b-form-textarea id="textarea1"
                     v-model="extra"
                     placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
<p style="color:#b9b9b9; font-size:13px; margin-top:2px; text-align:center;">เช่น อยากได้ติวเตอร์ ญ อยากได้ติวเตอร์ใจดี</p>


  <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

   </div>
    
<div v-if="step === 7">


<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เบอร์ติดต่อ">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="phone"
                      required
                      placeholder="เบอร์ติดต่อ">
        </b-form-input>
      </b-form-group>
     

  <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="line"
                      required
                      placeholder="Line">
        </b-form-input>
      </b-form-group>
     


 <b-row v-if="line"  class="my-1">
    <b-col cols="6" >


<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="border-radius: 6;"  class="formpor" id="exampleInput3" size="lg"
                      :options="genders"
                      required
                      v-model="gender">
        </b-form-select>
      </b-form-group>

    </b-col>
 <b-col cols="6" >
   <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  style="border-radius: 6;" class="formpor" id="exampleInput3" size="lg"
                      :options="grades"
                      required
                      v-model="grade">
        </b-form-select>
      </b-form-group>

 </b-col>
 </b-row>




  <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

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
         <div style="white-space: pre-wrap;">{{str5}}</div> 
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
      loading: false,
      loading2: false,
      time: '',
       step:1,
       str5:'',
       subject:'',
       phone:'',
       line: '',
       gender: null,
       grade: null,
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
        { text: 'ระดับชั้น', value: null , disabled: true },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
      ],
       genders: [
        { text: 'เพศนักเรียน', value: null, disabled: true },
       'ชาย', 'หญิง',
      ],
       selected: null,
      options: [
        { value: null, text: 'วิชาที่อยากเรียน', disabled: true },
        { value: 'ENG', text: 'ENG' },
        { value: 'คณิต', text: 'คณิตศาสตร์' },
        { value: 'วิทย์', text: 'วิทยาศาสตร์' },
        { value: 'ไทย', text: 'ไทย' },
        { value: 'สังคม', text: 'สังคม' },
        { value: 'ฟิสิกส์', text: 'ฟิสิกส์' },
        { value: 'เคมี', text: 'เคมี' },
        { value: 'ชีวะ', text: 'ชีวะ' },
        { value: 'จีน', text: 'ภาษาจีน' },
        { value: 'ญี่ปุ่น', text: 'ภาษาญี่ปุ่น' },
        { value: 'เกาหลี', text: 'ภาษาเกาหลี' },
        { value: 'อื่นๆ', text: 'อื่นๆ' },

    
      ],
        selected_purpose: null,
      options_purpose: [
      
        { value: 'เพิ่มความรู้', text: 'เพิ่มความรู้' },
        { value: 'สอบเข้าเรียนต่อ', text: 'สอบเข้าเรียนต่อ' },
        { value: 'เพิ่มเกรด ', text: 'เพิ่มเกรด' },
        { value: 'สอบวัดระดับต่างๆ', text: 'สอบวัดระดับต่างๆ' },
        { value: 'อื่นๆ', text: 'อื่นๆ' },
       

    
      ],
       selected_level: null,
      options_level: [
      
        { value: 'อนุบาล', text: 'อนุบาล' },
        { value: 'ประถม', text: 'ประถม' },
        { value: 'มัธยมต้น', text: 'มัธยมต้น' },
        { value: 'มัธยมปลาย', text: 'มัธยมปลาย' },
        { value: 'มหาลัย', text: 'มหาลัย' },
        { value: 'บุคคลทั่วไป', text: 'บุคคลทั่วไป' },

    
      ],
    selected_duration: null,
      options_duration: [
        { value:  null , text: 'สนใจเรียนแบบไหน', disabled: true },
        { value: ' เรียนสั้น 1- 3 ครั้ง', text: 'เรียนสั้น 1- 3 ครั้ง' },
        { value: 'เรียน 4 - 7 ครั้ง', text: 'เรียน 4 - 7 ครั้ง' },
        { value: 'เรียนยาว ( 8 ครั้งขึ้นไป )', text: 'เรียนยาว ( 8 ครั้งขึ้นไป )' },
       

    
      ],
       selected_date: [null], // Must be an array reference!
      options_date: [
        {text: 'วันที่เรียน', value: null , disabled: true},
        {text: 'จันทร์', value: 'จันทร์'},
        {text: 'อังคาร', value: 'อังคาร'},
        {text: 'พุธ', value: 'พุธ'},
        {text: 'พฤหัส', value: 'พฤหัส'},
        {text: 'ศุกร์', value: 'ศุกร์'},
        {text: 'เสาร์', value: 'เสาร์'},
        {text: 'อาทิตย์', value: 'อาทิตย์'},

      ],
selected_province: null,
      options_province: [
        { value: null, text: 'จังหวัด', disabled: true },
        { value: 'กรุงเทพ', text: 'กรุงเทพ' },
        { value: 'นนทบุรี', text: 'นนทบุรี' },
        { value: 'ปทุมธานี', text: 'ปทุมธานี' },
        { value: 'สมุทรปราการ', text: 'สมุทรปราการ' },
        { value: 'เชียงใหม่', text: 'เชียงใหม่' },
        { value: 'ขอนแก่น', text: 'ขอนแก่น' },
        { value: 'อื่นๆ', text: 'อื่นๆ' },
       

    
      ],

        genders: [
        { text: 'เพศนักเรียน', value: null, disabled: true },
       'ชาย', 'หญิง',
      ],
        grades: [
         { text: 'ระดับชั้น', value: null, disabled: true },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
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
   this.$router.push('/agent/create')

    }
    

   ,
   gohome(){
   this.$router.push('/homepagetest')


   },
     hideModal () {
      this.$refs.myModalRef.hide()
    },
    onCreate() {
       this.$nuxt.$loading.start()
              this.loading = true
      this.str5 = this.form.subject + ' ' + this.form.note +'\n- '+ this.form.gender + ' ' + this.form.food + ' (' + this.form.school +') \n- '+this.form.location +'\n- '+this.form.dayandtime +'\n- '+this.form.tuitionfee
    // alert(this.str5)
        this.$refs.myModalRef.show() 
    },
    onSubmit(){
    

  let createPost = {
      
        job: this.str5,
        _creator: this.$store.state.agent._id,
        day : day,
        subject : subject,
        contact: this.$store.state.agent.contact,
        line: this.$store.state.agent.line,
        creator_name : this.$store.state.agent.pagename,
         picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxhsGV-_-Fxr0-74drOlYw5pi21K32Hq7FZMfk9VzAZTrvLJufg',
         is_student: 'Agent'

      }
   console.log(createPost);
   
   
        axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
          .then((res) => { 
              
              console.log(res.data)
                  
   this.$refs.myModalRef.hide()
     
       this.form.email = ''
       this.form.subject = ''
        this.form.note = ''
        this.form.tuitionfee = ''
        this.form.school = ''
       this.form.dayandtime = ''
        this.form.location = ''
        this.form.food = null
        this.form.gender = null
     
              this.loading = false
               this.loading2 = true
                this.$nuxt.$loading.finish()

  
          })
          .catch(error => console.log(error))
    
    }
},
     layout: 'auth'

}
</script>
      
<style scoped>



.formpor{

    font-size: 17px;
    color: #858484;   
    border-radius: 6;
   
}


.form-group {
  
    margin-bottom: 30px;
}

.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
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
</style>
