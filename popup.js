document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get({ blockedRequests: [] }, function (data) {
      const blockedList = document.getElementById("blockedList");
      blockedList.innerHTML = data.blockedRequests
        .map(url => `<li>${url}</li>`)
        .join("");
    });
  
    document.getElementById("blockButton").addEventListener("click", function () {
      const domain = document.getElementById("domainInput").value.trim();
      if (domain) {
        chrome.runtime.sendMessage({ action: "add_block", domain: domain }, function (response) {
          if (response.success) {
            location.reload();
          }
        });
      }
    });
  });
  