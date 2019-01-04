<template>
<b-container fluid style="padding: 0px;">

<b-container fluid>

  <b-row>
<b-col md="6" offset-md="3">
    <br>


    <b-row>
        <b-col cols="4">
          
  <b-img rounded="circle" style="width: 74px;    margin-left: 17px;" src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-1/p240x240/15873069_1211350558943201_5314025003629794223_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk5-6.fna&oh=1109718a0bb183379afb401a1b5d3c3a&oe=5C695BF5"/>
    <!-- <b-img  style="width: 90px; " rounded="circle" :src="$store.state.user.picture" /> -->

        </b-col>
         <b-col cols="8" style="        padding-left: 15px;">

<b-row>
<!-- <b-col cols="4" style="    padding-right: 0px;">
<p style="  font-size :18px;
     text-align: center; font-weight: bold; margin-bottom: 0px;">4.6</p>
<p style=" 
   color:#949494;  text-align: center;  font-size:14px;  margin-bottom: 0px;"><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i> รีวิว</p>
</b-col> -->
<!-- <b-col cols="4">
<p style="  font-size :18px;
     text-align: center; font-weight: bold; margin-bottom: 0px;">12</p>
<p style=" 
   color:#949494;   text-align: center; font-size:14px;  margin-bottom: 0px;">นักเรียน</p>
</b-col> -->
<!-- <b-col cols="4" style="padding-left: 0px;"    >
<p style="  font-size :18px;
     text-align: center; font-weight: bold;  margin-bottom: 0px;">12</p>
<p style=" 
    color:#949494;  text-align: center; font-size:14px;   margin-bottom: 0px;">ครั้งที่สอน</p>
</b-col> -->


</b-row>

      <!-- <p style="color: rgb(117, 119, 120);">{{ this.$store.state.user.name}}</p> -->
      <!-- <p style="color:#484848;  font-size: 16px;     margin-bottom: 0px;
    margin-top: 12px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 (30 ครั้ง)
  </p> -->
  <!-- <nuxt-link to="/tutor/profile/edit"> -->
  <b-button size="lg" @click="onSubmit" style="background-color: #DFAEA9; border-radius:25px;     margin-top: 9px;  box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
; border: 0px;      padding-top: 12px;
    padding-bottom: 12px;   width: -webkit-fill-available;">เขียนโปรไฟล์</b-button>
<!-- </nuxt-link> -->

  
  <!-- <p  v-if="isUserLoggedIn"
> {{this.$store.state.user.name}} </p>
 <p  v-if="this.$store.state.haveProfile"
> {{this.$store.state.user.subject}} </p> -->
         </b-col> 
             
    </b-row>

   <br>
  <b-row> <b-col >

  <b-card class="card1" >
      <i style="color:#959595;" class="fa fa-bandcamp" aria-hidden="true"></i>
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
ดูโปรไฟล์คุณ  </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>

      <b-card class="card1" >
          <i style="color:#959595;"  class="fa fa-credit-card" aria-hidden="true"></i>

         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
เติมเงิน   </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>

      <!-- <b-card class="card1" >
         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;">
วิชาที่อยากเรียน   </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card> -->

      <b-card class="card1" >
          <i style="color:#959595;"  class="fa fa-user-circle-o" aria-hidden="true"></i>

         <strong style="    color: rgb(109, 109, 109);
    font-weight: 400;
    padding-left: 9px;"> 
โปรไฟล์ส่วนตัว  </strong>  
<i style="    float: right;
    margin-top: 5px;
color: #afafaf;
    font-size: 20px;" class="fa fa-angle-right" aria-hidden="true"></i>
    </b-card>
 <!-- <p style="margin-bottom: 0px; color:#484848;  margin-top: 17px; font-size: 19px">วิชาที่คุณสอน
</p> -->

  

  <b-row class="my-1">
    <b-col >


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

 </b-col></b-row>



  </div>
     </b-col></b-row>
  <br><br><br> 
</b-col></b-row>
</b-container>



<b-nav fill tabs style=" position: fixed;    width:100%;
  border-top:1px solid;
  border-top-color:rgba(241, 242, 243, 1);
  border-color: #e2e5e957;
  bottom: 44px; 
  background-color: white;
  height: 58px;">
  <b-nav-item  >   <nuxt-link to="/tutor/givelink"> ให้นักเรียนรีวิว </nuxt-link>  </b-nav-item>
 <b-nav-item @click="nextPage">งานของคุณ</b-nav-item>
 
</b-nav>
</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment'


export default {
  
   data () {
    return {
    course: {},
    phone: '',
    profile: '',
    text2: '',
    text:'',
    subject:'',
    reviews:'',
    name:'',
    picture: '',
    location: '',
  
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
  mounted() {
    this.name = this.$store.state.user.name
    this.picture = this.$store.state.user.picture
    this.location = this.$store.state.user.location
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
       displayTimestamp(t){
                return moment(t).fromNow()
            },

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

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

</style>
