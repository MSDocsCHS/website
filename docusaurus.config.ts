import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MSDocsCHS',
  tagline: 'Microsoft 文档的非官方简体中文译本',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // 将文档暴露在根路径下
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://learn.microsoft.com/zh-cn/media/open-graph-image.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MSDocsCHS',
      items: [
        {
          type: 'dropdown',
          label: '发现',
          position: 'left',
          items: [
            {
              to: '/',
              label: '文档',
              alt: '文档',
              title: '有关 Microsoft 开发人员工具和技术的深度文章',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/training/',
              label: '培训',
              title: '个性化学习路径和课程',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/certifications/',
              label: '凭证',
              title: '全球认可，行业公认的凭证',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/answers/',
              label: '问答',
              title: '技术问题与答案，由 Microsoft 管理',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/samples/',
              label: '代码示例',
              title: 'Microsoft 开发人员工具和技术的代码示例库',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/assessments/',
              label: '评估',
              title: '交互式特选指南和建议',
            },
            {
              href: 'https://learn.microsoft.com/zh-cn/shows/',
              label: '节目',
              title: '来自 Microsoft 专家的数千小时原创节目',
            }
          ],
        },
        {
          type: 'dropdown',
          label: '产品文档',
          position: 'left',
          items: [
            {
              to: '/windows/',
              label: 'Windows',
            }
          ],
        },
        {
          to: '/about',
          label: '关于',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          html: `
            <a data-mscc-ic="false" href="https://aka.ms/yourcaliforniaprivacychoices" target="_blank" data-bi-name="your-privacy-choices" class="button button--secondary" id="" title="">
	            <svg role="img" aria-label="加州消费者隐私法案 (CCPA) 禁用图标" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43" focusable="false">
		            <title>加州消费者隐私法案 (CCPA) 禁用图标</title>
		            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"></path>
		            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"></path>
		            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"></path>
		            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"></path>
	            </svg>
              你的隐私选择
            </a>
            `,
        },
        {
          href: 'https://go.microsoft.com/fwlink/?linkid=2259814',
          label: '消费者健康隐私',
        },
        {
          href: 'https://support.microsoft.com/contactus',
          label: '与 Microsoft 联系',
        },
        {
          href: 'https://privacy.microsoft.com/zh-cn/privacystatement',
          label: '隐私',
        },
        {
          href: 'https://www.microsoft.com/zh-cn/legal/terms-of-use',
          label: '使用条款',
        },
        {
          href: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks',
          label: '商标',
        },
        {
          href: 'https://choice.microsoft.com/',
          label: '关于广告',
        },
      ],
      copyright: `文档内容由 Microsoft 与所有贡献者以 <a href="https://creativecommons.org/licenses/by/4.0/legalcode.zh-hans">CC BY 4.0</a> 共享。使用 Docusaurus 构建。
      <br />
      <span class="info"><i>本项目与 Microsoft Corporation 无关。文档中提到的 Microsoft、Windows、Microsoft Azure 和/或其他 Microsoft 产品和服务可能是 Microsoft 在美国和/或其他国家的商标或注册商标。</i></span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  clientModules: [
    require.resolve('./src/clientModules/addWtMcId.ts'),
  ]
};

export default config;
