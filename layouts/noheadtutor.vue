<template>
  <div>
  

    <nuxt/>
 
     <b-container fluid class="bv-example-row responsive "   style="box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 0px, rgba(0, 0, 0, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px; position: fixed;     width: 100%;

  bottom: 0px; 
  background-color:#DFAEA9;
  height: 58px;">

<b-row style="    margin-top: 13px;">    
        
<b-col cols="3" style="text-align: center;" >

<nuxt-link class="porakarn" to="/user/seeall"><div><i style=" font-size: 28px; color: white;" class="fa fa-search nav-item " aria-hidden="true"></i>
</div></nuxt-link>





</b-col> 

<b-col class="porakarn"  cols="3" style="text-align: center;" >

<nuxt-link  to="/user/alltutor"><div><i style="font-size: 31px; color: white;"  class="fa fa-plus-square-o nav-item " aria-hidden="true"></i>
</div>
</nuxt-link>



</b-col>
<b-col cols="3" style="text-align: center;" >
<nuxt-link  to="/user/alltutor"><div><i style=" font-size: 28px; color: white;"  class="fa fa-bell-o mx-auto nav-item " aria-hidden="true"></i>
</div>
</nuxt-link>


</b-col>

<b-col cols="3" style="text-align: center;"  >    
 <nuxt-link  to="/tutor/profile">
<div>
  <i style=" font-size: 28px; color: white;"  class="fa fa-user-circle mx-auto nav-item" aria-hidden="true"></i>
</div>

</nuxt-link>



</b-col>

</b-row>
  </b-container>
  </div>
</template>

<script>


export default {
  middleware: 'log',
   
mounted() {
    if (!this.$store.state.isUserLoggedIn) {
       console.log('userlogin1111111');
       this.$router.push('/')
        //   context.redirect('/')
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

</style>
