var imageAddresses = ["tahmid","turtle","outreach","botcampHeadshot","dementor"];
var imageTitles = ["Tahmid","2017 FRC Robot","Tahmid at an outreach event with school's robotics team",
                    "Headshot for Bot Camp","2018 FRC Robot"];
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

window.setInterval(switchImage,2100);
