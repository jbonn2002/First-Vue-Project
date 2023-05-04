<script setup>
import Button from "../components/button.vue"
import Three from "../components/threejs.vue"


</script>



<template>
	<Three/>
    <div>
        <Button><RouterLink to='/'>Back</RouterLink></Button>
    </div>
    <div class="container">
	    <h3 class="observe-three">A Few Projects</h3>
	    <span>My personal projects highlight my creativity and innovation in web development, as well as my ability to work with various languages, libraries, and frameworks. </span>
	    <div class="features">
		    <article>
			    <div class="inner">
				    <h4>Solar System Website</h4>
					<img src="../assets/apurba-nag-unsplash.jpg"/>
				    <p>Website that showcases HTML, CSS, and JavaScript(three.js and gsap)</p>
			    </div>
		    </article>
		    <article>
			    <div class="inner">
				    <h4>Procedural Hex World</h4>
					<img src="../assets/apurba-nag-unsplash.jpg"/>
				    <p>Website that showcases HTML, CSS, and JavaScript(three.js)</p>
			    </div>
		    </article>
		    <article>
			    <div class="inner">
				    <h4>Product Demo Website</h4>
					<img src="../assets/apurba-nag-unsplash.jpg"/>
				    <p>Website that showcases HTML, CSS, aand JavaScript</p>
			    </div>
		    </article>
		    <article>
			    <div class="inner">
				    <h4>Product Demo Website</h4>
					<img src="../assets/apurba-nag-unsplash.jpg"/>
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
	margin: 1rem;
}

.features{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background: #242424;
    margin: 2rem;
	padding: 1rem;
}

img{
	height: 25vw;
	height: 25vh;
}

.container{
	width: 75vw;
}

.inner{
	width: 30vw;
	max-width: 75vw;
}

h3, span{
	display: flex;
	margin: 2rem;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 25px;
    width: fit-content;
}

div{
	color: #957fef;
}

h4{  
font-size: 2rem;

}

span, p{
    color: white;
    font-size: 3rem;
    max-width: 100vw;
}

</style>