var arr = [
    { dp: "1.jpg", story: "2.jpg"},
    { dp: "3.jpg", story: "4.jpg"},
    { dp: "5.jpg", story: "6.jpg" },
    { dp: "7.jpg", story: "8.jpg" },
    { dp: "9.jpg", story: "10.jpg" }
];

var storiyan = document.querySelector('#storiyan');
var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story"> 
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    console.log("Click event detected");  // Add this line to check if the click event is being triggered
   // if (dets.target.tagName === 'IMG') {  // Check if the clicked element is an image
        console.log(`Clicked on image with id: ${dets.target.id}`);
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
        console.log(`Displaying story: ${arr[dets.target.id].story}`);

        setTimeout(function () {
            document.querySelector("#full-screen").style.display = "none";
            console.log("Hiding full-screen");
        }, 3000);
    
});
