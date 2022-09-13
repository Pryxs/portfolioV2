<template>
    <section class="project">
        <img :src="image">
        <div class="project_content">
            <span class="project_content_num">.01</span>
            <h2>MATUI</h2>
            <h3>Un outil d'aide à la décision</h3>
            <p>Implémentation du diagramme MATUI, un arbre de décision version développer par des chercheurs du LIG (Laboratoire d'informatique de Grenoble) dont le but est d'aider
                les chercheurs en informatique à concevoir leurs expérimentations centrées humain.</p>
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
    import image from "@/assets/MATUI_MockUp.png"
    
    export default {
        data: function () {
            return {
                image: image,
                infos: [
                    {title: "ANNEE", description: "2021"}
                ]
            }
        }
    }
</script>

<style lang="scss">
    .project{
        position: absolute;
        left: 45%;
        transform: translateX(-50%);
        perspective: 800px;
        display: flex;
        // align-items: center;
        gap: 5em;

        img{
            transform: rotate3d(0,1,0,15deg);
            height: 400px;
            width: auto;
        }

        &_content{
            min-width: 500px;

            &_num{
                font-size: 64px;
                color: $matui-secondary-color;
                font-family: 'Prompt', sans-serif;
                margin-bottom: .5rem;
            }

            h2{
            }

            h3{
                margin-bottom: 2rem;
                color: $matui-secondary-color;
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
                    @include button($matui-primary-color);
                }
            }
        }
    }
</style>