<script setup>
import Button from "../components/button.vue"

</script>

<template>
    <div>
        <Button @click="this.$router.push('/')">Back</Button>
    </div>
    <div class="container">
	    <h3 class="observe-four">Contact Me</h3>
	    <p>Let's collaborate on bringing your vision to life - use my contact form to get in touch and I'll be excited to learn more about your goals.</p>
	    <form method="post" data-netlify="true" onSubmit="submit">
		    <div class="row gtr-uniform">
			    <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
			    <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
			    <div class="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
			    <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
			    <div class="col-12">
				    <ul class="actions">
					    <li><input type="submit" class="primary" value="Send Message" /></li>
					    <li><input type="reset" value="Reset Form" /></li>
				    </ul>
			    </div>
		    </div>
	    </form>
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