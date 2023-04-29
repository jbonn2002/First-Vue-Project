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
	    <h3 class="observe-four">Contact Me</h3>
	    <p>Let's collaborate on bringing your vision to life - use my contact form to get in touch and I'll be excited to learn more about your goals.</p>
	    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		    <div class="row gtr-uniform">
				<input type="hidden" name="form-name" value="contact"/>
			    <div class="text"><input type="text" name="name" id="name" placeholder="Name" /></div>
			    <div class="email"><input type="email" name="email" id="email" placeholder="Email" /></div>
			    <div class="subject"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
			    <div class="message"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
			    <div class="buttons">
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
	margin: 1rem;
}

.row{
	display: grid;
	grid-template-areas: "t e e" "s s s" "m m m";
	width: 75vw;
	margin: 2rem;
}

.actions{
	list-style: none;
}

li{
	margin: 1rem;
}

.text{
	grid-area: t;
	padding: 1rem;
}

.email{
	grid-area: e;
	padding: 1rem;
}

.subject{
	grid-area: s;
	padding: 1rem;
}

.message{
	grid-area: m;
	padding: 1rem;
}

input[type="text"],
input[type="email"], textarea{
	background: rgba(0, 0, 0, 0.9);
	font-size: 4rem;
	width: 100%;
	border-radius: 5px;
	border: solid 2px #e4e4e4;
	padding: 0 0 0 1rem;
	text-decoration: none;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,textarea::placeholder{
	color: white;
}



input[type="submit"],
input[type="reset"]{
	font-size: 2rem;
	background-color: #989898;
	border-radius: 5px;
	border: 0;
	color: #ffffff !important;
	cursor: pointer;
	display: inline-block;
	font-weight: 700;
	height: 2.75em;
	line-height: 2.75em;
	padding: 0 1.5em;
	text-align: center;
	text-decoration: none;
	white-space: nowrap;
}

input[type="submit"]:hover,
input[type="reset"]:hover{
	background-color: #a5a5a5;
	color: #ffffff !important;
}

input[type="submit"]:active,
input[type="reset"]:active{
	background-color: #8b8b8b;
}

.container{
	width: 75vw;
}


h3{  
color: white;
font-size: 5rem;
background: none;
border-radius: none;
padding: 2rem;
margin-left: 2rem;
background: rgba(0, 0, 0, 0.9);
border-radius: 25px;
width: fit-content;
}

p{
    color: white;
    font-size: 3rem;
    max-width: 100vw;
	margin-left: 2rem;
	padding-left: 2rem;
	width: 75vw;
	background: rgba(0, 0, 0, 0.9);
	border-radius: 25px;
	width: fit-content;
}

</style>