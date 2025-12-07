const scrollToElement = (target: string) => {
  const element = document.getElementById(target);
  if (!element) return;

  const headerOffset = 180;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default scrollToElement;
