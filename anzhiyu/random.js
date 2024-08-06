var posts=["posts/4d59aac2.html","posts/22bb422d.html","posts/bb7697f2.html","posts/9fa5b2b7.html","posts/55d3b318.html","posts/41fb9e97.html","posts/1c2851f2.html","posts/b690d823.html","posts/e57f1c81.html","posts/dd38b8e7.html","posts/dc11c511.html","posts/e332ae81.html","posts/d6838336.html","posts/4604448b.html","posts/993a52ac.html","posts/a3b6538b.html","posts/5488b72c.html","posts/be6ef961.html","posts/d4914f6.html","posts/3e30b192.html","posts/3a6b8e43.html","posts/628029b7.html","posts/be26108e.html","posts/7afb4546.html","posts/798bc959.html","posts/f482cf10.html","posts/f8eb787a.html","posts/cbacdcf6.html","posts/a5ea1bc6.html","posts/e67617d8.html","posts/d69db4a6.html","posts/7958813b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };