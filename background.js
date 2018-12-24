// console.log('yeahh')

// chrome.browserAction.onClicked.addListener(buttonClicked)

//     function buttonClicked(){
//         console.log('leech');
//     }
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://monash-panopto.aarnet.edu.au/Panopto/Pages/Home.aspx";
    chrome.tabs.create({ url: newURL });
});