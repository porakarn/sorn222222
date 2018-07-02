<template>
<b-container fluid>

<br><br>
      <form @submit.prevent="onCreate">

<b-row class="my-1">
    <b-col sm="10">
      <b-form-input required id="input-large" size="lg" v-model="username" type="text" placeholder="Username"></b-form-input>
    </b-col>
  </b-row>
    <!-- <b-row class="my-1">
    <b-col sm="10" style="margin-top: 19px;">
      <b-form-input id="input-large" size="lg"  type="text" placeholder="Password"></b-form-input>
    </b-col>
  </b-row> -->
<br>
  <div>
  <b-button type="submit" size="lg" style="background-color: #33C1C1; border: 0px; padding-left: 56px;
    padding-right: 56px;">สมัคร</b-button>
</div>
      </form>

</b-container>

</template>

<script>
import axios from 'axios';

 export default {
    data(){
    return {
        username:'',
    }
},

  methods: {
    onCreate() {
 

 let data = {
          username: this.username,
          
        }
 
        axios.post('http://localhost:8000/signup', data)
          .then((res) => { 
              
              console.log(res.data)
              
   this.$store.dispatch('setToken', res.data.token)
   this.$store.dispatch('setUser', res.data.user)
   this.$router.push('/user/user')

          })
          .catch(error => console.log(error))


//    this.$store.dispatch('setToken', 'sss')
//    this.$store.dispatch('setUser','ssdd')

          //    axios.post('https://tutor-8e729.firebaseio.com/agent/create.json', data)
          // .then(res => console.log(res.data))
          // .catch(error => console.log(error))

}
 }   

}
</script>



<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.form-control{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
}
</style>
