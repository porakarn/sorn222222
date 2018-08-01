<template>
<b-container fluid style="padding:0px;">
<b-navbar  style="    padding-bottom: 12px;
    padding-top: 12px;  background-color:#dfaea9!important; "toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
        <b-navbar-brand class="responsive2" style="       color: rgb(51, 193, 193);
    font-size: 28px;
    font-weight: 500;
    background-color: #ecfcec;
    margin-left: 55px;
    border-radius: 19px;
    padding-right: 7px;
    padding-left: 7px;
    padding-top: 0px;
    padding-bottom: 0px;" href="#">Sorns</b-navbar-brand>
        
        
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
               <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/seeall">  <i class="fa fa-search " aria-hidden="true"></i>  Search  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/create">  <i class="fa fa-pencil" aria-hidden="true"></i> Add New  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/myjob"> <i class="fa fa-book" aria-hidden="true"></i> My Jobs </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                <!-- <b-nav-text>Navbar text</b-nav-text>
                <nuxt-link to="/user/user">Users</nuxt-link>
                <nuxt-link to="/profile">Profile</nuxt-link>
                <nuxt-link to="/tutor/job">job</nuxt-link>
                <nuxt-link to="/user/seeall">Seeall</nuxt-link>
                <nuxt-link to="/user/createprofile">Createprofileagent</nuxt-link>
                <nuxt-link to="/agent/signup">Signup</nuxt-link>
                <nuxt-link to="/choose">Choose</nuxt-link>
                <nuxt-link to="/agent/myjob">myjob</nuxt-link>
                <nuxt-link to="/agent/status/1">ว่าง</nuxt-link>
                <nuxt-link to="/agent/status/2">รอ</nuxt-link>
                <nuxt-link to="/agent/status/3">ปิดแล้ว</nuxt-link>
                
                
                 -->


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>




<b-nav fill tabs style=" margin-top:-7px;    background-color: #dfaea9;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item @click="nextPage" class="responsive"  >ทั้งหมด </b-nav-item>
 <b-nav-item style="border-bottom: 4px solid; padding-right: 12px;
    padding-left: 12px;
    border-bottom-color: #ffffff; color: #ffffff; 
" class="responsive"  >งานแนะนำ</b-nav-item>
</b-nav>

<br>
<b-container fluid >


<p style=" color:#86a5ca ; text-align: center;" > งานแนะนำเป็นฟังชั่นสำหรับติวเตอร์ เราแนะนำงานของคุณให้กับติวเตอร์ที่สอนวิชานั้นๆ</p>




</b-container>
  </b-container>


</template>


<script>
import axios from 'axios';

 export default {
 
methods:{

 nextPage(){
                    this.$router.push('/agent/seeall')

      },


},

layout: 'nohead'   

}
</script>


<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
       padding-bottom: 0px;
    padding-top: 0px;
}

.card{
    border: 1px solid rgb(255, 255, 255)!important;
}

.card-text{
        color: #2f2f2f;
    margin-bottom: 6px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #82D9D9;
    padding: 2px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 15px;

}

.por{
    margin-left: -7px
}
.card{
      margin-bottom: 5px;
box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(193, 193, 193, 0.12);
    border-radius: 6px;
}

.responsive {
  display: none;
}

.responsive2 {
  display: block;
}

/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
        display: block;
    }
    .responsive2 {
  display: none;
}
}


a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}
</style>
