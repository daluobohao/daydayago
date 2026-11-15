<script setup>
import { computed, ref } from 'vue'
import { jokeTags, jokes } from '../data/jokes'
import JokeSlip from '../components/JokeSlip.vue'

const tag = ref('全部')
const spotlight = ref(jokes[0])
const revealed = ref(false)

const visible = computed(() =>
  tag.value === '全部' ? jokes : jokes.filter((joke) => joke.tag === tag.value),
)

function another() {
  const pool = visible.value.length ? visible.value : jokes
  if (pool.length === 1) {
    spotlight.value = pool[0]
    revealed.value = false
    return
  }
  let next = spotlight.value
  while (next.id === spotlight.value.id) {
    next = pool[Math.floor(Math.random() * pool.length)]
  }
  spotlight.value = next
  revealed.value = false
}
</script>

<template>
  <div class="wrap page">
    <header class="page-intro">
      <p class="eyebrow">笑一笑</p>
      <h1>笑话纸条</h1>
      <p>都是干净、轻轻的笑话。写下来是为了以后心情发闷时，还能翻到一则。</p>
    </header>

    <section class="spotlight">
      <p class="eyebrow">随机抽一则</p>
      <h2>{{ spotlight.setup }}</h2>
      <p v-if="revealed" class="punch">{{ spotlight.punch }}</p>
      <div class="hero-actions">
        <button type="button" class="btn btn-primary" @click="revealed = !revealed">
          {{ revealed ? '先藏起来' : '翻开笑点' }}
        </button>
        <button type="button" class="btn btn-ghost" @click="another">再抽一则</button>
      </div>
    </section>

    <div class="filters" role="tablist" aria-label="笑话分类">
      <button
        v-for="item in jokeTags"
        :key="item"
        type="button"
        role="tab"
        :aria-selected="tag === item"
        :class="{ 'is-on': tag === item }"
        @click="tag = item"
      >
        {{ item }}
      </button>
    </div>

    <div class="slips">
      <JokeSlip v-for="joke in visible" :key="joke.id" :joke="joke" />
    </div>
  </div>
</template>
