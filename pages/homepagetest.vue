<template>
<b-container fluid style="padding:0px">
    <b-navbar  style="  box-shadow: rgba(255, 255, 255, 0.267) -1px 2px 6px 0px;  
    padding-top: 12px;  background-color:white!important; "toggleable >
        <b-navbar-toggle style="border-color: rgba(0, 0, 0, 0);    padding-left: 0px;
    padding-right: 0px;" target="nav_text_collapse"></b-navbar-toggle>
        <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
         <!-- <b-navbar-brand style="    color: rgb(51, 193, 193);
    font-size: 28px;
    font-weight: 500;margin-left: 55px;" href="#">Sorns</b-navbar-brand> -->
     <!-- color: #a5efe3; -->
    <!-- background-color: #effdf3; -->
<b-button @click="totutor" size="lg" style="    color: #dfaea9;
    background-color: rgb(255, 255, 255);     padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 25px;
    margin-top: 4px;
    border: solid 1px;">เข้าสู่ระบบ</b-button>
 
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
                 <!-- <b-nav-item href="#">ค้นหางาน</b-nav-item>
                <b-nav-item href="#">สร้างงานใหม่</b-nav-item>
                <b-nav-item href="#">งานของคุณ</b-nav-item>
                <b-nav-item href="#">โปรไฟล์ของคุณ</b-nav-item> -->
            <b-nav-item  style=" color:#345d46;   padding-right: 65px;">   <nuxt-link class="nav-item" style="color:#345d46; " to="/student/alltutorstudent">  <i class="fa fa-search " aria-hidden="true"></i>  Search Tutor </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;">  <nuxt-link class="nav-item" style="color:#345d46; " to="/student/createjob">  <i class="fa fa-pencil" aria-hidden="true"></i> Create Post  </nuxt-link></b-nav-item>
             <b-nav-item  style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/student/yourjob"> <i class="fa fa-book" aria-hidden="true"></i> Message </nuxt-link></b-nav-item>
             <b-nav-item style="    padding-right: 65px;"><nuxt-link class="nav-item" style="color:#345d46; " to="/student/profile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </nuxt-link></b-nav-item>
              <b-nav-item  @click="logout" style="    padding-right: 100px;"><nuxt-link  style="color:#345d46; " to="/choose"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </nuxt-link></b-nav-item>

                
                
                


            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <b-container fluid>

        
        <br>
 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">
        <div style="text-align:center" >
                     <img src="/Sornstutorlogo.png" style="border-radius: 5px" height="85"> 
</div>
        <div style="text-align: center;">
         <h1 style="font-size: 20px; margin-top: 10px;  font-family: 'Roboto';">ค้นหาติวเตอร์ตัวต่อตัว</h1>

   
<br>
    <!-- <b-form-select v-model="selected" :options="options" class="mb-3" /> -->
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;     font-size: 17px;
    color: #858484;   border-radius: 7px;" class="formpor" id="exampleInput3" size="lg"
                      :options="options"
                    
                      v-model="selected">
        </b-form-select>
      </b-form-group>
<b-form-group   id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;      font-size: 17px;
    color: #858484;  border-radius: 7px;" class="formpor" id="exampleInput3" size="lg"
                      :options="locations"
                    
                      v-model="location">
        </b-form-select>
      </b-form-group>

 <b-button @click="totutor" size="lg" style=" color:white;  background-color: #DFAEA9; border: 0px; 
    width:80%;">ค้นหา</b-button>  
        <!-- <b-button size="lg" style="  background-color: white; border: 0px; padding-left: 66px; color:#33C1C1;
    padding-right: 66px;">สมัครนักเรียน</b-button>   -->
<br><br>
     


</div>
</b-col>
<br>
 <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">
<p style="font-weight:bold">ดูติวเตอร์ทั้งหมด (300)</p>
<b-row>
  <b-col style="padding-right:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/10214656830593206/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB; float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>

 <b-col style="padding-left:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/2152888421419243/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>
 <b-col style="padding-right:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/2162552630429629/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>
 <b-col style="padding-left:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/1962031117153451/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>




   </b-row>


<br>
<br>
<p style="font-weight:bold;">ดูวิชา คอร์สเรียนทั้งหมด</p>
<p><i style="color:#EF9087" class="fa fa-check-square" aria-hidden="true"></i>
Eng คณิต วิทย์ ฟิสิกซ์ เคมี ชีวะ สังคม ไทย </p>

<p><i style="color:#EF9087" class="fa fa-check-square" aria-hidden="true"></i>
อนุบาล ประถม มัธยม มหาลัย หรือ บุคคลทั่วไป หลักสูตรไทย และ หลักสูตร Inter</p>

<p><i style="color:#EF9087" class="fa fa-check-square" aria-hidden="true"></i>
GAT PAT SAT CU-TEP IELTS 9 วิชาสามัญ
ภาษาญี่ปุ่น เกาหลี ฝรั่งเศษ</p>
<br><br>

 </b-col>

   </b-container>

   <b-container fluid style="padding:0px">
       <div style=" padding:0px; background-color:#FFF2F2">
    <br>
   <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">
<template>
  <div style="background-color:#FFF2F2;     padding-left: 20px;
    padding-right: 20px;" role="tablist">
 <h1 style="text-align:center;font-size :20px; color:#DFAEA9; margin-bottom:15px;">คำถามที่พบบ่อย</h1>

    <b-card no-body class="mb-1">
      <b-card-header  header-tag="header" class="p-1" role="tab">
        <b-btn style="text-align: left;" block href="#" v-b-toggle.accordion1 >วิธีการใช้งาน <i style="float:right;padding-top: 4px;" class="fa fa-caret-down" aria-hidden="true"></i>
</b-btn>
      </b-card-header>
      <b-collapse id="accordion1"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            I start opened because <code>visible</code> is <code>true</code>
          </p>
          <p class="card-text">
            gggg
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header  header-tag="header" class="p-1" role="tab">
        <b-btn style="text-align: left;" block href="#" v-b-toggle.accordion2 >สมัครเป็นติวเตอร์อย่างไร  <i style="float:right;padding-top: 4px;" class="fa fa-caret-down" aria-hidden="true"></i></b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            ddddd
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn  style="text-align: left;" block href="#" v-b-toggle.accordion3 >เปลี่ยนติวเตอร์ได้ไหม  <i style="float:right;padding-top: 4px;" class="fa fa-caret-down" aria-hidden="true"></i></b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
           ddddd
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn  style="text-align: left;" block href="#" v-b-toggle.accordion4 >คิดราคาค่าเรียนอย่างไร  <i style="float:right;padding-top: 4px;" class="fa fa-caret-down" aria-hidden="true"></i></b-btn>
      </b-card-header>
      <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
           ddddd
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn  style="text-align: left;" block href="#" v-b-toggle.accordion5 >ทำไมต้อง Sorns  <i style="float:right;padding-top: 4px;" class="fa fa-caret-down" aria-hidden="true"></i></b-btn>
      </b-card-header>
      <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
           ddddd
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <br>
    <div style="text-align:center;">
     <b-button @click="totutor" size="lg" style=" color:white;  background-color: #DFAEA9; border: 0px; 
    width:70%;">สอบถามเพิ่มเติม</b-button>
    </div>
  </div>
  <br><br>
</template>
</b-col>
</div><br><br>
  <b-container fluid>
      <b-col style="    padding-left: 0px;
    padding-right: 0px;" md="6" offset-md="3">
<div style="text-align:center">
   
                     <img src="/Sornstutorlogo.png" style="border-radius: 5px ;margin-bottom:16px;" height="75"> 

<h1 style="font-size:19px;margin-bottom:22px;" > ใช้ครั้งแรก รับส่วนลดสูงสุด 200 บาท   </h1>
  <b-button @click="totutor" size="lg" style=" color:white;  background-color: #DFAEA9; border: 0px; 
    width:70%;">ดูรายละเอียดส่วนลด</b-button>
    <b-button @click="totutor" size="lg" style="    color: #dfaea9;
    background-color: rgb(255, 255, 255);
    border: 0px;
    width: 70%;
    margin-top: 8px;
    border: solid 1px;">เข้าสู่ระบบ</b-button>
</div>
</b-col>
</b-container>
<br><br><br>
  <b-container fluid style="padding:0px">
       <div style=" padding:0px; background-color:#2A2A2A">
<br>

<p style="color:white ; margin-left: 20px;">ติดต่อเรา </p>
<p style="color:white; margin-left: 20px;">เข้ากลุ่ม Line </p>
<p style="color:white; margin-left: 20px;">สมัครเป็นติวเตอร์</p>
<p style="color:white; margin-left: 20px;">เกี่ยวกับเรา</p>
<p style=" text-align:center;color:white;     margin-bottom: 0px;
    padding-bottom: 8px;">Copyright 2019 Sorns.co </p>


           </div>
           </b-container>

       </b-container>
       </b-container>
</template>



<script>

export default {
    data () {
        
    return {
          selected: null,
   
        options: [
        { text: 'วิชาที่สนใจเรียน', value: null },
       'ชาย', 'หญิง',
      ],
         location: null,
   
        locations: [
        { text: 'สถานที่', value: null },
       'ชาย', 'หญิง',
      ],
      text1: ''
    }
  },
   methods: {
     totutor(){
 this.$router.push('/user/fblogin')

     },
    logout () {
       this.$store.dispatch('setToken', null)
              this.$store.dispatch('setAgent', null)

      this.$store.dispatch('setUser', null)
       this.$store.dispatch('setStudent', null)

            // this.$store.dispatch('setProfile', null)

    }
  },
  
           layout: 'auth'
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}


.scrolling-wrapper {
   overflow-x: scroll !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
 &::-webkit-scrollbar {
    display: none!important;
  }
 
}

.btn-secondary {
    color: #a6a6a6;
    background-color: #ffffff;
    border-color: #ffffff;
}
.card-header {
    padding: 12px 20px;
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(255, 255, 255, 0.03);
    border-bottom: 0px solid rgba(222, 222, 222, 0.125);
}

.mb-1, .my-1 {
    margin-bottom: -1px !important;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgb(223, 174, 169);
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #dfaea9;
    border-color: #dfaea9;
}

.btn-secondary:hover {
    color: #fff;
    background-color: #dfaea9;
    border-color: #dfaea9;
}
.btn-secondary:focus, .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}
.card {
    border: 1px solid rgb(255, 255, 255);
}
</style>
