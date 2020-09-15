<template>
	<div class="flex flex-col-reverse md:flex-row justify-between mb-5">
    <div class="flex justify-between sm:justify-start space-x-3">
      <form action="#" class="relative">
        <input type="text" class="text-sm text-base-color2 rounded-md border border-base-color4 w-full py-2 pl-8 pr-2 leading-5 focus:outline-none" placeholder="Search...">
        <button class="flex items-center justify-center absolute top-0 left-0 w-8 h-full text-base-color3 cursor-pointer hover:text-base-color2 focus:outline-none"><ion-icon name="search"></ion-icon></button>
      </form>
      <dropdown-button>
        <template #trigger>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:hidden" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <path
              d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
          </svg>
          <span class="hidden md:block">
            Display
          </span>
        </template>

        <template #content>
          Test
        </template>
      </dropdown-button>
      <!-- <div class="inline-block relative">
        <button class="flex items-center bg-base-color5 font-semibold leading-5 py-2 px-4 border border-base-color4 focus:outline-none rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:hidden" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <path
              d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
          </svg>
          <span class="hidden md:block">Display</span>
          <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 transform fill-current w-5 h-5 transition-transform ease-linear duration-300"><path fill-rule="evenode" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" /></svg>
        </button>
        <div x-show="open"
          @click.away="open = false"
          class="z-100 absolute right-0 w-40 bg-white py-3 rounded shadow transform translate-y-1 overflow-hidden"
          x-transition:enter="transition-transform transition-opacity ease-out duration-300"
          x-transition:enter-start="opacity-0 transform -translate-y-1"
          x-transition:enter-end="opacity-100 transform translate-y-1"
          x-transition:leave="transition ease-in duration-300"
          x-transition:leave-end="opacity-0 transform -translate-y-2"
        >
          <template x-for="heading in headings">
            <label class="flex justify-start items-center hover:bg-base-color5 hover:text-blue-color px-4 py-2">
              <div class="mr-3">
                <input type="checkbox" class="form-checkbox h-4 w-4 focus:outline-none" checked @click="toggleColumn(heading.key)">
              </div>
              <div class="text-base-color1 leading-5 select-none" x-text="heading.value"></div>
            </label>
          </template>
        </div>
      </div> -->
    </div>
    <div class="flex justify-between md:justify-end space-x-3 mb-4 md:mb-0">
      <dropdown-button align="left">
        <template #trigger>
          Actions
        </template>

        <template #content>
          Test
        </template>
      </dropdown-button>
      <!-- <div class="inline-block relative">
        <button class="flex items-center bg-base-color5 font-semibold leading-5 py-2 px-4 border border-base-color4 focus:outline-none rounded">Actions<svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 transform fill-current w-5 h-5 transition-transform ease-linear duration-300"><path fill-rule="evenode" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" /></svg></button>
        <ul class="absolute bg-white min-w-40 py-3 block rounded shadow transform translate-y-1 z-100">
          <li>
            <a class="block text-base-color1 leading-5 py-2 px-4 hover:bg-base-color5 hover:text-blue-color" href="{{ route('profile') }}">Action</a>
          </li>
          <li>
            <a class="block text-base-color1 leading-5 py-2 px-4 hover:bg-base-color5 hover:text-blue-color" href="#">Another action</a>
          </li>
          <li>
            <a class="block text-base-color1 leading-5 py-2 px-4 hover:bg-base-color5 hover:text-blue-color" href="#">Something else here</a>
          </li>
          <li class="mt-2 pt-2 border-t border-base-color4">
            <a class="block text-base-color1 leading-5 py-2 px-4 hover:bg-base-color5 hover:text-blue-color" href="#">Separated link</a>
          </li>
        </ul>
      </div> -->

      <button-small @click.native="createNewUser">
        Create New
      </button-small>

      <modal-dialog :show="creatingNewUser" @close="creatingNewUser = false">
        <template #title>
          Delete Account
        </template>

        <template #content>
          Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.
        </template>

        <template #footer>
          test
        </template>
      </modal-dialog>

    </div>
  </div>
</template>

<script>
  import DropdownButton from './DropdownButton'
  import ButtonSmall from './ButtonSmall'
  import ModalDialog from './../Components/ModalDialog'

  export default {
    components: {
      DropdownButton,
      ButtonSmall,
      ModalDialog
    },

    data() {
      return {
        creatingNewUser: false
      }
    },

    methods: {
      createNewUser() {
        this.creatingNewUser = true;
      }
    }
  }
</script>
