<template>
 <b-container fluid >

       <form @submit.prevent="onSubmit">
<b-row class="my-1">
    <b-col >
      <b-form-group  id="exampleInputGroup1"
                    label-for="exampleInput1"
                    description="namequiz">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="name" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>

<b-row class="my-1">
    <b-col >
      <b-form-group  id="exampleInputGroup1"
                    label-for="exampleInput1"
                    description="subject">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="subject" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>

   <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                  <p style="color: grey">อัพโหลดรูป quiz</p>
                    <!-- <upload-button class="red" title="file"  :selectedCallback="onSelect">
                    </upload-button> -->
                  
    <input type="file" @change="onFileChange">
                  </v-flex>
                </v-layout>
                <v-layout>
                     <v-flex xs12 sm6 offset-sm3>
                     <img :src="image" height="100"> 
                     </v-flex>
                </v-layout>

<button type="submit">submit</button>
       </form>
 </b-container>     
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        
        name: '',
        subject: '',
        // text: '',
        image:null,
        image2: null
      


          }
        
        
      
    },
      //    var data = new FormData();
      // data.append('image', files[0]);


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



 onFileChange2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage2(files[0]);
      
    },
    createImage2(file) {
      var image2 = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image2 = e.target.result;
      };
      reader.readAsDataURL(file);
    },

           onSubmit(){
            let createPost = {
      
        name: this.name,
        subject: this.subject,
        // text: this.text,
        // userId: this.$store.state.user._id,
        picture: this.image,
        // productImage2: this.image2
      
      }
      console.log(createPost);
      console.log('dd');
      

       axios.post('https://chatpor.herokuapp.com/create/quiz', createPost)
          .then(res => console.log(res))
          .catch(error => console.log(error))
     
    }

           }
      ,
         layout: 'auth'
  }

      

    </script>


    <style scoped>
 .form-control{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
}

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
   padding-left: 4px;

}

    </style>
    