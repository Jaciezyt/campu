let lastUpdateHitokoto = 0;

export function updateHitokoto() {
  if (Date.now() - lastUpdateHitokoto < 5 * 1000) {
    return;
  }
  lastUpdateHitokoto = Date.now();
  fetch("https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=h&c=i&c=k")
    .then(async (response) => {
      let res = await response.json()
      useStateStore().updateHitokoto(res.hitokoto, res.from_who ? res.from_who : res.from);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type BlogCollectionItem = {
  slug: string;
  title: string;
  description?: string;
  cover?: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  category: string;
  pinned?: number;
  created: string;
  updated: string;
};
