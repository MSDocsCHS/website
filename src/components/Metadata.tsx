import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { FluentProvider, Tooltip } from "@fluentui/react-components";
import { useColorMode } from '@docusaurus/theme-common';
import { webLightTheme, webDarkTheme } from '@fluentui/react-components';

const Metadata: React.FC = () => {
    try {
        const { metadata } = useDoc();
        const { frontMatter } = metadata ?? {};
        let msTopic: string | undefined = frontMatter?.['ms.topic'] as string | undefined;
        let msDate: string | undefined = frontMatter?.['ms.date'] as string | undefined;

        if (!msTopic && !msDate) return null;

        // Decode msTopic to Chinese
        if (msTopic === 'overview') {
            msTopic = '概述';
        } else if (msTopic === 'article') {
            msTopic = '文章';
        } else if (msTopic === 'faq') {
            msTopic = '常见问题解答';
        } else if (msTopic === 'conceptual') {
            msTopic = '概念';
        } else {
            msTopic = null;
        }

        // Convert date format if exists
        if (msDate) {
            const date = new Date(msDate as string);
            if (!isNaN(date.getTime())) {
                msDate = date.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
            }
        }

        // convert current url to orig url
        const currentPath = window.location.pathname;
        let origUrl = "https://learn.microsoft.com/en-us" + currentPath;
        // check if ms.orig overrided to other links
        frontMatter?.['ms.orig'] && (origUrl = frontMatter?.['ms.orig'] as string);
        // check if ms.orig set to false
        frontMatter?.['ms.orig'] === false && (origUrl = null);

        const { colorMode } = useColorMode();

        const theme = colorMode === 'dark' ? webDarkTheme : webLightTheme;

        return (
            <FluentProvider theme={theme} style={{ backgroundColor: 'unset' }}>
                <div>
                    <ul className="metadata page-metadata" lang="zh-cn" dir="ltr">
                        {msTopic && <li>{msTopic}</li>}
                        {msDate &&
                            <li>
                                <Tooltip withArrow content="此标签在内部用于标识文章新鲜度。它不一定代表该文章/页面的最后更新时间。" relationship="description">
                                    <span>{msDate}</span>
                                </Tooltip>
                            </li>
                        }
                        {origUrl &&
                            <li>
                                <a href={origUrl}>
                                    英语原文
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </FluentProvider>
        );
    } catch {
        return null;
    }
};

export default Metadata;
