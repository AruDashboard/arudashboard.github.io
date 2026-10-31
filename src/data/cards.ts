export interface Card {
  title: string;
  description: string;
  href: string;
  tag: string;
  internal?: boolean;
}

export interface CardGroup {
  title: string;
  cards: Card[];
}

export const groups: CardGroup[] = [
  {
    title: '游戏信息',
    cards: [
      {
        title: 'MiHoYo游戏更新时间',
        description: '《原神》 / 《崩坏：星穹铁道》 / 《绝区零》版本更新时间表。',
        href: 'https://arudashboard.github.io/HoyoUpdateDate/',
        tag: '时间表',
      },
      {
        title: '元素反应',
        description: '《原神》元素反应无向图图示。',
        href: 'https://arudashboard.github.io/ElementReaction/',
        tag: '原神',
      },
    ],
  },
  {
    title: '角色分布',
    cards: [
      {
        title: '原神角色分布',
        description: '《原神》角色的属性、武器维度分布统计。',
        href: 'https://arudashboard.github.io/GenshinCharacterDistribution/',
        tag: '原神',
      },
      {
        title: '星穹铁道角色分布',
        description: '《崩坏：星穹铁道》角色的属性、命途维度分布统计。',
        href: 'https://arudashboard.github.io/StarrailCharacterDistribution/',
        tag: '星穹铁道',
      },
      {
        title: '绝区零角色分布',
        description: '《绝区零》代理人的属性、特性维度分布统计。',
        href: 'https://arudashboard.github.io/ZZZCharacterDistribution/',
        tag: '绝区零',
      },
    ],
  },
  {
    title: '其它信息',
    cards: [
      {
        title: '愚人众',
        description: '执行官代号与本名',
        href: 'fatui/',
        tag: '原神',
        internal: true,
      },
      {
        title: '石心十人',
        description: '调用基石台词',
        href: 'ten-stonehearts/',
        tag: '星穹铁道',
        internal: true,
      },
    ],
  },
];
