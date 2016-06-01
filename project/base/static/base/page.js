window.addEventListener('keydown', function(e) {
  var goPrev = (e.keyCode == 37 && e.ctrlKey);
  var goNext = (e.keyCode == 39 && e.ctrlKey);
  var prevLink = document.querySelector('.navigation .prev');
  var nextLink = document.querySelector('.navigation .next');

  if (goPrev && prevLink) {
    prevLink.click();
  }

  if (goNext && nextLink) {
    nextLink.click();
  }
});
