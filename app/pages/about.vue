<template>
  <!-- TODO: Birthday Party! -->
  <div class="relative flex">
    <div class="cover absolute" />
    <div class="absolute h-[50vh] gradient" />

    <div class="content relative max-w-300 mt-[30vh] mx-auto w-full rounded-[88px] md:rounded-[144px] p-6 md:p-12">
      <div class="w-full">
        <div class="avatar flex flex-row h-32 md:h-48 items-center">
          <NuxtImg
            class="rounded-full w-32 md:w-48 z-10"
            :src="vars.nav.avatar"
            alt="avatar"
          />
          <h1
            id="name"
            class="ml-8 text-3xl md:text-5xl z-10 text-ellipsis text-nowrap"
          >
            Jacie ZYT
            <br>
            <span
              id="pronoun"
              class="mx-1 text-xl md:text-2xl font-normal text-muted"
            >she/her</span>
          </h1>
          <div class="grow" />
          <!-- <div class="max-xs:hidden overflow-hidden">
            <UIcon name="my:campu-logo" class="text-4xl md:text-6xl opacity-20 text-primary-600" />
          </div> -->
        </div>
      </div>
      <div class="mt-6 w-full flex lg:flex-row flex-col">
        <div class="flex-none lg:w-[70%]">
          <p
            id="brief"
            class="mt-3 text-[16px]"
          >
            非常感谢你能来到我的营地⛺玩—— Orz<br>
            我是 Jacie (曾用名 Jason), 也可以叫我 ZYT , {{ age.year }}岁, 来自武汉! 现在是高中牲😢 <del>(即将过期JK)</del><br>
            写代码👨‍💻是爱好, 初一自学 C++, 曾经打过几年 OI, <del>也算是蒟蒻 OIer 吧</del><br>
            曾经为<NuxtLink
              class="link"
              to="https://minecraft.wiki/w/Bedrock_Dedicated_Server"
            >Minecraft BDS</NuxtLink>圈子奉献三年<del>青春</del><br>
            并曾致力于<NuxtLink
              class="link"
              to="https://github.com/LiteLDev/LeviLamina"
            >LeviLamina</NuxtLink>的开发和 MCBE 的研究<!-- 不要玩基岩版! 基岩不行, 加瓦行 -->,
            是<NuxtLink
              class="link"
              to="https://github.com/LiteLDev"
            >LeviMC</NuxtLink>的一份子! <br>
            离开 BDS 圈子后, 开始学习 App 的开发, <del>勉强算半个 Full-stack 吧</del><br>
            除写码之外, 我也很喜欢拍照📷~ 是风光佬, 偶尔拍人文<br>
            喜欢各种交通工具, 尤其是飞机✈️和火车🚅!! <del>立志拍到全天下的所有飞机和火车</del><br>
            你可以在<NuxtLink
              class="link"
              to="/gallery"
            >Gallery</NuxtLink>看到我的作品! 谢谢你的喜欢! <br>
            我也研究业余无线电! 只有几台 UV 段的手台, 呼号<code>BH6SLW</code>, 目前活跃于 FM 卫星<br>
            摇曳露营△大好き, 有一套露营装备, 冬天应该会去露营, <del>夏天野外的虫子太可怕了</del><br>
            有时候会打电动, 不是很擅长 FPS 游戏, 想和我玩的话只要有空随时可以!<br>
            喜欢看动画, <del>百合什么的最喜欢啦</del><br>
            可以用中文/English与我交流, 日语还在自学ing...<br>
            我对所有人都很友好! 不会主动与别人产生冲突<br>
            <br>
            <span class="spoiler">⚠️ 拒绝讨论政治, 反感魔怔人和药物滥用, 不混任何形式的圈子!! </span><br>
          </p>
          <br>
          <div
            id="languages"
            class="text-xl"
          >
            <h2 class="mb-2">
              Languages
            </h2>
            <div class="grid grid-cols-3 gap-2 text-center lg:grid-cols-6">
              <code
                v-for="lang in languageList"
                :key="lang.name"
              >
                <UIcon
                  class="text-lg mr-0.5 align-middle"
                  :name="lang.icon"
                />
                <span class="text-[17px]">{{ lang.name }}</span>
              </code>
            </div>
          </div>
          <br>
          <div id="social">
            <h2 class="mb-2">
              Socials
            </h2>
            <div class="grid grid-cols-2 gap-3 xs:max-md:grid-cols-3 md:grid-cols-4 lg:gap-4">
              <div
                v-for="social in vars.socials"
                :key="social.website"
              >
                <NuxtLink :to="social.url">
                  <UCard
                    class="hover:shadow-lg transition-shadow"
                    :ui="{ body: 'p-4 sm:p-4' }"
                  >
                    <div class="grid grid-cols-3 gap-4">
                      <div class="col-span-1">
                        <UIcon
                          :name="social.icon"
                          style="color: var(--ui-text)"
                          mode="svg"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div class="col-span-2">
                        <h3 class="text-lg">{{ social.website }}</h3>
                        <span class="text-xs text-muted">{{ social.user }}</span>
                      </div>
                    </div>
                  </UCard>
                </NuxtLink>
              </div>
            </div>
          </div>
          <br>
          <div id="games">
            <h2 class="mb-2">
              Games
            </h2>
            <div class="grid grid-cols-2 gap-3 xs:max-md:grid-cols-3 md:grid-cols-6 lg:gap-4">
              <div
                v-for="game in gameList"
                :key="game.name"
              >
                <UCard
                  class="hover:shadow-md transition-shadow"
                  :ui="{ body: 'p-3 sm:p-3' }"
                >
                  <h3 class="text-lg">
                    {{ game.name }}
                  </h3>
                  <span class="text-xs text-muted">{{ game.server }}</span>
                </UCard>
              </div>
            </div>
          </div>
          <br>
          <div
            id="bangumi"
            class="bangumi"
          >
            <h2 class="mb-2">
              Bangumi
            </h2>
            <div class="grid grid-cols-2 gap-3 xs:grid-cols-4 lg:gap-4">
              <div
                v-for="bangumi in bangumiList"
                :key="bangumi.name"
              >
                <UCard
                  class="hover:shadow-lg transition-shadow"
                  :ui="{ body: 'p-0 sm:p-0' }"
                >
                  <NuxtImg
                    class="w-full aspect-4/3"
                    :src="bangumi.cover"
                    alt="bangumi cover"
                  />
                  <h3 class="text-lg px-3 py-2 overflow-hidden text-ellipsis text-nowrap">
                    {{ bangumi.name }}
                  </h3>
                </UCard>
              </div>
            </div>
          </div>
          <br>
        </div>
        <USeparator
          orientation="vertical"
          class="px-6"
        />
        <div class="flex-none lg:w-1/4">
          <div id="experiences">
            <h2 class="mb-2">
              Experiences
            </h2>
            <div class="grid grid-cols-2 gap-3 xs:max-lg:grid-cols-3 lg:grid-cols-1">
              <div
                v-for="experience in experienceList"
                :key="experience.org"
              >
                <UCard
                  class="hover:shadow-lg transition-shadow"
                  :ui="{ body: 'p-4 sm:p-4' }"
                >
                  <h3 class="text-lg">
                    {{ experience.org }}
                  </h3>
                  <p class="text-md">
                    {{ experience.position }}
                  </p>
                  <p class="text-sm text-muted">
                    {{ experience.time }}
                  </p>
                </UCard>
              </div>
            </div>
          </div>
          <br>
          <div id="projects">
            <h2 class="mb-2">
              Contributed to
            </h2>
            <div class="grid grid-cols-1 gap-3 xs:max-lg:grid-cols-2 lg:grid-cols-1">
              <div
                v-for="project in projectList"
                :key="project.name"
              >
                <NuxtLink :to="project.url">
                  <UCard
                    class="hover:shadow-lg transition-shadow"
                    :ui="{ body: 'p-4 sm:p-4' }"
                  >
                    <h3 class="text-lg">
                      <span class="font-normal">{{ project.owner }}/</span>{{ project.name }}
                    </h3>
                    <p class="text-md text-muted">{{ project.desc }}</p>
                  </UCard>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer>
    <template #default>
      <code>0 Warning(s), 0 Error(s)</code>
    </template>
  </Footer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "no-footer",
});

useHead({
  title: "About",
});

const { variables: vars } = useAppConfig();

const birthTime = new Date(2007, 10, 18, 23, 4);

const now = new Date();

const age = (() => {
  const age = {
    year: now.getFullYear() - birthTime.getFullYear(),
    month: now.getMonth() - birthTime.getMonth(),
    day: now.getDate() - birthTime.getDate(),
    hour: now.getHours() - birthTime.getHours(),
    minute: now.getMinutes() - birthTime.getMinutes(),
  };
  if (age.hour < 0) {
    age.hour = 24 + age.hour;
    age.day -= 1;
  }
  if (age.minute < 0) {
    age.minute = 60 + age.minute;
    age.hour -= 1;
  }
  if (age.day < 0) {
    age.day = 30 + age.day;
    age.month -= 1;
  }
  if (age.month < 0) {
    age.month = 12 + age.month;
    age.year -= 1;
  }
  return age;
})();

const languageList = [
  {
    name: "C++",
    icon: "vscode-icons:file-type-cpp3",
  },
  {
    name: "Python",
    icon: "vscode-icons:file-type-python",
  },
  {
    name: "Go",
    icon: "my:golang-logo",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Kotlin",
    icon: "my:kotlin-logo",
  },
  {
    name: "Vue",
    icon: "logos:vue",
  },
];

const gameList = [
  {
    name: "Minecraft",
    server: "Java/BE",
  },
  {
    name: "灵魂摆渡人",
    server: "Spiritfarer",
  },
  {
    name: "雨中冒险",
    server: "2",
  },
  {
    name: "微软模飞",
    server: "2020",
  },
  {
    name: "战舰世界",
    server: "Asia",
  },
  {
    name: "原神",
    server: "CN_Official",
  },
];

const bangumiList = [
  {
    name: "摇曳露营△",
    cover: "/assets/img/bangumi-covers/yurucamp/" + randInt(1, 7).toString() + ".jpg",
    url: "https://yurucamp.jp/",
  },
  {
    name: "孤独摇滚! ",
    cover: "/assets/img/bangumi-covers/bocchitherock/" + randInt(1, 2).toString() + ".jpg",
    url: "https://bocchi.rocks/",
  },
  {
    name: "CLANNAD",
    cover: "/assets/img/bangumi-covers/clannad/" + randInt(1, 7).toString() + ".jpg",
    url: "https://zh.wikipedia.org/zh-cn/CLANNAD",
  },
  {
    name: "天使降临到我身边",
    cover: "/assets/img/bangumi-covers/wataten/" + randInt(1, 5).toString() + ".jpg",
    url: "https://zh.wikipedia.org/wiki/%E5%A4%A9%E4%BD%BF%E9%99%8D%E8%87%A8%E5%88%B0%E6%88%91%E8%BA%AB%E9%82%8A%EF%BC%81",
  },
];

const experienceList = [
  {
    org: "LeviMC",
    position: "Developer (Inactive)",
    time: "2021.7 - Now",
    url: "https://github.com/LiteLDev",
  },
];

const projectList = [
  {
    owner: "LiteLDev",
    name: "LeviLamina",
    url: "https://github.com/LiteLDev/LeviLamina",
    lang: "C++",
    desc: "Versatile mod loader for MCBE",
  },
  {
    owner: "LiteLDev",
    name: "HeaderOutput",
    url: "https://github.com/LiteLDev/HeaderOutput",
    lang: "Kotlin",
    desc: "BDS headers generator",
  },
  {
    owner: "Jaciezyt",
    name: "campu",
    url: "https://github.com/Jaciezyt/campu",
    lang: "Nuxt",
    desc: "Blog framework used by this site",
  },
  {
    owner: "Jaciezyt",
    name: "kana-loop",
    url: "https://github.com/Jaciezyt/kana-loop",
    lang: "Nuxt",
    desc: "Japanese Kana learning web app",
  },
  {
    owner: "Jaciezyt",
    name: "gallery",
    url: "https://github.com/Jaciezyt/gallery",
    lang: "Nuxt",
    desc: "Gallery web app for my photos",
  },
  {
    owner: "Jaciezyt",
    name: "telefabric",
    url: "https://github.com/Jaciezyt/telefabric",
    lang: "Java",
    desc: "Fabric mod to bridge server and Telegram",
  },
  {
    owner: "Jaciezyt",
    name: "cloud-map-spider",
    url: "https://github.com/Jaciezyt/cloud-map-spider",
    lang: "Python",
    desc: "Spider cloud maps from NSMC",
  },
  // {
  //   owner: "Jaciezyt",
  //   name: "exif4cpp",
  //   url: "https://github.com/Jaciezyt/exif4cpp",
  //   lang: "C++",
  //   desc: "(WIP) Modern JPEG Exif metadata parser",
  // },

  {
    owner: "ddf8196",
    name: "FakePlayer",
    url: "https://github.com/ddf8196/FakePlayer",
    lang: "Java",
    desc: "Fake player client for MCBE",
  },
  {
    owner: "Majjcom",
    name: "ncmpp",
    url: "https://github.com/Majjcom/ncmpp",
    lang: "C++",
    desc: "Fastest Netease .ncm files cracker",
  },
  {
    owner: "nuxt",
    name: "content",
    url: "https://github.com/nuxt/content",
    desc: "The file-based CMS for Nuxt apps",
  },
];
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 8px;
}

h3 {
  font-weight: 500;
}

.cover {
  /* TODO: customize */
  background-image: url("/assets/img/backgrounds/109884134_p0.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  z-index: -10;
}

.gradient {
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%);
  z-index: -1;
}

.content {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
