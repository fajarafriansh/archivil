<template>
	<div>
		<span>{{ pagination.from }} - {{ pagination.to }} - {{ pagination.from }}</span>
		<a v-if="pagination.prevPageUrl" @click="$emit('prev')">Prev</a>
		<a v-else :disable="true">Prev</a>
		<a v-if="pagination.nextPageUrl" @click="$emit('next')">Next</a>
		<a v-else :disable="true">Next</a>
	</div>
</template>

<script>
	export default {
		props: ['pagination']
	}
</script>
