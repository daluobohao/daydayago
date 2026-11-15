<script setup>
import { RouterLink } from 'vue-router'
import { stories } from '../data/stories'
import { jokes } from '../data/jokes'
import { pickDaily } from '../data/pick'
import StoryGlyph from '../components/StoryGlyph.vue'
import JokeSlip from '../components/JokeSlip.vue'

const todayStory = pickDaily(stories, 0)
const todayJoke = pickDaily(jokes, 3)
const preview = stories.slice(0, 3)
</script>

<template>
  <div>
    <section class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow">个人小站 · 只为开心</p>
        <h1>好故事<br />好笑的话<br />都收在这里</h1>
        <p class="lede">
          达达呀果是我自己的小站。这里有几则想一想会更开心的童话，也有随手记下的笑话。没有单位，没有广告，翻开就好。
        </p>
        <div class="hero-actions">
          <RouterLink class="btn btn-primary" to="/stories">读一则童话</RouterLink>
          <RouterLink class="btn btn-ghost" to="/jokes">看一则笑话</RouterLink>
        </div>
      </div>
      <div class="hero-stage" aria-hidden="true">
        <p class="watermark">果</p>
        <div class="moon"></div>
        <div class="book">
          <StoryGlyph :slug="todayStory.slug" />
          <p>今晚可读</p>
          <strong>{{ todayStory.title }}</strong>
        </div>
      </div>
    </section>

    <section class="wrap today">
      <div class="section-head">
        <h2>今天这一页</h2>
        <p>按日期轻轻换一换。同一天打开，看到的是同一则。</p>
      </div>
      <div class="today-grid">
        <RouterLink class="feature" :to="`/stories/${todayStory.slug}`">
          <StoryGlyph :slug="todayStory.slug" />
          <p class="eyebrow">益智童话 · {{ todayStory.minutes }} 分钟</p>
          <h3>{{ todayStory.title }}</h3>
          <p>{{ todayStory.summary }}</p>
          <span class="chip">{{ todayStory.theme }}</span>
        </RouterLink>
        <JokeSlip :joke="todayJoke" :tilt="false" />
      </div>
    </section>

    <section class="wrap shelf">
      <div class="section-head">
        <h2>故事匣目录</h2>
        <RouterLink to="/stories">全部童话</RouterLink>
      </div>
      <ol class="toc">
        <li v-for="(story, index) in preview" :key="story.slug">
          <RouterLink :to="`/stories/${story.slug}`">
            <span class="toc-index">0{{ index + 1 }}</span>
            <span>
              <strong>{{ story.title }}</strong>
              <em>{{ story.summary }}</em>
            </span>
            <span class="toc-meta">{{ story.minutes }} 分钟</span>
          </RouterLink>
        </li>
      </ol>
    </section>
  </div>
</template>
