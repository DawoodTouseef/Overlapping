function bringtofront(image){
    const images=document.querySelectorAll(".image");
    images.forEach(img => {
        img.style.zindex=1;
        img.style.transform='scale(1)';
    });
    image.style.zindex=2;
    image.style.transform='scale(1.1)';
}
