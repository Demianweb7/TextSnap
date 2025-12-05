# TextSnap
A Chrome extension to extract main content from web pages and export to TXT. （用于抓取网站内容，并生成TXT文件的一款chrome/edge插件）
# TextSnap - 网页内容提取工具
# TextSnap - Web Content Extractor(Please scroll down for the English version.)
## 📖 中文版
TextSnap 是一款轻量级的 Chrome 浏览器扩展，用于一键提取当前网页的主要文字内容，并导出为 UTF-8 编码的 TXT 文件。

### ✨ 主要功能

- 智能提取：自动过滤广告、侧边栏、导航栏、页脚等非主要内容
- 干净输出：只保留正文、段落、列表和标题等核心文本
- 自动命名：使用网页标题作为文件名，并自动过滤非法字符
- 一键下载：点击按钮即可生成并下载 TXT 文件
- 自动关闭：下载完成后自动关闭弹窗，提升使用体验

### 🛠 技术特性
- 使用 Manifest V3 开发，兼容最新 Chrome 浏览器
- 原生 JavaScript 实现，无外部依赖
- 响应式设计，简洁美观的弹出界面
- 安全无侵入，仅在用户点击时提取内容

### 📦 安装方法
- 开发者模式安装
- 下载或克隆本项目文件，打开 Chrome 浏览器，进入 chrome://extensions/
- 开启右上角的“开发者模式”，点击“加载已解压的扩展程序”，选择包含本项目的文件夹
- 安装完成，工具栏将显示 TextSnap 图标

### 🚀 使用方法
访问任意网页，点击浏览器工具栏中的 TextSnap 图标，点击弹出窗口中的“提取并生成TXT”按钮，稍等片刻，系统将自动下载以网页标题命名的 TXT 文件，文件下载完成后，弹窗会自动关闭。

### ⚙️ 权限说明
activeTab：仅在用户点击扩展时获取当前标签页权限
<all_urls>：允许在所有网站上运行内容脚本（仅用于内容提取）

### 🤝 贡献指南
欢迎提交 Issue 和 Pull Request 来改进 TextSnap！

### 📄 许可证
本项目采用 MIT 许可证

## 📖 English Version

TextSnap is a lightweight Chrome browser extension that extracts the main text content from the current webpage with one click and exports it as a UTF-8 encoded TXT file.

### ✨ Key Features
- Smart Extraction: Automatically filters out ads, sidebars, navigation, footers, and other non-content elements
- Clean Output: Preserves only core text like paragraphs, lists, and headings
- Auto-naming: Uses webpage title as filename and automatically filters illegal characters
- One-click Download: Generate and download TXT file with a single click
- Auto-close: Automatically closes popup after download for better UX

### 🛠 Technical Features
- Built with Manifest V3, compatible with the latest Chrome
- Pure JavaScript implementation, no external dependencies
- Responsive design with clean, modern popup interface
- Safe and non-intrusive, only extracts content upon user request

### 📦 Installation
Developer Mode Installation
- Download or clone this project, Open Chrome and navigate to chrome://extensions/
- Enable "Developer mode" in the top right, Click "Load unpacked extension", Select the folder containing this project
- Installation complete - TextSnap icon will appear in toolbar

### 🚀 How to Use
Navigate to any webpage. Click the TextSnap icon in the browser toolbar. Click the "Extract and Generate TXT" button in the popup. Wait a moment, the system will automatically download a TXT file named after the webpage title. The popup will automatically close after download completes.

### ⚙️ Permission Explanation
- activeTab: Only accesses the current tab when the user clicks the extension
- <all_urls>: Allows content scripts to run on all websites (for content extraction only)

### 🤝 Contributing
Issues and Pull Requests are welcome to improve TextSnap!

### 📄 License
This project is licensed under the MIT License.
