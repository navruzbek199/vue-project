<template>
    <Box>
        <p class="fs-3 text-uppercase">Barcha kinolar soni : {{ allMovieCount }} </p>
        <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni : {{ favouriteMovieCount }} </p>
    </Box>
</template>



<script>
export default {
    props:{
        allMovieCount: {
            type: Number,
            required: true
        },
        favouriteMovieCount: {
            type: Number,
            required: true
        }
    },
    
}
</script>



<style scoped>
    .app-info {
        margin-top: 2rem;
        padding: 1.5rem;
        background-color: #fcfaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px rgba(0, 0, 0, 15px);
    }
</style>