<template>
    <input class="form-input bg-base-color5 border border-base-color6 rounded-lg text-base-color2 px-4 focus:bg-white focus:border-blue-color transition ease-in-out duration-150" :value="value" @input="$emit('input', $event.target.value)" ref="input" placeholder=" ">
</template>

<script>
    export default {
        props: ['value'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    }
</script>

