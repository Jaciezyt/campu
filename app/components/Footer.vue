<script setup lang="ts">
const state = useStateStore();

// setInterval(updateHitokoto, 5 * 60 * 1000)
updateHitokoto(state);

const documentWidth = ref(0);
onMounted(() => {
  documentWidth.value = document.documentElement.clientWidth;
});

const copyright = `&copy; Jacie &nbsp;${new Date().getFullYear()}`;
</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <slot name="default">
        <ClientOnly>
          <UPopover
            mode="hover"
            :content="{ side: documentWidth <= 640 ? 'bottom' : 'right' }"
          >
            <span class="text-[16px]">
              {{ state.hitokoto.hitokoto }}
            </span>
            <template #content>
              <div class="px-3 py-2 text-sm">
                ——{{ state.hitokoto.from }}
              </div>
            </template>
          </UPopover>
        </ClientOnly>
      </slot>
      <p class="h-4" />
      <slot name="copyright">
        <p v-html="copyright" />
      </slot>
      <p class="powered-by">
        Powered by
        <a
          href="https://github.com/Jaciezyt/campu"
          class="campu"
        >
          <Icon
            name="my:campu-logo"
            size="0.8em"
            style="color: var(--ui-text-toned)"
          />
        </a>
        with
        <a
          href="https://nuxt.com/"
          class="nuxt"
        >
          <Icon
            name="my:nuxt-logo"
            size="0.8em"
            style="color: var(--ui-text-toned)"
          />
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 12rem;
  text-align: center;
  padding: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
