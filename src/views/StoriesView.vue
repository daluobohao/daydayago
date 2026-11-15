<script setup>
import { RouterLink } from 'vue-router'
import { stories } from '../data/stories'
import StoryGlyph from '../components/StoryGlyph.vue'
</script>

<template>
  <div class="wrap page">
    <header class="page-intro">
      <p class="eyebrow">益智童话</p>
      <h1>故事匣</h1>
      <p>都是写给自己和朋友的短故事。读完如果愿意停一下，想想里面的那一句，就很好。</p>
    </header>
    <ol class="toc toc-full">
      <li v-for="(story, index) in stories" :key="story.slug">
        <RouterLink :to="`/stories/${story.slug}`">
          <StoryGlyph :slug="story.slug" />
          <span class="toc-index">0{{ index + 1 }}</span>
          <span>
            <strong>{{ story.title }}</strong>
            <em>{{ story.summary }}</em>
            <span class="chip">{{ story.theme }}</span>
          </span>
          <span class="toc-meta">{{ story.minutes }} 分钟</span>
        </RouterLink>
      </li>
    </ol>
  </div>
</template>
