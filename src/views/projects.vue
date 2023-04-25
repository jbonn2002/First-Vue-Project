<script setup>
import Button from "../components/button.vue"

</script>



<template>
    <div>
        <Button><RouterLink to='/'>Back</RouterLink></Button>
    </div>
    <div class="container">
	    <h3 class="observe-three">A Few Projects</h3>
	    <p>My personal projects highlight my creativity and innovation in web development, as well as my ability to work with various languages, libraries, and frameworks. </p>
	    <div class="features">
		    <article>
			    <div class="inner">
				    <h4>Solar System Website</h4>
				    <p>Website that showcases HTML, CSS, and JavaScript(three.js and gsap)</p>
			    </div>
		    </article>
		    <article>
			    <div class="inner">
				    <h4>Procedural Hex World</h4>
				    <p>Website that showcases HTML, CSS, and JavaScript(three.js)</p>
			    </div>
		    </article>
		    <article>
			    <div class="inner">
				    <h4>Product Demo Website</h4>
				    <p>Website that showcases HTML, CSS, aand JavaScript</p>
			    </div>
		    </article>
	    </div>
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

h1{  
color: white;
font-size: 5rem;
background: none;
border-radius: none;
}

p{
    color: white;
    font-size: 3rem;
    max-width: 100vw;
}

</style>