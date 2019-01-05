
<template>

<b-container fluid style="padding:0px;">

 <b-navbar  style="  box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003; padding-bottom: 15px;
    padding-top: 15px;  background-color:#dfaea9!important; "toggleable variant="light">
     <i @click="goback" style=" font-size: 25px;
    padding-left: 4px;
    color: white;
" class="fa fa-long-arrow-left responsive" aria-hidden="true"></i> 
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
      <b-button   style="   font-size: 21px;
    
    font-weight: 500;
       color: #b7e8d9;
    background-color: #eefdf8;
    border-color: #6c757d00;
    border-radius: 18px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: kanit;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border: 0px;

"> sorns</b-button>
        
       
       
    </b-navbar>
 
<b-container fluid>

<br><strong v-b-toggle.collapse1 style="color: #4d90c1; font-weight:500">ดูวิธีการแชร์ชีทสอน</strong> <br>
 <b-collapse id="collapse1" class="mt-2">
    <p style="margin-bottom: 8px;">1.อัพโหลดไฟล์ชีทสอนลง Google Drive</p>
     <p>2.ทำการ copy url มาใส่ใน form ข้างล่าง</p>
    
  <img style="    width: 90%;" src="/urlpic3.jpg"/>
 </b-collapse>
<b-row>
<b-col md="4" offset-md="4">
<br>
 


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
       goback(){
            this.$router.go(-1)

        },
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
 },
        layout: 'noheadtutor',
         
   

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

.responsive {
  display: none;
}

.responsive2 {
  display: block;
}

/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
        display: block;
    }
    .responsive2 {
  display: none;
}
}


</style>
