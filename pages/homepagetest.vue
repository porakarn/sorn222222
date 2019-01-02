<template>
    <b-container fluid>
        <br>

        <div style="text-align:center" >
                     <img src="/Sornstutorlogo.png" style="border-radius: 5px" height="85"> 
</div>
        <div style="text-align: center;">
         <h1 style="font-size: 20px; margin-top: 10px;  font-family: 'Roboto';">ค้นหาติวเตอร์ตัวต่อตัว</h1>

   
<br>
    <!-- <b-form-select v-model="selected" :options="options" class="mb-3" /> -->
<b-form-group  id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;    border-radius: 7px;" class="formpor" id="exampleInput3" size="lg"
                      :options="options"
                    
                      v-model="selected">
        </b-form-select>
      </b-form-group>
<b-form-group   id="exampleInputGroup3"
                  
                    label-for="exampleInput3">
        <b-form-select style="width:80%;    border-radius: 7px;" class="formpor" id="exampleInput3" size="lg"
                      :options="locations"
                    
                      v-model="location">
        </b-form-select>
      </b-form-group>

 <b-button @click="totutor" size="lg" style="  background-color: #DFAEA9; border: 0px; 
    width:80%;">ค้นหา</b-button>  
        <!-- <b-button size="lg" style="  background-color: white; border: 0px; padding-left: 66px; color:#33C1C1;
    padding-right: 66px;">สมัครนักเรียน</b-button>   -->
<br><br>
     


</div>
<br>
<p style="font-weight:bold">ดูติวเตอร์ทั้งหมด (300)</p>
<b-row>
  <b-col style="padding-right:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/10214656830593206/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB; float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>

 <b-col style="padding-left:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/2152888421419243/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>
 <b-col style="padding-right:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/2162552630429629/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>
 <b-col style="padding-left:10px" cols="6" >

    <div style="display:inline!important;">
<img src="https://graph.facebook.com/1962031117153451/picture?type=large" style="border-radius: 5px" width="100%"> 
<div style="margin-top :3px;">
<strong >Porakarn</strong>   <strong style=" background-color:#EEC0BB;float:right;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    padding-right: 5px;
    padding-left: 4px;
    font-size: 14px;
    margin-left: 8px;   
    margin-right: 0px;
        padding-top: 1px;
    margin-top: 4px;"> 4.5 <i style="color:white;" class="fa fa-star" aria-hidden="true"></i></strong>
</div>
<p>จบจากแพทย์จุฬา เกรียตินิยม อันดับหนึ่ง</p>

</div>
  </b-col>




   </b-row>




<br><br><br><br><br>
   </b-container>
</template>



<script>

export default {
    data () {
        
    return {
          selected: null,
   
        options: [
        { text: 'วิชาที่สนใจเรียน', value: null },
       'ชาย', 'หญิง',
      ],
         location: null,
   
        locations: [
        { text: 'สถานที่', value: null },
       'ชาย', 'หญิง',
      ],
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


.scrolling-wrapper {
   overflow-x: scroll !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
 &::-webkit-scrollbar {
    display: none!important;
  }
 
}

</style>
