<template>
  <div class="language-switcher">
    <button
      @click="switchLanguage"
      class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
    >
      {{ $t("switch_language") }} ({{
        currentLocale === "en" ? "العربية" : "English"
      }})
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const currentLocale = ref(locale.value);

const switchLanguage = async () => {
  const newLocale = currentLocale.value === "en" ? "ar" : "en";
  currentLocale.value = newLocale;

  // Set the new locale
  await setLocale(newLocale);

  // Update the document direction
  document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
};
</script>

<style scoped>
/* .language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
} */
</style>
