<template>

<b-container fluid style="padding:0px;">

  
 
<b-container fluid>

<br><br>
<b-row>
<b-col md="4" offset-md="4">




      <form @submit.prevent="onEdit">

<br>

<b-row class="my-1">
    <b-col >
      <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="googledoc url">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="docurl" type="text" placeholder="Google doc url"></b-form-input>
    
      </b-form-group>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col  style="margin-top: 19px;">
          <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="ชีทคณิตศาสตร์ เรื่องตรีโกน">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="sheetname" type="text" placeholder="ชื่อชีทเอกสาร"></b-form-input>
          </b-form-group>
    </b-col>

  </b-row>

  <b-row class="my-1">
    <b-col cols="6" >
     <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="subjects"
                      required
                      v-model="subject">
        </b-form-select>
      </b-form-group>
    </b-col>

  <b-col cols="6" >
     <b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select  class="formpor" id="exampleInput3" size="lg"
                      :options="gradeyears"
                      required
                      v-model="gradeyear">
        </b-form-select>
      </b-form-group>

  </b-col>

  </b-row>
  <br>

<br>
  <div>
  <b-button type="submit" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">แก้ไข</b-button>

      <b-button @click="onDelete" style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">ลบ</b-button>
  
    <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    <div class="loading-page" v-if="loading2">
    <p style="color: #54c686; margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 คุณได้ทำการ แก้ไข ชีทเรียบร้อยแล้ว</p>
  </div>
<br>
<br>
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
      
        docurl: '',
        sheetname: '',
        loading: false,
        loading2: false,
      
        subject: null,
        gradeyear: null,
           subjects: [
        { text: 'วิชา', value: null },
       'ENG', 'คณิต', 'วิทย์','ไทย','สังคม','ฟิสิกส์','เคมี','ชีวะ','จีน','ญี่ปุ่น','เกาหลี'
      ],
           gradeyears: [
 { text: 'ระดับชั้น', value: null },
       'มหาลัย', 'ม.6', 'ม.5', 'ม.4', 'ม.3', 'ม.2', 'ม.1', 'ป.6','ป.5','ป.4','ป.3','ป.2','ป.1','อนุบาล','อื่นๆ',

       
      ],

    }
},

//


mounted() {

console.log(  this.$route.params.id);

    var data ={
        _id : this.$route.params.id
    }
 axios.post('https://frozen-mesa-40722.herokuapp.com/sheet/seedetails', data)
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
              this.docurl = res.data.docurl
              this.sheetname = res.data.sheetname
              this.subject = res.data.subject
              this.gradeyear = res.data.gradeyear
      
          })
          .catch(error => console.log(error))

    

},




  methods: {
    nextPage(){
        this.$router.push('/tutor/sheetall')
    },
    onDelete(){
let data = {
           _id : this.$route.params.id
          
        }

        console.log(data);
        
        axios.post('https://frozen-mesa-40722.herokuapp.com/sheet/delete', data)
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
            this.$router.push('/tutor/yoursheet')
    
          })
          .catch(error => console.log(error))


    },
    
    onEdit() {
 this.$nuxt.$loading.start()
  this.loading = true
 let data = {
          docurl: this.docurl,
          sheetname: this.sheetname,
          subject: this.subject,
          gradeyear: this.gradeyear,
          owner: this.$store.state.user.name,
           _id : this.$route.params.id
          
        }



                         // axios.get('http://localhost:8000/job/all')

         
        console.log(data);
        
        axios.patch('https://frozen-mesa-40722.herokuapp.com/sheet/update', data)
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
            this.$nuxt.$loading.finish()
             this.loading = false
             this.loading2 = true
          
          })
          .catch(error => console.log(error))

          //    axios.post('https://tutor-8e729.firebaseio.com/agent/create.json', data)
          // .then(res => console.log(res.data))
          // .catch(error => console.log(error))

}
 }
   

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
a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}

</style>
