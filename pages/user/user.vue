<template>
<b-container fluid>

<br><br>

<b-row class="my-1">
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" type="text" placeholder="ชื่อเพจของคุณ"></b-form-input>
    </b-col>
  </b-row>
    <b-row class="my-1">
    <b-col sm="10" style="margin-top: 19px;">
      <b-form-input id="input-large" size="lg" type="text" placeholder="Line url / Facebook page url "></b-form-input>
    </b-col>
  </b-row>
<br>
  <div>
  <b-button style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">สมัคร</b-button>
</div>

</b-container>

</template>

<script>

 export default {
asyncData(){
    return {

    }
}

 }   

</script>



<style scoped>
::placeholder {
    color: #C9C9C9;
    opacity: 1; /* Firefox */
}

.form-control{
border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-radius: 0;
}
</style>
