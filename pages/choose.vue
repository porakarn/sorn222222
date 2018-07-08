<template>
    <b-container fluid>
        <br>
        <div style="text-align: center;">
    <b-button @click="totutor" size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">สมัครติวเตอร์</b-button>  
<br>
        <b-button size="lg" style="  background-color: white; border: 0px; padding-left: 66px; color:#33C1C1;
    padding-right: 66px;">สมัครนักเรียน</b-button>  
<br>
        <b-button size="lg" style="  background-color: #cdf4d7; border: 0px; padding-left: 66px;color:#618f82;
    padding-right: 66px;">สมัครนายหน้า</b-button>  
</div>
<br>
<img centered style="width :95%" src="https://www.sorns.co/wp-content/uploads/2018/01/sds.png" alt="">
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


    }
}

</script>

<style scoped>

button{
    margin:auto;
    justify-content: center;
    border-radius: 24px;
    width: 80%;
    margin-bottom: 9px;
box-shadow: rgba(132, 125, 125, 0.2) -1px 1px 6px 0px, rgba(255, 255, 255, 0.83) 0px 4px 5px 0px, rgba(0, 0, 0, .01) 0px 1px 10px 0px;
}
</style>
