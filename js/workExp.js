var imageIDs = ["roboDevilsLogo","tdsbLogo","botCampLogo"];

var roboDevilsText = '<h1>FRC Team 5036: The Robo Devils (2014 - 2018)</h1>'
                   + '<p>While not technically a "work" experience, being on the FIRST Robotics <br> Competition team at my'
                   + ' school simulated many aspects of a real-world engineering job.';

var tdsbText = '<h1>Robotics Instructor at a TDSB Summer School (July 2017)</h1>'
             + '<p></p>';

var botCampText = '<h1>Robotics Instructor at Bot Camp (July 2018)</h1>'
                + '<p></p>'

var infoTexts = [roboDevilsText,tdsbText,botCampText];

function selectImage(id)
{
    for(var i = 0;i < 3;i++)
    {
        document.getElementById(imageIDs[i]).setAttribute("style","border:none");
    }
    document.getElementById(imageIDs[id]).setAttribute("style","border:10px solid red");
    document.getElementById("info").innerHTML = infoTexts[id];
}
