<template>
<b-container fluid style="padding: 0px;">

<b-container fluid>
    <br>
    <b-row>
        <b-col cols="4">
  <!-- <b-img rounded="circle" style="width: 70px" :src="this.$store.state.user.picture"/> -->
    <!-- <b-img  style="width: 90px; " rounded="circle" :src="$store.state.user.picture" /> -->

        </b-col>
         <b-col cols="8" style="    padding-left: 2px;">

<b-row>
<b-col cols="4" style="    padding-right: 0px;">
<p style="  font-size :18px;
     text-align: center; font-weight: bold; margin-bottom: 0px;">4.6</p>
<p style=" 
   color:#949494;  text-align: center;  font-size:14px;  margin-bottom: 0px;"><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i> รีวิว</p>
</b-col>
<b-col cols="4">
<p style="  font-size :18px;
     text-align: center; font-weight: bold; margin-bottom: 0px;">12</p>
<p style=" 
   color:#949494;   text-align: center; font-size:14px;  margin-bottom: 0px;">นักเรียน</p>
</b-col>
<b-col cols="4" style="padding-left: 0px;"    >
<p style="  font-size :18px;
     text-align: center; font-weight: bold;  margin-bottom: 0px;">12</p>
<p style=" 
    color:#949494;  text-align: center; font-size:14px;   margin-bottom: 0px;">ครั้งที่สอน</p>
</b-col>


</b-row>

      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
      <!-- <p style="color:#484848;  font-size: 16px;     margin-bottom: 0px;
    margin-top: 12px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 (30 ครั้ง)
  </p> -->
  <nuxt-link to="/tutor/profile/edit">
  <b-button @click="onSubmit" style="background-color: #33C1C1;      margin-top: 9px;  box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
; border: 0px;    padding-left: 81px;
    padding-right: 83px;">เขียนโปรไฟล์</b-button>
</nuxt-link>

  
  <!-- <p  v-if="isUserLoggedIn"
> {{this.$store.state.user.name}} </p>
 <p  v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.subject}} </p> -->
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
   <br>
         <p style="color: #484848; font-size: 17px;margin-bottom: 7px;font-weight: bold;">Porakarn Soonthornsittipong (22 ปี)</p>

 <!-- <p style="margin-bottom: 0px; color:#484848;  margin-top: 17px; font-size: 19px">วิชาที่คุณสอน
</p> -->

 
  <b-row class="my-1">
    <b-col sm="10">
   
     <p style=" white-space: pre-wrap;"  v-if="this.$store.state.haveProfile"
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

                 <!-- <p style=" margin-bottom: 0px;   padding-top: 0px !important; font-size: 19px;
color: #484848; border:1px !important;">โปรไฟล์ของคุณ</p> -->
   <p style=" white-space: pre-wrap;" v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.profile}} </p>

    <b-button @click="porakarn">รีวิว</b-button> 
    <br><br>

  <div v-for="review in reviews" >
    <b-row style="margin-bottom: 12px;">
   <b-col cols="2">
    <img  style="width: 60px;     border-radius: 50%;"  :src="review.studentid.picture"  alt="">

   </b-col>
     <b-col  cols="10" style="padding-left: 20px ;    flex: none; width: fit-content;">
     <div style="font-weight: 400;
    font-size: 17px;
    background-color: #f5f5f5;
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 14px;
 ">{{review.review_write}}  </div>

     <p style="     margin-top: 6px;   font-size: 17px;">{{review.studentid.name.split(" ").slice(0, -1).join(" ")}} <i style="color: #F8E217;" class="fa fa-star" aria-hidden="true"></i> {{ review.rating}} </p>



   </b-col>
    <!-- <b-col  cols="2" style="    padding-right: 9px;" >
<p><i style="color: #F8E217;" class="fa fa-star" aria-hidden="true"></i> {{ review.rating}} </p>
   </b-col> -->

    </b-row>


  </div>
  <br><br><br> 
<p>ddd</p>
<p>dddd</p>
<p>dddd</p>
<p>fff</p>
<p>ddd</p>
<p>dddd</p>
<p>dddd</p>
<p>fff</p>
</b-container>

<b-nav fill tabs style=" position: fixed;    width:100%;
  border-top:1px solid;
  border-color: #e2e5e957;
  bottom: 44px; 
  background-color: white;
  height: 58px;">
  <b-nav-item >ให้นักเรียนรีวิว</b-nav-item>
 <b-nav-item @click="nextPage">งานของคุณ</b-nav-item>
 
</b-nav>

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
    subject:'',
    reviews:''
  
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
//    return   axios.get('https://frozen-mesa-40722.herokuapp.com/user/profile', por )
//     .then((res) => {
//       // this.profile = res.data.profile
//       // this.phone = res.data.phone                
         
//             })
    
//   }
//   ,
    methods: {
      porakarn(){
    
    var data = {
      tutorid : this.$store.state.user._id
    }
  // axios.post('http://localhost:8000/user/profile2', data).then((res) =>{
            axios.post('https://frozen-mesa-40722.herokuapp.com/user/profile2', data).then((res) =>{

            console.log(res.data)
             this.reviews = res.data._review
            

           }).catch((error) =>{ console.log(error) })
           

      },
      nextPage(){
             this.$router.push('/tutor/job')
      }
      ,

      onSubmit(){
           var data = {
             profile : this.profile, 
             phone : this.phone,
             name: this.$store.state.user.username 
              
           }

           axios.patch('https://frozen-mesa-40722.herokuapp.com/update', data).then((res) =>
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
