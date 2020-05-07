function successFunc(data) {
    console.log(data);
    for(var i = 0; i<data.length;i++){
        
        if(data[i]["isTutoring"] === "TRUE"){
            var b = document.createElement("button");
            b.innerText = data[i]["Subject"].split().join("&nbsp");
            b.setAttribute("onclick", `location.href='${data[i]["Zoom Link"]}'`);
            b.setAttribute("type", "button");
            document.querySelectorAll("div")[0].appendChild(b);
        }
    }
  }
  console.log("HIHIHIHHIIMDAVID")
  Sheetsu.read("https://sheetsu.com/apis/v1.0su/ea46ac1c53de", {}, successFunc);