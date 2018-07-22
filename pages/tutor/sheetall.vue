<template>

<b-container fluid style="padding:0px;">

 

<b-container fluid style="padding:1px;">

<b-container class="bv-example-row">
    <b-row>
        <b-col style="padding-right: 5px;
    padding-left: 5px;"> 
    <br>
     <b-card :href="sheet.docurl" style="margin-bottom:1px;     border: 1px solid rgba(164, 164, 164, 0.125);
    border-radius: 1px; box-shadow: rgba(148, 142, 142, 0.2) 0px 1px 3px -1px, rgba(255, 251, 251, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px;
"  v-for="sheet in sheets" :title="sheet.sheetname"
            :sub-title="sheet.gradeyear">
        
       <b-row style="margin-top: 10px;">
           
      <b-col cols="8" style="padding-left: 8px;">
 <a style="     color: #ffffff;
    text-decoration: none;
    background-color: #82d9d9;   padding-top: 3px;
    padding-bottom: 3px;
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

     
 
</b-container>
  

 
  
  
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
</style>
