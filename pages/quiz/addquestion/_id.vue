<template>
  <b-container fluid>
      <br>
         <b-row>
         <b-col cols="12"  sm="8" offset-sm="2" >
                   {{create.question}}
 <br><br>
       <b-form-textarea id="textarea1"
                     v-model="create.question"
                     placeholder="Enter something"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
         </b-col>
         </b-row>
<br>
           <b-row>
         <b-col cols="12"  sm="7" offset-sm="2" >
       <b-form-textarea id="textarea1"
                     v-model="choices"
                     placeholder="Add Choice"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
         </b-col>
         
         </b-row>
         <br>
      

            <b-row>
         <b-col cols="12"  sm="8" offset-sm="2" >
               <b-button @click="createChoices()" style="margin-right:5px;">Add</b-button>
               <b-button @click="mathjax()" style="margin-right:5px;">Mathjax</b-button>
               <b-button @click="deleteChoices()" style="margin-right:5px;">Delete Choice</b-button>
<button @click="seeincorrect()">dd</button>
<ul v-if="create.incorrect_answers" >
         <li v-for="(incorrect, index, key) in create.incorrect_answers" :key="key" :index="index" >
    <!-- <input @click="choosecorrect(incorrect,index)" type="checkbox" :id="incorrect" :value="incorrect" >
    <label  :for="incorrect">{{incorrect}}jj</label><span  @click="removeIncorrectAnswer(index)" >&times;</span> -->
       <!-- <b-form-checkbox-group plain v-model="create.correct_answer" :options="options" :id="incorrect" :value="incorrect" /> -->

<input type="checkbox" id="checkbox" :id="incorrect" :value="incorrect" v-model="create.correct_answer" >
<label for="checkbox">{{ incorrect}}</label>
     <!-- <checkbox v-model="create.correct_answer"   :id="incorrect" :value="incorrect"></checkbox> -->

  </li>
      </ul>
         </b-col>
            </b-row>
            <br>
               <b-row>
         <b-col cols="12"  sm="7" offset-sm="2" >
             <p>Correct Answer</p>
       <b-form-textarea id="textarea1"
                     v-model="create.answerdetail"
                     placeholder="เฉลยละเอียด"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
         </b-col>
         
         </b-row>
         <br>
       <b-row>
         <b-col cols="12"  sm="7" offset-sm="2" >
          <b-form-input style="border-left:0px;border-top:0px; border-right:0px;border-radius:0px;" 
                  type="text"
                        v-model="difficulty"

                  placeholder="difficulty level 1-10"></b-form-input>
         </b-col></b-row>
<br>
 <b-row>
         <b-col cols="12"  sm="7" offset-sm="2" >
          <b-form-input style="border-left:0px;border-top:0px; border-right:0px;border-radius:0px;" 
                  type="text"
                  v-model="tag"
                  placeholder="Tag ex calculus"></b-form-input>
         </b-col></b-row>

<br>
<b-row>
         <b-col cols="12"  sm="7" offset-sm="2" >
               <b-button @click="createQuestion" style="margin-right:5px;">Submit</b-button>
         </b-col>
</b-row>
               <br>
               <div v-for="(quizs, index, key) in quizez" :index="index"  :key="key"  >
 
    <h2>{{ quizs.question }}</h2>
    <ol>
      <!-- <li >
        <label v-for="(quizs, index, key) in quizez" >
          <input   type="checkbox" > {{quizs.incorrect_answers}}
        </label>
        คำตอบ : {{quizs.correct_answer}}
      </li> -->
       <li v-for="answer in quizs.incorrect_answers">
        <label>
          <input   type="checkbox"  > {{answer}}
        </label>
      </li>
     {{ quizs.correct_answer}}
    Tag:  {{ quizs.tag}}
    Difficulty:  {{ quizs.difficulty}}
    </ol>
  </div>
<br>
               <br>
               <br>
    

  </b-container>
</template>

<script>

import axios from 'axios';
  export default {
    data() {
        return {
            
         create :{
        
        type: "multiple",
       
        question: null,
        correct_answer: [],
        answerdetail: '',
        difficulty: '',
        tag: [],
        incorrect_answers: [
        ]
      },
      choices: null,
      quiz_questions: [] ,
        quizez:[],
      // answers:Array(this.quiz_questions.length).fill('') ,
    }

},
 methods: {

     seeincorrect(){
console.log(this.create.incorrect_answers);
console.log('ddd');
console.log(this.create.correct_answer);


     },
   mathjax(){
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

   },

   onSubmit(){
     console.log(this.quizez)
          console.log(this.quizez)
     console.log(this.quizez)

   axios.post('https://chatpor.herokuapp.com/createquiz', this.quizez).then((res)=> {

   }).catch((err)=> console.log(err) );
   

   },
//    choosecorrect(incorrect, index){


//   if (incorrect[index].checked == true){
//      this.create.correct_answer.push(incorrect);
//  console.log( this.create.correct_answer);

//     } else {
   
//     }
// },

//  this.create.correct_answer.push(incorrect);
//  console.log( this.create.correct_answer);

  createQuestion(){
      var vm = this
     
var por2 = []
por2.push(vm.create.incorrect_answers)
var arr1 = vm.create.correct_answer.slice();
var arr2 = vm.create.incorrect_answers.slice();
         var por = {
           
        question: vm.create.question,
        correct_answer: arr1,
        incorrect_answers: arr2,
        answerdetail: vm.create.answerdetail,
        idquiz: '5b8e994eed934904e4f10259',
        difficulty: vm.difficulty,
        tag:vm.tag,
        _quizid: this.$route.params.id
         } 
 
        vm.quizez.push(por)
        console.log( vm.quizez);
        vm.create.incorrect_answers.length = 0
        vm.create.question = ''
        vm.create.correct_answer.length = 0
        vm.create.answerdetail = ''


 axios.post('https://chatpor.herokuapp.com/create/quiz3', por).then((res)=> {
console.log(por);
console.log(res.data);


   }).catch((err)=> console.log(err) );



    },

 deleteChoices(){
console.log(this.quizez);

   this.quizez.length = 0
    this.create.incorrect_answers.length= 0;
            this.create.correct_answer.length = 0

 },
   

 createChoices(){
      

var separators = [ '------', '-----', '----', '---', '\n\n', '______', '_____', '____','___'];
var job2 = this.choices.split(new RegExp(separators.join('|'), 'g'));
console.log(job2);

 var i;
  for  (i = 0; i < job2.length; i++) {
  var str1 = job2[i]

      this.create.incorrect_answers.push(str1);
     
        
      
      console.log(this.create.incorrect_answers);
        console.log(this.choices);
        
              // this.quizez.push(str1)
        console.log(this.quizez);
this.choices = ''
}


    },
 removeIncorrectAnswer(index){
      var vm = this
      vm.create.incorrect_answers.splice(index, 1)
    },

 },

 layout: 'auth'
 
  }

  
</script>


