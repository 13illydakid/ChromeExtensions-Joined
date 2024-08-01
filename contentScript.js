chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // console.log(message);
  // console.log(sender);
  // console.log(sendResponse);
  if (message.command === "select-search") {
    const searchInput = document.querySelector("input[type='search'], input[type='text']");
    if (searchInput) {
      searchInput.focus();
      sendResponse({status: "success"});
    } else {
      sendResponse({status: "search input not found"});
    }
  }
  if (message.command === "click-next-page") {
    const searchContainer = document.querySelector('[class*="pagination"], [id*="pagination"]');
    const lastPage = searchContainer.querySelector("ul li:last-child a");
    if (lastPage) {
      lastPage.click();
      console.log(lastPage);
      sendResponse({status: "success"});
    } else {
      console.log("Pagination element not found.");
      sendResponse({status: "last page element in pagination not found"})
    }
  }
  if (message.command === "click-prev-page") {
    const searchContainer = document.querySelector('[class*="pagination"], [id*="pagination"]');
    const prevPage = searchContainer.querySelector("ul li:first-child a");
    if (prevPage) {
      prevPage.click();
      console.log(prevPage);
      sendResponse({status: "success"});
    } else {
      console.log("Pagination element not found.");
      sendResponse({status: "previous page element in pagination not found"})
    }
  }
  // keeps the message channel open for the response
  return true;
});
