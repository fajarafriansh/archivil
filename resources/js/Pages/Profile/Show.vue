<template>
  <app-layout>
    <template #header>
      Profile
    </template>

    <div class="px-4">
      <div class="mt-8 mb-15 space-y-8">
        <card-test></card-test>

        <update-profile-information-form
              :name="$page.user.name"
              :email="$page.user.email" />

        <update-password-form class="mt-10 sm:mt-0" />

        <div v-if="$page.jetstream.canManageTwoFactorAuthentication">
          <two-factor-authentication-form class="mt-10 sm:mt-0" />
        </div>

        <logout-other-browser-sessions-form :sessions="sessions" class="mt-10 sm:mt-0" />

        <delete-user-form class="mt-10 sm:mt-0" />
      </div>
    </div>
  </app-layout>
</template>

<script>
  import CardTest from './CardTest'
  import AppLayout from './../../Layouts/AppLayout'
  import DeleteUserForm from './DeleteUserForm'
  import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
  import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
  import UpdatePasswordForm from './UpdatePasswordForm'
  import UpdateProfileInformationForm from './UpdateProfileInformationForm'

  export default {
    props: ['sessions'],

    components: {
      CardTest,
      AppLayout,
      DeleteUserForm,
      LogoutOtherBrowserSessionsForm,
      TwoFactorAuthenticationForm,
      UpdatePasswordForm,
      UpdateProfileInformationForm,
    },
  }
</script>
