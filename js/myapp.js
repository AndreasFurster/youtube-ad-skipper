!function(){"use strict";console.log("YSAT");var t="on",e=e||[];function n(){var t=document.getElementsByClassName("video-stream")[0]||!1;t&&(o(),t.onprogress=t.ontimeupdate=function(){o()})}function o(){var t=[".videoAdUiSkipButton.videoAdUiAction.videoAdUiFixedPaddingSkipButton",".ytp-ad-skip-button"];for(var e in t)i(t[e])}function i(t){!1!==r(t)&&setTimeout(function(){var n;!1!==r(t)&&(document.querySelector(t).click(),function(){var t=".ytp-ad-button-text";if(0==document.querySelectorAll(t).length)return;var n=document.querySelector(t).innerText;e.push(["_trackEvent","ad_btn_text",n])}(),n=t,e.push(["_trackEvent",n,"clicked"]))},100)}function r(e){if("off"===t)return!1;if(0==document.querySelectorAll(e).length)return!1;var n=".ytp-ad-skip-button-slot";return 0!=document.querySelectorAll(n).length&&"none"!==window.getComputedStyle(document.querySelector(n)).display}!function(){function t(){n()}n(),document.addEventListener("spfdone",function(){n()}),document.addEventListener("transitionend",function(t){n()}),document.addEventListener("DOMContentLoaded",function(){n()}),window.addEventListener("popstate",function(){n()}),"onhashchange"in window&&(window.onhashchange=t);window.document.onload=t,window.onload=t,setTimeout(function(){n()},1e3)}(),e.push(["_setAccount","UA-57562361-4"]),e.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://ssl.google-analytics.com/ga.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),chrome.storage.sync.get(["youtube_ad_skip_trigger"],function(e){t="off"==e.youtube_ad_skip_trigger?"off":"on"}),chrome.storage.onChanged.addListener(function(e,n){t="off"==e.youtube_ad_skip_trigger.newValue?"off":"on"})}();