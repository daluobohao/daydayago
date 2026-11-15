<script setup>
defineProps({
  slug: { type: String, required: true },
})
</script>

<template>
  <svg class="glyph" viewBox="0 0 64 64" aria-hidden="true">
    <template v-if="slug === 'lantern-moon'">
      <circle cx="46" cy="16" r="8" class="glyph-soft" />
      <path d="M22 14h12M28 14v5" class="glyph-line" />
      <path d="M18 22h20l-2 22H20L18 22z" class="glyph-fill" />
      <path d="M22 44h12M28 44v8" class="glyph-line" />
    </template>
    <template v-else-if="slug === 'seven-acorns'">
      <circle cx="32" cy="28" r="12" class="glyph-fill" />
      <circle cx="22" cy="18" r="5" class="glyph-fill" />
      <circle cx="42" cy="18" r="5" class="glyph-fill" />
      <circle cx="27" cy="27" r="1.5" class="glyph-ink" />
      <circle cx="37" cy="27" r="1.5" class="glyph-ink" />
      <path d="M27 33c2.4 2.2 7.6 2.2 10 0" class="glyph-line" />
      <circle cx="16" cy="50" r="4" class="glyph-soft" />
      <circle cx="28" cy="54" r="4" class="glyph-soft" />
      <circle cx="40" cy="50" r="4" class="glyph-soft" />
      <circle cx="52" cy="54" r="4" class="glyph-soft" />
    </template>
    <template v-else-if="slug === 'pocket-spring'">
      <path d="M18 30h22v20H18z" class="glyph-line" />
      <path d="M29 30V16" class="glyph-line" />
      <path d="M29 18c7 1 10 8 5 11-4-2-5-7-5-11z" class="glyph-leaf" />
      <path d="M16 54h28" class="glyph-line" />
    </template>
    <template v-else-if="slug === 'late-boots'">
      <path d="M14 22h10v16c0 6-12 8-14 3v-5h4V22z" class="glyph-fill" />
      <path d="M36 22h10v16c0 6-12 8-14 3v-5h4V22z" class="glyph-fill" />
      <path d="M12 50c8 5 14 3 20-2 6 5 14 7 22 2" class="glyph-line" />
    </template>
    <template v-else>
      <circle cx="32" cy="34" r="16" class="glyph-line" />
      <path d="M32 20l2.4 7.2H42l-6 4.6 2.2 7.2L32 34.6 25.8 39l2.2-7.2-6-4.6h7.6z" class="glyph-fill" />
    </template>
  </svg>
</template>
