var imageAddresses = ["tahmid","turtle","dementor"];
var imageTitles = ["Tahmid","2017 FRC Robot",
                    "2018 FRC Robot"];
var currentImageID = 0;

function switchImage()
{
    if(currentImageID == imageAddresses.length - 1)
        currentImageID = 0;
    else
        currentImageID++;
    var imageAddress = "./pictures/" + imageAddresses[currentImageID] + ".jpg";
    var imageTitle = imageTitles[currentImageID];
    var imageElement = document.getElementById("changingImage");
    imageElement.setAttribute("src",imageAddress);
    imageElement.setAttribute("title",imageTitle);
}

const PIC_CHANGE_RATE = 2100;
