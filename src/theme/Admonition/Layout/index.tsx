import React, { type ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { webLightTheme, webDarkTheme } from '@fluentui/react-components';
import {
  FluentProvider,
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarIntent,
  makeStyles,
} from "@fluentui/react-components";

import { InfoFilled, WarningFilled, FireFilled, CheckmarkCircleFilled } from '@fluentui/react-icons';

import type { Props } from '@theme/Admonition/Layout';

const useStyles = makeStyles({
  messageBar: {
    marginBottom: '1rem',
  },
});

export default function AdmonitionLayout(props: Props): JSX.Element {
  const { type, title, children } = props;
  const getIntent = (): MessageBarIntent => {
    switch (type) {
      case 'info': return 'info';
      case 'note': return 'info';
      case 'warning': return 'warning';
      case 'caution': return 'warning';
      case 'danger': return 'error';
      case 'tip': return 'success';
      default: return 'info';
    }
  };
  const getIcon = (): JSX.Element => {
    switch (type) {
      case 'info': return <InfoFilled />;
      case 'note': return <InfoFilled />;
      case 'warning': return <WarningFilled />;
      case 'caution': return <WarningFilled />;
      case 'danger': return <FireFilled />;
      case 'tip': return <CheckmarkCircleFilled />;
      default: return <InfoFilled />;
    }
  };

  const styles = useStyles();

  const { colorMode } = useColorMode();

  const theme = colorMode === 'dark' ? webDarkTheme : webLightTheme;

  return (
    <FluentProvider theme={theme}>
      <MessageBar intent={getIntent()} icon={getIcon()} className={styles.messageBar}>
        <MessageBarBody className='msg-bar-body'>
          <MessageBarTitle>{title}</MessageBarTitle>
          {children}
        </MessageBarBody>
      </MessageBar>
    </FluentProvider>
  );
}
