<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function openPoets() {
    router.push('poets');
}
function openNovel() {
    router.push('novel');
}
</script>

<template>
  <div style="text-align: center">
    <router-link to="/poets">诗词 |</router-link>
    <router-link to="/novel">小说</router-link>
    <br>
    <br>
    <el-link :underline="false" style="font-size: 2em" @click="openPoets">诗词 |</el-link>
    <el-link :underline="false" style="font-size: 2em" @click="openNovel">&nbsp;小说</el-link>
  </div>
</template>
