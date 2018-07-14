<template>
<b-container fluid>
<br>

<br><br>
<div style="width: 267px;
    padding-left: auto;
    margin-left: auto;
    margin-right: auto;
"  >
 </div>

<br>

<b-form-textarea class="formpor" id="textarea1" size="lg"
                     v-model="text"
                     placeholder="หัวข้อ เรื่อง วิชาที่คุณสอน"
                     :rows="1"
                     :max-rows="4">
    </b-form-textarea>
    <br>
    <b-form-textarea class="formpor" id="textarea1" size="lg"
                     v-model="text"
                     placeholder="sorns.co/por-soonthornsittipong/review/แคลคูลัส"
                     :rows="2"
                     :max-rows="4">
    </b-form-textarea>

    <br>
   <b-button   v-clipboard:copy="thingToCopy"  size="lg"  style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">copy</b-button>
      
    <br><br><br><br>
</b-container>
</template>

<script>
import VueClipboard from 'vue-clipboard2'
import Vue from 'vue';

Vue.use(VueClipboard);

export default {
      data () {
    return {
          

    //    userid: 's' ,
       text: '' ,
       thingToCopy: `A string that's not all that long or important. Sorry to disappoint.`

 
     
    }
  },
  mounted() {
      this.text = 'http://localhost:3000/user/rating/'+this.$store.state.user._id
      this.thingToCopy = this.text
  },

  methods: {
     
  }


 
 
}
</script>


<style scoped>
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
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
    border-bottom: 0px;
    border-color: #80bdff;
    outline: 0;
box-shadow: 1px 1px 0px 0rem rgba(0, 123, 255, .25);
}

</style>
