import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

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
                }).replace(/\//g, '/');
            }
        }

        // convert current url to orig url
        const currentPath = window.location.pathname;
        const origUrl = "https://learn.microsoft.com/en-us" + currentPath;

        return (
            <div>
                <ul className="metadata page-metadata" lang="zh-cn" dir="ltr">
                    {msTopic && <li>{msTopic}</li>}
                    {msDate &&
                        <li>
                            <time title="此标签在内部用于标识文章新鲜度。它不一定是最后更新时间。">
                                {msDate}
                            </time>
                        </li>
                    }
                    <li>
                        <a href={origUrl}>
                            英语原文
                        </a>
                    </li>
                </ul>
            </div>
        );
    } catch {
        return null;
    }
};

export default Metadata;
