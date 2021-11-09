export const install = () => {
  for (const element of document.querySelectorAll<HTMLImageElement>(
    'img[loading="lazy"]'
  )) {
    const data = element.dataset;

    if (data.srcset) {
      element.srcset = data.srcset;
    }

    if (data.sizes === "auto") {
      element.sizes = `${element.offsetWidth}px`;
    }
  }
};
