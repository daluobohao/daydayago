<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getStory, stories } from '../data/stories'

const route = useRoute()
const progress = ref(0)

const story = computed(() => getStory(route.params.slug))
const index = computed(() => stories.findIndex((item) => item.slug === route.params.slug))
const prev = computed(() => (index.value > 0 ? stories[index.value - 1] : null))
const next = computed(() => (index.value >= 0 && index.value < stories.length - 1 ? stories[index.value + 1] : null))

function onScroll() {
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0
}

watch(story, (value) => {
  if (value) document.title = `${value.title} · 达达呀果`
})

onMounted(() => {
  if (story.value) document.title = `${story.value.title} · 达达呀果`
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div v-if="story" class="reading">
    <div class="progress" :style="{ width: `${progress}%` }" aria-hidden="true"></div>
    <article class="wrap article">
      <RouterLink class="back" to="/stories">返回故事匣</RouterLink>
      <p class="eyebrow">益智童话 · {{ story.minutes }} 分钟</p>
      <h1>{{ story.title }}</h1>
      <p class="chip">{{ story.theme }}</p>
      <div class="prose">
        <p v-for="(paragraph, i) in story.paragraphs" :key="i">{{ paragraph }}</p>
      </div>
      <aside class="think">
        <p class="eyebrow">想一想</p>
        <p>{{ story.think }}</p>
      </aside>
      <nav class="pager" aria-label="相邻故事">
        <RouterLink v-if="prev" :to="`/stories/${prev.slug}`">上一则 · {{ prev.title }}</RouterLink>
        <span v-else></span>
        <RouterLink v-if="next" :to="`/stories/${next.slug}`">下一则 · {{ next.title }}</RouterLink>
      </nav>
    </article>
  </div>
  <div v-else class="wrap page missing">
    <p class="eyebrow">故事匣</p>
    <h1>这则故事还没放进来</h1>
    <RouterLink class="btn btn-primary" to="/stories">去看现有的童话</RouterLink>
  </div>
</template>
