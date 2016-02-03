var pattern=/reportId/;
var viewtext_base_url = "http://www.cyclestreets.net/collisions/reports/";
if (pattern.test(window.document.documentURI)) // if it matches pattern defined above
{
  var url = window.document.documentURI;
  var captured = /reportId=([^&]+)/.exec(url)[1]; //get report id from url

  newurl = viewtext_base_url + encodeURIComponent(captured);
  chrome.extension.sendMessage({redirect: newurl}); // send message to redirect

}