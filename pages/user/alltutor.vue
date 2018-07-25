<template>

<b-container fluid style="padding:0px;">
<b-nav fill tabs style=" margin-top:-7px;    background-color: #cdf4d7;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item  class="responsive"  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #5b7a69; 
">ค้นหาติวเตอร์ </b-nav-item>
 <b-nav-item style="padding-right: 10px;
    padding-left: 10px;" class="responsive"  @click="nextPage">ค้นหาชีทสอน</b-nav-item>
 
</b-nav>

<b-container fluid style="padding:0px;" >
       <br>
        <p style=" color:#86a5ca ; text-align: center;
" >
 ติวเตอร์ทั้งหมด ({{ tutors.length }})</p>


 
   
     <b-card @click="seeeach(tutor._id)" style="margin-bottom:0px;     border: 1px solid rgba(164, 164, 164, 0.125);
    border-radius: 1px;     box-shadow: rgba(148, 142, 142, 0) 0px 1px 3px -1px, rgba(255, 251, 251, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px;

"  v-for="tutor in tutors" :key="tutor._id" >
         
        
       <b-row style="margin-top: 10px;">

        <b-col cols="4">
                     <img :src="tutor.picture" style="border-radius: 5px" width="100%"> 

        </b-col>
         <b-col cols="8" style="margin-left:-5px;padding-left: 0px">
<p style=" padding-left: 0px;margin-bottom: 0px; font-weight:600; font-size:17px">{{tutor.name}}</p>
<p style="color:#545454; font-size:17px" v-if="tutor.subject">{{tutor.subject.substring(0,90)}}</p>
        </b-col>

     </b-row>
     <b-row style="    margin-top: 7px;">
  <b-col cols="8" style="padding-left: 15px;">
 <!-- <a v-show="tutor.tag.length >0" style="    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgb(130, 217, 217);
    padding-top: 3px;
        margin-top: 7px;
    padding-bottom: 3px;
    font-size: 16px;
    padding-right: 6px;
    border-radius: 7px;
    font-weight:400;
    padding-left: 6px;"  href="#" 
           class="card-link">{{tutor.tag.toString().split(',').join(' ')}}</a> -->

      <a v-for="tag in tutor.tag" v-show="tutor.tag.length >0" style="    color: rgb(255, 255, 255);
    text-decoration: none;
    background-color: rgb(130, 217, 217);
    padding-top: 3px;
    margin-left: 6px;
        margin-top: 7px;
    padding-bottom: 3px;
    font-size: 16px;
    padding-right: 8px;
    border-radius: 5px;
    padding-left: 8px;"  href="#" 
           class="card-link">{{tag.toString()}}</a>
              <br>  
</b-col>
<b-col cols="4" style="  padding-left: 20px; ">


   <!-- <strong style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{sheet.owner.replace(/\w+[.!?]?$/, '')}}  </strong>  -->

 <strong style="color:#a5cae4;  font-size: 15px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(tutor.createdAt) }}  </strong>  
</b-col>

     </b-row>
    


    </b-row>

    </b-card>

   </b-col>
    </b-row>

     



  
<br>
<br>
<br>
<br>

    

</b-container>
</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';


 export default {
    data(){
    return {
      tutors:{}
    

    }
},
  asyncData (context) {

    return axios.get('https://frozen-mesa-40722.herokuapp.com/tutor/all')
    .then((res) => { console.log(res.data)
      return { tutors: res.data,
               
            }        

    })
  },


mounted() {

},




  methods: {
   seeeach(x){
       this.$router.push(`/tutor/${x}`)
   },

       displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
            nextPage(){
    this.$router.push('/tutor/sheetall')
},
nextPage2(){
    this.$router.push('/tutor/job')


}, 

 



                         // axios.get('http://localhost:8000/job/all')

     
}


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

.card-body{
  padding-left: 10px;
    padding-top: 2px;
    padding-right: 10px;
      padding-bottom: 7px;
}

.card-title {
    margin-bottom: 12px;
    margin-bottom: 0.75rem;
    font-size: 20px;
    color: #5a5a5a;
}
a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}


</style>
