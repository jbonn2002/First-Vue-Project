<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';

const container = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    delay: 0.5,
    duration: 1,
    y: '-100',
    autoAlpha: 0,
    ease: "back.out(1.7)"
  })
})
  

const items = ref([
  {id: 'zero', header: 'About', logo: 'info'},
  {id: 'one', header: 'Skills & Traits', logo: 'forum'},
  {id: 'two', header: 'Projects', logo: 'upcoming'},
  {id: 'three', header: 'Contact', logo: 'spoke'},
]);

const mainHeaders = ref([
  'caution',
  'caution',
  'caution',
]);

const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0){
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  })
  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
})


</script>

<template>
  <div ref="container">
    <header>
      <h1 ref="contet" v-for="(mainHeader) in mainHeaders" :key="mainHeader">{{ mainHeader }}</h1>
    </header>
    <main>
      <article>
        <section v-for="(header, index) in items" :key="header">
          <h2 :id="index">{{ header.header }} </h2>
          <p :id="header.id">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sint iusto praesentium quod quibusdam cum eligendi magnam, voluptates deleniti unde, esse ab. Sint rem ipsum, eaque iusto dignissimos minima maxime quasi magnam tenetur nulla blanditiis aliquam alias libero non porro, hic cupiditate reprehenderit eius laudantium iste! Aliquam pariatur consectetur ex velit! Eligendi autem blanditiis cumque. Qui doloribus repellat quae sint totam quidem quis molestiae earum inventore aperiam! Itaque vel molestiae facilis eum eos suscipit obcaecati quidem cum, explicabo ipsa hic unde praesentium totam tempore ad! Nisi rerum quas totam mollitia similique sequi nesciunt, cum eos. Possimus quod cupiditate eveniet accusamus.
          </p>
        </section>
      </article>
      <aside>
        <div>
          {{ currentSection }}
          <a v-for="(item, index) in items" :key="item.id" :href="`#${index}`" :class="{ active: index == currentSection}">
            <span class="material-symbols-outlined">
              {{ item.logo }}
            </span>
            {{ item.header }}
          </a>
        </div>
      </aside>
    </main>
  </div>
</template>


<style scoped>

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 0,
  'opsz' 48
}

main {
  display: flex;
}
header{
  display: flex;
  font-size: 3rem;
  flex-wrap: wrap;
  justify-content: space-around;
}

section{
  height: 100vh;
}

section > * {
  margin: 0 0 0 20px;
}

article{
  width: 75%;
}

aside {
  width: 25%;
}

aside > div{
  position: sticky;
  top: 20px;
  padding-left: 2em;
}

aside > div > a {
  display: block;
  font-size: 2.5rem;
  color: #b79ced;
  text-decoration: none;
  border-left: 1px solid #b79ced;
  padding-left: 2em;
}

aside a.active{
  font-weight: bold;
  color: #454ADE;
  border-color: #454ADE;
}

h2{
  font-size: 4rem;
  padding: 2rem 0 0 0;
}

p{
  background: #242424;
  margin-top: 2rem;
  padding: 4rem;
  font-size: 3rem;
  border: solid 1px white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}



</style>
