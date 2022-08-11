<template>
  <div class="fixed px-12 space-y-3 py-80">
    <div
      class="w-12 h-12 px-3 py-3 mb-2 text-sm text-center text-white border-2 rounded-full cursor-pointer"
    >
      <button @click="setLocale('en')">en</button>
    </div>

    <div
      class="w-12 h-12 px-3 py-3 mb-2 text-sm text-center bg-white border-2 rounded-full cursor-pointer"
    >
      <button @click="setLocale('ka')">ka</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
    },
  },
  created() {
    const locale = localStorage.getItem("lang");
    if (locale) {
      this.$i18n.locale = locale;
    }
  },
};
</script>
