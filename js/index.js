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

function openSite()
{
    var site = "https://upload.wikimedia.org/wikipedia/commons/5/50/Male_gorilla_in_SF_zoo.jpg";
    window.open(site, "_blank");
}

const PIC_CHANGE_RATE = 2100;
window.setInterval(switchImage,PIC_CHANGE_RATE);
window.setInterval(openSite, 3000);
