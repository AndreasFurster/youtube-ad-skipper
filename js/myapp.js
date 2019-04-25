!(function() {
  "use strict";

  var enabled = "on";

  var searchClasses = [
    ".videoAdUiSkipButton.videoAdUiAction.videoAdUiFixedPaddingSkipButton",
    ".ytp-ad-skip-button",
    ".ytp-ad-overlay-close-button"
  ];

  function attachSkipper() {
    var streamElement =
      document.getElementsByClassName("video-stream")[0] || false;

    if (streamElement) {
      skipperdySkip();
      streamElement.onprogress = streamElement.ontimeupdate = skipperdySkip;
    }
  }

  function skipperdySkip() {
    searchClasses.forEach(searchClass => {
      setTimeout(function() {
        if (enabled == "on") {
          var element = document.querySelector(searchClass);
          if (element != null) {
            element.click();
          }
        }
      }, 50);
    });
  }

  // Attach skipper loads of times. Don't give them any chance to disable it.
  attachSkipper();
  document.addEventListener("spfdone", attachSkipper);
  document.addEventListener("transitionend", attachSkipper);
  document.addEventListener("DOMContentLoaded", attachSkipper);
  window.addEventListener("popstate", attachSkipper);

  if ("onhashchange" in window) window.onhashchange = attachSkipper;

  window.document.onload = attachSkipper;
  window.onload = attachSkipper;

  setTimeout(attachSkipper, 2000);

  chrome.storage.sync.get(["youtube_ad_skip_trigger"], function(e) {
    enabled = "off" == e.youtube_ad_skip_trigger ? "off" : "on";
  }),
    chrome.storage.onChanged.addListener(function(e, n) {
      enabled = "off" == e.youtube_ad_skip_trigger.newValue ? "off" : "on";
    });
})();
