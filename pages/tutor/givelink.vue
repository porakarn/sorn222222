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
<p style=" color:#86a5ca ; text-align: center;
" >
ส่ง link เชิญให้นักเรียนของคุณเข้ามา review คุณ 
ช่วยให้ โปรไฟล์คุณน่าเชื่อถือขึ้น  + ได้นักเรียนใหม่มากขึ้น
</p>

    <br>
    <b-form-textarea class="formpor" id="textarea1" size="lg"
                     v-model="text"
                     placeholder="sorns.co/por-soonthornsittipong/review/แคลคูลัส"
                     :rows="2"
                     :max-rows="4">
    </b-form-textarea>

    <br>
   <b-button @click="clickcopy"  v-clipboard:copy="thingToCopy"  size="lg"  style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;"><i class="fa fa-clone" aria-hidden="true"></i>
  Copy</b-button>

      <div class="loading-page" v-if="loading2">
    <p style="color: #54c686;margin-top: 10px; font-size:19px;"><i class="fa fa-clone" aria-hidden="true"></i></i>
 คุณได้ทำการ copy แล้ว สามารถเอาไป paste ในแชทของนักเรียน เพื่อให้นักเรียนรีวิวคุณได้เลย</p>
  </div>
      
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
          
      loading2: false,
    //    userid: 's' ,
       text: '' ,
       thingToCopy: `A string that's not all that long or important. Sorry to disappoint.`

 
     
    }
  },
  mounted() {
      var porakarn = this.$store.state.user.name.replace(" ", ".")
      this.text = 'https://sorns-co-beta.herokuapp.com/review/'+porakarn
      this.thingToCopy = this.text
  },

  methods: {
     clickcopy(){
          this.loading2 = true
     }
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
    border-color: #80bdff;
    /* border-bottom: 2px; */
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}

button{
      margin-top: 9px; 
       box-shadow: 0 1px 1px 1px rgba(111, 111, 111, 0.23);
}
</style>
