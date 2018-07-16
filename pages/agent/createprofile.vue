
<template>
<b-container fluid>

<br><br>
<b-row>
<b-col md="4" offset-md="4">




      <form @submit.prevent="onCreate">
<div style="text-align:center" >
                     <img :src="image" style="border-radius: 5px" height="100"> 
</div>
<br>

<b-row class="my-1">
    <b-col >
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="ชื่อเพจของคุณ">
      <b-form-input required id="input-large" size="lg" v-model="pagename" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col  style="margin-top: 19px;">
          <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line url / Facebook page url ">
      <b-form-input required id="input-large" size="lg" v-model="contactUrl" type="text" placeholder="Line url / Facebook page url "></b-form-input>
          </b-form-group>
    </b-col>

  </b-row>

  <b-row class="my-1">
    <b-col >
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Contact เบอร์ติดต่อ และ line">
      <b-form-input required id="input-large" size="lg" v-model="contact" type="text" placeholder="Contact"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>
  <br>
<b-row class="my-1">
    <b-col sm="10">
      <p>อัพโหลดรูปเพจของคุณ</p>
              <input type="file" @change="onFileChange">

    </b-col>
  </b-row>
<br>
  <div>
  <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">สมัคร</b-button>
  
    <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    <div class="loading-page" v-if="loading2">
    <p style="color: #54c686; margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 คุณได้ทำการสร้างโปรไฟล์เรียบร้อย</p>
  </div>
<br>
<br>
<br>
<br>
</div>
      </form>
      </b-col>

</b-row>

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
        loading: false,
        loading2: false,
        contact: ''

    }
},
mounted() {
  this.pagename = this.$store.state.agent.pagename
  this.contactUrl = this.$store.state.agent.contactUrl
  this.image = this.$store.state.agent.picture
  this.contact = this.$store.state.agent.contact
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
 this.$nuxt.$loading.start()
  this.loading = true
 let data = {
          pagename: this.pagename,
          contactUrl: this.contactUrl,
          name: this.$store.state.agent.name,
          picture: this.image,
          contact: this.contact
          
        }

let data2 = {
          pagename: this.pagename,
          contactUrl: this.contactUrl,
          name: this.$store.state.agent.name,
          picture: this.image,
          _id: this.$store.state.agent._id,
         contact: this.contact

        }

         this.$store.dispatch('setAgent', data2)
         console.log(this.$store.state.agent.name);
         console.log(this.$store.state.agent._id);
         
         
        console.log(data);
        
        axios.patch('https://frozen-mesa-40722.herokuapp.com/agent/update', data)
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
            this.$nuxt.$loading.finish()
             this.loading = false
             this.loading2 = true
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

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    /* border-bottom: 2px; */
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}
</style>
