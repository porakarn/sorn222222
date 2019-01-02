<template>
<b-container fluid style="padding:0px">
    <b-container fluid>
        <br>

        <div style="text-align:center" >
                     <img src="/Sornstutorlogo.png" style="border-radius: 5px" height="85"> 
</div>
        <div style="text-align: center;">
         <h1 style="font-size: 20px; margin-top: 10px;  font-family: 'Roboto';">ค้นหาติวเตอร์ตัวต่อตัว</h1>

   
<br>
    <!-- <b-form-select v-model="selected" :options="options" class="mb-3" /> -->
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;     font-size: 18px;
    color: #858484;   border-radius: 7px;" class="formpor" id="exampleInput3" size="lg"
                      :options="options"
                    
                      v-model="selected">
        </b-form-select>
      </b-form-group>
<b-form-group   id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;      font-size: 18px;
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
<br>
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



   </b-container>

   <b-container fluid style="padding:0px">
       <div style=" padding:0px; background-color:#FFF2F2">
    <br>
<template   >
  <div style="background-color:#FFF2F2;     padding-left: 15px;
    padding-right: 15px;" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header  header-tag="header" class="p-1" role="tab">
        <b-btn style="text-align: left;" block href="#" v-b-toggle.accordion1 >วิธีการใช้งาน</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
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
        <b-btn style="text-align: left;" block href="#" v-b-toggle.accordion2 >Accordion 2</b-btn>
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
        <b-btn  style="text-align: left;" block href="#" v-b-toggle.accordion3 >Accordion 3</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
           ddddd
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

</div><br><br>
<br><br><br>
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
    /* border-bottom: 1px solid rgba(222, 222, 222, 0.125); */
}

</style>
