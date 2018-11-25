<template>
<b-container fluid>

 
</b-nav>
    <br>
    <b-row>





         <b-col cols="12"  sm="6" offset-sm="3" >
      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
      <p style=" margin-bottom: 3px;  white-space: pre-wrap;  padding-top: 0px !important;
color: rgb(117, 119, 120); border:1px !important;">วิชาที่สอน</p>
  
    <strong class="tagsmall" >คณิต</strong>
    <strong class="tagsmall" >Eng</strong>
    <strong class="tagsmall" >ไทย</strong>
  <strong style="float:right; font-weight:600; background-color:#EEEEEE;
     color:#A8A8A8;     padding-left: 15px;
    padding-right: 15px;
    border-radius: 6px;   padding-top: 2px;
    padding-bottom: 2px;" class="tagsmall" >+</strong>

   <br>
<b-container fluid style="  padding: 0!important">
      <p style=" margin-bottom: 3px; margin-top:9px;  white-space: pre-wrap;  padding-top: 0px !important;
color: rgb(117, 119, 120); border:1px !important;margin-bottom: 0px;
 ">สถานที่สอน</p>
    <strong class="tagsmall" >สยาม</strong>
    <strong class="tagsmall" >อโศก</strong>
    <strong class="tagsmall" >สีลม</strong>
    <strong style="float:right; font-weight:600; background-color:#EEEEEE;
     color:#A8A8A8;     padding-left: 15px;
    padding-right: 15px;
    border-radius: 6px;       padding-top: 2px;
    padding-bottom: 2px;" class="tagsmall" >+</strong>

 </b-container>
<b-container fluid style=" border-top: 1px solid #f1f1f1!important;    margin-top: 10px;  padding: 0!important">

</b-container>


 
<br>
                 <p style=" margin-bottom: 0px;  white-space: pre-wrap;  padding-top: 0px !important;
color: rgb(117, 119, 120); border:1px !important;">โปรไฟล์ของคุณ</p>
    <b-form-textarea class="formpor"  id="textarea1"
                     
                     :rows="4"
                     :max-rows="9">
    </b-form-textarea>
 
<br>
     <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เช่น วิชาคณิต ม ปลาย 300 บาท / ชม ">
      <b-form-input
       style="margin-top: -6px;"
     
        class="formpor"
        id="input-large"   
        type="text" 
        placeholder="ค่าสอน">{{location}}</b-form-input></b-form-group>

          <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="สามารถอัพโหลด video แนะนำตัวเอง">
      <b-form-input
       style="margin-top: -6px;"
     
        class="formpor"
        id="input-large"   
        type="text" 
        placeholder="Youtube url">{{location}}</b-form-input></b-form-group>
    <!-- <b-button @click="onSubmit"  style="background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;    box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
">สมัคร</b-button> -->
 <div style="color: grey" class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
      </b-col> 
    </b-row>
    <br><br><br><br><br>
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
    location: '',
    
    line:''

  
    }
  },
  mounted() {
 
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
       


      }

  },
    layout: 'studentapp'
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

.tagsmall{
    font-weight:400;
    color:white;
    background-color:#E9BAB6; 
    padding-right:9px;
    padding-left:9px; 
    border-radius:7px;
    margin-right: 7px;
        padding-top: 4px;
    padding-bottom: 4px;
}
.text-muted {
    color: #adadad !important;
}
</style>
