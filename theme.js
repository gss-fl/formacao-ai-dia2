// Apply the saved choice before the module and styles load to avoid a bright flash.
(() => {
  let theme = "dark";
  try {
    const saved = localStorage.getItem("formacao-ai-dia2.theme");
    if (saved === "light" || saved === "dark") theme = saved;
  } catch {
    // Restricted storage still gets the requested dark default.
  }
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.style.backgroundColor = theme === "dark" ? "#090c0d" : "#eef1ef";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#090c0d" : "#eef1ef");
})();
