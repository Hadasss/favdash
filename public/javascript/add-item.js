var linkPreviewAPI = "aa378d76a6d903d102eddc8befe1e011";
async function addItemHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const url = document.querySelector("#url").value.trim();
  const comment_area = document.querySelector("#comment-area").value.trim();
  const topic_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({
      name,
      url,
      comment_area,
      topic_id,
      link_preview_url,
      link_image,
      link_description,
      link_title,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}


  



// var linkPrevURL = "http://api.linkpreview.net/?key=" + linkPreviewAPI + "&q=" + url;
// fetch(linkPrevURL)
//   .then(response => { return response.json() })
//   .then(data => {

//     console.log("APi Response", data);
//     link_preview_url = data.url;
//     link_image = data.image;
//     link_title = data.title;
//     link_description = data.description;
//   })
//   .catch(error => console.log(error));


// let link_preview_url, link_image, link_description, link_title;







document.querySelector("#add-item").addEventListener("submit", addItemHandler);
