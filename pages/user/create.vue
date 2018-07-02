<template>
<b-container fluid>
<br><br>
  <div>
    <h5 style="color: #8f9aa4;">วางงานของคุณที่นี่</h5>
    <b-form-textarea required id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="8"
                     :max-rows="9">
    </b-form-textarea>
    <pre class="mt-3">{{ text }}</pre>
      <b-button style="background-color: #33C1C1; border: 0px; padding-left: 36px;
    padding-right: 36px;">เรียบร้อย</b-button>
  </div>

</b-container>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
