<template>
    <div>
        <div v-for="(design, index) in designs" :key="index"
            class="w-full py-10 px-2 border border-gray-200 bg-white shadow-xl hover:shadow-2xl rounded-2xl my-5">
            <p class="text-lg my-1 uppercase text-gray-500 text-center">{{ design.title }}</p>
            <div class="md:flex justify-center">
                <div class="md:w-1/5 sm:w-full text-center">
                    <img :src="design.image" alt="" height="200" width="250"
                        class="object-none object-center bg-white w-full" />
                    <span
                        class="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-pink-100 bg-pink-600 rounded-full">{{$store.state.designs.currencySign}}
                        {{ design.price }}</span>

                    <span class="font-bold text-pink-500"></span>
                </div>

                <div class="md:w-3/5 text-justify text-sm p-5">
                    <span class="">{{ design.description }}</span>
                </div>
            </div>
            <div class="text-center mt-0">
                <button
                    class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white hover:text-pink-500"
                    type="button">
                    <i class="fas fa-heart"></i> Send Proposal
                </button>

                <button
                    class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white hover:text-pink-500"
                    type="button">
                    <i class="fas fa-heart"></i> View More
                </button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Designs',
        computed: {
            designs() {
                return this.$store.getters['designs/designs'];
            }
        },
    }
</script>