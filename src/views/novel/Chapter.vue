<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'

const obj = defineProps({
    id: String,
})

console.log(obj.id);
const chapterList = ref([]);
axios.get("http://localhost:8079/system/chapter/list", {params: {id: obj.id}}).then(
    function (res) {
        console.log(res.data.rows);
        chapterList.value = res.data.rows;
    }
);
</script>

<template>
    <div v-for="chapter in chapterList" :key="chapter.id">
        <p style="text-align: center">
            {{ chapter.chapterName }}
        </p>
    </div>
</template>