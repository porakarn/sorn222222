<template>
<b-container fluid style="padding:0px">
  <!-- <b-nav tabs>
  <b-nav-item>All</b-nav-item>
    <b-nav-item>ว่าง</b-nav-item>
  <b-nav-item>รอจ่ายเงิน</b-nav-item>
  <b-nav-item>ปิดแล้ว</b-nav-item>
</b-nav> -->
<b-nav fill tabs>
  <b-nav-item  style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
">ทั้งหมด</b-nav-item>
 <b-nav-item @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>

<b-container >
<br> 
  <!-- <div>
    <b-form-input size="lg" v-model="text1"
                  type="text"
                  placeholder="Search วิชา วันเวลา สถานที่"></b-form-input>
  </div><br> -->
    <div v-for="course in courses" >


    <b-card @click="showModal(course)" style="   margin-bottom: 5px;   box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
" 
           > <b-row>  <b-col cols="10" style="    padding-right: 0px;
">
        <p style=" white-space: pre-wrap; font-size: 16px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{ course.job}}</p>
 <div class="por" >
        <a   href="#" v-show="course.subject.length >1"
           class="card-link">{{course.subject}}</a>
        <b-link href="#" v-show="course.day.length >1"
                class="card-link"   >{{course.day}}</b-link></div></b-col> 
                        <b-col style="    padding-left: 10px;
    padding-right: 3px;" cols="2">ว่าง</b-col> </b-row>

    </b-card>
   
    
   
   






</div>
<br><br><br>

 <b-modal hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
          <div style="white-space: pre-wrap;">{{job3}}</div>

      
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
import axios from 'axios';

export default {
   data () {
    return {
      course: null,
      job3: '',
      isblank: ''
     
  
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

      nextPage(){
                    this.$router.push('/user/suggest')

      },
    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item.job
      console.log(item.job  );
      

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
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
</style>
