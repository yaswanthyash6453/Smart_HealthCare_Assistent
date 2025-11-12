document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const sections = document.querySelectorAll("section");

  searchBar.addEventListener("keyup", () => {
    const query = searchBar.value.toLowerCase();

    sections.forEach(section => {
      const items = section.querySelectorAll("li");
      let sectionHasMatch = false;

      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
          item.style.display = "list-item";
          sectionHasMatch = true;
        } else {
          item.style.display = "none";
        }
      });

      // Hide section if no matches found
      section.style.display = sectionHasMatch ? "block" : "none";
    });
  });
});
