// var getSelectedTab = (tab) => {
//   var tabId = tab.id;
//   var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
//   document.getElementById('language').addEventListener('click', () => sendMessage({ action: 'SWITCH_LANGUAGE' }));
// }
// chrome.tabs.getSelected(null, getSelectedTab);