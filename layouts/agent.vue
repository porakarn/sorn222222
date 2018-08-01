<template>
  <div>
    <div>
    <b-navbar  style="    padding-bottom: 12px;
    padding-top: 12px;  background-color:#DFAEA9!important;"toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
         <!-- <b-navbar-brand style="    color: rgb(51, 193, 193);
    font-size: 28px;
    font-weight: 500;margin-left: 55px;" href="#">Sorns</b-navbar-brand> -->
   <b-button   style="  font-size: 21px;
     color: #a5efe3;
    font-weight: 500;
    background-color: #effdf3;
    border-color: #6c757d00;
    border-radius: 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: kanit;
    border-top-width: 0px;
        border-bottom-width: 0px
"> sorns</b-button>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
                 <!-- <b-nav-item href="#">ค้นหางาน</b-nav-item>
                <b-nav-item href="#">สร้างงานใหม่</b-nav-item>
                <b-nav-item href="#">งานของคุณ</b-nav-item>
                <b-nav-item href="#">โปรไฟล์ของคุณ</b-nav-item> -->
            <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/seeall">  <i class="fa fa-search " aria-hidden="true"></i>  Search  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/create">  <i class="fa fa-pencil" aria-hidden="true"></i> Add New  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/myjob"> <i class="fa fa-book" aria-hidden="true"></i> My Jobs </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                
                
                


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
    <nuxt/>
   
 <b-container fluid class="bv-example-row responsive2 "   style="box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 0px, rgba(0, 0, 0, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px; position: fixed;     width: 100%;

  bottom: 0px; 
  background-color: white;
  height: 58px;">

<b-row style="    margin-top: 13px;">    
        
<b-col cols="3" style="text-align: center;" >

<nuxt-link class="porakarn" to="/agent/seeall"><div><i style=" font-size: 28px; color: #7f8082;" class="fa fa-search nav-item " aria-hidden="true"></i>
</div></nuxt-link>





</b-col> 

<b-col class="porakarn"  cols="3" style="text-align: center;" >

<nuxt-link  to="/agent/create"><div><i style="font-size: 31px; color: #7f8082;"  class="fa fa-plus-square-o nav-item " aria-hidden="true"></i>
</div>
</nuxt-link>



</b-col>
<b-col cols="3" style="text-align: center;" >
<nuxt-link  to="/agent/myjob"><div><i style=" font-size: 28px; color: #7f8082;"  class="fa fa-bell-o mx-auto nav-item " aria-hidden="true"></i>
</div>
</nuxt-link>


</b-col>

<b-col cols="3" style="text-align: center;"  >    
 <nuxt-link  to="/agent/createprofile">
<div>
  <i style=" font-size: 28px; color: #7f8082;"  class="fa fa-user-circle mx-auto nav-item" aria-hidden="true"></i>
</div>

</nuxt-link>



</b-col>

</b-row>
  </b-container>


  </div>
</template>
<script>
  export default {
mounted() {
    if (!this.$store.state.isUserLoggedIn) {
       console.log('userlogin1111111');
       this.$router.push('/')
        //   context.redirect('/')
     }
},
methods: {
   logout(){
    this.$store.dispatch('setToken', null)
              this.$store.dispatch('setAgent', null)

      this.$store.dispatch('setUser', null)
       this.$store.dispatch('setStudent', null)
     this.$router.push('/')
   }
},
}

</script>


<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}


.tds{
  text-align: center;
  margin: auto
}



.nav-item:hover,
.nav-item:active,
.nav-item.nuxt-link-active {
  color: #0baa8a!important;
}


.responsive2 {
  display: none;
}
/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
        display: none;
    }

    .responsive2 {
  display: block;
}



}

:focus {
    outline: -webkit-focus-ring-color auto 5px;
    outline-color:#ffffff00;
    outline-style: auto;
    outline-width: 5px;
}

.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #ffffff00;
}
</style>
