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
            <!-- <div class="project_content_infos">
                <div v-for="info in infos" class="project_content_infos -item">
                    <span class="-item_title">{{info.title}}</span>
                    <span class="-item_description">{{info.description}}</span>
                </div>
            </div> -->

            <div class="project_content_action">
                <a>Voir plus</a>
            </div>
        </div>
    </section>
</template>

<script> 
    export default {
        props: ['primaryColor', 'secondaryColor', 'content'],

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
    .project{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        perspective: 800px;
        display: flex;
        align-items: center;
        gap: 1rem;
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

            // &_infos{
            //     .-item{
            //         display: flex;

            //         &_title{
            //             font-family: 'Trirong';
            //             margin-right: 1em;
            //             color: $matui-secondary-color;
            //         }

            //         &_description{
            //             font-family: 'Trirong';
            //             color: $matui-secondary-color;

            //         }
            //     }
            // }

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