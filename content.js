// 核心提取函数
function extractMainContent() {
  const selectorsToRemove = [
    '[ad]', '[data-ad]', '.ad-', '#ad-', '.adsense',
    '.sidebar', '.nav', '.footer', '.comment', '.related',
    'nav', 'footer', 'aside', 'iframe', 'script', 'style'
  ];

  // 复制 body 避免污染原页面
  const clone = document.body.cloneNode(true);

  // 移除干扰元素
  selectorsToRemove.forEach(sel => {
    clone.querySelectorAll(sel).forEach(el => el.remove());
  });

  // 提取标题（优先 <h1> 或 document.title）
  const titleEl = clone.querySelector('h1');
  const pageTitle = titleEl ? titleEl.innerText.trim() : document.title;

  // 尝试提取主要段落和列表
  const paragraphs = Array.from(clone.querySelectorAll('p, li, h2, h3'))
    .map(el => el.innerText.trim())
    .filter(text => text.length > 10); // 过滤太短的句子

  const content = paragraphs.join('\n\n');

  return {
    title: pageTitle.replace(/[/\\?%*:|"<>]/g, '-'), // 清理非法文件名字符
    content: content || '未能提取到有效内容。'
  };
}

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract") {
    const data = extractMainContent();
    sendResponse(data);
  }
});