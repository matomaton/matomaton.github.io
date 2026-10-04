/* Copy-link button — shared by all article pages.
   Markup: <button class="copy-link-btn" id="copy-link"> with .icon-link,
   .icon-check and .copy-link-btn__text children. */
(function () {
  var btn = document.getElementById('copy-link');
  if (!btn) return;
  var label = btn.querySelector('.copy-link-btn__text');
  var timer;

  function showCopied() {
    label.textContent = 'Copied';
    btn.dataset.copied = 'true';
    clearTimeout(timer);
    timer = setTimeout(function () {
      label.textContent = 'Copy link';
      btn.dataset.copied = 'false';
    }, 2000);
  }

  function fallback(url) {
    window.prompt('Copy this link:', url);
  }

  btn.addEventListener('click', function () {
    var url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(showCopied, function () { fallback(url); });
    } else {
      fallback(url);
    }
  });
})();
