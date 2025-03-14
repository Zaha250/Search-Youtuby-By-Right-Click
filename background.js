chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchYoutube",
        title: "Поиск Youtube for \"%s\"",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchYoutube" && info.selectionText) {
        chrome.tabs.create({ url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(info.selectionText) });
    }
});
