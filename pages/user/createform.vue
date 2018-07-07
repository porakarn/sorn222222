<template>

<b-container fluid>
  <b-nav fill tabs>
  <b-nav-item @click="nextPage">ทั้งหมด</b-nav-item>
 <b-nav-item >งานแนะนำ</b-nav-item>
 
</b-nav>


<br><br>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description=" ตัวอย่าง ภาษาอังกฤษ GAT ENG">
        <b-form-input id="exampleInput1" size="lg" 
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
      <b-form-group id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3" size="lg"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Subhhhmit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
ds
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'ระดับชั้น', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

