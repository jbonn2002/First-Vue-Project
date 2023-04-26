<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue'

let camera, scene, renderer;

let torus;


onMounted(() => {

    init();
    animate();

    function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x00000 );
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer({
      antialias: true
  });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = THREE.sRGBEncoding;

  const container = document.getElementById('threejs-container');
  container.appendChild( renderer.domElement )

  
  const torusGeometry = new THREE.TorusKnotGeometry( 5, 3, 300, 100 );
  const torusMaterial = new THREE.PointsMaterial( { 
    color: 0xb79ced, 
    size: 0.02
  } );
  torus = new THREE.Points( torusGeometry, torusMaterial );
  scene.add( torus );

  camera.position.z = 5;

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  
  
  }
  
  function animate() {
    requestAnimationFrame( animate );
  
    render();
  }
  
  function render() {
    
    torus.rotation.x += 0.001;
    torus.rotation.y += 0.001;
    
    renderer.render( scene, camera );
  }

})


</script>

<template>
    <div id="threejs-container"></div>
</template>

<style>

canvas{
  position: fixed;
  top: 0;
  left: 0vw;
  z-index: -1;
  max-height: 100vh;
  max-width: 100vw;
}

</style>