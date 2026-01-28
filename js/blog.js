function filterBlogs(category) {
  const cards = document.querySelectorAll(".blog-card");
  const items = document.querySelectorAll(".blog-sidebar li");

  items.forEach(i => i.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.dataset.category.includes(category)
        ? "block"
        : "none";
    }
  });
}

function toggleGroup(el) {
  const items = el.nextElementSibling;
  items.style.display = items.style.display === "block" ? "none" : "block";
}