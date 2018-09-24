<template>
  <div>
    <div>
     <b-navbar  style="  box-shadow: -1px 2px 6px 0px #9c9c9c44;  padding-bottom: 12px;
    padding-top: 12px;  background-color:#cdf4d7!important; "toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
         <!-- <b-navbar-brand style="    color: rgb(51, 193, 193);
    font-size: 28px;
    font-weight: 500;margin-left: 55px;" href="#">Sorns</b-navbar-brand> -->
     <!-- color: #a5efe3; -->
    <!-- background-color: #effdf3; -->

   <b-button   style="   font-size: 21px;
           color: #b7e8d9;
    background-color: #eefdf8;
     
    font-weight: 500;
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
            <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/student/alltutorstudent">  <i class="fa fa-search " aria-hidden="true"></i>  Search Tutor </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/student/createjob">  <i class="fa fa-pencil" aria-hidden="true"></i> Create Post  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/student/yourjob"> <i class="fa fa-book" aria-hidden="true"></i> Message </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/student/profile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/choose"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                
                
                


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>

    <nuxt/>
 
    
  </div>
</template>

<script>


export default {
  middleware: 'log',
   
mounted() {
    // if (!this.$store.state.isUserLoggedIn) {
    //    console.log('userlogin1111111');
    //    this.$router.push('/')
    //     //   context.redirect('/')
    //  }
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

.porakarn a:hover,
.porakarn a:active,
.porakarn a:nuxt-link-active{
  color:blue !important;
  background-color: red;
}


.nav-item:hover,
.nav-item:active,
.nav-item.nuxt-link-active {
    color: #e4dfdf!important;
}


</style>

<style scoped>
.responsive {
  display: none;
}

/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
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

