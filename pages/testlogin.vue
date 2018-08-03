<template>

<div style="width: 100%">
 
   ffff
</div>
</template>






<script>





import axios from 'axios';

  export default {
    data () {
      return {
   

  
     
   e1: 'recent',
  url:'https://www.facebook.com/v3.0/dialog/oauth?client_id=1603228583057465&redirect_uri=https://sorns-co-beta.herokuapp.com/testlogin&scope=email'

      }
    },
    mounted() {
        







      let code = this.$router.currentRoute.query.code
       console.log(code);
if (code) {

axios.get(`https://graph.facebook.com/v3.0/oauth/access_token?client_id=1603228583057465&redirect_uri=https://sorns-co-beta.herokuapp.com/testlogin&client_secret=666eb8afc3f586f2f319041ca47bf56f&code=${code}`)
    .then(x=>{
        let access_token = x.data.access_token
        console.log(access_token)
                console.log('access token :'  + access_token)

        // return 
        
        axios.get('https://graph.facebook.com/v3.0/me?fields=email,name,picture.type(large)&access_token='+access_token).then(y=>{
            // console.log(y.data)
            let {email,name,id} = y.data
  console.log(y.data);
 alert(y.data)
                console.log(   this.$router.currentRoute.query);
    console.log(code);
        })
        })
} else {
       window.location = this.url
    
           console.log('nodone');

 }





          
    },

    


	


   
   
    // filterQuizes(){
    //   var vm = this


    //   return _.reject(vm.quizez, { 'category':  vm.selectedCategory});

    // },
  
  
    
    methods: {

      
   

 

      lol(){
     window.location = this.url
          let code = this.$router.currentRoute.query.code
          console.log(code);
          


      },

   
  

 


      

     
    
    }
    ,
    layout: 'auth'
  }
</script>


<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }

.admin2{
  color: red;
}
</style>
