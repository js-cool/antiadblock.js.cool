(function (window, document) {
  var test = document.createElement('div');
  test.innerHTML = '&nbsp;';
  test.className = 'adsbox';
  document.body.appendChild(test);
  window.setTimeout(function () {
    if (test.offsetHeight === 0) {
      // 启用 Adblock
      document.getElementById('detected').style.display = 'block';
    } else {
      // 未启用 Adblock
      document.getElementById('not-detected').style.display = 'block';
    }
    test.remove();
  }, 100);
})(this, this.document);

(adsbygoogle = window.adsbygoogle || []).push({});
(adsbygoogle = window.adsbygoogle || []).push({});
