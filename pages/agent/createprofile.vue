<template>
<b-container fluid>

<br><br>
      <form @submit.prevent="onCreate">

    <input type="file" @change="onFileChange">
                     <img :src="image" height="100"> 


<b-row class="my-1">
    <b-col sm="10">
      <b-form-input required id="input-large" size="lg" v-model="pagename" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
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
  

<p>d</p>
</div>
      </form>

</b-container>

</template>

<script>
import axios from 'axios';

 export default {
    data(){
    return {
        pagename: '',
        contactUrl: '',
        image:null,

    }
},

  methods: {
     onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    onCreate() {
 
 let data = {
          pagename: this.pagename,
          contactUrl: this.contactUrl,
          name: this.$store.state.agent.username,
          picture: this.image
          
        }

let data2 = {
          pagename: this.pagename,
          contactUrl: this.contactUrl,
          name: this.$store.state.agent.name,
          picture: this.image,
          _id: this.$store.state.agent._id
        }

         this.$store.dispatch('setAgent', data2)
         console.log(this.$store.state.agent.name);
         console.log(this.$store.state.agent._id);
         
         
        console.log(data);
        
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
 },
      layout: 'agent'
   

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
