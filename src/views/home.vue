<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import * as THREE from 'three';
import Button from "../components/button.vue"

library.add(faGithub, faTwitter, faLinkedin)

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const content = ref(null)
const main = ref(null);
const firstHeader = ref(null);
const firstSection = ref(null)
const section = ref(null)



onMounted(() => {
  
  let sections = gsap.utils.toArray(".panel");
 //scrolltrigger
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container.value,
      pin: true,
      scrub: 0.1,
      end: '+=3000',
      markers: true,
    }
})

gsap.from('.grids', {
  y: -130,
  delay: 1,
  opacity: 0,
  duration: 2,
  ease: "elastic",
  stagger: 0.5,
  scrollTrigger: {
    start: "left left",
    toggleActions: "play none none reset",
  }
})
  


//first section animation

  const animateText = new SplitType('h3', { types: 'words '});
  
  gsap.from(animateText.words, {
    y:24,
    opacity: 0,
    duration: 0.8,
    stagger: {amount: 1},
    ease: 'ease',
  },)

  gsap.from( 'a', {
    delay: 0,
    duration: 0.4,
    x: '-200',
    autoAlpha: 0,
    stagger: 0.5,
    ease: "back.out(1.7)"
  })
  
  let timeline = gsap.timeline();
  timeline.from(firstHeader.value, {
    delay: 0,
    duration: 0.5,
    x: '-200',
    autoAlpha: 0,
    stagger: 0.5,
    ease: "back.out(1.7)"
  }, "<")
  timeline.from(content.value, {
    delay: 0.5,
    duration: 0.5,
    x: '200',
    autoAlpha: 0,
    ease: "back.out(1.7)"
  }, "<")


})


function onClick(){
  gsap.from(main.value, {
    delay: 0,
    duration: 1,
    y: '-100',
    autoAlpha: 0,
    ease: "back.out(1.7)"
  });
}
  

const items = ref([
  {id: 'zero', header: 'About', description: "Check out who I am ", buttonText: 'Go', href:'/about'},
  {id: 'one', header: 'Skills & Traits', description: 'See if my stack is right for you', buttonText: 'Go', href:'/skills&traits'},
  {id: 'two', header: 'Projects', description: 'Look at some of my work', buttonText: 'Go', href:'/projects'},
  {id: 'three', header: 'Contact', description: 'Get in touch with any inquiries or job opportunities', buttonText: 'Go', href:'/contact'},
]);

const mainHeaders = ref([
  {id: 'zero', header: 'JordybDev', logo: 'info'},
]);


// ThreeJs Background Code


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

// let testOne = () => {
//   window.location.href =
// }

</script>

<template>
  <div ref="container" class="container">
    <main ref="main">
        <section class="headerSection">
          <header>
              <div class="headerDiv">
                <h1 ref="content" v-for="(mainHeader) in mainHeaders" :key="mainHeader">{{ mainHeader.header }}</h1>
                <span>Scroll to navigate the page</span>
              </div>
              <div class="links">
                <a class="logos" href="https://github.com/jbonn2002" target="_blank" rel="noopener noreferrer">GitHub<font-awesome-icon icon="fa-brands fa-github" /></a>
                <a class="logos" href="https://twitter.com/JordybDev" target="_blank" rel="noopener noreferrer">Twitter<font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a class="logos" href="https://www.linkedin.com/in/jordan-bonnaire/" target="_blank" rel="noopener noreferrer">Linkedin<font-awesome-icon icon="fa-brands fa-linkedin" /></a>
              </div>
            </header>
        </section>
        <section class="first-section panel" ref="firstSection">
          <h2 class="first-header" ref="firstHeader">Welcome</h2>
          <h3>I am a Full Stack Web Developer <br/> based in Orange County, California</h3>
        </section>
        <section class="gridContainer panel">
          <div class="grids" v-for="(header, index) in items" :key="header" ref="section" :id="header.id">
            <h2 class="headers" >{{ header.header }} </h2>
            <div class="divTest">
              <p>
                {{header.description}}
              </p>
              <Button @click="this.$router.push( header.href )">{{ header.buttonText }}</Button>
            </div>
          </div>
        </section>
      </main>
  </div>
</template>


<style>

*{
  margin: 0;
  padding: 0;
  border: 0;
}

main{
  display: flex;
}

.container{
  height: 100%;
}

a{
  color: white;
  text-decoration: none;
}


.gridContainer{
  display: grid;
  grid-template-areas: "a a" "a a";
  height: 100vh;
  width: 100vw;
}

.grids{
  height: 5rem;
  max-width: 20vw;
}

.headerSection{
  color: #242424;
  display: flex;
  text-align: center;
  max-width: 20vw;
  background: #b79ced;
  z-index: 3;
  flex-wrap: wrap;
}

.headers{
  color: white;
  font-size: 3vw;
  padding: 2rem 0 0 0;
  text-align: center;
}

.headerDiv{
  justify-self: center;
}

h2{
  font-size: 8vw;
}

h3{
  font-size: 4vw;
}

.logos{
  color: #242424;
  display: flex;
  justify-content: center;
}

.logos:hover{
  color: #957fef;
}

header{
  display: grid;
  font-size: 2vw;
}

.headerDiv{
  padding: 2rem 2rem 2rem 1rem;
  
}

h1{
  background: #957fef;
  border-radius: 25px;
}


.first-section{
  color: #b79ced;
  /* background: #242424; */
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  font-size: 3vw;
  width: 100vw;
  height: 100vh;
}

section > * {
  margin: 0 0 0 20px;
}

.divTest{
  background: #957fef;
  padding: 2rem;
  font-size: 1.5vw;
  border: solid 1px white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  text-align: center;
}

</style>
