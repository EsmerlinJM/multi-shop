<template>
  <div>
    <!--Footer-->
    <footer class="bg-white border-t-4">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a href="/" class="font-bold text-xl flex items-end">
              <img src="@/assets/logo.png" alt="logo" class="w-10">
              <span>ue.js</span>
            </a>
          </div>

          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Links</p>
            <ul
              class="list-reset mb-6 uppercase tracking-wide font-bold w-full block items-center mt-8 lg:mt-0"
            >
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >FAQ</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Help</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Support</a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul
              class="list-reset mb-6 uppercase tracking-wide font-bold w-full block items-center mt-8 lg:mt-0"
            >
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Terms</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Privacy</a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul
              class="list-reset mb-6 uppercase tracking-wide font-bold w-full block items-center mt-8 lg:mt-0"
            >
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Facebook</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Linkedin</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Twitter</a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul
              class="list-reset mb-6 uppercase tracking-wide font-bold w-full block items-center mt-8 lg:mt-0"
            >
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Official Blog</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >About Us</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  class="no-underline text-gray-800 hover:text-blue-700"
                >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

