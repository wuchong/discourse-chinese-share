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
      var $this = $('.share');
      var html = [
        '<a href="#" class="overlay" id="qrcode"></a>',
        '<div class="qrcode clearfix"><span>扫描二维码分享到微信朋友圈</span><a class="qrclose" href="#nothing"></a><strong>Loading...Please wait</strong><img id="qrcode-pic" data-src="http://s.jiathis.com/qrcode.php?url=' + encodedUrl + '"/></div>'
        ].join('');
      $this.append(html);
      $('.article-share-qrcode').click(function(){
        var imgSrc = $('#qrcode-pic').attr('data-src');
        $('#qrcode-pic').attr('src', imgSrc);
        $('#qrcode-pic').load(function(){
            $('.qrcode strong').text(' ');
        });
        },
      },
      shouldOpenInPopup: false
  });


  Discourse.ShareLink.addTarget('renren', {
    iconClass: 'fa-renren',
    generateUrl: function(link, title) {
      return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

})();


