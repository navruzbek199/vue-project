<template>
    <Box class="movie-add">
        <h3>Yangi kinolar qo'shish</h3>
        <form class="add-form d-flex" @submit.prevent>
            <input type="text" class="form-control new-movie-label" placeholder="Qanday kino ?" :value="name"
                @input="name = $event.target.value" />
            <input type="number" class="form-control new-movie-label" placeholder="Necha marta kurilgan ?" :value="viewers"
                @input="viewers = $event.target.value" />
            <PrimaryButton type="submit" @click="addMovie" class="btn-outline-dark">
                Qo'shish
            </PrimaryButton>
        </form> 
    </Box>
</template>

<script>
import PrimaryButton from '@/ui/PrimaryBtn.vue';
export default {
    components:{
        PrimaryButton
    },
    data() {
        return {
            name: "",
            viewers: ""
        }
    },
    methods: {
        addMovie() {
            if(!this.name || !this.viewers) return
            const newMovie = {
                name: this.name,
                viewers: this.viewers,
                like: false,
                favourite: false,
            }
            this.$emit("createMovie", newMovie)
            this.name = '',
            this.viewers = ''
        },
    }
}
</script>

<style scoped>
.movie-add {
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 15px);
}
</style>