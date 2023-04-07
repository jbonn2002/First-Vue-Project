<script setup>
const headers = [
  'About',
  'Skills & Traits',
  'Projects',
  'Contact',
]
</script>

<template>
  <main>
    <article>
      <h1></h1>
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index">{{ header }}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sint iusto praesentium quod quibusdam cum eligendi magnam, voluptates deleniti unde, esse ab. Sint rem ipsum, eaque iusto dignissimos minima maxime quasi magnam tenetur nulla blanditiis aliquam alias libero non porro, hic cupiditate reprehenderit eius laudantium iste! Aliquam pariatur consectetur ex velit! Eligendi autem blanditiis cumque. Qui doloribus repellat quae sint totam quidem quis molestiae earum inventore aperiam! Itaque vel molestiae facilis eum eos suscipit obcaecati quidem cum, explicabo ipsa hic unde praesentium totam tempore ad! Nisi rerum quas totam mollitia similique sequi nesciunt, cum eos. Possimus quod cupiditate eveniet accusamus.
        </p>
      </section>
    </article>
    <aside>
      <div>
        <a v-for="(header, index) in headers" :key="header" :href="`#${index}`">
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

section{
  height: 100vh;
}

article{
  width: 75%;
  margin-bottom: 500px;
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
  color: aqua;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

</style>
