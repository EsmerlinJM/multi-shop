<template>
  <div class="normal-case tracking-normal">
    <a href="/#login" @click.prevent="show" class="text-copy-primary uppercase hover:text-red-700">Login</a>
    <modal name="modal-login" @opened="opened" :adaptive="true" :height="440" :width="400">
      <div class="px-10 py-8">
        <h2 class="mb-4 uppercase tracking-wide text-xl">Login</h2>
        <form action="#" method="post">
          <div class="form-group mb-4">
            <label for="email" class="block font-normal uppercase tracking-wide text-xs mb-1">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal uppercase tracking-wide text-xs mb-1">Password</label>
            <input type="password" id="password" name="password" class="border px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-8">
            <label class="text-sm font-normal"><input type="checkbox" name="remember" class="mr-2">Keep me signed in</label>
          </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Login</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center">
          <p>Don't have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showRegister" @keydown.tab.exact.prevent="">Register</a></p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ModalLogin extends Vue {
    public email = ''
    public $refs!: {
        email: HTMLFormElement
    }

    public show() {
      this.$modal.show('modal-login')
    }
    public showRegister() {
      this.$modal.show('modal-register')
      this.$modal.hide('modal-login')
    }
    public opened() {
      this.$refs.email.focus()
    }
    public hide() {
      this.$modal.hide('modal-login')
    }
}
</script>