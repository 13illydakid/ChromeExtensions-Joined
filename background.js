console.log("this is from background js");
console.log(this);

chrome.commands.onCommand.addListener(function(command) {
  if (command === "select-search") {
    // Send a message to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "select-search"}, function(response) {
        console.log(response.status);
      });
    });
  }
  if (command === "click-next-page") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "click-next-page"}, function(response) {
        console.log(response.status);
      });
    });
  }
  if (command === "click-prev-page") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "click-prev-page"}, function(response) {
        console.log(response.status);
      });
    });
  }
});
