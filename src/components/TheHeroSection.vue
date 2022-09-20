<template>
    <div class="hero">
        <h1 class="hero_title">
            <span class="hero_title_letter">C</span>
            <span class="hero_title_letter">o</span>
            <span class="hero_title_letter">r</span>
            <span class="hero_title_letter">e</span>
            <span class="hero_title_letter">n</span>
            <span class="hero_title_letter">t</span>
            <span class="hero_title_letter -extend">
                <span>i</span>
                <span><ILetter/></span>
            </span>
            <span class="hero_title_letter">n</span>
            <span class="hero_title_letter">&nbsp;</span>
            <span class="hero_title_letter">R</span>
            <span class="hero_title_letter">o</span>
            <span class="hero_title_letter">y</span>
            <br>
            Developpeur Web
        </h1>
    </div>

    <div class="point-grid">
        <div class="point-grid_wrapper">
            <PointGrid class="point-grid_item"/>
            <PointGrid class="point-grid_item"/>
        </div>

        <div class="point-grid_wrapper">
            <PointGrid class="point-grid_item"/>
            <PointGrid class="point-grid_item"/>
            <PointGrid class="point-grid_item"/>
        </div>

        <PointGrid class="point-grid_item -primary"/>
    </div>

    <ScrollDown/>
</template>

<script>
    import ScrollDown from '@/components/ScrollDown.vue'
    import PointGrid from '@/assets/point-grid.svg?component'
    import ILetter from '@/assets/i.svg?component'

    export default {
        components: {
            ScrollDown,
            PointGrid,
            ILetter
        }
    }
</script>

<style lang="scss">
    .point-grid{
        position: absolute;
        top: 0;
        right: 15%;
        z-index: 50;
        width: 160px;
        display: flex;

        &_wrapper{
            position: relative;
            width: 80px;
        }

        &_item{
            position: absolute;
            fill: $text-color;
            opacity: .3;

            &.-primary{
                fill: $primary-color;
                opacity: .7;
                width: 78px;
                top: 170px;
                left: -15px;
            }

            &:nth-child(2){
                top: 78px;
            }

            &:nth-child(3):not(.-primary){
                top: 155px;
            }
        }
    }
    .hero{
        &_title{
            @include absolute-vertical-center;
            top: 45%;
            left: 5rem;
            position: absolute;
            font-size: 7rem;
            color: $primary-color;

            &_letter{
                font-size: 8rem;
                display: inline-block;
                color: $text-color;
                transition: .2s;

                &.-extend{
                    position: relative;
                    overflow: visible;
                    letter-spacing: .1em;

                    span:first-child{
                        visibility: hidden;
                    }
                    
                    span:nth-child(2){
                        position: absolute;
                        top: -0.5em;
                        left: -0.1em;
                        transform: scale(.8);
                    }    
                    // position: relative;
                    // overflow: visible;
                    // bottom: 21px;
                    // color: $primary-color;

                    // &:after{
                    //     content: " ";
                    //     background: linear-gradient($primary-color, transparent);                        
                    //     height: 60px;
                    //     // width: 20px;
                    //     width: .155em;
                    //     position: absolute;
                    //     left: 50%;
                    //     transform: translateX(-50%);
                    //     bottom: -38px;
                    // }
                }

                &:hover{
                    color: $primary-color;
                    transition: .4s;
                }
            }

            @media (max-width: 1350px) { 
                font-size: 5.5rem;
                &_letter{
                    font-size: 6.5rem;

                    &.-extend{
                    
                        span:nth-child(2){
                            top: -0.76em;
                            left: -0.15em;
                            transform: scale(0.7);
                        }    
                    }
                }     
            }

            @media (max-width: 1000px) { 
                font-size: 4rem;
                left: 2rem;
                &_letter{
                    font-size: 5rem;

                    &.-extend{
                    
                        span:nth-child(2){
                            top: -1.28em;
                            left: -0.25em;
                            transform: scale(0.5);
                        }    
                    }
                }     
            }
        }
    }
</style>