<template>
  <jet-form-section @submitted="updatePassword">
    <template #title>
      Update Password
    </template>

    <template #description>
      Ensure your account is using a long, random password to stay secure.
    </template>

    <template #form>
      <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
        <jet-label for="current_password" value="Current Password" class="w-40 md:text-right md:text-base text-base-color1 font-medium" />
        <div class="flex-1 w-full">
          <jet-input id="current_password" type="password" class="block w-full" v-model="form.current_password" ref="current_password" autocomplete="current-password" placeholder="Current Password" />
          <jet-input-error :message="form.error('current_password')" class="mt-1" />
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
        <jet-label for="password" value="New Password" class="w-40 md:text-right md:text-base text-base-color1 font-medium" />
        <div class="flex-1 w-full">
          <jet-input id="password" type="password" class="block w-full" v-model="form.password" autocomplete="new-password" placeholder="New Password" />
          <jet-input-error :message="form.error('password')" class="mt-1" />
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:space-x-6">
        <jet-label for="password_confirmation" value="Confirm Password" class="w-40 md:text-right md:text-base text-base-color1 font-medium" />
        <div class="flex-1 w-full">
          <jet-input id="password_confirmation" type="password" class="block w-full" v-model="form.password_confirmation" autocomplete="new-password" placeholder="Confirm Password" />
          <jet-input-error :message="form.error('password_confirmation')" class="mt-1" />
        </div>
      </div>
    </template>

    <template #actions>
      <jet-action-message :on="form.recentlySuccessful" class="mr-3">
        Saved.
      </jet-action-message>

      <jet-button :class="{ 'opacity-50 hover:opacity-50': form.processing }" :disabled="form.processing">
        Save
      </jet-button>
    </template>
  </jet-form-section>
</template>

<script>
  import JetActionMessage from './../../Jetstream/ActionMessage'
  import JetButton from './../../Jetstream/Button'
  import JetFormSection from './../../Jetstream/FormSection'
  import JetInput from './../../Jetstream/Input'
  import JetInputError from './../../Jetstream/InputError'
  import JetLabel from './../../Jetstream/Label'

  export default {
    components: {
      JetActionMessage,
      JetButton,
      JetFormSection,
      JetInput,
      JetInputError,
      JetLabel,
    },

    data() {
      return {
        form: this.$inertia.form({
          current_password: '',
          password: '',
          password_confirmation: '',
        }, {
          bag: 'updatePassword',
        }),
      }
    },

    methods: {
      updatePassword() {
        this.form.put('/user/password', {
          preserveScroll: true
        }).then(() => {
          this.$refs.current_password.focus()
        })
      },
    },
  }
</script>
