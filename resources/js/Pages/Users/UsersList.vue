<template>
	<card>
		<template #title>
			All Users
		</template>

		<template #content>
			<data-table :columns="columns">
			</data-table>
    </template>
	</card>
</template>

<script>

  import Card from './../../Components/Card'
  import DataTable from './../../Components/DataTable'
  import Pagination from './../../Components/Pagination'

  export default {
  	components: {
			Card,
			DataTable,
			Pagination
  	},

		props: ['users'],

		data() {
			// let sortOrders = {}

			// let columns = [
			// 	{ label: 'User ID', name: 'userId' },
			// 	{ label: 'Name', name: 'name' },
			// 	{ label: 'Email', name: 'email' },
			// 	{ label: 'Registered', name: 'registered' }
			// ]

			// columns.forEach((column) => {
			// 	sortOrders[colomn.name] = -1
			// })

			return {
				columns: [
					{ label: 'User ID', name: 'userId' },
					{ label: 'Name', name: 'name' },
					{ label: 'Email', name: 'email' },
					{ label: 'Registered', name: 'registered' }
				],
				sortKey: 'userId',
				// sortOrders: sortOrders,
				length: 10,
				search: '',
				pagination: {
					currentPage: 1,
					total: this.users.length,
					nextPage: '',
					prevPage: '',
					from: '',
					to: ''
				}
			}
		},

		methods: {

		}

  }
</script>
