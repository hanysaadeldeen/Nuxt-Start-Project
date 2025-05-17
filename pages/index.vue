<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <div>
    <!-- <button
      v-for="locale in locales"
      @click="setLocale(locale.code)"
      class="text-2xl font-bold bg-black text-white p-5 mr-5"
    >
      {{ locale.name }}
    </button> -->
    <LanguageSwitcher />
    <h1>{{ $t("welcome") }}</h1>
  </div>
</template>
