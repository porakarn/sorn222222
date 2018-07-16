<template>
<b-container fluid style="padding: 0px;">
<b-nav fill tabs>
  <b-nav-item> <nuxt-link to="/agent/myjob">ทั้งหมด</nuxt-link></b-nav-item>
 <b-nav-item >  <nuxt-link to="/agent/status/1">ว่าง </nuxt-link></b-nav-item>
  <b-nav-item   style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
"> <nuxt-link to="/agent/status/2">รอจ่ายเงิน</nuxt-link></b-nav-item>
    <b-nav-item ><nuxt-link to="/agent/status/3">ปิดแล้ว</nuxt-link></b-nav-item>


 
</b-nav>
<b-container fluid>

   <br>

 <div v-for="course in courses" >
<b-row>
  <b-col offset-lg="3" lg="6">

    <b-card @click="showModal(course)" style="   margin-bottom: 5px;   box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
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
   
    
   
  </b-col></b-row>






</div>

 <b-modal no-fade hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
     
<b-row>  <b-col cols="12" >
  <b-form-textarea style=" white-space: pre-wrap; margin-bottom: 4px;" required id="textarea1"
                     v-model="job4"
                     placeholder="Enter something"
                     :rows="5"
                     :max-rows="7">
    </b-form-textarea>
        <!-- <p style=" white-space: pre-wrap; font-size: 15px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{job4}}</p> -->
</b-col> 
                       </b-row>
      
      <b-row>
        <b-col>
            <b-button  @click="editjob" style=" padding-right:23px;  background-color: white; color: grey; border: 0px;
    "> <i class="fa fa-floppy-o" aria-hidden="true"></i>
</i>
Save </b-button>  
        <b-button v-b-modal.modal1 style="  background-color: white; color: grey; border: 0px;">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
ลบ </b-button> 
  
        </b-col>
         <b-col>
         

  <div style="    margin-top: 5px;">สถานะ : {{status2}} </div> 
</b-col>
 </b-row>  

<br>
   <b-row v-if="status2 == 'ว่าง'">
      <b-col cols="3" >
     <b-button @click="openjob" style="  background-color: #33C1C1; border: 0px; padding-left: 26px;
    padding-right: 26px;">ว่าง</b-button>  
             </b-col>
                  <b-col cols="4" >
     <b-button  @click="waitjob"  style="  background-color: white; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">รอจ่ายเงิน</b-button>  
    
             </b-col>
            
             <b-col cols="4" >
     <b-button  @click="closejob" style="  background-color: white; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">ปิดงาน</b-button>  
    
             </b-col>
            
                 

         </b-row>
         <b-row v-if="status2 == 'รอจ่าย'">
            <b-col cols="3" >
     <b-button @click="openjob" style="  background-color:white ; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">ว่าง</b-button>  
             </b-col>
                <b-col cols="4" >
     <b-button   @click="waitjob" style="  background-color: #33C1C1; border: 0px; padding-left: 26px;
    padding-right: 26px;">รอจ่ายเงิน</b-button>  
    
             </b-col>
             <b-col cols="4" >
     <b-button  @click="closejob" style="  background-color:white ; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">ปิดงาน</b-button>  
    
             </b-col>
            
                 

         </b-row>
          <b-row v-if="status2 == 'ปิด'">
            <b-col cols="3" >
     <b-button @click="openjob" style="  background-color:white ; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">ว่าง</b-button>  
             </b-col>
                <b-col cols="4" >
     <b-button  @click="waitjob" style=" background-color:white ; color: grey; border: 0px; padding-left: 26px;
    padding-right: 26px;">รอจ่ายเงิน</b-button>  
    
             </b-col>
             <b-col cols="4" >
     <b-button  @click="closejob" style=" background-color: #33C1C1; border: 0px; padding-left: 26px;
    padding-right: 26px;">ปิดงาน</b-button>  
    
             </b-col>
            
                 

         </b-row>
       
      <div class="loading-page" v-if="loading2">
    Loading...
  </div> 
      </div>
         
    </b-modal>


  <b-modal no-fade ref="myModalRef2" hide-footer  centered id="modal1" title="ต้องการลบงานนี้ใช่หรือไม่">
    <p style=" white-space: pre-wrap;" class="my-4">{{job4}}</p>
    <b-row>
     <b-col cols="6" >
     <b-button  @click="deletejob" style="  background-color: #33C1C1; border: 0px; padding-left: 46px;
    padding-right: 46px;">ลบ</b-button>  
    <div class="loading-page" v-if="loading">
    กำลังลบ...
  </div> 
    
             </b-col>
            
             </b-row>
  </b-modal>
 
</b-container>



</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment'


export default {
   data () {
    return {
        loading: false,
      loading2: false,
      course: null,
      job3: '',
      job4: '',
      isblank: '',
      status2:''
     
  
    }
  },
  asyncData (context) {
let suggest = {
      
        _creator: context.store.state.agent._id,
        status: 'รอจ่าย'

      

      }
      console.log(suggest)
    return axios.post('https://frozen-mesa-40722.herokuapp.com/agent/checkstatus', suggest)
    .then((res) => { console.log(res.data)
      return { courses: res.data,
               
            }        

    })
  },
    methods: {
       displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
         waitjob(){
     this.loading2 = true

let wait = {
        status: 'รอจ่าย',
        _id: this.job3

      }
axios.patch('https://frozen-mesa-40722.herokuapp.com/job/update', wait)
    .then((res) => { console.log(res.data)
let suggest = {
      
        _creator: this.$store.state.agent._id,
        status: 'รอจ่าย'

      }
      console.log(suggest)
  axios.post('https://frozen-mesa-40722.herokuapp.com/agent/checkstatus', suggest)
    .then((res) => { console.log(res.data)
      this.courses = res.data
               this.hideModal()
              this.loading2 = false

            })
      })
      },

    deletejob(){
       this.loading = true
        let data = {
        _id: this.job3,

      }
axios.post('https://frozen-mesa-40722.herokuapp.com/job/delete', data)
    .then((res) => { console.log(res.data)
     let suggest = {
        _creator: this.$store.state.agent._id,
          status: 'รอจ่าย'
      }
      console.log(suggest)
  axios.post('https://frozen-mesa-40722.herokuapp.com/agent/checkstatus', suggest)
    .then((res) => { console.log(res.data)
      this.courses = res.data
                    this.$refs.myModalRef2.hide()
 this.loading = false
            })
    
    
    })

    },

   editjob(){
      this.loading2 = true
   let edit = {
        _id: this.job3,
        job: this.job4

      }
axios.patch('https://frozen-mesa-40722.herokuapp.com/job/update', edit)
    .then((res) => { console.log(res.data)
    let suggest = {
      
        _creator: this.$store.state.agent._id
        

      }
      
      console.log(suggest)

  axios.post('https://frozen-mesa-40722.herokuapp.com/job/agentown', suggest)
    .then((res) => { console.log(res.data)
      this.courses = res.data
                    this.$refs.myModalRef.hide()
 this.loading2 = false
            })
    

    
    })

   },



      closejob(){
         this.loading2 = true
        let close = {
        status: 'ปิด',
        _id: this.job3

      }
axios.patch('https://frozen-mesa-40722.herokuapp.com/job/update', close)
    .then((res) => { console.log(res.data)
  let suggest = {
        _creator: this.$store.state.agent._id,
          status: 'รอจ่าย'
      }
axios.post('https://frozen-mesa-40722.herokuapp.com/agent/checkstatus', suggest)    
.then((res) => { console.log(res.data)
      this.courses = res.data
               this.hideModal()
                this.loading2 = false
            })
      })
      },
       openjob(){
           this.loading2 = true
        let close = {
        status: 'ว่าง',
        _id: this.job3

      }
axios.patch('https://frozen-mesa-40722.herokuapp.com/job/update', close)
    .then((res) => { console.log(res.data)
  let suggest = {
        _creator: this.$store.state.agent._id,
          status: 'รอจ่าย'
      }
axios.post('https://frozen-mesa-40722.herokuapp.com/agent/checkstatus', suggest)
    .then((res) => { console.log(res.data)
      this.courses = res.data
               this.hideModal()
                this.loading2 = false
            }        

    )
      })
      },

      nextPage(){
                    this.$router.push('/user/suggest')

      },
    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item._id
      this.job4 = item.job
      this.status2 = item.status
      console.log(this.status2);
      

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    hideModal2 () {
      this.$refs.myModalRef2.hide()
    }
  },
       layout: 'agent'

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


.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}
</style>
