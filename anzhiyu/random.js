var posts=["posts/dd38b8e7.html","posts/a3b6538b.html","posts/a5ea1bc6.html","posts/cbacdcf6.html","posts/7afb4546.html","posts/4d59aac2.html","posts/993a52ac.html","posts/628029b7.html","posts/5488b72c.html","posts/f8eb787a.html","posts/dc11c511.html","posts/e67617d8.html","posts/798bc959.html","posts/b690d823.html","posts/7958813b.html","posts/3a6b8e43.html","posts/e57f1c81.html","posts/d4914f6.html","posts/e332ae81.html","posts/d6838336.html","posts/9fa5b2b7.html","posts/41fb9e97.html","posts/1c2851f2.html","posts/f482cf10.html","posts/e5c537ae.html","posts/d69db4a6.html","posts/965f8c82.html","posts/fc6b5872.html","posts/bd9abc51.html","posts/98085d4a.html","posts/ec94f434.html","posts/4604448b.html","posts/bb7697f2.html","posts/3e30b192.html","posts/d226b031.html","posts/55d3b318.html","posts/22bb422d.html","posts/be26108e.html","posts/be6ef961.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };