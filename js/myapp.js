!(function() {
  "use strict";
  
  var t = "on",
    e = e || [];
  function n() {
    var t = document.getElementsByClassName("video-stream")[0] || !1;
    t &&
      (o(),
      (t.onprogress = t.ontimeupdate = function() {
        o();
      }));
  }
  function o() {
    var t = [
      ".videoAdUiSkipButton.videoAdUiAction.videoAdUiFixedPaddingSkipButton",
      ".ytp-ad-skip-button"
    ];
    for (var e in t) i(t[e]);
  }
  function i(t) {
    !1 !== r(t) &&
      setTimeout(function() {
        var n;
        !1 !== r(t) &&
          (document.querySelector(t).click(),
          (function() {
            var t = ".ytp-ad-button-text";
            if (0 == document.querySelectorAll(t).length) return;
            var n = document.querySelector(t).innerText;
          })(),
          (n = t));
      }, 100);
  }
  function r(e) {
    if ("off" === t) return !1;
    if (0 == document.querySelectorAll(e).length) return !1;
    var n = ".ytp-ad-skip-button-slot";
    return (
      0 != document.querySelectorAll(n).length &&
      "none" !== window.getComputedStyle(document.querySelector(n)).display
    );
  }
  !(function() {
    n(),
    document.addEventListener("spfdone", n),
    document.addEventListener("transitionend", n),
    document.addEventListener("DOMContentLoaded", n),
    window.addEventListener("popstate", n),
    "onhashchange" in window && (window.onhashchange = n);
    (window.document.onload = n), (window.onload = n), setTimeout(n, 1e3);
  })(),
    chrome.storage.sync.get(["youtube_ad_skip_trigger"], function(e) {
      t = "off" == e.youtube_ad_skip_trigger ? "off" : "on";
    }),
    chrome.storage.onChanged.addListener(function(e, n) {
      t = "off" == e.youtube_ad_skip_trigger.newValue ? "off" : "on";
    });
})();
