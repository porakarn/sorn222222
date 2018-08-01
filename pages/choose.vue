<template>
    <b-container fluid>
        <br>
           <div style="text-align: center;">
    <b-button @click="totutor" size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">สมัครติวเตอร์</b-button>  
<br>
        <!-- <b-button size="lg" style="  background-color: white; border: 0px; padding-left: 66px; color:#33C1C1;
    padding-right: 66px;">สมัครนักเรียน</b-button>   -->
<br>
    <nuxt-link to="agent/signup">   <b-button size="lg" style="  background-color: #f9a1b9; border: 0px; padding-left: 66px;color:#618f82;
    padding-right: 66px;">สมัครนายหน้า</b-button>  </nuxt-link>
</div>
<br>
<b-row>
<b-col md="6" offset-md="3">
<img centered style="width :95%" src="https://www.sorns.co/wp-content/uploads/2018/01/sds.png" alt="">
    
</b-col></b-row>
    </b-container>
</template>

<script>
    export default {
   data () {
    return {
  
  
    }
    },
   
    methods: {

     totutor(){
 this.$router.push('/user/fblogin')

     },


    },
           layout: 'auth'

}

</script>

<style scoped>

</style>
