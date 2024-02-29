<template>
    <input type="text" :value="modelValue" class="form-control" @input="updateInput">
</template>

<script>
    export default {
        name: 'Input',
        props:{
            modelValue: [String, Number],
            term: [String, Number]
        },
        methods:{
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>