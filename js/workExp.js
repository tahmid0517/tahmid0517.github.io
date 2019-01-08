var imageIDs = ["roboDevilsLogo","tdsbLogo","botCampLogo"];
var headers = ["FRC Team 5036: The Robo Devils", "Robotics Instructor at a TDSB Summer School"
                , "Robotics Instructor at Bot Camp"];
var timelines = ["2014 - 2018","July 2017","July 2018"];

var roboDevilsText = 'While not technically a "job", being on the FIRST Robotics Competition team at my '
                   + 'school gave me many experiences similar to having a real-world engineering job. '
                   + "<br><br><b><i>Programming Experience:</i></b> From grades 10 to 12, I was the team's sole programmer, " 
                   + "coding each year's robot in Java. Each year's code base contained over 1000 lines of "
                   + "code and used concepts of object-oriented programming. I've also worked with a variety " 
                   + "of speed controllers and sensors and programmed PID controllers to be able to control "
                   + "the robot accurately during both the competition's autonomous and teleoperated phases. "
                   + "In 2018, the code I wrote and my explanation to the judges earned the team the <i>Innovation "
                   + "in Control Award</i> at one of our competitions. In order to prepare the team for my departure, "
                   + "I had to train new programmers in my final year who I continue to teach and help. "
                   + "<br><br><b><i>Mechanical and CAD Experience:</i></b> From grades 10 to 12, I was also the lead CAD "
                   + "designer for the team. This role involved taking the concept of a robot that the team agreed on and "
                   + "using the results of prototyping and past designs of mechanisms to come up with the detailed "
                   + "design of the robot in Autodesk Inventor. This role improved my ability to pay attention to detail "
                   + "and my willingness to scrap a design or start over even if I had spent hours working on it. "
                   + "Since I was the one to do the majority of the CAD of the robots, I also played a major role in "
                   + "making sure the construction of the robot was done correctly. The physical act of building the "
                   + "robot also improved my ability to pay attention to detail as well as taught me how to use various "
                   + "construction tools such as band saws, mitre saws, drill presses and other tools in the shop. "
                   + "<br><br><b><i>Teamwork and Leadership:</i></b> In grade 10, I began to take a leadership role over "
                   + "certain aspects of the team and in grades 11 and 12, I was the team's overall captain. Being a leader "
                   + "of a robotics team involved various non-technical responsibilities such as maintaining a "
                   + "respectful and fun atmosphere in the face of high-pressure situations, weighing in different "
                   + "people's opinions in an objective and fair manner and making sure new students transitioned "
                   + "well into becoming effective members of the team. One person can't build a successful robot. "
                   + "My role also involved collaborating and communicating with the members working on the "
                   + "electrical, construction, pneumatics and media aspects of the team, which were overseend " 
                   + "by other members of the team."
                   + "<br><br><b><i>Business and Marketing:</i></b> From grades 9 to 12, I lead much of the fundraising "
                   + "activities on the team. With the help of other students, we gained sponsorships from local "
                   + "businesses in Scarborough as well as large corporations in Microsoft Canada and TD Bank. "
                   + "We also raised money within our local community and in the school. In addition to fundraising, we also "
                   + "took part in a few outreach events where we demoed our robot to people in and outside our school. "
                   + "<br><br><b><i>Achievements:</i></b> In grades 11 and 12, the years I captained the team, we managed to " 
                   + "qualify for the World Championships by being one of the highest ranked teams in the province. When I"
                   + "graduated, I was given the Principal's Award for Student Leadership for my work with the robotics team.";


var tdsbText = 'During July 2017, I had the pleasure of introducing students in grades 1 to 5 to the world of STEM through '
             + 'robotics';

var botCampText = 'During July 2018, I got to be an instructor at one of the coolest summer camps in Toronto.';

var infoTexts = [roboDevilsText,tdsbText,botCampText];

function selectImage(id)
{
    for(var i = 0;i < 3;i++)
    {
        document.getElementById(imageIDs[i]).setAttribute("style","border:none");
    }
    document.getElementById(imageIDs[id]).setAttribute("style","border:10px solid red");
    document.getElementById("infoHeader").innerHTML = headers[id];
    document.getElementById("timeline").innerHTML = timelines[id];
    document.getElementById("infoText").innerHTML = infoTexts[id];
}
