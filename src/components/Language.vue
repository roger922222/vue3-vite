<template>
  <div @click="toggleLocales()">
    切换语言 {{ t('language') }}
  </div>
</template>

<script lang="ts" setup>
 const { t, availableLocales, locale } = useI18n()
 const toggleLocales = () => {
   locale.value = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length]
 }
</script>