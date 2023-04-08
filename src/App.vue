<script setup>

import { ref, onMounted } from 'vue'

const navHeaders = [
  'About',
  'Skills & Traits',
  'Projects',
  'Contact',
]

const newLogos = [
  'info',
  'forum',
  'upcoming',
  'spoke',
]

const mainHeaders = [
  'Test',
  'Test',
  'Test',
]

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
  <header>
    <h1 v-for="(mainHeader) in mainHeaders" :key="mainHeader">{{ mainHeader }}</h1>
  </header>
  <main>
    <article>
      <section v-for="(header, index) in navHeaders" :key="header">
        <h2 :id="index">{{ header }} </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sint iusto praesentium quod quibusdam cum eligendi magnam, voluptates deleniti unde, esse ab. Sint rem ipsum, eaque iusto dignissimos minima maxime quasi magnam tenetur nulla blanditiis aliquam alias libero non porro, hic cupiditate reprehenderit eius laudantium iste! Aliquam pariatur consectetur ex velit! Eligendi autem blanditiis cumque. Qui doloribus repellat quae sint totam quidem quis molestiae earum inventore aperiam! Itaque vel molestiae facilis eum eos suscipit obcaecati quidem cum, explicabo ipsa hic unde praesentium totam tempore ad! Nisi rerum quas totam mollitia similique sequi nesciunt, cum eos. Possimus quod cupiditate eveniet accusamus.
        </p>
      </section>
    </article>
    <aside>
      <div>
        {{ currentSection }}
        <a v-for="(sideItems, index) in navHeaders" :key="sideItems" :href="`#${index}`" :class="{ active: index == currentSection}">
            <span class="material-symbols-outlined">
              {{ newLogos[0] }}
            </span>
          {{ sideItems }}
        </a>
      </div>
    </aside>
  </main>
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

p{
  padding: 4rem;
  font-size: 3rem;
  
}

h2{
  font-size: 4rem;
}

p:nth-child(2){
  background: #242424;
  margin-top: 2rem;
}

h2:nth-child(1){
  padding: 2rem 0 0 0;
}




</style>
