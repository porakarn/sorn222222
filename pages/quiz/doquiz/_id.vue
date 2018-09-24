<template>


  <b-container fluid style="padding:0px;">
        <b-container fluid  >

  <br><br>
     
  <!-- index is used to check with current question index -->
  
  <!-- <preview-quiz v-for="(quiz, index, key) in filterQuizes" :quiz="quiz" :index="index" v-model="answers[index]" :key="key"  v-show="index === questionindex"></preview-quiz> -->
     <div v-for="(quiz, index, key) in quizes"  :index="index" :key="key"  v-model="answers[index]"  v-show="index === questionindex" >
  <!-- <div v-for="(quiz, index, key) in quizes" :quiz="quiz" :index="index" :key="key"  v-show="index === questionindex" > -->
    <p  v-bind:class="{wrap : quiz.question.length > 300}" style="    margin-bottom: 24px;font-size: 19px; margin-left: 5px;    white-space: pre-line;
">{{ quiz.question }}</p>
   
      <div style="     margin-top: 1px;
    margin-bottom: 0px; margin-right: 0px;margin-left: 0px;
  " v-for="(answer, index2) in quiz.incorrect_answers">
       
       <!-- <div style="  padding: 7px;
    padding-right:15px; 
    border-radius: 6px;
    margin: 5px;
    margin-top: 7px; border: 1px solid #d9e3d9;"> -->
     
        <label style="width:100%" class="container1">
            <div class="pora" style="  padding: 7px; margin-top:-44px; 
    padding-right:15px; 
    padding-top:17px;
    border-radius: 0px;
    margin: 0px;
    padding-bottom: 17px; border-bottom: 2px solid #f1efef;">
          <!-- <input   type="checkbox"  :key="key"  :name="index"  :value="answer"  :v-model="answers[index2]"   > {{answer}} -->
        <input  type="radio" 
                   v-bind:value="answer" 
                   v-bind:name="index" 
                   v-model="answers[index]">
                     <span  class="checkmark"></span>
<strong class="pora"  style="    font-size: 18px;font-weight:400; margin-left:36px; margin-top:-9px;"> {{answer}}  </strong>
       </div>
        </label>
       
      </div>
  
    <!-- <p>เฉลยละเอียด</p>
<p v-if="quiz.answerdetail">{{quiz.answerdetail}}</p> -->

 <div style="text-align: center; margin-bottom: -33px;">
    <button style="; background-color:white; color:grey; font-size: 18px;  border: 1px solid  #dae0dd; padding: 3px; margin-top: 20px; padding-left:8px; padding-right:8px;  border-radius: 6px;" @click="nowcansee()">
          ดูคำตอบ

      </button>
      </div>
<div v-if="quiz.question.length > 300">
   <div  v-if="questionindex < quizes.length">
      <button style="background-color:white; color:grey ;font-size: 18px; float:left; border: 1px solid #dae0dd; padding: 3px; border-radius: 6px;" v-if="questionindex > 0" @click="prev">
        Prev
      </button>
      <button style="background-color:white; color:grey; font-size: 18px; float:right; border: 1px solid  #dae0dd; padding: 3px;  border-radius: 6px;" @click="next">
        Next
      </button>
    </div>
    </div>
    <br><br>
    <!-- {{answers[index]}} -->
   <p v-show="cansee" > {{quiz.correct_answer.toString().split(',').join(' ')}}</p> 
   <p v-show="cansee">{{quiz.answerdetail}}</p> 
      <p v-show="cansee">เฉลยละเอียดเร็วๆนี้</p> 

  </div>



   
<!-- <div v-if="questionindex == quizes.length"> -->

<div >
  <br>
  <!-- <div style="text-align:center">
       <span >Your Total score is {{score}} / {{quizes.length}}</span>

  </div>
  <br> -->
 

  <!-- <button v-if="questionindex > 0" @click="prev">
        prev
      </button> -->
</div>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
        </b-container>
   <b-container fluid class="bv-example-row responsive "   style="box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 0px, rgba(0, 0, 0, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 10px 0px; position: fixed;     width: 100%;

  bottom: 0px; 
  background-color: white;
  height: 58px;">

<b-row style="    margin-top: 0px;">    
        
<b-col cols="6" style="text-align: center; padding-left: 0px;
    padding-right: 0px;" >


  <b-button style="     padding-left: 68px;
    padding-right: 71px;
    background-color:white;
    border: 0px;
    color: grey;
  padding-top: 18px;
    padding-bottom: 16px;"  @click="prev">Prev</b-button>







</b-col> 



<b-col cols="6" style="text-align: center;padding-left: 0px;
    padding-right: 0px;"  >    
 
  <b-button style=" 

    padding-left: 68px;
    padding-right: 71px;
    background-color: rgb(247, 247, 247);
    border: 0px;
    color: grey;
   padding-top: 18px;
    padding-bottom: 16px;"  @click="next">Next</b-button>


</nuxt-link>



</b-col>

</b-row>
  </b-container>



  </b-container>
 


</template>







<script>




import axios from 'axios';

  export default {
    data () {
      return {
        cansee: false,
        quizes: {},
        answers: [],
        qui:[],
      userResponses: Array(2).fill("foobar"),
      questionindex:0,

     
  

      }
    },
    mounted() {
        // https://chatpor.herokuapp.com/

    var  data = {
        _id: this.$route.params.id
    }    
axios.post('https://chatpor.herokuapp.com/quiz/populate', data).then((res) => {
    console.log(res.data);

  this.quizes = res.data._questions
  console.log(this.quizes.name);
 
}).then(()=> {
   MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }).catch((err)=> {
  console.log(err);
})  










          
    },



 
    computed: {
   
       answers(){
      var vm = this
      return Array(vm.quizes.length).fill([])
    },
    // filterQuizes(){
    //   var vm = this


    //   return _.reject(vm.quizez, { 'category':  vm.selectedCategory});

    // },

   
    score() { 
      var vm = this
      var total = 0
        _.map(vm.quizes, function(quiz, index){
          var answer =vm.answers[index] 
          console.log(quiz.correct_answer);
          console.log(answer);
          console.log(index);
          
          _.map(quiz.correct_answer, function(correct, j){
            if(answer === correct){
              total += 1
            }
            // console.log(correct);
            // console.log(j);
            // console.log(answer[1]);

          })
        })
      

      return total;
    }
    },
    methods: {

  nowcansee(){
   this.cansee = !this.cansee

  },      
 nextstuff(){
MathJax.Hub.Queue(["Typeset",MathJax.Hub])
    },
     next() {
              this.cansee = false

     this.questionindex++;
      // console.log(this.questionindex);
      console.log(this.score);
   
    },
    // Go to previous question
    prev() {
      this.questionindex--;
      this.cansee = false
    },
    // Return "true" count in userResponses
    //  score() {
    //   var correctAnswers = [true, 'a']
    //   var score = 0;
    //   this.userResponses.forEach(function(item, index) {
    //     if (item == correctAnswers[index]) {
    //       score++;
    //     }
    //   });
    //   return score;
    // },

 

    
  


    }, layout: 'quiz'

  }
</script>




<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }

.btn-secondary:focus, .btn-secondary.focus {
box-shadow: 0 0 0 0.2rem rgba(240, 240, 243, 0.5);

}


.admin2{
  color: red;
}

.wrap{
   white-space: pre !important;
}


label{
   
   font-size: 18px;
    
}

label:checked {
  background-color: #8a86dd;
    border: 1px solid #d9e3d9;
    padding: 7px;
    padding-right:15px; 
    border-radius: 6px;
    margin: 5px;
    margin-top: 7px;

    
}

li{
  margin: 23px;
}

input{
  margin-right: 7px;
}


.container input {
    position: absolute;
    opacity: 0
    
    ;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    margin-right: 24px;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 30%;
    float:left;
    margin-top: 3px;
}
.container1 {
        margin-bottom: 0px;
    position: relative;
    /* padding-left: 35px;
    margin-bottom: 12px; */
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


input{
        display: none;
}

.container1:hover input ~ .checkmark {
    background-color: #ccc;
}

.container1 input:checked ~ .checkmark {
    background-color: #2196F3;
}

.container1 input:checked ~ .pora {
    color: #96b3bc;
}

</style>
