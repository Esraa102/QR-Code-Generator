let input = document.querySelector("input.input-box");
let generateBtn = document.querySelector("button.btn");
let QRDiv = document.querySelector("div.QR-code");
let generateLink ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" ;

generateBtn.onclick = () => {
    QRDiv.classList.remove("show");
    if(input.value !== "") {
        QRDiv.innerHTML = "";
        let img = document.createElement("img");
        img.src = generateLink + input.value;
        QRDiv.appendChild(img);
        let caption = document.createElement("p");
        caption.innerHTML = `[ ${input.value} ]`;
        QRDiv.appendChild(caption);
        setTimeout(() => {
            QRDiv.classList.add("show");
        },1000)
        input.value = "";
    }else  {
        input.classList.add("error");
        setTimeout(() => {
        input.classList.remove("error");
    },1000)
    }
}
