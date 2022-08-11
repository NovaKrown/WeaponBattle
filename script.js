const panelFunction = function () {
  const panels = document.querySelectorAll(".panel");
  const btnU = document.querySelector(".btnU");
  const btnW = document.querySelector(".btnW");
  const btnH = document.querySelector(".btnH");

  const goToPanel = function (panel) {
    panels.forEach((p, i) => {
      p.style.transform = `translateX(${100 * (i - panel)}%)`;
    });
  };

  const nextPanel = function () {
    goToPanel(0);
  };

  const prevPanel = function () {
    goToPanel(2);
  };

  const homePanel = function () {
    goToPanel(1);
  };

  const init = function () {
    goToPanel(1);
  };
  init();

  btnU.addEventListener("click", nextPanel);
  btnW.addEventListener("click", prevPanel);
  btnH.addEventListener("click", homePanel);
};

panelFunction();
