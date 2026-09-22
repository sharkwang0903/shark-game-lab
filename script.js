const catalog = document.querySelector("#game-catalog");

function createGameCard(game) {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = game.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute(
    "aria-label",
    `${game.name}－開始遊戲（在新分頁開啟）`
  );

  // image 是空字串時不建立圖片元素，因此不會留下空白圖片區。
  if (game.image && game.image.trim()) {
    card.classList.add("game-card--with-image");

    const media = document.createElement("div");
    media.className = "game-card__media";

    const image = document.createElement("img");
    image.src = game.image;
    image.alt = `${game.name}預覽圖`;
    image.loading = "lazy";
    image.decoding = "async";

    // 圖片路徑無效時隱藏圖片區，避免破圖影響卡片版面。
    image.addEventListener("error", () => media.remove());

    media.append(image);
    card.append(media);
  }

  const content = document.createElement("div");
  content.className = "game-card__inner";

  const title = document.createElement("h3");
  title.className = "game-card__title";
  title.textContent = game.name;

  const description = document.createElement("p");
  description.className = "game-card__description";
  description.textContent = game.description;

  const action = document.createElement("span");
  action.className = "game-card__action";
  action.textContent = "開始遊戲";

  const arrow = document.createElement("span");
  arrow.className = "game-card__arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  action.append(arrow);

  content.append(title, description, action);
  card.append(content);

  return card;
}

function createCategorySection(category) {
  const section = document.createElement("section");
  section.className = "category-section";
  section.setAttribute("aria-labelledby", `category-${category.id}`);

  const heading = document.createElement("h2");
  heading.className = "category-heading";
  heading.id = `category-${category.id}`;
  heading.textContent = category.name;

  const categoryGames = games.filter(
    (game) => game.category === category.id
  );

  section.append(heading);

  if (categoryGames.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-category";
    emptyMessage.textContent = "這個分類目前還沒有遊戲。";
    section.append(emptyMessage);
    return section;
  }

  const grid = document.createElement("div");
  grid.className = "game-grid";
  categoryGames.forEach((game) => grid.append(createGameCard(game)));

  section.append(grid);
  return section;
}

categories.forEach((category) => {
  catalog.append(createCategorySection(category));
});
