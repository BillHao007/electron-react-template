// preload.ts

// 给react-app在html头插入安全策略meta
const insertSecurityPolicyMeta = () => {
  const securityMeta = document.createElement('meta');
  securityMeta.setAttribute('http-equiv', 'Content-Security-Policy');
  securityMeta.setAttribute('content', "script-src 'self' 'unsafe-inline';");
  document.querySelector('head')?.appendChild(securityMeta);
};

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener('DOMContentLoaded', () => {
  insertSecurityPolicyMeta();
})