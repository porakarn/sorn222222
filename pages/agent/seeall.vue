<template>
<b-container fluid style="padding:0px">

   <b-navbar  style="    padding-bottom: 12px;
    padding-top: 12px;  background-color:#cdf4d7!important; box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;"toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
         <b-navbar-brand class="responsive2" style="    color: rgb(51, 193, 193);
    font-size: 28px;
    font-weight: 500;margin-left: 55px;" href="#">Sorns</b-navbar-brand>
        
          <b-button v-b-modal.modal1  class="responsive" style="font-size: 17px; color: #667a6b; float:right;
    background-color: #effdf3;
    border-color: #6c757d00;
    border-radius: 18px;
"><i style=" font-size: 20px; color: #667a6b;" class="fa fa-search nav-item " aria-hidden="true"></i> ลองค้นหางานดูสิ</b-button>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
               <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/seeall">  <i class="fa fa-search " aria-hidden="true"></i>  Search  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/agent/create">  <i class="fa fa-pencil" aria-hidden="true"></i> Add New  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/myjob"> <i class="fa fa-book" aria-hidden="true"></i> My Jobs </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/agent/createprofile"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                <!-- <b-nav-text>Navbar text</b-nav-text>
                <nuxt-link to="/user/user">Users</nuxt-link>
                <nuxt-link to="/profile">Profile</nuxt-link>
                <nuxt-link to="/tutor/job">job</nuxt-link>
                <nuxt-link to="/user/seeall">Seeall</nuxt-link>
                <nuxt-link to="/user/createprofile">Createprofileagent</nuxt-link>
                <nuxt-link to="/agent/signup">Signup</nuxt-link>
                <nuxt-link to="/choose">Choose</nuxt-link>
                <nuxt-link to="/agent/myjob">myjob</nuxt-link>
                <nuxt-link to="/agent/status/1">ว่าง</nuxt-link>
                <nuxt-link to="/agent/status/2">รอ</nuxt-link>
                <nuxt-link to="/agent/status/3">ปิดแล้ว</nuxt-link>
                
                
                 -->


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>



<b-nav fill tabs >
  <b-nav-item  class="responsive"  style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
">ทั้งหมด</b-nav-item>
 <b-nav-item class="responsive"  @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>



<b-container >

 
  
  <b-modal no-fade hide-header  hide-footer ref="myModalRef4"  id="modal1" >

<div>
  <p style="font-size:20px;"> เลือกวิชาที่อยากสอน <i style=" font-size: 20px; color: #667a6b;" class="fa fa-search nav-item " aria-hidden="true"></i></p>

    <b-form-select style="  padding-top: 10px;
    padding-bottom: 10px;" multiple :select-size="6"    v-model="selected" :options="options" class="mb-3">
    </b-form-select>
   <strong v-show="selected.length >0" style="    background-color: #c6f1d0;
    padding: 5px;
    border-radius: 4px;
    color: #086542;"> {{ selected.toString().split(',').join(' ') }}</strong></div>
  </div>







<br><br>
      <input type="checkbox" id="jack" value="จันทร์" v-model="checkedNames">
  <label for="jack">จันทร์</label> &nbsp;&nbsp;&nbsp;
  <input step="    height: 31px;
    width: 31px;" type="checkbox" id="john" value="อังคาร" v-model="checkedNames">
  <label for="john">อังคาร</label>&nbsp;&nbsp;&nbsp;
  <input type="checkbox" id="mike" value="พุธ" v-model="checkedNames">
  <label for="mike">พุธ</label>&nbsp;&nbsp;&nbsp;
  <input type="checkbox" id="mike" value="พฤหัส" v-model="checkedNames">
  <label for="mike">พฤหัส</label>
  <br>
  <input type="checkbox" id="mike" value="ศุกร์" v-model="checkedNames">
  <label for="mike">ศุกร์</label>&nbsp;&nbsp;&nbsp;
  <input type="checkbox" id="mike" value="เสาร์" v-model="checkedNames">
  <label for="mike">เสาร์</label>&nbsp;&nbsp;&nbsp;
  <input type="checkbox" id="mike" value="อาทิตย์" v-model="checkedNames">
  <label for="mike">อาทิตย์</label>
   <br>
<br>
  <!-- <button @click="sendout">send</button> -->
    <b-button  @click="sendout" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ทำการค้นหา</b-button>  
    <div class="loading-page" v-if="loading">
    Loading...
  </div>
  </div>
  </b-modal>
<br> 


  <!-- <div>
    <b-form-input size="lg" v-model="text1"
                  type="text"
                  placeholder="Search วิชา วันเวลา สถานที่"></b-form-input>
  </div><br> -->
  <b-row class="responsive2">
 <b-col offset-lg="3" lg="6">
   <div style="text-align: center;">
 <b-button v-b-modal.modal1   style="font-size: 17px; color: #667a6b; 
  font-size: 18px;
    color: #454e47;
    background-color: #f3f3f3;
    border-color: #6c757d00;
    border-radius: 18px;
    padding-left: 60px;
    padding-right: 60px;

"><i style=" font-size: 20px; color: #667a6b;" class="fa fa-search nav-item " aria-hidden="true"></i> ลองค้นหางานดูสิ</b-button>
   </div> <br>
 </b-col></b-row>

    <div v-for="course in courses" >

<b-row>
 <b-col offset-lg="3" lg="6">


    <b-card @click="showModal(course)" style="   margin-bottom: 5px; 
    box-shadow: rgba(146, 146, 146, 0.1) 0px 1px 3px 0px;
" 
           > <b-row>  <b-col cols="10" style="    padding-right: 0px;
">
        <p style=" white-space: pre-wrap; font-size: 16px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{ course.job}}</p>
 <div class="por" >
       
</div></b-col> 
                        <b-col style="    padding-left: 10px;
    padding-right: 3px;" cols="2">{{course.status}}</b-col> </b-row>
    <b-row>
      <b-col style="padding-left: 8px;">
 <a   href="#" v-show="course.subject.length >0"
           class="card-link">{{course.subject.toString().split(',').join(' ')}}</a>
        <b-link href="#" v-show="course.day.length >0"
                class="card-link"   >{{course.day.toString().split(',').join(' ')}}</b-link> 
                 <strong style="color:#a5cae4;  font-size: 14px; margin-top: 4px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(course.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>



</b-row>
    
   




</div>
<br><br><br>

 <b-modal no-fade hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
        <div >
          <div style="white-space: pre-wrap;">{{job3}}</div>

      
             <!-- <p style="color: grey"> ส่งโปรไฟล์ของคุณ</p>
         <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea> -->
    <!-- <p style="color: grey">  Copy</p> -->
    <br>
   <b-row>
             <b-col cols="9" >
     <b-button size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  
             </b-col>
               <b-col cols="3">
      <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />

               </b-col>         

         </b-row>
           </div>

      </div>
    </b-modal>

     <!-- <b-modal hide-header  hide-footer id="modal-center" centered title="Bootstrap-Vue">
 <p style=" color:#2f2f2f" class="card-text">A123 IELTS ขอพี่ จุฬา
             <br>ช ม 4 ( สวนกุหลาบ ) 
<br>  สยามพารากอน ส-อ 12-14 น
<br> ค่าสอน 600 fee 1200
 {{ job}}
         </p> 
         
               
             <p style="color: grey"> ส่งโปรไฟล์ของคุณ</p>
         <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
    <p style="color: grey">  Copy</p>
   <b-row>
             <b-col cols="9" >
     <b-button size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  
             </b-col>
               <b-col cols="3">
      <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />

               </b-col>         

         </b-row>
          </b-modal>

 -->





</b-container>

</b-container >

</template>
<script>
import moment from 'moment'

import axios from 'axios';

export default {
   data () {
    return {
         loading: false,
      status: 'not_accepted',
       selected: [], // Array reference
      options: [
        { value: 'ENG', text: 'ENG' },
        { value: 'คณิต', text: 'คณิตศาสตร์' },
        { value: 'วิทย์', text: 'วิทยาศาสตร์' },
        { value: 'ไทย', text: 'ไทย' },
        { value: 'สังคม', text: 'สังคม' },
        { value: 'ฟิสิกส์', text: 'ฟิสิกส์' },
        { value: 'เคมี', text: 'เคมี' },
        { value: 'ชีวะ', text: 'ชีวะ' },
        { value: 'จีน', text: 'ภาษาจีน' },
        { value: 'ญี่ปุ่น', text: 'ภาษาญี่ปุ่น' },
        { value: 'เกาหลี', text: 'ภาษาเกาหลี' },


      ],
       checkedNames: [],
      checkedsubjects: [],
      courses: null,
      job3: '',
      isblank: '',
      text:'',
      profile2: false,
     
  
    }
  },

  asyncData () {

    return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
    .then((res) => { console.log(res.data)
      return { courses: res.data,
               
            }        

    })
  },
    methods: {
      logout(){
  this.$store.dispatch('setToken', null)
              this.$store.dispatch('setAgent', null)

      this.$store.dispatch('setUser', null)
       this.$store.dispatch('setStudent', null)
     this.$router.push('/')

      },
        displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
     


        sendout(){
            this.$nuxt.$loading.start()
              this.loading = true

      console.log(this.checkedNames);
            console.log(this.selected);


let createPost = {
      
    
        day : this.checkedNames,
        subject :this.selected,
     

       

      }
      console.log(createPost);
      
 axios.post('https://frozen-mesa-40722.herokuapp.com/multi3', createPost)
                // axios.get('http://localhost:8000/job/all')

          .then((res) => { 
              
              console.log(res.data)
              this.courses = res.data
                   this.$nuxt.$loading.finish()
          this.loading = false
             this.hideModal ()
          })
          .catch(error => console.log(error))
      
    },

      nextPage(){
                    this.$router.push('/user/suggest')

      },
    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item.job
      this.text = 'วิชาที่สอน: '+ this.$store.state.user.subject + this.$store.state.user.profile
      console.log(item.job  );

      if (this.$store.state.user.profile) {
        this.profile2 = true
      }

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
      this.$refs.myModalRef4.hide()
    }
  },
        layout: 'nohead'
}
</script>


<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
    padding-top: 6px;
}



.card-text{
        color: #2f2f2f;
    margin-bottom: 6px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #82D9D9;
    padding: 2px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 15px;

}

.por{
    margin-left: -7px
}
.card{
      margin-bottom: 5px;
box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(193, 193, 193, 0.12);
    border-radius: 6px;
}

.nav-link:focus {
    border-color: #e9ecef00;
    
}

.modal-dialog modal-md{
    position: relative  !important;
    width: auto  !important;
    
    margin: 0.0rem !important;
    pointer-events: none  !important;
        margin-top: 0px  !important;
    margin-left: 0px  !important;
    margin-right: 0px  !important;
}

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


label{
  padding-left: 4px;
  font-size: 18px;
  margin-top: -2px;
}

.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0);
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
