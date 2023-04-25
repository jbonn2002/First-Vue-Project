<script setup>
import { ref } from 'vue'
import Button from "../components/button.vue"

const items = ref([
    { item: 'HTML, CSS, JavaScript' }, 
    { item: 'libraries and frameworks(three.js, gsap, react)' }, 
    { item: 'Always looking to learn and add to my knowledge' }, 
    { item: 'Creative / High attention to detail' }, 
    { item: 'Critical Thinker / Problem Solver' }, 
    { item: 'Communication Skills / Teamwork / Emotional Intelligence' }
]);





</script>

        
<template>
    <div>
        <Button @click="this.$router.push('/')">Back</Button>
    </div>
    <div class="container">
	    <h3 class="observe-two">Skills & Traits</h3>
	    <p>Here are some of my skills and traits that I think are important and could provide value to whomever is reading.</p>
		<li v-for="item in items">{{ item.item }}</li>
		
    </div>
</template>





<style scoped>

button{
    display: flex;
    justify-content: center;
}

*{
    max-width: 100vw;
    max-height: 100vh;
}

div{  
color: white;
font-size: 5rem;
}

p{
    color: white;
    font-size: 3rem;
    max-width: 100vw;
}

ul{
    list-style: circle;
    padding: 10px;
}

li{
    list-style: circle;
    padding: 10px;
}
</style>