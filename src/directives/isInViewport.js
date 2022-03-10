export const isInViewport = (el, accessor) => {
  if (el) {
    const rect = el.getBoundingClientRect();
    console.log(rect);
  }
};
