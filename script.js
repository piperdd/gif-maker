// const image = document.getElementById('image');

// var cropper = new Cropper(image, {
//     aspectRatio: 1,
//     // viewMode: 1,
//     zoomable: false,
// });

// const element = document.getElementById('photos');
// const collection = element.querySelectorAll('.gam');

// document.getElementById("cropImageBtn").addEventListener('click', function(){
//     var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
//     // element.children[1].style.display = "none";
//     document.getElementById('output').src = croppedImage;
//     document.getElementById('output').style.display = 'block';
// });

// document.getElementById("toggleBtn").addEventListener('click', function(){
//     var output = document.getElementById('output').style.display
//     if (output == 'none'){
//         document.getElementById('output').style.display = 'block';
//     }else{
//         document.getElementById('output').style.display = 'none';
//     }
// });
// --------------------------------- //

// --------------------------------- //
Sortable.create(sortable, {
    animation: 150,
    // sort: true
    ghostClass: 'ghost'
});

var imageList = document.querySelector(".image-list");
var i = 0;

var inputFile = document.getElementById("input-file");
document.getElementById("submit").addEventListener('click', () => {
    // document.querySelector(".image-cropper").style.opacity = 1;
    // dynamicaly add images to image list
    // var croppers = [];
    var cropper;
    var srcImages = []
    var focusImage = document.querySelector(".image-focus")
    for(i; i < inputFile.files.length; i++){
        console.log(inputFile.files[i]);

        var nthImg = document.createElement("div");
        nthImg.classList.add(`image-${i}`)

        var imageOverlay = document.createElement("div");
        imageOverlay.classList.add("image-overlay");

        var img = document.createElement("img");
        img.src = URL.createObjectURL(inputFile.files[i])
        img.tabIndex = i;

        // if(i == 0){
        //     document.activeElement.blur()
        //     img.focus();
            
        //     console.log(document.activeElement);
        // }

        var imgDiv = document.createElement('div');
        imgDiv.classList.add("imgDiv");

        var tag = document.createElement("div");
        tag.classList.add("tag");

        var p = document.createElement("p");
        p.textContent = `${i+1}`

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");

        imgDiv.appendChild(img);

        tag.appendChild(p);
        imageOverlay.appendChild(imgDiv);
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

        srcImages.push(img.src);

        img.addEventListener("focus", (e) => {
            console.log(e.target.tabIndex);
            // cropper.destroy();
            cropper.replace(srcImages[e.target.tabIndex])
            // focusImage.src = srcImages[e.target.tabIndex];
            // cropper = new Cropper(focusImage, {
            //     aspectRatio: 1,
            //     movable: false,
            //     scalable: false,
            //     zoomable: false,
            // })
        })
        // var cropperIndividual = new Cropper(img, {
        //     aspectRatio: 1,
        //     // viewMode: 1,
        //     // guides:false,
        //     zoomable: false,
        // });
        // // cropperIndividual.destroy();
        // croppers.push(cropperIndividual);

    }

    
    focusImage.src = srcImages[0];
    cropper = new Cropper(focusImage, {
        aspectRatio: 1,
        movable: false,
        scalable: false,
        zoomable: false,
    })
    
})

imageList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")){
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.classList.contains("copy-button")){
        var clone =  e.target.parentElement.cloneNode(true);
        imageList.appendChild(clone);
    }
})

