(() => {
  const datos = Array.from(document.querySelectorAll(".catalog_item")).map((item, index) => {
    console.log(index);
    const el = item.querySelector(".list-view.tooltip.js-tooltip");
    const title = (() => {
      try {
        return el.querySelector(".tooltip_title").textContent.trim();
      } catch (error) {
        return null;
      }
    })();
    const year = (() => {
      try {
        return el.querySelector(".tooltip_date").textContent.trim();
      } catch (error) {
        return null;
      }
    })();
    const episodes = (() => {
      try {
        return el.querySelector(".tooltip_text strong").textContent.trim();
      } catch (error) {
        return null;
      }
    })();
    const description = (() => {
      try {
        return el.querySelector(".tooltip_text strong").nextSibling.nextSibling.textContent.trim();
      } catch (error) {
        return el.querySelector(".tooltip_text").textContent.trim();
      }
    })();
    const seasons = (() => {
      try {
        return el.querySelector(".tooltip_season").textContent.trim();
      } catch (error) {
        return null;
      }
    })();
    const rating = (() => {
      try {
        return el.querySelector(".Stars-filledWrap").style.width;
      } catch (error) {
        return null;
      }
    })();
    const link = (() => {
      try {
        return item.querySelector(".slider_item_link_invis").href;
      } catch (error) {
        return null;
      }
    })();
    const image = (() => {
      try {
        return item.querySelector(".slider_item_image img").src;
      } catch (error) {
        return null;
      }
    })();
    const genres = (() => {
      try {
        return Array.from(el.querySelectorAll(".tooltip_genre")).map(subel => subel.textContent.trim().replace(", ", ""));
      } catch (error) {
        return null;
      }
    })();
    return {
      title,
      year,
      episodes,
      description,
      rating,
      link,
      image,
      genres,
      seasons,
    };
  });
  console.log(JSON.stringify(datos, null, 2));
})();