<template>

<b-container fluid style="padding:0px;">
 <b-nav fill tabs style=" margin-top:-7px;    background-color: #dfaea9;     box-shadow: 0px 2px 3px -1px rgba(126, 126, 126, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px #00000003;
" >
  <b-nav-item  @click="nextPage2" class="responsive" >งานที่คุณโพส </b-nav-item>
 <b-nav-item class="responsive"  style="border-bottom: 4px solid;
    border-bottom-color: #ffffff; color: #ffffff; 
"   >เอกสารของคุณ</b-nav-item>
 
</b-nav>
 

<b-container fluid >
       <br>
        <p style=" color:#86a5ca ; text-align: center;
" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
 งานที่คุณโพสไว้</p>


    <b-row>
        <b-col style="padding-right: 0px;
    padding-left: 0px;"> 
   
     <b-card @click="seedetail(sheet._id)"   style="margin-bottom:0px;     border: 1px solid rgba(164, 164, 164, 0.125);
    border-radius: 1px;     box-shadow: rgba(148, 142, 142, 0) 0px 1px 3px -1px, rgba(255, 251, 251, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px;

"  v-for="sheet in sheets" :key="sheet._id" :title="sheet.sheetname"
            :sub-title="sheet.gradeyear">
        
       <b-row style="margin-top: 10px;">
           
      <b-col cols="8" style="padding-left: 8px;">
 <a style="     color: #ffffff;
    text-decoration: none;
    background-color: #82d9d9;   padding-top: 3px;
    padding-bottom: 3px;
    font-size:16px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 4px;"  href="#" 
           class="card-link">{{sheet.subject}}</a>
     
              <br>  
</b-col>


<b-col cols="4" style="margin-top: -15px;  padding-left: 20px; ">


   <strong style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{sheet.owner.replace(/\w+[.!?]?$/, '')}}  </strong> 

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(sheet.createdAt) }}  </strong>  
</b-col>
    </b-row>

    </b-card>

   </b-col>
    </b-row>

     


 <b-modal no-fade hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
      
<b-row>  <b-col cols="12" >

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
         


</b-col>
 </b-row>  

<br>
   
        
         <div style="color: grey" class="loading-page" v-if="loading">
    Loading...
  </div>
      </div>
    </b-modal>
  
  
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
      sheets:{}
    

    }
},
  asyncData (context) {

    return axios.get('https://frozen-mesa-40722.herokuapp.com/sheet/all')
    .then((res) => { console.log(res.data)
      return { sheets: res.data,
               
            }        

    })
  },


mounted() {

},




  methods: {
    
       displayTimestamp(t){
                return moment(t).locale('th').fromNow()
            },
            nextPage(){
    this.$router.push('/tutor/sharesheet')
},
nextPage2(){
    this.$router.push('/tutor/job')


}, 
seedetail(x){
 this.$router.push(`/tutor/editsheet/${x}`)

}
 



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
    padding-bottom: 13px;
    padding-top: 13px;
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
