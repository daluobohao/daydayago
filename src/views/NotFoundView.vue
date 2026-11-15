<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrap page missing">
    <p class="eyebrow">这一页走丢了</p>
    <h1>匣子里没有这一格。</h1>
    <p>也许地址写岔了。回到首页，还能继续读故事、翻笑话。</p>
    <RouterLink class="btn btn-primary" to="/">回到首页</RouterLink>
  </div>
</template>
