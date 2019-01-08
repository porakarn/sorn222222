<template>

<div style="width: 100%">
 <br><br>
 <div style="text-align: center;">
  <p style=" color:grey;">
  กำลังโหลด...

  </p>
  <div class="lds-facebook"><div></div><div></div><div></div></div>

  </div>
</div>
</template>






<script>





import axios from 'axios';

  export default {
    data () {
      return {
   name: '',
   email: '',
     
   e1: 'recent',
  url:'https://www.facebook.com/v3.0/dialog/oauth?client_id=1164801473596989&redirect_uri=https://sorns-co-beta.herokuapp.com/student/formcreatejob/login&scope=email'

      }
    },
    mounted() {
        







      let code = this.$router.currentRoute.query.code
       console.log(code);
if (code) {

axios.get(`https://graph.facebook.com/v3.0/oauth/access_token?client_id=1164801473596989&redirect_uri=https://sorns-co-beta.herokuapp.com/student/formcreatejob/login&client_secret=24ca12cded8182db8628ddf7772b746e&code=${code}`)
    .then(x=>{
        let access_token = x.data.access_token
        console.log(access_token)
                console.log('access token :'  + access_token)

        // return 
        
        axios.get('https://graph.facebook.com/v3.0/me?fields=email,name,picture.type(large)&access_token='+access_token).then(y=>{
            // console.log(y.data)
            let {email,name,id} = y.data
  console.log(y.data);
//  alert(y.data)
//  this.name = y.data.name
//   this.email = y.data.email

   
const response6 = {
          name: y.data.name,
          email: y.data.email,
          picture: 'https://graph.facebook.com/'+ y.data.id +'/picture?type=large',
          fbid: y.data.id

} 




 axios.post('https://frozen-mesa-40722.herokuapp.com/student/login', response6)
          .then((res) => { 
              console.log(res.data);
              console.log(res.data.user);
              
              
                  // var vm = this
                                //  this.login()

              // vmp.user = res.data.user
              // vmp.token = res.data.token
            
  //             console.log(res.data)


  //Update profile to store and database
  // create real job 

//for update student profile in database
var data = {
    // name: res.name
    _id: res.data.user._id,
    phone: this.$store.state.testform.phone,
    line: this.$store.state.testform.line,
    gender: this.$store.state.testform.gender,
    grade: this.$store.state.testform.grade,
}

//for update student profile in store
  let createPost2 = {
       
         _id:  res.data.user._id,
         phone: this.$store.state.testform.phone,
         line: this.$store.state.testform.line,
         gender: this.$store.state.testform.gender,
         grade: this.$store.state.testform.grade,
        name: res.data.user.name,
        email : res.data.user.email,
        picture: res.data.user.picture,
        fbid: res.data.user.fbid
      }
 

//for createjob to database
var data234 ={
_id : 'sdds',
}



 console.log(data);
 console.log(createPost2);
 
 
//   axios.patch('https://frozen-mesa-40722.herokuapp.com/student/update', data)
//           .then((res) => {   
//               console.log(res.data)  
//             //   this.loading = false
//             //    this.loading2 = true
//             //     this.$nuxt.$loading.finish()
//           })
//           .catch(error => console.log(error))



//testfornow
//      this.$store.dispatch('setToken', res.data.token)
  
//    this.$router.push('/agent/createprofilefirst')
//     this.$store.dispatch('setUser', null)
//         console.log('res444')
//         console.log('res444')

//testfornow



// this.$router.go(-2)


        // this.$router.push('/user/seeall')
                // console.log(res.data.token)
                // console.log(this.token)



  //  this.$router.push('/user/user')

          })
          .catch((error) =>{
console.log(error) 
console.log('error');

          } )


console.log('r6');


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

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background:#dedddd;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}

</style>
