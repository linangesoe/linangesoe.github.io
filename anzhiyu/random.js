var posts=["2023/12/24/hello-world/","2023/12/24/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };