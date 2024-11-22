import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { CustomLink } from '../components/CustomLink';

export default {
  // 保留默认的 MDX 组件
  ...MDXComponents,
  // 用自定义的 CustomLink 替换 a 标签
  a: CustomLink,
};
