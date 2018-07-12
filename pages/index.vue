<template>
  <section class="container">
  
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
    <p>Value: {{ text1 }}</p>
  </div>
<nuxt-link to="/user">Users</nuxt-link>
      
      <button @click="logout" > Log out </button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    data () {
    return {
      text1: ''
    }
  },
   methods: {
    logout () {
       this.$store.dispatch('setToken', null)
              this.$store.dispatch('setAgent', null)

      this.$store.dispatch('setUser', null)
            // this.$store.dispatch('setProfile', null)

    }
  },
  components: {
    Logo
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
