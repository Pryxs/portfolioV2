<template>
    <section class="project"  :style="cssProps">
        <div class="project_image">
            <slot name="image"></slot>
        </div>
        <div v-if="content" class="project_content">
            <span class="project_content_num">{{content.num}}</span>
            <h2>{{content.title}}</h2>
            <h3>{{content.subtitle}}</h3>
            <p>{{content.description}}</p>
            <div class="project_content_infos">
                <div v-for="info in infos" class="project_content_infos -item">
                    <component class="-item_icon" :is="info.icon"/>
                    <span class="-item_title">{{info.title}}</span>
                </div>
            </div>

            <div class="project_content_action">
                <CustomModal>
                    <div class="modal_content_screen" v-for="screen in screens">
                        <img :src="screen">
                    </div>
                </CustomModal>
            </div>
        </div>
    </section>
</template>

<script> 
    import CustomModal from '@/components/Modal.vue'
    import reactIcon from "@/assets/logos-react.svg?component"
    import vueIcon from "@/assets/logos-vue.svg?component"
    import svelteIcon from "@/assets/logos-svelte-icon.svg?component"
    import phpIcon from "@/assets/logos-php.svg?component"
    import laravelIcon from "@/assets/logos-laravel.svg?component"
    import wordpressIcon from "@/assets/logos-wordpress-icon.svg?component"
    import woocommerceIcon from "@/assets/logos-woocommerce-icon.svg?component"
    import nativescriptIcon from "@/assets/logos-nativescript.svg?component"



    export default {
        props: ['primaryColor', 'secondaryColor', 'content', 'screens', 'infos'],

        components:{
            CustomModal,
            reactIcon,
            vueIcon,
            svelteIcon,
            phpIcon,
            laravelIcon,
            wordpressIcon,
            woocommerceIcon,
            nativescriptIcon
        },

        computed: {
            cssProps() {
                return {
                    '--primary-color': this.primaryColor,
                    '--secondary-color': this.secondaryColor,
                }
            }
        }
    }
</script>

<style lang="scss">

    .modal_content_screen{
        height: 70vh;

        img{
            height: 100%;
        }

        &:last-child{
            padding-right: 30px;
        }
    }
                
    .project{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        perspective: 800px;
        display: flex;
        align-items: center;
        gap: 4rem;
        width: 80%;
        max-width: 1100px;

        &_image{
            width: 50%;
            perspective: 800px;
            display: flex;
            justify-content: center;

            img{
                transform: rotate3d(0,1,0,15deg);
                width: auto;
                height: 100%;
                max-height: 450px;
            }
        }

        &_content{
            width: 50%;
            min-width: 500px;

            &_num{
                font-size: 64px;
                color: var(--secondary-color);
                font-family: 'Prompt', sans-serif;
                margin-bottom: .5rem;
            }

            h2{
            }

            h3{
                margin-bottom: 2rem;
                color:  var(--secondary-color);
            }

            p{
                letter-spacing: 1px;
                margin-bottom: 2rem;
            }

            &_infos{
                .-item{
                    display: grid;
                    gap: .8rem;
                    grid-template-columns: 2rem 1fr;
                    margin-bottom: .7rem;

                    &_title{
                        font-family: 'Trirong';
                        color: $text-color;
                    }

                    &_icon{
                        height: 1rem;
                        justify-self: end;
                    }
                }
            }

            &_action{
                width: 100%;
                display: flex;
                justify-content: end;

                a{
                    @include button(var(--primary-color));
                }
            }
        }

        @media (max-width: 1300px) { 
            gap: 3rem;

            &_image{
                img{
                    height: 375px;
                }
            }

            &_content{
                min-width: auto;
                width: 40%;
            }
        }

        @media (max-width: 1000px) { 
            flex-direction: column;
            gap: 1rem;

            &_image{
                img{
                    transform: rotate3d(0,0,0,0);
                    height: 375px;
                }
            }

            &_content{
                min-width: auto;
                width: 90%;
            }
        }
    }
</style>