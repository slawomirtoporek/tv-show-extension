chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Text Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.tabs.create({
      url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });
});

console.log("background script running");
