function fixBili() {
  document.documentElement.classList.remove("gray");
}

function fixXigua() {
  let cardArr = document.getElementsByClassName(
    "HorizontalFeedCard__coverWrapper"
  );
  for (let i = 0; i < cardArr.length; i++) {
    document
      .getElementsByClassName("HorizontalFeedCard__coverWrapper")
      [i].dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
  }

  let videoElementArr = document.querySelectorAll(".videoPreview > video");
  let videoSrcArr = [];

  for (let i = 0; i < videoElementArr.length; i++) {
    videoSrcArr.push(
      document.querySelectorAll(".videoPreview > video")[i].getAttribute("src")
    );
  }

  for (let i = 0; i < videoSrcArr.length; i++) {
    document.querySelectorAll(
      ".HorizontalFeedCard__coverWrapper > .tt-img-wrapper"
    )[i].innerHTML = `<video src='${videoSrcArr[i]}' muted></video>`;
  }

  let s = document.createElement("style");
  s.type = "text/css";
  s.innerText = `.HorizontalFeedCard .HorizontalFeedCard__coverWrapper {padding-top:0} 
                 .HorizontalFeedCard__coverWrapper > .tt-img-wrapper {width:380px;height:213px} 
                 .large-recommend-video-cover .HorizontalFeedCard.projection_recommentItem .HorizontalFeedCard__coverWrapper{width:184px;height:103px} `;
  document.head.appendChild(s);
}

window.onload = function () {
  if (location.origin == "https://www.bilibili.com") {
    fixBili();
  }
  if (location.origin == "https://www.ixigua.com") {
    setTimeout(() => {
      fixXigua();
    }, 3000);
  }
};
