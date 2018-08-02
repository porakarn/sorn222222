
<template>

<b-container fluid style="padding:0px;">

   <div>
    <b-navbar  style="    padding-bottom: 12px;
    padding-top: 12px;  background-color:##c6f1d1!important;"toggleable variant="light">
   
      
   <b-button   style="  font-size: 21px;
    color: #64e2cd94;
    font-weight: 500;
    background-color: #effdf3;
    border-color: #6c757d00;
    border-radius: 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: kanit;
    border-top-width: 0px;
        border-bottom-width: 0px
"> sorns</b-button>
       
    </b-navbar>
</div>

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
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="pagename" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>
    <!-- <b-row class="my-1">
    <b-col  style="margin-top: 19px;">
          <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line@ url">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="contactUrl" type="text" placeholder="Line@ url "></b-form-input>
          </b-form-group>
    </b-col>

  </b-row> -->

  <b-row class="my-1">
    <b-col cols="6" >
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เบอร์ติดต่อ">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="contact" type="text" placeholder="เบอร์ติดต่อ"></b-form-input>
    
      </b-form-group>
    </b-col>

  <b-col cols="6" >
    <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line@id เพจของคุณเช่น @cututor">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="line" type="text" placeholder="Line@ id"></b-form-input>
    
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
</b-container>
</template>

<script>
import axios from 'axios';

 export default {
    data(){
    return {
        pagename: '',
        image:null,
        loading: false,
        loading2: false,
        contact: '',
        line:''

    }
},

mounted() {
  if (this.$store.state.agent.pagename) {
this.$router.push('/agent/create')

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
 this.$nuxt.$loading.start()
  this.loading = true
 let data = {
          pagename: this.pagename,
          name: this.$store.state.agent.name,
          picture: this.image,
          contact: this.contact,
          line: this.line
          
        }

let data2 = {
          pagename: this.pagename,
          name: this.$store.state.agent.name,
          picture: this.image,
          _id: this.$store.state.agent._id,
         contact: this.contact,
          line: this.line
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

             this.$router.push('/agent/create')
          })
          .catch(error => console.log(error))

          //    axios.post('https://tutor-8e729.firebaseio.com/agent/create.json', data)
          // .then(res => console.log(res.data))
          // .catch(error => console.log(error))

}
 },
      layout: 'auth'
   

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

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
   padding-left: 4px;

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
