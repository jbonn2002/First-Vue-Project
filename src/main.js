import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as THREE from 'three';
import router  from "./router/router"

const app = createApp(App)
app.use(router)

app.mount('#app')

let camera, scene, renderer;

let torus;

init();
animate();

function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x00000 );
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true
  });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = THREE.sRGBEncoding;

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

  