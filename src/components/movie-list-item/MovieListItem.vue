<template>
    <li class="movie-list-item d-flex justify-content-between" :class="[{like: movie.like}, {favourite: movie.favourite}]">
        <span class="list-group-item-label" @click="$emit('onToggle', {id: movie.id, prop: 'like'})">{{ movie.name }}</span>
        <input class="list-group-item-input" type="number" :value="movie.viewers"/>
        <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-cookie btn-sm" @click="$emit('onToggle', {id: movie.id, prop: 'favourite'})">
                <i class="fas fa-cookie"></i>
            </button>
            <button type="button" class="btn btn-trash btn-sm" @click="$emit('onRemove', movie.id)">
                <i class="fas fa-trash"></i>
            </button>
            <i class="fas fa-star"></i>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            onLike() {
                this.$emit("onLike", this.movie.id)
            }
        }
    }
</script>

<style scoped>
    .movie-list-item{
        padding: 15px 20px;
        border-bottom: 1px solid #3d5a80;
    }
    .movie-list-item:last-child{
        border-bottom: none;
    }
    .movie-list-item span{
        line-height: 30px;
        font-size: 20px;
        width: 550px;
        cursor: pointer;
    }
    .movie-list-item input{
        line-height: 30px;
        font-size: 20px;
        text-align: center;
        border: none;
        outline: none;
    }
    .movie-list-item button{
        widows: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }
    .movie-list-item .btn-cookie{
        color: #e09f3e;
    }
    .movie-list-item .btn-trash{
        color: #e5383b;
    }
    .movie-list-item .fa-star{
        widows: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: #ffd700;
        transition: .3 all;
        transform: translateX(30px);
        opacity: 0;
    }
    .movie-list-item.like .fa-star{
        opacity: 1;
        transform: translateX(0);
    }
    .movie-list-item.favourite .list-group-item-label,
    .movie-list-item.favourite .list-group-item-input
    { 
        color: #e09f3e;
    }
</style>