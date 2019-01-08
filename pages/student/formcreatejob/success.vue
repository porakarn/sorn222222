<template>
<b-container fluid style="padding: 0px;">

<p>Done</p>
<button @click="toprofile">
    go to profile
</button>


<br><br>


</b-container>
</b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';


 export default {
    data(){
    return {
      tutors:{},
       loading: false,
           profile2: false,
           selected: 'first',
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' }
      ],
    

    }
},
 


mounted() {
console.log(this.$store.state.student);

},
//   computed: {
//     calculateScore (x) {
//      console.log(x);
     
// // this.sum = x.reduce(function(a, b) {
// //   return a + b;
// // });
//     }
//   },



  methods: {
  toprofile(){
 
 this.$router.push('/student/profile')

  },

  goback(){
            this.$router.go(-1)
 this.$router.push('/student/demo2')
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
,
    layout: 'auth'



}
</script>
