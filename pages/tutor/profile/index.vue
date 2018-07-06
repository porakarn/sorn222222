<template>
<b-container fluid>
    <br>
    <b-row>
        <b-col cols="4">
  <!-- <b-img rounded="circle" style="width: 70px" :src="this.$store.state.user.picture"/> -->
    <b-img  style="width: 110px; border-radius: 21px" src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-1/p240x240/15873069_1211350558943201_5314025003629794223_n.jpg?_nc_cat=0&oh=429da1d277ec885fbbc86409fac1dd86&oe=5BA39AF5"/>

        </b-col>
         <b-col cols="8">
      <p style="color: rgb(117, 119, 120); font-size: 18px;margin-bottom: 7px;font-weight: bold;">Porakarn Soonthornsittipo</p>
      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
      <p style="color: rgb(158, 158, 158);  font-size: 18px; "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 (30 ครั้ง)
  </p>
  <nuxt-link to="/tutor/profile/edit">
  <b-button @click="onSubmit" style="background-color: #33C1C1; border: 0px; padding-left: 66px;font-weight: bold;
    padding-right: 66px;">เขียนโปรไฟล์</b-button>
</nuxt-link>

  
  <p  v-if="isUserLoggedIn"
> {{this.$store.state.user.name}} </p>
 <p  v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.subject}} </p>
         </b-col> 
             
    </b-row>
<b-container fluid style="   padding: 0!important">

 <div class="ere">
   <!-- <b-row class="my-1">
    <b-col sm="10">
      <b-form-input class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input>
    </b-col>
  </b-row> -->
   </div></b-container>
 <p style="margin-bottom: 0px; color: rgb(117, 119, 120);  margin-top: 17px; font-weight: bold;">วิชาที่คุณสอน
</p>
  <b-row class="my-1">
    <b-col sm="10">
   
     <p   v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.subject}} </p>

      <!-- <b-form-input focus="false"  class="formpor" id="input-large"  type="text" :placeholder="this.$store.state.user.email"></b-form-input> -->
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
                 <p style=" margin-bottom: 0px;   padding-top: 0px !important; font-weight: bold;
color: rgb(117, 119, 120); border:1px !important;">โปรไฟล์ของคุณ</p>
   <p  v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.profile}} </p>

    <br>
 
</b-container>
</template>

<script>
import axios from 'axios';

export default {
   data () {
    return {
    course: {},
    phone: '',
    profile: '',
    text2: '',
    text:'',
    subject:''
  
    }
  },
  dataAsync() {
return 
    if(isUserLoggedIn)
    {
      this.subject = this.$store.state.user.subject
      console.log('ddd')
    }
    //     this.phone = this.$store.state.user.phone,
    // this.profile = this.$store.state.user.profile,
    // this.subject = this.$store.state.user.subject
  },
    computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
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
