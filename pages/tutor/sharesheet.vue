
<template>

<b-container fluid style="padding:0px;">

  <b-nav fill tabs style=" margin-top:-7px;    background-color: #cdf4d7;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item @click="nextPage" class="responsive" >ค้นหาชีทสอน </b-nav-item>
 <b-nav-item class="responsive"   style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #5b7a69; padding-right: 12px;
    padding-left: 12px;
" >แชร์ชีทสอน</b-nav-item>
 
</b-nav>
 
<b-container fluid>

<br><br>
<b-row>
<b-col md="4" offset-md="4">




      <form @submit.prevent="onCreate">

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
                    description="ชีทคณิตศาสตร์ เรื่องตรีโกณมิติ">
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
    padding-right: 36px;">ส่ง</b-button>
  
    <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
    <div class="loading-page" v-if="loading2">
    <p style="color: #54c686; margin-top: 7px;"><i class="fa fa-check-circle" aria-hidden="true"></i>
 คุณได้ทำการ submit ชีทเรียบร้อยแล้ว</p>
  </div>
  <div  >
    <p style="color: red; margin-top: 7px;">
 {{message}}</p>
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
        message: '',
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

},




  methods: {
    nextPage(){
        this.$router.push('/tutor/sheetall')
    },
    
    onCreate() {

 let data = {
          docurl: this.docurl,
          sheetname: this.sheetname,
          subject: this.subject,
          gradeyear: this.gradeyear,
          owner: this.$store.state.user.name
          
        }



                         // axios.get('http://localhost:8000/job/all')

       if (this.docurl.includes("docs.google") )  {
            this.$nuxt.$loading.start()
             this.message = ''
  this.loading = true
        console.log(data);
        
        axios.post('https://frozen-mesa-40722.herokuapp.com/sheet/create', data)
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
            this.$nuxt.$loading.finish()
             this.loading = false
             this.loading2 = true
             this.docurl = ''
             this.sheetname = ''
             this.subject = null
             this.gradeyear = null
         
          })
          .catch(error => console.log(error))

    }  else{
          this.message = 'คุณกรอก Googledoc url ไม่ถูกต้อง'
    }
          var data2 = {
              canseesheet : true,
              _id: this.$store.state.user._id 
          }

if (!this.$store.state.user.canseesheet ) {
     if (this.docurl.includes("docs.google") )  {
 this.message = ''
  axios.patch('https://frozen-mesa-40722.herokuapp.com/update2', data2 )
          .then((res) => {
            // this.$router.push('/agent/create')
            console.log(res.data)
            this.$store.dispatch('setUser', res.data)
           
             
          })
          .catch(error => console.log(error))
   this.$store.dispatch('setAgent', null)

} else {
  this.message = 'คุณกรอก Googledoc url ไม่ถูกต้อง'
}


}

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
