export function onRouteUpdate(): () => void {
  const MICROSOFT_DOMAINS = ['microsoft.com', 'visualstudio.com', 'aka.ms'];
  
  const addWtMcId = () => {
    document.querySelectorAll('a[href*="microsoft.com"], a[href*="visualstudio.com"], a[href*="aka.ms"]')
      .forEach((link: HTMLAnchorElement) => {
        try {
          const url = new URL(link.href);
          if (MICROSOFT_DOMAINS.some(domain => url.hostname.endsWith(domain))) {
            if (!url.searchParams.has('wt.mc_id')) {
              url.searchParams.append('wt.mc_id', 'studentamb_203301');
              link.href = url.toString();
            }
          }
        } catch (e) {
          console.warn('Invalid URL:', link.href);
        }
      });
  };

  // 初始执行
  addWtMcId();

  // 监听DOM变化
  let timeout: NodeJS.Timeout;
  const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(addWtMcId, 100);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 清理函数
  return () => {
    observer.disconnect();
    clearTimeout(timeout);
  };
}