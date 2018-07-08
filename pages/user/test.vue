<template>

<b-container fluid>
  <b-nav fill tabs>
  <b-nav-item @click="nextPage">ทั้งหมด</b-nav-item>
 <b-nav-item >งานแนะนำ</b-nav-item>
 
</b-nav>


<br><br>
  <div>
             <form @submit.prevent="onCreate">

        <div v-if="step === 1">
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="วิชาที่อยากเรียน">
        </b-form-input>
      </b-form-group>
      <!-- <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group> -->
      <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
        <button @click.prevent="next()">Next</button>

        </div>
          <div v-if="step === 2">

        <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="วัน เวลาเรียน สถานที่">
        </b-form-input>
      </b-form-group>
      
        <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="ค่าสอน ค่าแนะนำ (ถ้ามี)">
        </b-form-input>
      </b-form-group>
        <button @click.prevent="prev()">Previous</button>
    <button @click.prevent="next()">Next</button>
          </div>
            <div v-if="step === 3">

       <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input id="exampleInput1" size="lg"  class="formpor"
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="หมายเหตุเพิ่มเติม">
        </b-form-input>
      </b-form-group>
       <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
         <button @click.prevent="prev()">Previous</button>
            </div>
             </form>
  </div>

</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
       step:1,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'ระดับชั้น', value: null },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
      ],
   
    }
  },
  methods: {
    onCreate(){
      alert('por')
    },
     prev() {
      this.step--;
      console.log(this.step);
      
    },
    next() {
      this.step++;
    },
    // onSubmit (evt) {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
 
  }
}
</script>
