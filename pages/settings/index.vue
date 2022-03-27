<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" v-model="user.image" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"  type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea class="form-control form-control-lg" v-model="user.bio" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" v-model="user.email" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right" @click="update">
                  Update Settings
                </button>

                <button class="btn  pull-xs-left" @click="logout">
                  Or click here to logout.
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from '@/api/user'
export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data () {
    return {
      user: {
        email:'',
        bio:'',
        image:''
      }
    }
  },
  methods:{
    async update() {
      console.log(this.user)
      console.log(this.$store.state.user)
      const { data } = await updateUser({user: this.user})
      console.log(data)
    },
    logout() {
      this.$router.replace({
        name: 'home'
      })
    }
  }
}
</script>

<style>

</style>
