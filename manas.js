// Текстти көрсөтүү үчүн интерактивдүүлүк
document.getElementById("showText").addEventListener("click", function () {
    const text = document.getElementById("eposText");
    if (text.classList.contains("hidden")) {
      text.classList.remove("hidden");
      this.textContent = "Текстти жашыруу";
    } else {
      text.classList.add("hidden");
      this.textContent = "Текстти көрүү";
    }
  });
  
  // Байланыш формасы
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Билдирүү ийгиликтүү жөнөтүлдү!");
  });