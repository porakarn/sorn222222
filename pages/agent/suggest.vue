<template>
<b-container fluid style="padding:0px;">
<b-nav fill tabs>
  <b-nav-item @click="nextPage">ทั้งหมด</b-nav-item>
    <b-nav-item style="border-bottom: 2px solid;
    border-bottom-color: #82d9d9;
">งานแนะนำ</b-nav-item>
 
</b-nav>
<br>
<b-container fluid >


<p style=" color:#86a5ca ; text-align: center;" > งานแนะนำเป็นฟังชั่นสำหรับติวเตอร์ เราแนะนำงานของคุณให้กับติวเตอร์ที่สอนวิชานั้นๆ</p>




</b-container>
  </b-container>


</template>


<script>
import axios from 'axios';

 export default {
 

methods:{

 nextPage(){
                    this.$router.push('/agent/seeall')

      },


},

      layout: 'agent'
   

}
</script>


<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
       padding-bottom: 0px;
    padding-top: 0px;
}

.card{
    border: 1px solid rgb(255, 255, 255)!important;
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
