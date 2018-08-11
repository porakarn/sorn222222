<template>
    <b-container fluid>
        <br>
        <div style="text-align: center;">
           <nuxt-link to="student/alltutorstudent">   <b-button size="lg" style="  background-color:#5ab592; border: 0px; padding-left: 66px;color: rgb(255, 255, 255);
    padding-right: 66px;">สมัครนักเรียน</b-button>  </nuxt-link>
   
<br><br>
 <b-button @click="totutor" size="lg" style="  background-color: #33C1C1; border: 0px; padding-left: 66px;
    padding-right: 66px;">สมัครติวเตอร์</b-button>  
        <!-- <b-button size="lg" style="  background-color: white; border: 0px; padding-left: 66px; color:#33C1C1;
    padding-right: 66px;">สมัครนักเรียน</b-button>   -->
<br><br>
   
</div>
<br>
<b-row>
<b-col md="6" offset-md="3">
    <br><br>
</b-col>
</b-row>

   </b-container>
</template>

<script>
    export default {
   data () {
    return {

  
    }
    },
   
   head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'สร้าง Community ของการสอนไปด้วยกัน' }
      ]
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


<script>

export default {
    data () {
    return {
      text1: ''
    }
  },
   methods: {
     totutor(){
 this.$router.push('/user/fblogin')

     },
    logout () {
       this.$store.dispatch('setToken', null)
              this.$store.dispatch('setAgent', null)

      this.$store.dispatch('setUser', null)
       this.$store.dispatch('setStudent', null)

            // this.$store.dispatch('setProfile', null)

    }
  },
  
           layout: 'auth'
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}


</style>
