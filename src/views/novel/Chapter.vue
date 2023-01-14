<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

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

var bookId = getId(window.location.search.substring(1));
console.log('bookId', bookId)
var queryParams = {
    pageSize: 500,
    bookId
}
const chapterList = ref([]);
axios.get("http://localhost:8079/system/chapter/list", {params: queryParams}).then(
    function (res) {
        console.log(res.data.rows);
        chapterList.value = res.data.rows;
    }
);

function openContent(id) {
    router.push('content/?id=' + id);
}
</script>

<template>
    <div v-for="chapter in chapterList" :key="chapter.id">
        <div style="text-align: center">
            <el-link :underline="false" style="font-size: 1em;" @click="openContent(chapter.id)">
                {{ chapter.chapterName }}
            </el-link>
        </div>
    </div>
</template>