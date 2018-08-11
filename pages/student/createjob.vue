<template>
<b-container fluid style="padding:0px">

<b-container fluid>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onSubmit">
<b-row>
  <b-col offset-lg="3" lg="6">
              <div v-if="step === 1">

   <b-form-group label="คุณคือใคร">
      <b-form-radio-group id="btnradios2"
                                button-variant="outline-primary"

                          buttons
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>


<br><br>

  
  
  


    <!-- <pre class="mt-3">{{ text }}</pre> -->
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

              </div>

 <div v-if="step === 2">

<b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="เบอร์ติดต่อ">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.phone"
                      required
                      placeholder="เบอร์ติดต่อ">
        </b-form-input>
      </b-form-group>
     

  <b-form-group   id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line">
        <b-form-input  class="formpor" id="exampleInput1" size="lg" 
                      type="text"
                      v-model="form.line"
                      required
                      placeholder="Line">
        </b-form-input>
      </b-form-group>
     
  
        <b-button style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;" @click.prevent="next()">ต่อไป</b-button>

        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>


    <div v-if="step === 3">

<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="genders"
                      required
                      v-model="form.gender">
        </b-form-select>
      </b-form-group>



   <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="grades"
                      required
                      v-model="form.grade">
        </b-form-select>
      </b-form-group>

      
      
         <b-button  type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
        <b-button style="background-color: white; border: 0px; padding-left: 36px;  color: grey;
    padding-right: 36px;" @click.prevent="prev()">กลับ</b-button>

    </div>

  
              <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    

    
    <br>
  </b-col></b-row>
          </form>
          <div class="loading-page" v-if="loading2">
    <p style="color: #54c686; margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 เรียบร้อย</p>
  </div>
  </div>

<b-modal  hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
         <div style="white-space: pre-wrap;">{{str5}}</div> 
      </div>  <br>
          <b-button @click="onSubmit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">ยืนยัน</b-button> <b-button style="background-color: white; border: 0px; padding-left: 36px; color: grey;
    padding-right: 36px;" @click="hideModal">แก้ไข</b-button>
    </b-modal>
</b-container>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
         selected: 'radio1',
      options: [
        { text: 'นักเรียน', value: 'นักเรียน' },
        { text: 'ผู้ปกครอง', value: 'ผู้ปกครอง' },
        
      ],
      loading: false,
      loading2: false,
    
       step:1,
       str5:'',
       subject:'',
      job: '',
      day: '',
       form: {
        email: '',
        subject: '',
        note: '',
        tuitionfee: '',
        school: '',
        dayandtime: '',
        location: '',
        food: null,
        gender: null,
        grade: null,
        checked: []
      },
     
       genders: [
        { text: 'เพศนักเรียน', value: null },
       'ชาย', 'หญิง',
      ],
        grades: [
         { text: 'ระดับชั้น', value: null },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',
      ],
    }
  },



mounted() {
      if (!this.$store.state.student) {
     this.$router.push('/student/login')

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
   this.$router.push('/agent/create')

    }

   ,
     hideModal () {
      this.$refs.myModalRef.hide()
    },
    onCreate() {
       this.$nuxt.$loading.start()
              this.loading = true
    // alert(this.str5)
    },
    onSubmit(){
    


  let createPost = {
        parent_or_student: this.selected,
        phone: this.form.phone,
        line : this.form.line,
        gender: this.form.gender,
        grade: this.form.grade,
        _id: this.$store.state.student._id

      }



      alert(createPost)
   console.log(createPost);
   
   
        axios.patch('https://frozen-mesa-40722.herokuapp.com/student/update', createPost)
          .then((res) => { 
              
              console.log(res.data)
                  
   this.$refs.myModalRef.hide()
     
       this.form.email = ''
       this.form.subject = ''
        this.form.note = ''
        this.form.tuitionfee = ''
        this.form.school = ''
       this.form.dayandtime = ''
        this.form.location = ''
        this.form.food = null
        this.form.gender = null
     
              this.loading = false
               this.loading2 = true
                this.$nuxt.$loading.finish()

  
          })
          .catch(error => console.log(error))
    
    }
},
     layout: 'student'

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

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    /* border-bottom: 2px; */
    outline: 0;
    box-shadow: 0px 1px 0px 0rem rgba(199, 199, 199, 0.25);
}

a{
 color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}

.btn {
   

}

.btn-secondary{
    color: #fff;
    background-color: #9bc3eb;
    border-color: #ffffff;
}

.btn-outline-primary{
    color: green;
}
</style>
