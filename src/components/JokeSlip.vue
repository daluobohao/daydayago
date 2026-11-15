<script setup>
import { ref } from 'vue'

defineProps({
  joke: { type: Object, required: true },
  tilt: { type: Boolean, default: true },
})

const open = ref(false)
</script>

<template>
  <article class="slip" :class="{ 'is-open': open, 'is-flat': !tilt }">
    <span class="tape" aria-hidden="true"></span>
    <p class="slip-tag">{{ joke.tag }}</p>
    <h3>{{ joke.setup }}</h3>
    <p v-if="open" class="punch">{{ joke.punch }}</p>
    <button type="button" class="text-btn" :aria-expanded="open" @click="open = !open">
      {{ open ? '收起' : '翻开笑点' }}
    </button>
  </article>
</template>
