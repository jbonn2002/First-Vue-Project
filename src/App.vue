<script setup>
const headers = [
  'About',
  'Skills & Traits',
  'Projects',
  'Contact',
]
</script>

<template>
  <header class="header">
    <h1>Jordan Bonnaire</h1>
    <h1>Hello</h1>
    <h1>Welcome</h1>
  </header>
  <main>
    <article>
      <section class="content-section" v-for="(header, index) in headers" :key="header">
        <h2 class="headers" :id="index">{{ header }} </h2>
        <p class="big-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sint iusto praesentium quod quibusdam cum eligendi magnam, voluptates deleniti unde, esse ab. Sint rem ipsum, eaque iusto dignissimos minima maxime quasi magnam tenetur nulla blanditiis aliquam alias libero non porro, hic cupiditate reprehenderit eius laudantium iste! Aliquam pariatur consectetur ex velit! Eligendi autem blanditiis cumque. Qui doloribus repellat quae sint totam quidem quis molestiae earum inventore aperiam! Itaque vel molestiae facilis eum eos suscipit obcaecati quidem cum, explicabo ipsa hic unde praesentium totam tempore ad! Nisi rerum quas totam mollitia similique sequi nesciunt, cum eos. Possimus quod cupiditate eveniet accusamus.
        </p>
      </section>
    </article>
    <aside>
      <div>
        <a class="side-items" v-for="(header, index) in headers" :key="header" :href="`#${index}`">
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<style scoped>


main {
  display: flex;
}
.header{
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
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

.big-text{
  padding: 4rem;
  font-size: 3rem;
  
}

.headers{
  font-size: 4rem;
}

p:nth-child(2){
  background: #242424;
  margin-top: 2rem;
}



</style>
