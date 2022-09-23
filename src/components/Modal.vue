<template>
    <a @click="showModal">Voir plus</a>

    <Modal v-model="isShow" :close="closeModal">
        <div class="modal">
            <div class="modal_content" @wheel.prevent="horizontalScroll($event)">
                <slot></slot>
            </div>
            <button class="modal_close" @click="closeModal">
                <span class="modal_close_circle"></span>
                <span class="modal_close_bar -left"></span>
                <span class="modal_close_bar -right"></span>
            </button>
        </div>
    </Modal>
</template>

<script>
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        setup() {
            const isShow = ref(false);
    
            function showModal() {
                isShow.value = true;
            }
        
            function closeModal() {
                isShow.value = false;
            }
    
            return {
                isShow,
                showModal,
                closeModal,
            };
        },

        methods:{
            horizontalScroll :function(event){
                let modal = document.querySelector('.modal');
                modal.scrollLeft += event.deltaY + 20;
            }
        }
    });
</script>

<style scoped lang="scss">
    .modal {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        font-size: 20px;
        text-align: center;
        color: black;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            height: 8px;
        }

        &::-webkit-scrollbar-track {
            background: rgb(94, 94, 94);
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(189, 189, 189);
            border-radius: 15px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: rgb(155, 155, 155);
        }

        &_content{
            display: flex;
            gap: 1em;
        }

        &_close{
            position: absolute;
            left: 50%;
            top: 16px;
            background-color: transparent;
            border: none;

            &_circle{
                border: 1px solid $text-color;
                border-radius: 50%;
                height: 64px;
                width: 64px;
                transition: .4s ease-in-out;
            }

            &_bar{
                width: 1px;
                background-color: $text-color;
                height: 40px;
                transform-origin: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transition: .4s ease-in-out;

                &.-left{
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &.-right{
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

            &:hover{
                .modal_close{
                    &_circle{
                        background-color: $text-color;
                    }

                    &_bar{
                        background-color: black;
                    }
                }
            }
        }
    }
</style>