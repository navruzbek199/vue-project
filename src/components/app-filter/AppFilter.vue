<template>
    <div class="btn-group">
        <PrimaryBtn v-for="btn in ButtonName" :key="btn.title" 
        :class="[filterName == btn.title ? 'btn-dark' : 'btn-outline-dark']" 
        @click="FilterHandler(btn.title)">
            {{ btn.name }}
        </PrimaryBtn>
    </div>
</template>

<script>
export default {
    props: {
        onUpdateFilter: {
            type: Function,
            required: true
        },
        filterName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            ButtonName: [
                {
                    name: "Barcha kinolar",
                    title: 'all'
                },
                {
                    name: "Mashhur kinolar",
                    title: 'papular'
                },
                {
                    name: "Eng ko'p ko'rilgan kinolar",
                    title: 'mostViewers'
                },
            ],
            filter: 'all'
        }
    },
    methods: {
        FilterHandler(filter) {
            this.filter = filter
            this.onUpdateFilter(this.filter)
        }
    },


}
</script>
<style scoped></style>