<template>
<b-container fluid style="padding:0px;">
  <!-- <b-nav tabs>
  <b-nav-item>All</b-nav-item>
    <b-nav-item>ว่าง</b-nav-item>
  <b-nav-item>รอจ่ายเงิน</b-nav-item>
  <b-nav-item>ปิดแล้ว</b-nav-item>
</b-nav> -->
<b-navbar  style="    padding-bottom: 12px;
    padding-top: 12px;  background-color:#dfaea9!important; "toggleable variant="light">
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
      <b-button  class="responsive2" style="  font-size: 21px;
   
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
        border-bottom-width: 0px
"> sorns</b-button>
        
          <b-button v-b-modal.modal1  class="responsive" style="
          font-size: 18px;
        color: #616161;
background-color: rgb(250, 254, 251);
    border-color: #6c757d00;
    border-radius: 18px;
      padding-left: 17px;
    padding-right: 20px;

"><i style=" font-size: 20px; color: #667a6b ; " class="fa fa-search nav-item " aria-hidden="true"></i> ลองค้นหางานดูสิ</b-button>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
               <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; font-weight: 400; font-size:16px" to="/agent/seeall">  <i class="fa fa-search " aria-hidden="true"></i>  Search  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46;font-weight: 400;  font-size:16px " to="/agent/create">  <i class="fa fa-pencil" aria-hidden="true"></i> Add New  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46;font-weight: 400; font-size:16px " to="/agent/myjob"> <i class="fa fa-book" aria-hidden="true"></i> My Jobs </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; font-weight: 400; font-size:16px" to="/agent/createprofile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46;font-weight: 400; font-size:16px " to="/agent/createprofile"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                <!-- <b-nav-text>Navbar text</b-nav-text>
                <nuxt-link to="/user/user">Users</nuxt-link>
                <nuxt-link to="/profile">Profile</nuxt-link>
                <nuxt-link to="/tutor/job">job</nuxt-link>
                <nuxt-link to="/user/seeall">Seeall</nuxt-link>
                <nuxt-link to="/user/alltutorprofile">Createprofileagent</nuxt-link>
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




<b-nav fill tabs style=" margin-top:-7px;    background-color: #dfaea9;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item  class="responsive"  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #ffffff; padding-right: 12px;
    padding-left: 12px;
">ทั้งหมด </b-nav-item>
 <b-nav-item class="responsive"  @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>
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
    <b-button  @click="sendout" style="    width: 100%;  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ทำการค้นหา</b-button>  
      <div style="color: grey" class="loading-page" v-if="loading">
    Loading...
  </div>
  </div>
  </b-modal>
<br> 

<b-container fluid style="padding-left: 13px;
    padding-right: 13px;"> 

  <b-row class="responsive2">
 <b-col offset-lg="3" lg="6">
   <div style="text-align: center;">
 <b-button v-b-modal.modal1   style="font-size: 17px; color: #667a6b; 
  font-size: 18px;
    color: #454e47;
    background-color: #fff4f3;
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
      <b-col cols="8" style="padding-left: 8px;">
 <a   href="#" v-show="course.subject.length >0"
           class="card-link">{{course.subject.toString().split(',').join(' ')}}</a>
        <b-link href="#" v-show="course.day.length >0"
                class="card-link"   >{{course.day.toString().split(',').join(' ')}}</b-link> 
                
</b-col>


<b-col cols="4" style="margin-top: -15px;  padding-left: 20px; ">
  <strong v-if="course._creator" style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{course.creator_name}}  </strong> 

   <strong v-else style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{course.creator_name.replace(/\w+[.!?]?$/, '')}}  </strong> 

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(course.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>



</b-row>
    
  

    
   
   






</div>

 <b-modal hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
        <div class="d-block ">
          <div style="     margin-bottom: 10px;white-space: pre-wrap;">{{job3}}</div>

          <nuxt-link v-if="tutorid2"  :to="tutorid3">    <strong style="    color: rgb(49, 103, 183);
    font-size: 17px;
    margin-top: 0px;
    float: right;
    margin-bottom: 3px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-user-o" style="    font-size: 16px;
    color: grey;" aria-hidden="true"></i> {{creator_name2.replace(/\w+[.!?]?$/, '') }}  </strong> </nuxt-link>

    <nuxt-link v-if="agentid2"  :to="agentid3">    <strong style="    color: rgb(49, 103, 183);
    font-size: 17px;
    margin-top: 0px;
    float: right;
    margin-bottom: 3px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-user-o" style="    font-size: 16px;
    color: grey;" aria-hidden="true"></i> {{creator_name2.replace(/\w+[.!?]?$/, '') }}  </strong> </nuxt-link>
       

   <b-row style="   margin-top: 8px;   margin-bottom: 16px;">

     <b-col cols="12">
      <!-- <b-img style="border-radius: 5px" width="50px" height="50px" fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" /> -->
   
                  <strong style="    color: rgb(49, 103, 183);
    font-size: 16px;
  
    margin-bottom: 0px;
    font-weight: 400;
    padding-right: 10px;
"> <i class="fa fa-phone" aria-hidden="true"></i> {{ contact2 }}
   </strong>  

       <strong style="    color: rgb(49, 103, 183);
    font-size: 16px;
  
    margin-bottom: 0px;
    font-weight: 400;
    padding-right: 10px;
">Line: {{ line2 }}
   </strong>   
               </b-col>   
</b-row>

   <b-row>
             <b-col cols="12" >


     <b-button  :href="linelink" style=" width:100%;     color: white; background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">ติดต่อ</b-button>  


             </b-col>
                  

         </b-row>
      </div>
    </b-modal>

    

 <br> <br> <br>


</b-container>

</b-container fluid>

</template>
<script>
import axios from 'axios';
import moment from 'moment'

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
      creator_name2 : '',
      contact2:'',
      line2 :'',
      linelink:'',
        tutorid2:'',
      tutorid3:'',
      agentid2:'',
      agentid3:''



  
    }
  },
// mounted() {
  

     

      
//     return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
//     .then((res) => { 
//       console.log(res.data)
//      this.courses = res.data
               
//             })        

    
  


// },



  //  fetch ({ context, params }) {
  //   return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
  //   .then((res) => {
  //     console.log(context.store.state.user.tag);
      

  //   })
  // },

  asyncData (context) {

    
      console.log(context);
      
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
this.loading = true
  this.$nuxt.$loading.start()
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
             this.$refs.myModalRef4.hide()
             this.loading = false
               this.$nuxt.$loading.finish()

          })
          .catch(error => console.log(error))
      
    },
// 


  nextPage(){
                    this.$router.push('/agent/suggest')

      },


    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item.job
      console.log(item.job  );
          this.creator_name2 = item.creator_name
    this.contact2 = item.contact
    this.line2 = item.line
    // this.linelink = 'http://line.me/ti/p/~' + item.line
    this.tutorid2 = item.tutorid
    this.tutorid3 = '/tutor/' + item.tutorid
    this.agentid2  = item._creator 
    this.agentid3 = '/agent/' + item._creator

 if(item.contact = 'ติดต่อตรงปุ่มข้างล่าง'){
       this.linelink = item.line
    } else {
          this.linelink = 'http://line.me/ti/p/~' + item.line

    }
    
    console.log(this.linelink);
    

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
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
    
        padding-bottom: 6px;
    padding-top: 8px;
}



.card-text{
        color: #2f2f2f;
    margin-bottom: 6px;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #72d1d0;
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


a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}


label{

  margin-left: 6px!important;
}
/* .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
 

    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0);
} */

.btn-secondary.focus, .btn-secondary:focus {
    box-shadow: 0 0 0 0.2rem hsla(208, 7%, 46%, 0);
}

.btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);
}

.btn-secondary.focus, .btn-secondary:focus {
    box-shadow: 0 0 0 0.2rem hsla(208, 7%, 46%, 0);
}
</style>
