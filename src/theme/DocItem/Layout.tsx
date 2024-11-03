// src/theme/DocItem/Layout/index.tsx
import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type { Props } from '@theme/DocItem/Layout';
import Metadata from '../../clientModules/Metadata';

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props}>
        <Metadata />
        {props.children}
      </Layout>
    </>
  );
}
