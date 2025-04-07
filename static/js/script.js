document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll(".image");
    var totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});




function copyBibtex() {
  const bibtexCode = document.getElementById('bibtex-code').textContent;
  navigator.clipboard.writeText(bibtexCode).then(() => {
    const button = event.currentTarget;
    button.innerHTML = '<span class="icon"><i class="fas fa-check"></i></span><span>Copied!</span>';
    button.style.opacity = '1';
    setTimeout(() => {
      button.innerHTML = '<span class="icon"><i class="fas fa-copy"></i></span><span>Copy</span>';
      button.style.opacity = '0.7';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}
