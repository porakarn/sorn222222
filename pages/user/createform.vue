<template>
<b-container fluid>
  <b-nav fill tabs>
  <b-nav-item>ทั้งหมด</b-nav-item>
 <b-nav-item @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onCreate">

              <div v-if="step === 1">

    <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
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





    <!-- <pre class="mt-3">{{ text }}</pre> -->
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

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
      
        <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="สถานที่เรียน">
        </b-form-input>
     
 </b-form-group>

        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>

   <div v-if="step === 3">

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
       <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
         <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>
            </div>

    
    <br>
 
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
      job: '',
      subject: '',
      day: '',
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
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    nextPage(){
   this.$router.push('/user/createform')

    }

   ,
    onCreate() {
      console.log('por')
      
    }
}
}
</script>
      
<style scoped>



.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
    padding-left: 4px;
}


.form-group {
  
    margin-bottom: 30px;
}

.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}
</style>
