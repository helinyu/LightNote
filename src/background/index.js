chrome.action.onClicked.addListener((tab) => {
  console.log("llt onClicked ---- tag", tab);
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
  }
});

// trigger when active tab switches
chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log("llt onActivated ---- tag", activeInfo);
  if (activeInfo?.tabId) {
    chrome.tabs.sendMessage(activeInfo?.tabId, { updateStorage: true });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      type: "normal",
      title: "添加到LightNote (Ctrl+S)",
      id: "light-note",
      contexts: ["all"],
    },
    function () {
      console.log("contextMenus are create.");
    }
  );
});


chrome.contextMenus.onClicked.addListener(info => {
  chrome.tabs.create({
    url:'https://github.com/helinyu/LightNote/issues?q=' + encodeURI(info.selectionText)
  })
})

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});
