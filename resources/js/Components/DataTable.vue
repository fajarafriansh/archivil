<template>
	<div class="overflow-x-hidden -my-2 -mx-2">
    <div class="py-2 px-2">
      <data-table-header>
      </data-table-header>

      <div class="-my-2 py-2 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="align-middle inline-block min-w-full overflow-hidden">
          <table class="min-w-full">
            <thead>
              <tr class="bg-base-color5 font-semibold">
                <th class="px-4 py-3 border border-base-color4 w-1">
                  <input type="checkbox" class="form-checkbox text-blue-color h-5 w-5 border border-base-color3">
                </th>
                <th class="px-4 py-3 border border-base-color4 cursor-pointer"
                  v-for="column in columns">
                 <!--  :key="colomn.name"
                  @click="$emit('sort', colomn.name)"
                  :class="sortKey === colomn.name ? (sortOrders[colomn.name] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting"> -->
                  {{ column.label }}
                </th>
                <th class="px-4 py-3 border border-base-color4 w-1">Action</th>
              </tr>
            </thead>

            <slot></slot>

          </table>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	import DataTableHeader from './DataTableHeader'
  import TableBody from './Table'

	export default {
		components: {
			DataTableHeader,
      TableBody
		},

    props: ['columns'],
	}
</script>
