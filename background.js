chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Text Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.search.query({
      disposition: "NEW_TAB",
      text: `imdb ${event.selectionText}`,
    });
  });
});

console.log("background script running");
