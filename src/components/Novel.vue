<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import Chapter from '../views/novel/Chapter.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import JSONBig from 'json-bigint'


const ax = axios.create({
  // 自定义返回的元素数据,axios会默认用JSON.parse
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    function (data) {
      // 对 data 进行任意转换处理
      try {
        return JSONBig.parse(data)
      } catch (err) {
        return data
      }
    }
  ]
})

const router = useRouter();
const bookList = ref([]);

const queryParams = reactive({
    pageNum: 1,
    pageSize: 500,
    bookName: null,
    authorName: null,
    catName: null,
})

ax.get("http://localhost:8079/system/book/list", {params: queryParams}).then(
    function (res) {
        console.log(res.data.rows);
        bookList.value = res.data.rows;
    }
);
function openChapter(id) {
    router.push('chapter/?id=' + id);
}

const onSubmit = () => {
    queryParams.pageNum = 1;
    ax.get("http://localhost:8079/system/book/list", {params: queryParams}).then(
    function (res) {
        bookList.value = res.data.rows;
    }
);
}
</script>

<template>
  <el-form :inline="true" style="text-align:center" :model="queryParams">
    <el-form-item label="书名"  >
      <el-input  placeholder="请输入书名" v-model="queryParams.bookName"/>
    </el-form-item>
    <el-form-item label="作者" >
      <el-input  placeholder="请输入作者" v-model="queryParams.authorName"/>
    </el-form-item>
    <el-form-item label="分类" >
      <el-input  placeholder="请输入分类" v-model="queryParams.catName"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>

    <div v-for="book in bookList" :key="book.id">
        <div style="text-align: center">
            <el-link :underline="false" style="font-size: 1em;" @click="openChapter(book.id)">
                {{ book.bookName }}
            </el-link>
        </div>
    </div>
</template>