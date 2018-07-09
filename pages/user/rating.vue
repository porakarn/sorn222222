<template>

<div @click="por">
<star-rating  v-bind:increment="0.25"  v-model="rating"></star-rating>
</div>


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
