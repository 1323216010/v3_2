<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'

function getId(str) {
    let id = '';
    for (let i = 0; i < str.length; i++) {
    if(str[i] === "=") {
        for(let j = i + 1; j< str.length; j++) {
            id = id + str[j];
        }
        return id;
    }
}
}

var chapterId = getId(window.location.search.substring(1));
console.log('chapterId', chapterId)
const obj = ref({});
axios.get("http://localhost:8079/system/content/list", {params: {chapterId}}).then(
    function (res) {
        console.log(res.data.rows[0]);
        obj.value = res.data.rows[0];
    }
);
</script>

<template>
    <div v-html="obj.content">
    </div>
</template>