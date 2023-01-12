<script setup>
import arr from '../assets/json/唐诗三百首.json'

function search(a, x) {
    let list = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i].author === x) {
            list.push(a[i]);
        }
    }
    return list;
}

var poets = search(arr,'李白');
</script>


<template>
      <div id="d8">
        <div v-for = "po in poets" :key="po.id">
            <p style="text-align: center;">{{ po.title }}</p>
            <p style="text-align: center;">{{ po.author }}</p>
            <p style="text-align: center;" v-for = "a in po.paragraphs" :key="a">{{ a }}</p>
            <br>
        </div>
    </div>
</template>