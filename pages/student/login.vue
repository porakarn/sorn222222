<template>

<b-container fluid>


<br>

  <b-row>
<b-col md="6" offset-md="3">
<img style="    width: 100%;" src="https://www.sorns.co/wp-content/uploads/2018/01/sds.png" alt="">
        <br><br>
       
</b-col></b-row>


  <b-row>
<b-col md="6" offset-md="4">
  <div style="text-align:center">

<a href="#" @click="doLogin" >
 <img style="width: 340px;" src="https://i.stack.imgur.com/oL5c2.png" alt="">
        </a>
  </div>
         
         
</b-col></b-row>
  
 <br><br>
<br><br><br>
 
      
  
 

</b-container>  

</template>

<script>
import axios from 'axios';
import store from '@/store/index'; // path to your Vuex store

// import AuthService from '@/services/AuthService'
  export default {
    data () {
      return {
        
        username: '',
        password: '',
        token:'',
        user:'',
     

        // name: 'd',
        // email:'d',
        // picture:'d'
  


          }
        
        
      
    },
    
	created() {
		const vm = this;

if (process.browser) {

 window.fbAsyncInit = function () {
    FB.init({
      appId: '1164801473596989',
      cookie: true,
      xfbml: true,
      version: 'v3.0'
    });


FB.getLoginStatus(function(response) {
    vm.statusChangeCallback(response);
    console.log('00')
    console.log(response)
});

  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}



  },




 methods: {

    doLogin: async function () {
      var vm = this
      FB.login( async function (response) {
        if (response.status === 'connected') {
          console.log('In response')
          // auth.facebookLogin(response.authResponse, function () {
               await vm.testAPI().then((res)=> {

              
                 
               }) 
                // vm.testAPI2()
                                    //    window.history.back();
//  createStore.dispatch('setToken', this.token )
//  createStore.dispatch('setUser', this.user )
//        console.log(vm.token)
//        console.log('portoekn');
       

                
          }  },               {scope: 'email'})

            // window.history.back();
        
      }
,
   
    ///////////////////////



 statusChangeCallback(response){
if (response.status === 'connected'){
  console.log('Login and Authenticated');
  // this.testAPI()
  console.log('11')
} else {
  console.log('Not Authenticated');
  
}
},
// กดปุ่ม 1
 checkLoginState() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
    console.log('22')
    console.log(response)
  });
},


async testAPI(){

  if (process.browser) {


 FB.api('/me?fields=id,name,email,picture.type(large)', (response) =>{
   if(response && !response.error){
     console.log(response);
     console.log(response.email)
   console.log('นี่ไง mail');
   
        
    //  this.name = response.name
    //  this.email = response.email
    //  this.picture = response.picture 
          

//////////// c
// const response6 = {
//           name: response.name,
//           email: response.email,
//           picture: response.picture.data.url


// } 
const response6 = {
          name: response.name,
          email: response.email,
          picture: 'https://graph.facebook.com/'+ response.id +'/picture?type=large',
          fbid: response.id

} 

console.log('r6');

 console.log(response6);
console.log('r6');

 axios.post('https://frozen-mesa-40722.herokuapp.com/student/login', response6)
          .then((res) => { 
                  // var vm = this
                                //  this.login()

              // vmp.user = res.data.user
              // vmp.token = res.data.token
  //             console.log(res.data)
    this.$store.dispatch('setToken', res.data.token)
   this.$store.dispatch('setStudent', res.data.user)
        console.log('res444')
this.$router.go(-2)
// this.$router.push('/choose')
// console.log(res.data.token)
                // console.log(this.token)



  //  this.$router.push('/user/user')

          })
          .catch((error) =>{
console.log(error) 
console.log('error');

          } )
  
//        const response2 =  await AuthService.register(response6)

    
      
         
            
  
     
    }





   })
}
 
 },

 login(){
//    console.log(this.token + this.user);
   alert('ddd')
   
// store.dispatch('setToken', 'lll')
// store.dispatch('setUser','ff')

 }


},
         layout: 'auth'
  }



    </script>





