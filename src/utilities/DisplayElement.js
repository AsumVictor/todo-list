const printElements = (containerClass, elements) => {
  const container = document.querySelector(`.${containerClass}`);
  container.innerHTML = '';

  if (elements) {
    elements.forEach((element) => {
      container.appendChild(element);
    });
  }
};

export default printElements;