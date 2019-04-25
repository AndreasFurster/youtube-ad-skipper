var currentPermission = "on",
  bg_color = { on: "#009933", off: "#ff3300" };
chrome.storage.sync.set(
  { youtube_ad_skip_trigger: currentPermission },
  function() {
    chrome.browserAction.setBadgeText({ text: currentPermission }),
      chrome.browserAction.setBadgeBackgroundColor({
        color: bg_color[currentPermission]
      });
  }
),
  chrome.storage.sync.get(["youtube_ad_skip_trigger"], function(r) {
    (currentPermission = "off" === r.youtube_ad_skip_trigger ? "off" : "on"),
      chrome.browserAction.setBadgeText({ text: currentPermission }),
      chrome.browserAction.setBadgeBackgroundColor({
        color: bg_color[currentPermission]
      });
  }),
  chrome.browserAction.onClicked.addListener(function() {
    (currentPermission = "off" === currentPermission ? "on" : "off"),
      chrome.storage.sync.set(
        { youtube_ad_skip_trigger: currentPermission },
        function() {
          chrome.browserAction.setBadgeText({ text: currentPermission }),
            chrome.browserAction.setBadgeBackgroundColor({
              color: bg_color[currentPermission]
            });
        }
      );
  });
