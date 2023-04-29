<script setup>
import { ref } from 'vue'
import Button from "../components/button.vue"
import Three from "../components/threejs.vue"

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
    <Three/>
    <div>
        <Button><RouterLink to='/'>Back</RouterLink></Button>
    </div>
    <div class="container">
	    <h3 class="observe-two">Skills & Traits</h3>
	    <p>Here are some of my skills and traits that I think are important and could provide value to whomever is reading.</p>
    <div class="list-container">
        <li v-for="item in items">{{ item.item }}</li>
    </div>
		
    </div>
</template>





<style scoped>

button{
    display: flex;
    justify-content: center;
    margin: 1rem;
}

*{
    max-width: 100vw;
    max-height: 100vh;
}

div{  
    color: white;
    font-size: 4rem;
    width: 100vw;
}

h3, p{
    background: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
    width: fit-content;
}

h3{
    margin: 2rem;
}

p{
    color: white;
    font-size: 2.5rem;
    max-width: 100vw;
    margin: 2rem;
    
}

li{
    list-style: circle;
    padding: 10px;
}

.list-container{
    background: #242424;
    width: 75vw;
    margin: 2rem;
    border-radius: 25px;
}

</style>