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