<template>
    <div>
        <div class="max-w-5xl m-auto">

            <div v-for="(design,index) in designs" :key="index"
                class="md:grid grid-rows-2 grid-flow-col gap-4 place-content-center my-10 bg-white p-10 border rounded-2xl shadow-2xl">
                <span class="relative right-9 bottom-9">
                    <div class="ribbon"><span class="text-3xl">{{$store.state.designs.currencySign}}
                            {{design.price}}</span></div>
                </span>
                <div class="row-span-2 col-span-2 flex justify-center">
                    <img :src="design.image" alt="" srcset="" class="h-64 rounded-sm" @click="showMultiple">
                </div>
                <div class="row-span-2 col-span-3">
                    <p class="text-center font-bold font text-2xl my-2">{{design.title}}</p>
                    {{design.description}}
                    <div class="text-center mt-10" v-if="!design.proposal_status">
                        <button
                            class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white hover:text-pink-500"
                            type="button" @click="choosePaymentType">
                            <i class="fas fa-heart"></i> Send Proposal
                        </button>
                    </div>
                    <div v-else class="text-right mt-10">
                        <span class="font-semibold">Request Status: </span>
                        <span
                            :class="[(design.request_status == 'Accepted')?'text-green-600':'text-red-600']">{{design.request_status}}</span>
                        <p>
                            <span class="font-semibold">Request Date: </span>{{design.request_date}}
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <!-- <button @click="showSingle">Show single picture.</button>
                <button @click="showMultiple">Show a group of pictures.</button> -->

                <!-- all props & events -->
                <vue-easy-lightbox scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs"
                    :index="index" @hide="handleHide"></vue-easy-lightbox>
            </div>

        </div>
        <!-- Show Payment Type Modal Begins -->
        <show-modal v-show="isModalVisible">
            <template v-slot:header> Select Payment Method </template>
            <template v-slot:body> 
                <input type="radio" id="one" value="One" v-model="paymentMethod" class="mx-2 bg-pink-500">
                <label for="one" class="font-semibold text-sm">Manual Payment</label>
                <br>
                <input type="radio" id="two" value="Two" v-model="paymentMethod" class="mx-2">
                <label for="two" class="font-semibold text-sm">Stripe</label>    
            </template>
            <template v-slot:footer >
                <div class="text-right">
                    <button class="bg-red-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="closeModal()">Close</button>
                    <button class="bg-indigo-500 text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="handleOk()">Ok</button> 
                </div>
            </template>
        </show-modal>
        <!-- Show Payment Type Modal End -->

        <!-- Mannual Payment Modal Begins -->
        <show-modal v-show="isMannualPaymentModalVisible">
            <template v-slot:header> Pay Mannualy </template>
            <template v-slot:body> 
                <form class="w-full max-w-sm">
                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                          Amount
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-300" id="inline-full-name" type="text" value="">
                      </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                          Reciept
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-300" id="inline-password" type="file">
                      </div>
                    </div>
                  </form>
            </template>
            <template v-slot:footer >
                <div class="text-right">
                    <button class="bg-red-500 text-white active:bg-pink-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="closeMannualModal()">Close</button>
                    <button class="bg-indigo-500 text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="handleOk()">Ok</button> 
                </div>
            </template>
        </show-modal>
        <!-- Mannual Payment Modal End -->
    </div>
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox'
    export default {
        name: 'Designs',
        data() {
            return {
                imgs: '', // Img Url , string or Array of string
                visible: false,
                index: 0, // default: 0
                isModalVisible: false,
                isMannualPaymentModalVisible:false,
                paymentMethod:'',
                amount:''
            }
        },
        component: {
            VueEasyLightbox,
        },
        methods: {
            handleOk(){
                this.isModalVisible = false
                this.isMannualPaymentModalVisible = true;
            },
            choosePaymentType() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            closeMannualModal(){
                this.isMannualPaymentModalVisible = false;
            },
            showSingle() {
                this.imgs = 'http://via.placeholder.com/350x150'
                // or
                this.imgs = {
                    title: 'this is a placeholder',
                    src: 'http://via.placeholder.com/350x150'
                }
                this.show()
            },
            showMultiple() {
                this.imgs = [
                    'https://picsum.photos/seed/picsum/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300?grayscale'

                ]
                this.index = 2 // index of imgList
                this.show()
            },
            show() {
                this.visible = true
            },
            handleHide() {
                this.visible = false
            }
        },
        computed: {
            designs() {
                return this.$store.getters['designs/designs'];
            },
        },
        created() {
           // this.$store.dispatch('designs/init');
        }
    }
</script>
<style scoped>
    .ribbon {
        position: absolute;
        left: -5px;
        top: -5px;
        z-index: 1;
        overflow: hidden;
        width: 75px;
        height: 75px;
        text-align: right;
    }

    .ribbon span {
        font-size: 12px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        line-height: 20px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        width: 100px;
        display: block;
        background: #ec4899;
        background: linear-gradient(#ec4899, #ec4899);
        box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
        position: absolute;
        top: 19px;
        left: -21px;
    }
</style>