<template>
  <div class="w-full flex relative">
    <div class="background absolute" ref="bg"></div>
    <div class="absolute h-[70vh] gradient"></div>
    <div class="relative mt-[50vh] z-10 w-full max-w-225 mx-auto">
      <div class="content md:rounded-[60px] px-8 pt-8 md:px-12 md:pt-12">
        <div class="mb-6">
          <h1 class="text-3xl font-bold">{{ blog?.title }}</h1>
          <p class="text-muted flex items-center gap-12">
            <span><NuxtTime :datetime="new Date(blog?.created!!)" /></span>
            <span class="category">
              <!-- TODO: link to category -->
              <UIcon name="ic:round-folder" class="text-lg align-text-top mr-1" />
              <span>{{ blog?.category }}</span>
            </span>
          </p>
        </div>
        <ContentRenderer v-if="blog" :value="blog" />
      </div>
      <div class="py-2 px-6 md:px-12 text-gray-500" v-if="blog?.updated && blog?.updated !== blog?.created">Updated at <NuxtTime :datetime="new Date(blog?.updated)" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { variables: vars } = useAppConfig();
const bgRef = useTemplateRef("bg");
const random = useState("random", () => Math.random());

const { data: blog } = await useAsyncData(route.path, async () => {
  const res = await queryCollection("blog").path(route.path).first();
  if (!res) {
    throw createError({
      statusCode: 404,
      statusMessage: "Blog Not Found",
      fatal: true,
    });
  }
  return res;
});

useHead({
  title: blog.value?.title,
});
useSeoMeta({
  description: blog.value?.description,
  ogDescription: blog.value?.description,
  ogImage: blog.value?.cover,
  twitterImage: blog.value?.cover,
});

onMounted(() => {
  let cover = blog.value?.cover;

  if (typeof cover !== "string" || cover.length === 0) {
    // random background selection based on required props
    let requiredProps = [];
    requiredProps.push(document.documentElement.clientWidth > document.documentElement.clientHeight ? "horizontal" : "vertical");
    requiredProps.push(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const matchedBackgrounds = vars.welcome.backgrounds.filter((background: any) => requiredProps.every((prop) => background.props.includes(prop)));

    cover = matchedBackgrounds[Math.floor(random.value * matchedBackgrounds.length)]?.path || "";
  }
  if (bgRef.value) {
    bgRef.value.style.backgroundImage = `url(${cover})`;
  }
});
</script>

<style>
img {
  max-width: 100%;
}

.content h1 {
  font-weight: bold;
  color: var(--ui-text);
}

.content h2,
.content h3 {
  margin: 1rem 0;
  font-weight: bold;
  color: var(--ui-text);
}

.content * + h2 {
  margin-top: 2rem;
}

.content p {
  margin: 1rem 0;
}

code {
  overflow-wrap: break-word;
}
</style>

<style scoped>
.background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 70vh;
  z-index: 0;
}

.gradient {
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%);
  z-index: 1;
}

.content {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
