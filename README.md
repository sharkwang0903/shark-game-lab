# Shark's Game Lab

Shark's Game Lab 是一個簡單的小遊戲入口網站，用來集中整理 Shark 已經完成並部署在 GitHub Pages 上的小遊戲。

首頁會依照分類顯示遊戲卡片。使用者點擊整張卡片後，遊戲會在新分頁開啟。這個專案本身不包含遊戲邏輯，也沒有後端、套件或建置流程，只使用 HTML、CSS 與 Vanilla JavaScript。

## 專案檔案

```text
shark-game-lab/
├── index.html
├── style.css
├── games.js
├── script.js
└── README.md
```

- `index.html`：網站的基本 HTML 骨架，包含網站標題、副標語，以及讓 JavaScript 放入遊戲內容的容器。
- `style.css`：所有視覺樣式，包括版面、卡片、顏色、互動效果與手機／平板／桌面版排版。
- `games.js`：分類與遊戲資料。日後新增或修改遊戲時，通常只需要編輯這個檔案。
- `script.js`：讀取 `games.js` 的資料，自動建立分類區塊與遊戲卡片。一般新增遊戲時不需要修改。
- `README.md`：專案使用與維護說明，也就是現在閱讀的這份文件。

## 在本機查看網站

直接用瀏覽器開啟 `index.html` 即可。這個專案不需要安裝 npm、套件或任何開發工具，也不需要執行建置指令。

## 新增一款遊戲

開啟 `games.js`，找到 `games` 陣列，依照現有格式加入一個新的 object：

```js
{
  name: "新的遊戲",
  category: "memory",
  description: "這是一段簡短的遊戲說明。",
  url: "https://example.com/",
  image: ""
}
```

只需要把這個 object 加進 `games` array 即可。請注意：

1. 前一筆遊戲資料結尾需要有逗號 `,`。
2. `name` 是卡片上的遊戲名稱。
3. `category` 必須填寫 `categories` 裡已存在的分類 `id`，例如 `memory`。
4. `description` 是顯示在卡片上的簡短介紹。
5. `url` 是遊戲已部署完成的完整網址，建議使用 `https://` 開頭。
6. 目前沒有圖片時，`image` 保持空字串 `""` 即可。卡片不會留下空白圖片區。

儲存 `games.js` 並重新整理網頁後，新遊戲就會自動出現在對應分類中。不需要修改 `index.html` 或 `script.js`。

## 修改既有遊戲

開啟 `games.js`，在 `games` 陣列中找到該遊戲，直接修改需要更新的欄位即可。例如要修改說明與網址：

```js
{
  name: "水母記憶",
  category: "memory",
  description: "更新後的遊戲介紹。",
  url: "https://example.com/new-game-url/",
  image: ""
}
```

若要把遊戲移到另一個分類，只要把 `category` 改成另一個分類的 `id`。分類名稱與遊戲資料是透過 `id` 對應，因此修改分類的中文名稱時，不需要逐一修改所有遊戲。

## 新增分類

開啟 `games.js`，找到 `categories` 陣列，加入新的分類：

```js
{
  id: "visual",
  name: "視覺／專注類"
}
```

- `id` 是程式內部使用的唯一代號，建議使用簡短的英文小寫字詞，且不要和其他分類重複。
- `name` 是實際顯示在網站上的分類名稱。
- 分類在 `categories` 陣列中的先後順序，就是首頁上的顯示順序。

分類加入後，遊戲便可以使用：

```js
category: "visual"
```

只要分類 `id` 與遊戲的 `category` 完全相同，遊戲就會自動出現在該分類。不需要修改 HTML。若新分類還沒有任何遊戲，首頁會顯示「這個分類目前還沒有遊戲。」

## 為遊戲加入圖片

目前所有遊戲的 `image` 都是空字串，所以第一版只顯示文字。未來需要圖片時，可以在專案根目錄自行建立 `images` 資料夾：

```text
shark-game-lab/
└── images/
    └── example.png
```

接著把該遊戲的 `image` 改成圖片的相對路徑：

```js
image: "images/example.png"
```

儲存並重新整理網頁後，圖片會自動顯示在該卡片上方。建議各張預覽圖使用一致的 `16:9` 比例；網站會裁切圖片以維持整齊版面。

若沒有圖片，請繼續使用：

```js
image: ""
```

空字串不會建立圖片區塊，也不會留下空白位置。若圖片路徑寫錯或圖片無法載入，網站也會自動移除該圖片區塊，避免顯示破圖。

## 修改網站標題與副標語

開啟 `index.html`：

- 網頁主標題是 `<h1>Shark's Game Lab</h1>`。
- 副標語位於 `<p class="site-description">` 內。
- 瀏覽器分頁名稱位於 `<title>Shark's Game Lab</title>`，通常建議和主標題一起修改。
- 搜尋引擎使用的簡短介紹位於 `<meta name="description">`，若網站定位有改變也建議一併更新。

## GitHub Pages 部署與使用

1. 建立一個 GitHub repository，並把這個資料夾內的檔案推送到 repository。
2. 在該 repository 的 **Settings → Pages** 選擇從 branch 部署。
3. 選擇存放網站檔案的 branch（通常是 `main`）與根目錄 `/(root)`，然後儲存。
4. 等候 GitHub Pages 完成部署後，使用 GitHub 顯示的網站網址開啟首頁。

因為 `index.html` 位於專案根目錄，GitHub Pages 會將它作為首頁。之後只要更新 `games.js`、提交變更並推送到同一個 branch，部署完成後首頁的遊戲清單就會更新。

若你使用的是 `https://帳號.github.io/repository-name/` 這類專案網站網址，圖片請維持 `images/example.png` 這種相對路徑，不要在開頭加 `/`，以免路徑指向錯誤位置。

## 常見檢查

如果新增的遊戲沒有出現，可以依序確認：

1. 遊戲 object 是否確實放在 `games` 陣列的 `[` 與 `]` 之間。
2. 前後兩筆資料之間是否有逗號。
3. 遊戲的 `category` 是否與某個分類的 `id` 完全相同，包含英文大小寫。
4. `url` 和其他文字是否有成對的引號。
5. 修改後是否已儲存檔案並重新整理瀏覽器。

## 技術原則

本專案刻意保持簡單：不使用 React、Vue、TypeScript、npm、Node.js、CSS framework、第三方套件、package manager、bundler 或 build system。維護遊戲清單時，優先只修改 `games.js`。
