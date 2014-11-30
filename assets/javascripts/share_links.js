(function() {
  Discourse.ShareLink.addTarget('weibo', {
    iconClass: 'fa-weibo',
    generateUrl: function(link, title) {
      return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 370
  });

  Discourse.ShareLink.addTarget('wechat', {
    iconClass: 'fa-wechat jiathis_button_weixin',
    generateUrl: function(link) {
    },
    shouldOpenInPopup: false
  });

  document.write('<' + 'script language="javascript" type="text/javascript" charset="utf-8"');
  document.write(' src="http://v3.jiathis.com/code/jia.js?uid=1">');
  document.write('<'+'/script'+'>');

  Discourse.ShareLink.addTarget('renren', {
    iconClass: 'fa-renren',
    generateUrl: function(link, title) {
      return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

})();


