<template>
<b-container fluid style="padding:0px">

<b-container fluid>
<br><br>
  <div> <div class="my-3">
 
</div>
          <form @submit.prevent="onSubmit">
<b-row>
  <b-col offset-lg="3" lg="6">

<div v-if="picture" style="text-align:center " >
                     <img :src="picture" style="border-radius: 5px;margin-bottom: 18px;" height="100"> 
                        <b-form-group>
      <b-form-radio-group id="btnradios2"
                                button-variant="outline-primary"

                          buttons
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>


</div>





  
  
  


 
           

 

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
     


 
 <b-row class="my-1">
    <b-col cols="6" >


<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="genders"
                      required
                      v-model="form.gender">
        </b-form-select>
      </b-form-group>

    </b-col>
 <b-col cols="6" >
   <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="grades"
                      required
                      v-model="form.grade">
        </b-form-select>
      </b-form-group>

 </b-col>
 </b-row>
      
         <b-button  type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">เรียบร้อย</b-button>
   
   

  
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

<br> <br> <br> <br> <br>
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
      picture: '',
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
     this.$router.push('/student/testlogin')

    }

var data = {
    name: this.$store.state.student.name
}
    axios.post('https://frozen-mesa-40722.herokuapp.com/student/profile', data ) .then((res) => { 
              
              console.log(res.data)
      this.selected = res.data.parent_or_student
        this.form.phone = res.data.phone
        this.form.line = res.data.line
if (res.data.gender) {
   this.form.gender = res.data.gender
}

        if (res.data.grade) {
                  this.form.grade = res.data.grade
        }
        this.picture = res.data.picture
          })
          .catch(error => console.log(error))
},
methods: {
   
    nextPage(){
   this.$router.push('/agent/create')

    }

   ,
     
  
    onSubmit(){
    


  let createPost = {
        parent_or_student: this.selected,
        phone: this.form.phone,
        line : this.form.line,
        gender: this.form.gender,
        grade: this.form.grade,
        _id: this.$store.state.student._id

      }

   let createPost2 = {
        parent_or_student: this.selected,
        phone: this.form.phone,
        line : this.form.line,
        gender: this.form.gender,
        grade: this.form.grade,
        _id: this.$store.state.student._id,
        name: this.$store.state.student.name,
        email : this.$store.state.student.email,
        picture: this.$store.state.student.picture,
        fbid: this.$store.state.student.fbid
      }

  

      alert(createPost)
   console.log(createPost);
   this.$store.dispatch('setStudent', createPost2)

    
   console.log(createPost);
   
   
        axios.patch('https://frozen-mesa-40722.herokuapp.com/student/update', createPost)
          .then((res) => { 
              
              console.log(res.data)
                  

     
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
