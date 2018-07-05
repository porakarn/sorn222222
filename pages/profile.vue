<template>
<b-container fluid>
    <br>
    <b-row>
        <b-col cols="3">
  <b-img rounded="circle" style="width: 70px" :src="this.$store.state.user.picture"/>
        </b-col>
         <b-col cols="9">
      <p>{{ this.$store.state.user.name}}</p>
      <p>อายุ 22 ปี</p>
         </b-col>     
    </b-row>
<b-container fluid style="   padding: 3!important">

 <div class="ere">
   <b-row class="my-1">
    <b-col sm="10">
      <b-form-input class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="10" style="margin-top: 14px;">
      <b-form-input class="formpor" id="input-large"  type="text" placeholder="เบอร์โทร ">{{phone}}</b-form-input>
    </b-col>
  </b-row></div></b-container>
 <p style="    margin-top: 17px;">วิชาที่คุณสอน
</p>
  <b-row class="my-1">
    <b-col sm="10">
      <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input>
    </b-col>
  </b-row>
  <!-- <div class="por" >
        <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">ENG</b-link>
                  <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">เคมี</b-link></div> -->
<br>
                 <p style="color: #8f9aa4; border:1px !important;">โปรไฟล์ของคุณ</p>
    <b-form-textarea style="border: 0px"   id="textarea1"
                     placeholder="เขียนโปรไฟล์ของคุณ.."
                     :rows="5"
                     :max-rows="9">
    </b-form-textarea>
    <br>
    <b-button @click="onSubmit" size="lg" style="background-color: #33C1C1; border: 0px; padding-left: 56px;
    padding-right: 56px;">สมัคร</b-button>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
   data () {
    return {
    course: {},
    phone: '',
    profile: ''

  
    }
  },
//   asyncData (context, callback) {
//  var por = ';;'
//    return   axios.get('http://localhost:8000/user/profile', por )
//     .then((res) => {
//       // this.profile = res.data.profile
//       // this.phone = res.data.phone                
         
//             })
    
//   }
//   ,
    methods: {
      onSubmit(){
           var data = {
             profile : this.profile, 
             phone : this.phone,
             name: this.$store.state.user.username 
              
           }

           axios.patch('http://localhost:8000/update', data).then((res) =>
           {
            console.log(res.data);
            

           }).catch((error) =>{ console.log(error) })
           

      }

  }
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
</style>
