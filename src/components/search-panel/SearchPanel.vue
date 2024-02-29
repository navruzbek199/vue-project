<template>
    <Input 
    class="search-input" 
    placeholder="Kinolarni qidirish" 
    v-model="term"
    @input="onChangeHandler"
    />
</template>


<script>
import Input from '@/ui/Input.vue';

export default {
    props: {
        onUpdateTerm: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            term: ''
        };
    },
    methods: {
        onChangeHandler(e) {
            this.term = e.target.value;
            this.onUpdateTerm(this.term);
        }
    },
    components: { Input }
}
</script>



<style scoped>
.search-input {
    margin-bottom: 1rem;
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 15px);
}
</style>