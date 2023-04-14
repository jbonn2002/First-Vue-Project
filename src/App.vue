<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const content = ref(null)
const main = ref(null);
const firstHeader = ref(null);
const firstSection = ref(null)
const section = ref(null)


onMounted(() => {

 //scrolltrigger
  gsap.to(main.value, {
    xPercent: -45,
    ease: "none",
    scrollTrigger: {
      trigger: container.value,
      pin: true,
      scrub: 1,
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
    markers: true,
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

  gsap.from( 'article', {
    delay: 0,
    duration: 0.5,
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
  {id: 'zero', header: 'About', logo: 'info'},
  {id: 'one', header: 'Skills & Traits', logo: 'forum'},
  {id: 'two', header: 'Projects', logo: 'upcoming'},
  {id: 'three', header: 'Contact', logo: 'spoke'},
]);

const mainHeaders = ref([
  {id: 'zero', header: 'JordybDev', logo: 'info'},
]);




</script>

<template>
  <div ref="container">
    <header>
      <h1 ref="content" v-for="(mainHeader) in mainHeaders" :key="mainHeader">{{ mainHeader.header }}</h1>
    </header>
    <main ref="main">
      <article>
        <section class="first-section" ref="firstSection">
          <h2 class="first-header" ref="firstHeader">Welcome</h2>
          <h3>I am a Full Stack Web Developer <br/> based in Orange County, California</h3>
        </section>
        <section class="gridContainer">
          <div class="grids" v-for="(header, index) in items" :key="header" ref="section" :id="header.id">
            <h2 class="headers" >{{ header.header }} </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quibusdam?
            </p>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>


<style >

*{
  margin: 0;
  padding: 0;
  border: 0;
}

article{
  display: flex;
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

.headers{
  font-size: 3rem;
}

header{
  max-width: 100vw;
  display: flex;
  font-size: 3rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.first-section{
  font-size: 5rem;
  width: 100vw;
  height: 100vh;
}

section > * {
  margin: 0 0 0 20px;
}

p{
  background: #242424;
  padding: 2rem;
  font-size: 3rem;
  border: solid 1px white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}


.first-header{
  font-size: 10rem;
}

@media screen and (max-width: 950px){
	p{
    height: 4rem;
    overflow: hidden;
  }
}
</style>
