<template>
<b-container fluid>
    <br>
    <b-row>
        <b-col cols="3">
  <b-img rounded="circle" src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/15873069_1211350558943201_5314025003629794223_n.jpg?_nc_cat=0&oh=c1a059664ab99de2d57d302be4551693&oe=5BA53CA7"  width="75" height="75" alt="img" class="m-1" />
        </b-col>
         <b-col cols="9">
      <p>Porakarn Soonthorn</p>
      <p>อายุ 22 ปี</p>
         </b-col>     
    </b-row>

 <div class="ere">
   <b-row class="my-1">
    <b-col sm="10">
      <b-form-input class="formpor" id="input-large"  type="text" placeholder="Email"></b-form-input>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="10" style="margin-top: 14px;">
      <b-form-input class="formpor" id="input-large"  type="text" placeholder="เบอร์โทร "></b-form-input>
    </b-col>
  </b-row></div>
 <p style="    margin-top: 17px;">วิชาที่คุณสอน
</p>
  <div class="por" >
        <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">ENG</b-link>
                  <a href="#"
           class="card-link">IELTS</a>
        <b-link href="#"
                class="card-link">ENG</b-link></div>
<br>
                 <p style="color: #8f9aa4; border:1px !important;">วางงานของคุณที่นี่</p>
    <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="5"
                     :max-rows="9">
    </b-form-textarea>
    <br>
    <b-button style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">สมัคร</b-button>
</b-container>
</template>



<style scoped>
<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.formpor{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
}

.card-link{
        margin-left: 7px;
         color: #ffffff;
    text-decoration: none;
    background-color: #33C1C1;
    padding: 2px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 15px;

}
</style>
