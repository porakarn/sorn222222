<template>
<b-container fluid>

<br><br>
      <form @submit.prevent="onCreate">

<b-row class="my-1">
    <b-col sm="10">
      <b-form-input required id="input-large" size="lg" v-model="name" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="10" style="margin-top: 19px;">
      <b-form-input required id="input-large" size="lg" v-model="contactUrl" type="text" placeholder="Line url / Facebook page url "></b-form-input>
    </b-col>
  </b-row>
<br>
  <div>
  <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">สมัคร</b-button>
</div>
      </form>

</b-container>

</template>

<script>
import axios from 'axios';

 export default {
    data(){
    return {
        name: '',
        contactUrl: ''
    }
},

  methods: {
    onCreate() {
 
 let data = {
          name: this.name,
          contactUrl: this.contactUrl,
          username: this.$store.state.user.username  
        }
 
        axios.patch('http://localhost:8000/agent/update', data)
          .then((res) => {
            this.$router.push('/user/create')
            console.log(res.data)
          })
          .catch(error => console.log(error))

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
