<template>
<b-container fluid>
<br>
<div style="text-align:center" >
    <b-img centered  style="width: 90px; border-radius:15px ;
    
 
    width:40%
"  src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-1/p240x240/15873069_1211350558943201_5314025003629794223_n.jpg?_nc_cat=0&oh=429da1d277ec885fbbc86409fac1dd86&oe=5BA39AF5"/>
</div>
<br><br>
<div style="text-align:center"  @click="por">
  <star-rating  v-bind:increment="0.25"  v-model="rating" :border-width="1" border-color="#d8d8d8" :rounded-corners="true"
   :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
</div>


</b-container>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
      data () {
    return {
    
    rating: 0,
     
    }
  },
  methods:{
      por(){
          alert(this.rating)
      }
  },
  components: {
    StarRating
  },
}
</script>


<style scoped>
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}



</style>
