chrome.windows.getAll(function(e) {
  for (var i in e)
    chrome.tabs.getAllInWindow(e[i].id, function(e) {
      for (var i in e)
        -1 !== e[i].url.indexOf("youtube.com") &&
          chrome.tabs.executeScript(e[i].id, { file: "js/myapp.js" });
    });
});
