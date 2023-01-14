<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import Chapter from '../views/novel/Chapter.vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const bookList = ref([]);

var queryParams = {
    pageSize: 500,
}
axios.get("http://localhost:8079/system/info/list", {params: queryParams}).then(
    function (res) {
        bookList.value = res.data.rows;
    }
);

function openChapter(id) {
    router.push('chapter/?id=' + id);
}

</script>

<template>
    <div v-for="book in bookList" :key="book.id">
        <div style="text-align: center">
            <el-link :underline="false" style="font-size: 1em;" @click="openChapter(book.id)">
                {{ book.bookName }}
            </el-link>
        </div>
    </div>
</template>