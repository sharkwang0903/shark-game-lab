// 分類顯示順序以這個陣列為準。
// id 是程式使用的代號；name 是網站上顯示的分類名稱。
const categories = [
  {
    id: "memory",
    name: "記憶類"
  },
  {
    id: "reaction",
    name: "辨識／反應類"
  },
  {
    id: "logic",
    name: "益智／邏輯類"
  },
  {
    id: "action",
    name: "動作類"
  }
];

// 新增遊戲時，只要依照相同格式把新資料加進這個陣列即可。
// category 必須對應上方某個分類的 id。
const games = [
  {
    name: "水母記憶",
    category: "memory",
    description: "記住水母跳舞的順序，依序點選牠們！",
    url: "https://sharkwang0903.github.io/jellyfish-memory/",
    image: ""
  },

  {
    name: "消失的格子",
    category: "memory",
    description: "記住剛才亮起的位置，熄燈後重新還原整個棋盤。",
    url: "https://sharkwang0903.github.io/The-disappearing-grid/",
    image: ""
  },

  {
    name: "數字瞬間記憶",
    category: "memory",
    description: "記住畫面中的數字，數字消失後依照原順序輸入答案。",
    url: "https://sharkwang0903.github.io/number-memory/",
    image: ""
  },

  {
    name: "色彩敏感度測試",
    category: "reaction",
    description: "找出與其他格子顏色不同的方塊。",
    url: "https://sharkwang0903.github.io/color-sensitivity-test/",
    image: ""
  },

  {
    name: "顏色排序遊戲",
    category: "reaction",
    description: "重新排列每一排的色塊，讓顏色形成最平滑的漸層。",
    url: "https://sharkwang0903.github.io/Color-Sorting-Game/",
    image: ""
  },

  {
    name: "1 秒鐘到底有多長",
    category: "reaction",
    description: "在看不到任何計時資訊的情況下，憑自己的感覺判斷指定時間何時到達。",
    url: "https://sharkwang0903.github.io/time-test-game/index.html",
    image: ""
  },

  {
    name: "Stroop 顏色衝突",
    category: "reaction",
    description: "請忽略文字本身的意思，快速選擇它實際顯示的顏色。",
    url: "https://sharkwang0903.github.io/stroop-game/",
    image: ""
  },

  {
    name: "一刀切",
    category: "logic",
    description: "畫一條直線，把圖形切成面積完全相等的兩半。",
    url: "https://sharkwang0903.github.io/one-cut-game/",
    image: ""
  },

  {
    name: "水母下樓梯",
    category: "action",
    description: "不斷往洞穴深處前進，看看你能抵達地下幾樓。",
    url: "https://sharkwang0903.github.io/jellyfish-going-down-the-stairs/",
    image: ""
  }
];
