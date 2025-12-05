document.addEventListener('DOMContentLoaded', () => {
  const extractBtn = document.getElementById('extractBtn');
  const status = document.getElementById('status');

  extractBtn.addEventListener('click', async () => {
    status.textContent = '正在提取...';
    extractBtn.disabled = true;

    try {
      // 向 content script 发送消息
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });

      const result = await chrome.tabs.sendMessage(tab.id, { action: "extract" });

      // 生成 Blob 并下载
      const blob = new Blob([result.content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      // 使用 downloads API 下载（需要声明权限？MV3 中可用）
      const filename = `${result.title}.txt`;

      // 创建临时 a 标签触发下载
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      status.textContent = '✅ TXT文件已准备好下载！';
      setTimeout(() => {
        window.close(); // 成功后自动关闭弹窗
      }, 1500);

    } catch (error) {
      console.error("提取失败:", error);
      status.textContent = '❌ 提取失败，请重试。';
    } finally {
      extractBtn.disabled = false;
    }
  });
});