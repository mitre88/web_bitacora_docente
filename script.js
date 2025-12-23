const tabButtons = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

const activateTab = (tab) => {
  const targetId = tab.dataset.tab;

  tabButtons.forEach((button) => {
    const isActive = button === tab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === targetId);
  });
};

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
