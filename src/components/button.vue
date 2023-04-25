<script setup>

const props = defineProps({
    loading: Boolean,
    as:{
        type: [String, Object],
        default: 'button'
    },
});

</script>

<template>
    <component :is="props.as">
        <slot/>
    </component>
</template>

<style scoped>
button{
    background-color: black;
    border-radius: 100px;
    box-shadow: rgba(149,127,239,.35) 0 -25px 18px -14px inset,rgba(149,127,239,.25) 0 1px 2px,rgba(149,127,239,.25) 0 2px 4px,rgba(149,127,239,.25) 0 4px 8px,rgba(149,127,239,.25) 0 8px 16px,rgba(149,127,239,.25) 0 16px 32px;
    color: white;
    cursor: pointer;
    justify-content: center;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    max-width: 65px;
}

button:hover {
  box-shadow: rgba(149,127,239,.35) 0 -25px 18px -14px inset,rgba(149,127,239,.25) 0 1px 2px,rgba(149,127,239,.25) 0 2px 4px,rgba(149,127,239,.25) 0 4px 8px,rgba(149,127,239,.25) 0 8px 16px,rgba(149,127,239,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>