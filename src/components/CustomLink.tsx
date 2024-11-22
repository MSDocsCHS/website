import React from 'react';
import Link from '@docusaurus/Link';

export const CustomLink = (props) => {
  const href = props.href || '';
  const customSchemeRegex = /^(?!https?:)[a-z]+(?:[-+.][a-z0-9]+)*:/i;
  const isCustomScheme = customSchemeRegex.test(href);

  if (isCustomScheme) {
    // 对于自定义 URL Scheme 的链接，直接使用 a 标签
    return <a className='url-scheme' {...props} />;
  }

  // 对于其他链接，使用 Docusaurus 的 Link 组件
  return <Link {...props} />;
};
