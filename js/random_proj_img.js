document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://images.unsplash.com/photo-1510511450819-1f5f7d0c0b3b",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
  ];

  document.querySelectorAll(".random-bg").forEach(el => {
    const img = images[Math.floor(Math.random() * images.length)];
    el.style.backgroundImage = `url("${img}")`;
  });
});