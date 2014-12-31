(function() {
  Discourse.ShareLink.addTarget('weibo', {
    iconClass: 'fa-weibo',
    generateUrl: function(link, title) {
      return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=码农圈 - " + encodeURIComponent(title)) + "&searchPic=true&style=number";
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


  Discourse.ShareLink.addTarget('renren', {
    iconClass: 'fa-renren',
    generateUrl: function(link, title) {
      return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=码农圈 - " + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

})();


