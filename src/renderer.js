const dragItem = document.querySelectorAll(".drag-input");

dragItem.forEach((inputElement) => {
  const dropPage = inputElement.closest(".drop-page");

  dropPage.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropPage.classList.add("drop-page-hover");
    document.querySelector(".drag-text").textContent = "start uploading";
  });
  dropPage.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropPage.classList.remove("drop-page-hover");
    document.querySelector(".drag-text").textContent = "Drag Files";
  });
  dropPage.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      inputElement.files = e.dataTransfer.files;
      goToPreview(e.dataTransfer.files[0].path);
    }
  });
});

function goToPreview(data) {
  const store = localStorage.setItem("data", JSON.stringify({ path: data }));
  window.location.replace("preview.html");
}
