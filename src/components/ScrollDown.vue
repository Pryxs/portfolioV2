<template>
    <div class="scroll-down">
        <div class="scroll-down_mouse">
            <div class="scroll-down_wheel"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .scroll-down {
        position: absolute;
        right: 0;
        bottom: 3rem;
        left: 0;
        margin: auto;
        
        width :34px;
        height: 55px;

        &_mouse{
            width: 3px;
            padding: 10px 15px;
            height: 35px;
            border: 2px solid $text-color;
            border-radius: 25px;
            opacity: 0.75;
            box-sizing: content-box;
        }

        &_wheel{
            width: 3px;
            height: 10px;
            border-radius: 25%;
            background-color: $primary-color;
            animation-name: scroll;
            animation-duration: 1.8s;
            animation-timing-function: cubic-bezier(.15,.41,.69,.94);
            animation-iteration-count: infinite;
            transform-origin: bottom;
        }
    }

    @keyframes scroll {
    0% { 
        opacity: 0; 
    }
    10% { 
        transform: translateY(0); opacity: 1; 
    }
    100% { 
        transform: translateY(15px); opacity: 0;
        height: 3px;
    }
    }
</style>