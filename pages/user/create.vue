<template>
<b-container fluid>
<br><br>
  <div>
          <form @submit.prevent="onCreate">

    <h5 style="color: #8f9aa4;">วางงานของคุณที่นี่</h5>
    <b-form-textarea required id="textarea1"
                     v-model="job"
                     placeholder="Enter something"
                     :rows="8"
                     :max-rows="9">
    </b-form-textarea>
    <!-- <pre class="mt-3">{{ text }}</pre> -->
    <br>
      <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
          </form>
  </div>

</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      job: ''
    }
  },
 methods: {
    onCreate() {
 

 let data = {
          job: this.job,
          _creator: this.$store.state.user._id,
          
        }
 
        axios.post('http://localhost:8000/job/create', data)
          .then((res) => { 
              
              console.log(res.data)
              
  
          })
          .catch(error => console.log(error))




}
 }   

}
</script>
