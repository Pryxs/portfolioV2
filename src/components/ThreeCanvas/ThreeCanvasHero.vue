<template>
    <div :ref="this.customRef">
    </div>
</template>

<script>
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import customFragmentShader from '@/shaders/fragmentShader.glsl'
import customVertexShader from '@/shaders/vertexShader.glsl'


let scene;
let camera;
let renderer;
let composer;
let renderPass;
let customPass;
let counter;
let customEffect;

export default {
    props: ['color', 'customRef'],

    data: function() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.y = 6;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
    
        //COMPOSER
        composer = new EffectComposer(renderer);
        renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
    
        //custom shader pass
        counter = 0.0;
        customEffect = {
            uniforms: {
                "tDiffuse": { value: null },
                "amount": { value: counter },
                "customColor": { value: new THREE.Color(this.color)}            
            },
            vertexShader: customVertexShader,
            fragmentShader: customFragmentShader
        }
    
        customPass = new ShaderPass(customEffect);
        customPass.renderToScreen = true;
        composer.addPass(customPass);  

        return{
            
        }
    },
    mounted: function() {
        this.$refs[this.customRef].appendChild(renderer.domElement)
        window.addEventListener( 'resize', this.onWindowResize, false );
        this.animate()
    },
    methods: {
        animate: function() {
            counter += 0.01;
            customPass.uniforms["amount"].value = counter;
        
            requestAnimationFrame( this.animate );
            composer.render();
        },
        onWindowResize: function(){
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    },
}
</script>

<style>
    canvas {
        width: 100vw;
        height: 100vh;
    }
</style>