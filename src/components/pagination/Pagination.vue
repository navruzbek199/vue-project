<template>
    <nav aria-label="pagination">
        <ul class="pagination pagination-sm">
            <li 
            v-for="page in pageNumber" 
            class="page-item" 
            :key="page" 
            :class="{'active' : page == pageCount }"
            @click="onPageHandler(page)"
            >
                <span class='page-link'>{{ page }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Array,
            required: true
        },
        pageCount: {
            type: Number,
            required: true
        },
        onPageHandler: {
            type: Function,
            required: true
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped></style>