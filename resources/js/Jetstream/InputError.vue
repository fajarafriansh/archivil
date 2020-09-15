<template>
    <div v-show="message">
        <p class="text-xs text-red-600 leading-4 px-4">
            {{ message }}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>
