<template>
	<app-layout>
		<template #header>
      Users
    </template>

    <div class="mb-15 space-y-8">
    	<users-list
    		:users="users" />
    </div>
	</app-layout>
</template>

<script>
  import AppLayout from './../../Layouts/AppLayout'
  import UsersList from './UsersList'

	export default {
		components: {
			AppLayout,
			UsersList
		},

		props: ['users'],
	}
</script>
