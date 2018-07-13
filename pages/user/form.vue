<template>
  <div>
   

      <input type="checkbox" id="jack" value="ENG" v-model="checkedsubjects">
  <label for="jack">Eng</label>
  <input type="checkbox" id="john" value="ไทย" v-model="checkedsubjects">
  <label for="john">ไทย</label>
  <input type="checkbox" id="mike" value="คณิต" v-model="checkedsubjects">
  <label for="mike">คณิต</label>
  <br>
  


<br><br>
      <input type="checkbox" id="jack" value="จันทร์" v-model="checkedNames">
  <label for="jack">จันทร์</label>
  <input type="checkbox" id="john" value="อังคาร" v-model="checkedNames">
  <label for="john">อังคาร</label>
  <input type="checkbox" id="mike" value="พุธ" v-model="checkedNames">
  <label for="mike">พุธ</label>
  <br>
  <input type="checkbox" id="mike" value="พฤหัส" v-model="checkedNames">
  <label for="mike">พฤหัส</label>
  <input type="checkbox" id="mike" value="ศุกร์" v-model="checkedNames">
  <label for="mike">ศุกร์</label>
  <input type="checkbox" id="mike" value="เสาร์" v-model="checkedNames">
  <label for="mike">เสาร์</label>
  <input type="checkbox" id="mike" value="อาทิตย์" v-model="checkedNames">
  <label for="mike">อาทิตย์</label>
   <br>
  <span>Checked names: {{ checkedNames }}</span> <br>
  <span>Checked subject: {{ checkedsubjects }}</span>
<br>
  <button @click="sendout">send</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
          checkedNames: [],
          checkedsubjects: [],

      selected: [], // Must be an array reference!
      options: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {text: 'Grape', value: 'grape'}
      ]
    }
  },
  methods:{
    sendout(){

      console.log(this.checkedNames);
            console.log(this.checkedsubjects);


let createPost = {
      
    
        day : this.checkedNames,
        subject :this.checkedsubjects,
     
       

      }
      console.log(createPost);
      
 axios.post('http://localhost:8000/multi3', createPost)
                // axios.post('http://localhost:8000/multi', createPost)

          .then((res) => { 
              
              console.log(res.data)
              
  
          })
          .catch(error => console.log(error))
      
    }
  }
}
</script>



<style scoped>
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border : 2px solid blue;
    border-radius : 5px
}
</style>
