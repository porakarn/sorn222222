<template>
<b-container fluid>

<br><br>
<b-row>
<b-col md="6" offset-md="3">



   
<div style="text-align:center" >
                     <img :src="agent.picture" style="border-radius: 5px" height="100"> 
</div>
<br>
 <div style="text-align:center;">
<b-row class="my-1">
    <b-col >
  <h3>{{agent.pagename}}</h3> 
    </b-col>
  </b-row> </div>
    <!-- <b-row class="my-1">
    <b-col  style="margin-top: 19px;">
          <b-form-group  id="exampleInputGroup1"
                    
                    label-for="exampleInput1"
                    description="Line@ url">
      <b-form-input class="formpor" required id="input-large" size="lg" v-model="contactUrl" type="text" placeholder="Line@ url "></b-form-input>
          </b-form-group>
    </b-col>

  </b-row> -->


 <div style="text-align:center;">
  <b-row class="my-1">
    <b-col cols="12" >
    <i class="fa fa-phone" aria-hidden="true"></i> {{agent.contact}}  &nbsp;&nbsp; Line: {{ agent.line}}
    </b-col>

  </b-row>
 </div>


  <div style="text-align:center; margin-top:10px;">
     <b-button  :href="linelink" size="lg" style=" width:60%;     color: white; background-color: #33C1C1; border: 0px; 
 ">ติดต่อ</b-button>  
</div>
  <br>

<br>
  <div>
 <div v-for="job in jobs" >


   <b-row>
   <b-col >
    <b-card  style="   margin-bottom: 5px; 
    box-shadow: rgba(146, 146, 146, 0.1) 0px 1px 3px 0px;
" 
           > <b-row>  <b-col cols="10" style="    padding-right: 0px;
">
        <p style=" white-space: pre-wrap; font-size: 16px; font-family:roboto;  color:#2f2f2f"  class="card-text">{{ job.job}}</p>
 <div class="por" >
       
</div></b-col> 
                        <b-col style="    padding-left: 10px;
    padding-right: 3px;" cols="2">{{job.status}}</b-col> </b-row>
    <b-row>
      <b-col cols="8" style="padding-left: 8px;">
 <a   href="#" v-show="job.subject.length >0"
           class="card-link">{{job.subject.toString().split(',').join(' ')}}</a>
        <b-link href="#" v-show="job.day.length >0"
                class="card-link"   >{{job.day.toString().split(',').join(' ')}}</b-link> 
</b-col>


<b-col cols="4" style="margin-top: -15px; padding-left: 20px; ">
    <strong v-if="job._creator" style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{job.creator_name}}  </strong> 

   <strong v-else style="color:#cbcdd0;  font-size: 14px; margin-top: -0px;  float:right;   margin-bottom: 0px; font-weight:400">
 {{job.creator_name.replace(/\w+[.!?]?$/, '')}}  </strong>  

 <strong style="color:#a5cae4;  font-size: 14px; margin-top: -0px;  float:right;  margin-bottom: 0px; font-weight:400">{{ displayTimestamp(job.createdAt) }}  </strong>  
</b-col>

    </b-row>

    </b-card>

   </b-col>



</b-row>
    
   

    
   
   






</div>
  
  


<br>
</div>
    
      </b-col>

</b-row>

</b-container>

</template>

<script>
import axios from 'axios';
import moment from 'moment'
 export default {
    data(){
    return {
        pagename: '',
        image:null,
        contact: '',
        line:'',
        agent:{},
        jobs : {},
        linelink:'',

    }
},
mounted() {
//   this.pagename = this.$store.state.agent.pagename
//   this.image = this.$store.state.agent.picture
//   this.contact = this.$store.state.agent.contact
//   this.line = this.$store.state.agent.line




var createPost = {
    agentid : this.$route.params.id
}
console.log( this.$route.params.id);

  axios.post('https://frozen-mesa-40722.herokuapp.com/agent/findagent', createPost)
          .then((res) => { 
              this.agent = res.data
              console.log(res.data)
               this.linelink = 'http://line.me/ti/p/~' + res.data.line
          })
          .catch(error => console.log(error))


     var data2 = {

          _creator: this.$route.params.id
}
     
   
  axios.post('https://frozen-mesa-40722.herokuapp.com/job/agentown', data2)
          .then((res) => { 
              this.jobs = res.data
              console.log(res.data)
              
          })
          .catch(error => console.log(error))






},
methods:{
  displayTimestamp(t){
                return moment(t).fromNow()
            },


    
   
},

      layout: 'auth'
   

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



.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 11px;
    
        padding-bottom: 6px;
    padding-top: 8px;
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
