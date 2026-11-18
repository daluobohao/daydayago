<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <div>
        <p>萝卜天空 · 个人小站</p>
        <p>只放童话和笑话，让人看完更开心一点。没有机构，也没有广告。</p>
      </div>
      <p class="footer-meta">
        <RouterLink to="/privacy">隐私政策</RouterLink>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鲁ICP备2025165866号-3</a>
      </p>
    </div>
  </footer>
</template>
