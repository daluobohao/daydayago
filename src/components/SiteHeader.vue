<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

function current(to) {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}

const links = [
  { to: '/', label: '首页' },
  { to: '/stories', label: '童话' },
  { to: '/jokes', label: '笑话' },
  { to: '/about', label: '关于' },
]

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled }">
    <div class="wrap header-inner">
      <RouterLink to="/" class="brand">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>
          <span class="brand-name">达达呀果</span>
          <span class="brand-note">个人故事匣</span>
        </span>
      </RouterLink>
      <nav class="nav" aria-label="站内">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="{ 'is-current': current(link.to) }"
          :aria-current="current(link.to) ? 'page' : undefined"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
