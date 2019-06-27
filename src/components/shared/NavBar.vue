<template>
    <div>
        <header class="border-t-4 border-red-700 bg-white z-10 absolute w-full shadow-md">
      <nav class="container mx-auto px-8 flex flex-wrap justify-between items-center py-8">
        <div class="mb-0 lg:mb-6 xl:mb-0">
          <a href="/" class="font-bold text-xl flex items-end">
            <img src="@/assets/logo.png" alt="logo" class="w-10">
            <span>ue.js</span>
          </a>
        </div>
        <div class="block lg:hidden">
          <button
            @click="toggleMenu"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray"></path>
            </svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block': 'hidden'"
        >
          <li class="mr-12 mb-6 lg:mb-0">
            <Search />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <MegaMenu />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a href="/#another" class="text-copy-primary hover:text-red-700">Another</a>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a href="/#company" class="text-copy-primary hover:text-red-700">Company</a>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a href="/#company" class="text-copy-primary hover:text-red-700">Company</a>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <ModalLogin/>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <ModalRegister/>
          </li>
          <li>
            <!-- <dropdown-menu /> -->
          </li>
        </ul>
      </nav>
    </header>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MegaMenu from '@/components/menu/MegaMenu.vue'
import Search from '@/components/menu/Search.vue'
import ModalLogin from '@/components/modals/ModalLogin.vue'
import ModalRegister from '@/components/modals/ModalRegister.vue'

@Component({
    components: {
        MegaMenu, Search, ModalLogin, ModalRegister
    }
})
export default class NavBar extends Vue {
  public menuOpen = false

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen
  }
}
</script>

