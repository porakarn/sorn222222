<template>
<b-container fluid>
  <!-- <b-nav tabs>
  <b-nav-item>All</b-nav-item>
    <b-nav-item>ว่าง</b-nav-item>
  <b-nav-item>รอจ่ายเงิน</b-nav-item>
  <b-nav-item>ปิดแล้ว</b-nav-item>
</b-nav> -->
<b-nav fill tabs>
  <b-nav-item>ทั้งหมด</b-nav-item>
 <b-nav-item @click="nextPage">งานแนะนำ</b-nav-item>
 
</b-nav>
<br>
  <!-- <div>
    <b-form-input size="lg" v-model="text1"
                  type="text"
                  placeholder="Search วิชา วันเวลา สถานที่"></b-form-input>
  </div><br> -->
<div>

   
    <b-card @click="showModal(course)" style="     padding-bottom: 8px;
    padding-top: 8px;  margin-bottom: 5px;  box-shadow: rgba(111, 111, 111, 0) 0px 1px 0px 0px;
;

"> 
    <b-row>
    <b-col cols="4">
           <b-img  style="width: 100px; border-radius: 21px" src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-1/p240x240/15873069_1211350558943201_5314025003629794223_n.jpg?_nc_cat=0&oh=429da1d277ec885fbbc86409fac1dd86&oe=5BA39AF5"/>

    </b-col>    
  <b-col cols="8" style="padding-left: 0px;">
    <p style="font-size: 18px; font-weight: bold;    margin-bottom: 6px; color: #777777">Porakarn Soonthornsittipon</p> 
  <p style="margin-bottom: 8px;">IELTS , CU-AAT,  SAT MATH</p> 
     <p style="color: rgb(158, 158, 158);  font-size: 16px;     margin-bottom: 0px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 
  </p>
    </b-col> 
    </b-row>
    </b-card>
     <b-card @click="showModal(course)" style="     padding-bottom: 8px;
    padding-top: 8px;  margin-bottom: 5px; box-shadow: rgba(111, 111, 111, 0) 0px 1px 0px 0px;
"> 
    <b-row>
    <b-col cols="4">
           <b-img  style="width: 100px; border-radius: 21px" src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-1/p240x240/36383496_10156333480193418_3343711179003396096_n.jpg?_nc_cat=0&oh=66d291970c4c9e638538bb719840d369&oe=5BEA485A"/>

    </b-col>    
  <b-col cols="8" style="padding-left: 0px;">
    <p style="font-size: 18px; font-weight: bold;    margin-bottom: 6px;">Porakarn Soonthornsittipon</p> 
  <p style="margin-bottom: 8px;">IELTS , CU-AAT,  SAT MATH</p> 
     <p style="color: rgb(158, 158, 158);  font-size: 16px;     margin-bottom: 0px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 
  </p>
    </b-col> 
    </b-row>
    </b-card>
     <b-card @click="showModal(course)" style="     padding-bottom: 8px;
    padding-top: 8px;  margin-bottom: 5px; box-shadow: rgba(111, 111, 111, 0) 0px 1px 0px 0px;
"> 
    <b-row>
    <b-col cols="4">
           <b-img  style="width: 100px; border-radius: 21px" src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-1/p240x240/23795772_1560095860735987_1941231139152526865_n.jpg?_nc_cat=0&oh=ca9ffeab8f6932596624c66e31cb20b9&oe=5BEB4C36"/>

    </b-col>    
  <b-col cols="8" style="padding-left: 0px;">
    <p style="font-size: 18px; font-weight: bold;    margin-bottom: 6px;">Porakarn Soonthornsittipon</p> 
  <p style="margin-bottom: 8px;">IELTS , CU-AAT,  SAT MATH</p> 
     <p style="color: rgb(158, 158, 158);  font-size: 16px;     margin-bottom: 0px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 
  </p>
    </b-col> 
    </b-row>
    </b-card>
     <b-card @click="showModal(course)" style="     padding-bottom: 8px;
    padding-top: 8px;  margin-bottom: 5px; box-shadow: rgba(111, 111, 111, 0) 0px 1px 0px 0px;
"> 
    <b-row>
    <b-col cols="4">
           <b-img  style="width: 100px; border-radius: 21px" src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t31.0-1/29665581_597950253904227_448139003977618527_o.jpg?_nc_cat=0&oh=deec3490ffbb580ce7071a17df86eee5&oe=5BE0E849"/>

    </b-col>    
  <b-col cols="8" style="padding-left: 0px;">
    <p style="font-size: 18px; font-weight: bold;    margin-bottom: 6px;">Porakarn Soonthornsittipon</p> 
  <p style="margin-bottom: 8px;">IELTS , CU-AAT,  SAT MATH</p> 
     <p style="color: rgb(158, 158, 158);  font-size: 16px;     margin-bottom: 0px;
 "><i style="color: #F1F182;" class="fa fa-star" aria-hidden="true"></i>
</i> 4.6 (10)  	&nbsp;&nbsp; <i class="fa fa-user" aria-hidden="true"></i> 12 
  </p>
    </b-col> 
    </b-row>
    </b-card>
   
    
   
   






</div>

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







</b-container fluid>

</template>
// <script>
// import axios from 'axios';

// export default {
//    data () {
//     return {
//       course: null,
//       job3: '',
     
  
//     }
//   },
//   asyncData () {

//     return axios.get('http://localhost:8000/tutor/all')
//     .then((res) => { console.log(res.data)
//       return { courses: res.data,
               
//             }        

//     })
//   },
//     methods: {

//       nextPage(){
//                     this.$router.push('/user/suggest')

//       },
//     showModal (item) {
//       this.$refs.myModalRef.show(item) 
//       this.job3 = item.job
//       console.log(item.job  );
      

    
    
//     },
//     hideModal () {
//       this.$refs.myModalRef.hide()
//     }
//   }
// }
// </script>


<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
       padding-bottom: 0px;
    padding-top: 0px;
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
</style>
