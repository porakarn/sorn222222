<template>
  <div>
    <div>
    <b-navbar  style="   background: linear-gradient(to right bottom, rgb(205, 244, 215) 21%, rgba(100, 231, 231, 0.94) 135%); !important; box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;" toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                <b-nav-text>Navbar text</b-nav-text>
                <nuxt-link to="/user/user">Users</nuxt-link>
                <nuxt-link to="/profile">Profile</nuxt-link>
                <nuxt-link to="/tutor/job">job</nuxt-link>
                <nuxt-link to="/user/seeall">Seeall</nuxt-link>
                <nuxt-link to="/user/create">Create</nuxt-link>
                <nuxt-link to="/signup">Signup</nuxt-link>
                


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
    <nuxt/>
    <b-container fluid class="bv-example-row"   style="position: fixed;     width: 100%;

  bottom: 0px; 
  background-color: white;
  height: 41px;">

<b-row>    
        
<b-col cols="3" style="text-align: center;" >
<div><i style=" font-size: 25px; color: #7f8082;" class="fa fa-search mx-auto" aria-hidden="true"></i>
</div>



</b-col> 

<b-col cols="3" style="text-align: center;" >
<div><i style="font-size: 28px; color: #7f8082;"  class="fa fa-plus-square-o mx-auto " aria-hidden="true"></i>
</div>


</b-col>
<b-col cols="3" style="text-align: center;" >
<div><i style=" font-size: 25px; color: #7f8082;"  class="fa fa-bell-o mx-auto" aria-hidden="true"></i>
</div>



</b-col>

<b-col cols="3" style="text-align: center;"  >
<div><i style=" font-size: 25px; color: #7f8082;"  class="fa fa-user-circle mx-auto" aria-hidden="true"></i>
</div>


</b-col>

</b-row>
  </b-container>
  </div>
</template>

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
</style>
