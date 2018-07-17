<template>
<b-container fluid style="padding:0px;">








<b-container fluid> 

  

   <div v-for="course in courses" >


   <b-row>
   <b-col offset-lg="3" lg="6">
    <b-card @click="showModal(course)" style="   margin-bottom: 5px; 
    box-shadow: rgba(146, 146, 146, 0.1) 0px 1px 3px 0px;
" 
           > 
   hh
    </b-card>

   </b-col>



</b-row>
    
   

    
   


</div>




 <b-modal no-fade hide-header  hide-footer  centered ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block ">
        <div v-if="profile2">
          <div style="     margin-bottom: 10px;white-space: pre-wrap;">{{job3}}</div>

      
             <strong style="color: grey"> ส่งโปรไฟล์ของคุณ</strong>
             
         <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
 <b-button @click="clickcopy"  v-clipboard:copy="thingToCopy"  size="lg"  style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;"><i class="fa fa-clone" aria-hidden="true"></i>
  Copy</b-button>

      <div class="loading-page" v-if="loading2">
    <p style="color: #54c686;margin-top: 10px; font-size:19px;"><i class="fa fa-clone" aria-hidden="true"></i></i>
 คุณได้ทำการ copy แล้ว สามารถเอาไป paste ในแชทของนักเรียน เพื่อให้นักเรียนรีวิวคุณได้เลย</p>
  </div>
      
    <br>




           </div>

      
      </div>
    </b-modal>

 
 <b-button @click="clickcopy"  v-clipboard:copy="thingToCopy"  size="lg"  style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;"><i class="fa fa-clone" aria-hidden="true"></i>
  Copy</b-button>

      <div class="loading-page" v-if="loading2">
    <p style="color: #54c686;margin-top: 10px; font-size:19px;"><i class="fa fa-clone" aria-hidden="true"></i></i>
 คุณได้ทำการ copy แล้ว สามารถเอาไป paste ในแชทของนักเรียน เพื่อให้นักเรียนรีวิวคุณได้เลย</p>
  </div>
      





</b-container>

</b-container fluid>

</template>
<script>
import axios from 'axios';
import VueClipboard from 'vue-clipboard2'
import Vue from 'vue';

Vue.use(VueClipboard);
export default {
   data () {
    return {
     loading2: false,
    //    userid: 's' ,
       thingToCopy: `A string that's not all that long or important. Sorry to disappoint.`,

 
     
 loading: false,
      status: 'not_accepted',
     
    
      courses: null,
      job3: '',
      isblank: '',
      text:'',
      profile2: false,
      creator_name2 : '',
      contact2:'',
      contactUrl2 :'',


  
    }
  },

  // mounted() {
  //   this.text2 = 'dsdddd'
  //     // this.text2 = this.$store.state.user.profile + '\n ' + 'วิชาที่สอน: ' + this.$store.state.user.subject + '\n ' +'เบอร์ติดต่อ: '+ this.$store.state.user.phone 
  //     this.thingToCopy = this.text2
  //     console.log(' text2:' + this.text2);
  //     console.log(' text2:' + this.thingToCopy);
      
  // },


  mounted() {
      this.text = 'httsting/'+this.$store.state.user._id
      this.thingToCopy = this.text
  },
// mounted() {
  

     

      
//     return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
//     .then((res) => { 
//       console.log(res.data)
//      this.courses = res.data
               
//             })        

    
  


// },



  //  fetch ({ context, params }) {
  //   return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
  //   .then((res) => {
  //     console.log(context.store.state.user.tag);
      

  //   })
  // },

  asyncData (context) {

    
      console.log(context);
      
    return axios.get('https://frozen-mesa-40722.herokuapp.com/job/all')
    .then((res) => { console.log(res.data)
      return { courses: res.data,
               
            }        

    })
  


  },

    methods: {

  clickcopy(){
          this.loading2 = true
     },
   
     




    showModal (item) {
      this.$refs.myModalRef.show(item) 
      this.job3 = item.job
      console.log(item.job  );
           
  this.text = this.$store.state.user.profile + '\n ' + 'วิชาที่สอน: ' + this.$store.state.user.subject + '\n ' +'เบอร์ติดต่อ: '+ this.$store.state.user.phone 
    this.creator_name2 = item.creator_name
    this.contact2 = item.contact
    this.contactUrl2 = item.contactUrl
    console.log(this.contactUrl2);
    
    
    
      if (this.$store.state.user.profile) {
        this.profile2 = true
      }

    
    
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  },
    layout: 'noheadtutor'
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

.responsive {
  display: none;
}

.responsive2 {
  display: block;
}

/*show for small screens */
@media screen and (max-width: 1023px) { /* I've given 1023px but you can change to proper width */
    .responsive {
        display: block;
    }
    .responsive2 {
  display: none;
}
}


a{

    color: #4159539c;
    font-weight: 600;
    font-size: 18px;
    font-family:"Sukhumvit Set",sans-serif; 
}
</style>
