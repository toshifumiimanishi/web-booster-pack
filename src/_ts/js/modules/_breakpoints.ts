const getCssVariables = (customProperty: string) => {
  const root = document.documentElement;
  return getComputedStyle(root).getPropertyValue(customProperty);
};

const breakpoints = {
  sm: getCssVariables('--breakpoint-sm'),
  md: getCssVariables('--breakpoint-md'),
  lg: getCssVariables('--breakpoint-lg')
};

export const mq = window.matchMedia(`(min-width: ${breakpoints.md})`);
export const handleWindowChange = mq => {
  if (mq.matches) {
    // 画面幅 768px 以上の処理
  } else {
    // 画面幅 768px 未満の処理
  }
};
