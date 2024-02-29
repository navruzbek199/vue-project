<template>
    <div class="app font-monospace">
        <div class="content">
            <AppInfo :allMovieCount="movies.length" :favouriteMovieCount="movies.filter((a) => a.favourite).length" />
            <Box class="search-panel">
                <SearchPanel :onUpdateTerm="onUpdateTerm" />
                <AppFilter :onUpdateFilter="onUpdateFilter" :filterName="filter" />
            </Box>
            <Box v-if="!movies.length && !isLoading">
                <p class="text-center fs-2 text-danger mb-0">
                    Kinolar mavjuda emas!
                </p>
            </Box>
            <Box v-else-if="isLoading">
                <Loader />
            </Box>
            <MovieList v-else :movies="onFilterHandler(onSearchHandler(movies, term), filter)" @onToggle="onToggleHandeler"
                @onRemove="onRemoveHander" />
            <Box class="d-flex justify-content-center">
                <Pagination :pageNumber="totalPages" :pageCount="page" :onPageHandler="onPageHandler"/>
            </Box>
            <MovieAdd @createMovie="createMovie" />
        </div>
    </div>
</template>


<script>
import AppInfo from '../app-info/AppInfo.vue'
import AppFilter from '../app-filter/AppFilter.vue'
import SearchPanel from '../search-panel/SearchPanel.vue'
import MovieList from '../movie-list/MovieList.vue'
import MovieAdd from '../movie-add/MovieAdd.vue'
import axios from 'axios'
import Box from '@/ui/Box.vue'
import Loader from '@/ui/Loader.vue'
import Pagination from '../pagination/Pagination.vue'
export default {
    components: {
        AppInfo,
        AppFilter,
        SearchPanel,
        MovieList,
        MovieAdd,
        Box,
        Loader,
        Pagination
    },
    data() {
        return {
            movies: [],
            term: '',
            filter: 'all',
            isLoading: false,
            limit: 10,
            page: 1,
            totalPages: 0
        }
    },
    methods: {
        async createMovie(item) {
            try {
                const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, item)
                this.movies.push(res?.data)
            } catch (error) {
                console.log(error);
            }   
        },
        onToggleHandeler({ id, prop }) {
            this.movies = this.movies.map((item) => {
                if (item?.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        },
        async onRemoveHander(id) {
            try {
                const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                console.log(res?.data, "dalte");
                this.movies = this.movies.filter(c => c?.id !== id)
            } catch (error) {
                console.log(error);
            }
        },
        onSearchHandler(arr, term) {
            if (term.length == 0) {
                return arr
            }
            return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
        },
        onFilterHandler(arr, filter) {
            switch (filter) {
                case 'papular':
                    return arr.filter(a => a.like)
                case 'mostViewers':
                    return arr.filter(a => a.viewers > 500)
                default:
                    return arr
            }
        },
        onUpdateTerm(term) {
            this.term = term
        },
        onUpdateFilter(filter) {
            this.filter = filter
        },
        
        async FetchMovie() {
            try {
                this.isLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.limit,
                        _page: this.page
                    }
                })
                const newArr = response.data?.map((item) => (({
                    id: item?.id,
                    name: item?.title,
                    like: false,
                    favourite: false,
                    viewers: item?.id * 10
                })))
                this.totalPages = Math.ceil(response?.headers['x-total-count'] / this.limit)
                this.movies = newArr
                console.log(this.totalPages, "total page");
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false
            }
        },
        onPageHandler(page) {
            this.page = page
            this.FetchMovie()
        },
    },
    mounted() {
        this.FetchMovie()
    },
    watch: {
        page() {
            this.FetchMovie()
        }
    }
}
</script>



<style scoped>
.app {
    color: #000;
    height: 100vh;
}

.content {
    width: 1000px;
    min-height: 700px;
    background-color: #fff;
    margin: 0 auto;
    padding: 5rem 0;
}

.search-panel {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 15px);
}
</style>