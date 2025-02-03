chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2], // Remove old rules (if needed)
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "*://*.google.com/*",
          "resourceTypes": ["main_frame", "sub_frame", "script", "xmlhttprequest"]
        }
      },
      {
        "id": 2,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "*://*.india.com/*",
          "resourceTypes": ["main_frame", "sub_frame", "script", "xmlhttprequest"]
        }
      }
    ]
  });
  