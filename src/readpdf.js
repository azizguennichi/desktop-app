const { default: WebViewer } = require("@pdftron/webviewer");

let data = localStorage.getItem("data");
data = JSON.parse(data);

const viewerElem = document.querySelector(".webviewer");
const openFile = document.querySelector("#openFile");

new WebViewer(
  {
    path: "../public/",
    initialDoc: data.path,
  },
  viewerElem
).then(() => {
  openFile.onclick = () => {
    window.location.replace("index.html");
  };
});
