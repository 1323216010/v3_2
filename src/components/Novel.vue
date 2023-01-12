<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'

const bookList = ref([]);

axios.get("http://localhost:8079/system/info/list").then(
    function (res) {
        console.log(res.data);
        bookList.value = res.data.rows;
    }
);

console.log(bookList);

</script>

<template>
    <div v-for="book in bookList" :key="book.id">
        <p style="text-align: center">
            {{ book.bookName }}
        </p>
    </div>
</template>