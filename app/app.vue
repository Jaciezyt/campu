<script setup lang="ts">
const { siteMeta } = useAppConfig();

const route = useRoute();
const title = route.meta.title ? `${route.meta.title} | ${siteMeta.name}` : siteMeta.name;
const description = route.meta.description ? String(route.meta.description) : siteMeta.description;
const ogImage = route.meta.ogImage ? route.meta.ogImage : siteMeta.defaultOgImage;

useHead({
  title: title,
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

route.meta.title;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: ogImage,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterSite: siteMeta.twitterSite,
  twitterImage: ogImage,
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
