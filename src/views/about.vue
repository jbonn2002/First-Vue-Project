<script setup>
import Button from "../components/button.vue"
import Three from "../components/threejs.vue"

</script>




<template>
    <Three/>
    <div>
        <Button><RouterLink to='/'>Back</RouterLink></Button>
    </div>
    <h1>About</h1>
    <p>My name is jordan bonnaire, as a front-end web developer, I am dedicated to creating visually stunning and user-friendly websites that engage and captivate users. My expertise includes proficiency in HTML, CSS, JavaScript, and various front-end libraries and frameworks such as Three.js, React, and Gsap. I am committed to understanding user needs and designing intuitive user interfaces that provide a seamless experience across all devices. My attention to detail and ability to think creatively allows me to create beautiful and functional designs that enhance the overall user experience. I am passionate about staying up-to-date with the latest front-end development trends and techniques to ensure that my clients receive the most innovative and effective solutions.</p>
</template>

<style scoped>

h1, p{
    padding: 2rem;
}


button{
    display: flex;
    justify-content: center;
    margin: 1rem;
}

body{
    height: 100vh;
    width: 100vw;
}

h1{  
color: white;
font-size: 5rem;
background: rgba(0, 0, 0, 0.9);
border-radius: none;
width: fit-content;
}

p{
    background: #242424;
    margin: 2rem;
    color: white;
    font-size: 3rem;
    max-width: 100vw;
    width: 75vw;
    border-radius: 25px;
}

</style>