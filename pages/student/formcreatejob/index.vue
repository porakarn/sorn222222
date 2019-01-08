<template>
<b-container fluid style="padding:0px">
 <i @click="gohome" style="color:#eaeaea; padding:10px; font-size:23px;" class="fa fa-times" aria-hidden="true"> </i>

<b-container fluid style="padding:30px!important;">
<br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onCreate">
<b-row>
  <b-col offset-lg="3" lg="6">
              <div v-if="step === 1">
<br>
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
 <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
<br><br><br><br><br>
    
 
    

              </div>

 <div v-if="step === 2">
   <p style="font-size:20px"> จุดประสงค์การเรียน</p>
 <b-form-group >
      <b-form-radio-group v-model="selected_purpose"
                          :options="options_purpose"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <b-form-group   id="exampleInputGroup1"
                    style="margin-top:-7px;"
                    label-for="exampleInput1"
                    description="เช่น ต้องการสอบเข้าเตรียมอุดม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="other"
                      placeholder="อื่นๆ">
        </b-form-input>

      </b-form-group>



<br><br>

<br>


 <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
  
 <div style="text-align :center" >  
        <b-button class="bnbback" @click.prevent="prev()">
 กลับ</b-button>
 </div>
    </div>


    <div v-if="step === 3">

<p style="font-size:20px;">ระดับชั้น</p>
 <b-form-group >
      <b-form-radio-group v-model="selected_level"
                          :options="options_level"
                          plain
                          stacked
                          name="plainStacked" />
    </b-form-group>
<br><br>
        <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
  
 <div  style="text-align :center">  
        <b-button class="bnbback" @click.prevent="prev()">กลับ</b-button>
 </div>
    </div>

   <div v-if="step === 4">

      <div>

       <p style="margin-bottom:15px;color:#dea29c;" v-show="selected_date.length >0"> {{selected_date.toString().split(',').join(' ')}} </p>
        <i  style="float:right; padding-right:12px;font-size:15px; color:grey; margin-bottom:-12px;" class="fa fa-caret-down" aria-hidden="true"></i>

    <b-form-select size="lg" style="border-radius: 6;padding-top: 10px; font-size:17px; margin-bottom: 15px;
    padding-bottom: 10px;color: #858484;   " multiple :select-size="4" v-model="selected_date" :options="options_date" class="mb-3">
   
    </b-form-select>
  </div>


 <b-form-group v-if="selected_date"   id="exampleInputGroup1"
                    
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
<b-form-group v-if="time" id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="    
       border-radius: 6;
     
       " class="formpor" id="exampleInput3" size="lg"
                      :options="options_duration" 
                    
                      v-model="selected_duration">
        </b-form-select>
      </b-form-group>
 </div>
   <br><br>
      <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
  
 <div  style="text-align :center">  
        <b-button class="bnbback" @click.prevent="prev()">กลับ</b-button>
 </div>
            </div>

   <div v-if="step === 5">


<b-form-select style="border-radius: 6;"  :select-size="2" v-model="selected_province" size="lg"  :options="options_province" class="mb-3">
    </b-form-select>

 <!-- <b-form-select  :select-size="2" v-model="selected2" :options="options2" class="mb-3">
    </b-form-select> -->

  <b-form-group  v-if="selected_province" id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" เช่น สยาม">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      required
                      v-model="location"
                      placeholder="สถานที่เรียน">
        </b-form-input>
      </b-form-group>

  <!-- <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button> -->
<br>
<br>
 <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
  
 <div  style="text-align :center">  
        <b-button class="bnbback" @click.prevent="prev()">กลับ</b-button>
 </div>
   </div>
    
 <div v-if="step === 6">

<b-form-textarea id="textarea1"
                     v-model="extra"
                     placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
<p style="color:#b9b9b9; font-size:13px; margin-top:2px; text-align:center;">เช่น อยากได้ติวเตอร์ ญ อยากได้ติวเตอร์ใจดี</p>

<br><br>
  <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="next()"
   >เรียบร้อย</b-button> </div> 
  
 <div  style="text-align :center">  
        <b-button class="bnbback" @click.prevent="prev()">กลับ</b-button>
 </div>

   </div>
    
<div v-if="step === 7">


<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                   >
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="phone"
                      required
                      placeholder="เบอร์ติดต่อ">
        </b-form-input>
      </b-form-group>
     

  <b-form-group v-if="phone"id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                  >
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
<br><br>
 <div  style="text-align :center">        <b-button class="bnbred"  @click.prevent="onSubmit()"
   >เรียบร้อย</b-button> </div> 
  
 <div  style="text-align :center">  
        <b-button class="bnbback" @click.prevent="prev()">กลับ</b-button>
 </div>

   </div>
    
<div v-if="step === 8">

<p style="text-align:center">ขั้นตอนสุดท้าย ระบบจะทำการสร้างโปรไฟล์ให้คุณ กรุณา
ทำการ login Facebook login </p>
 <div  style="text-align :center">        <b-button @click="tofblogin"
   style="background-color: #415DAE; border: 0px;   
    width:100%;
    color:white;
    font-weight:bold;
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 4px;">Facebook Login</b-button> </div> 


    </div>
    <br>
  </b-col></b-row>
          </form>

          <P style="color:red; text-align:center;">{{string6}}</P>
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
      extra:'',
       step:1,
       str5:'',
       subject:'',
       phone:'',
       line: '',
       gender: null,
       grade: null,
      job: '',
      subjectDetail: '',
      day: '',
      string6:'',
       form: {
        email: '',
        subject: '',
        note: '',
        other: '',
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
     nextlast() {
if (!this.line || !this.phone) {
  this.string6 = 'กรุณากรอกข้อมูลให้ครบน้า :)'
}  else {
        this.step++;
   this.string6 = ''
}

     },
    nextPage(){
   this.$router.push('/agent/create')

    }
    

   ,
   gohome(){
   this.$router.push('/homepagetest')


   },
   tofblogin(){
   this.$router.push('/student/formcreatejob/login')

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
     var por = this.selected_date.filter((obj) => obj );

  let createPost = {
      
        subject: this.selected,
        subjectDetail: this.subjectDetail,
        purpose : this.other ? this.other : this.selected_purpose ,
        level : this.selected_level,
        day: por,
        time: this.time,
        duration: this.selected_duration,
        province: this.selected_province,
        location: this.location,
        extra: this.extra,
        phone: this.phone,
        line: this.line,
        gender: this.gender,
        grade: this.grade,
        
        

      }
   console.log(createPost);
   if (!this.line || !this.phone) {
  this.string6 = 'กรุณากรอกข้อมูลให้ครบ'
}  else {
        this.step++;
         this.$store.dispatch('settestform', createPost)

   this.string6 = ''
}
   

   
  //       axios.post('https://frozen-mesa-40722.herokuapp.com/job/create', createPost)
  //         .then((res) => { 
              
  //             console.log(res.data)
                  
  //  this.$refs.myModalRef.hide()
     
  //      this.form.email = ''
  //      this.form.subject = ''
  //       this.form.note = ''
  //       this.form.tuitionfee = ''
  //       this.form.school = ''
  //      this.form.dayandtime = ''
  //       this.form.location = ''
  //       this.form.food = null
  //       this.form.gender = null
     
  //             this.loading = false
  //              this.loading2 = true
  //               this.$nuxt.$loading.finish()

  
  //         })
  //         .catch(error => console.log(error))
    
    }
},
     layout: 'auth'

}
</script>
      
<style scoped>

.bnbred{
  background-color: #EFBAB5; border: 0px;   
    width:100%;
    color:white!important;
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 4px;
}

.bnbback{
    background-color: white; border: 0px;   
    width:30%;
    color:#c6c6c6!important;
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 4px;
    margin-top:20px;
}

.formpor{

    font-size: 17px;
    color: #858484;   
    border-radius: 6;
  padding-top: 10px;
    padding-bottom: 10px;
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
