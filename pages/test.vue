<template>
    <div>sss</div>
</template>

    



<script>
export default {
     data () {
      return {
    
     
        e1: 'recent',
        url:'https://www.facebook.com/v3.0/dialog/oauth?client_id={1164801473596989}&redirect_uri={"https://sorns-co-beta.herokuapp.com/test"}'

      }
    },

    mounted() {
     window.location = this.url
          let code = this.$router.currentRoute.query.code
          console.log(code);
          


          
    },

}
</script>
