const image = document.getElementById('image');

var cropper = new Cropper(image, {
    aspectRatio: 1,
    // viewMode: 1,
    zoomable: false,
});

const element = document.getElementById('photos');
// const collection = element.querySelectorAll('.gam');

document.getElementById("cropImageBtn").addEventListener('click', function(){
    var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
    // element.children[1].style.display = "none";
    document.getElementById('output').src = croppedImage;
    document.getElementById('output').style.display = 'block';
});

document.getElementById("toggleBtn").addEventListener('click', function(){
    var output = document.getElementById('output').style.display
    if (output == 'none'){
        document.getElementById('output').style.display = 'block';
    }else{
        document.getElementById('output').style.display = 'none';
    }
});

Sortable.create(sortable, {
    animation: 150,
    // sort: true
    ghostClass: 'ghost'
});

var inputFile = document.getElementById("input-file");
document.getElementById("submit").addEventListener('click', () => {
     var imageList = document.querySelector(".image-list");
    // dynamicaly add images to image list
    for(let i = 0; i < inputFile.files.length; i++){
        console.log(inputFile.files[i]);

        var nthImg = document.createElement("div");
        nthImg.classList.add(`image-${i}`)

        var imageOverlay = document.createElement("div");
        imageOverlay.classList.add("image-overlay");

        var img = document.createElement("img");
        img.src = URL.createObjectURL(inputFile.files[i])
        img.tabIndex = i;

        var tag = document.createElement("div");
        tag.classList.add("tag");

        var p = document.createElement("p");
        p.textContent = `${i+1}`

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "X";

        tag.appendChild(p);
        imageOverlay.appendChild(img);
        imageOverlay.appendChild(tag);
        imageOverlay.appendChild(deleteButton);

        var copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.textContent = "copy";

        var disableButton = document.createElement("button");
        disableButton.classList.add("disable-button");
        disableButton.textContent = "disable";

        nthImg.appendChild(imageOverlay)
        nthImg.appendChild(copyButton);
        nthImg.appendChild(disableButton);
        imageList.appendChild(nthImg);
    }
})


