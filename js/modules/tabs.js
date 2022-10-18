function tabs(
  tabItemSelector,
  tabContentSelector,
  tabItemsSelector,
  activeClass
) {
  const tabItem = document.querySelectorAll(tabItemSelector),
    tabContent = document.querySelectorAll(tabContentSelector),
    tabItems = document.querySelector(tabItemsSelector);

  function hideContent() {
    tabContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabItem.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showContent(i = 0) {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabItem[i].classList.add(activeClass);
  }

  hideContent();
  showContent();

  tabItems.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);

    if (target && target.className == tabItemSelector.slice(1)) {
      tabItem.forEach((item, index) => {
        if (target == item) {
          hideContent();
          showContent(index);
        }
      });
    }
  });
}

// синтаксис  CommonJS
// module.exports = tabs;

export default tabs;
