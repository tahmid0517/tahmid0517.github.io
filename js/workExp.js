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
                   + "electrical, construction, pneumatics and media aspects of the team, which were overseen " 
                   + "by other members of the team."
                   + "<br><br><b><i>Business and Marketing:</i></b> From grades 9 to 12, I lead much of the fundraising "
                   + "activities on the team. With the help of other students, we gained sponsorships from local "
                   + "businesses in Scarborough as well as large corporations in Microsoft Canada and TD Bank. "
                   + "We also raised money within our local community and in the school. In addition to fundraising, we also "
                   + "took part in a few outreach events where we demoed our robot to people in and outside our school. "
                   + "<br><br><b><i>Achievements:</i></b> In grades 11 and 12, the years I captained the team, we managed to " 
                   + "qualify for the World Championships by being one of the highest ranked teams in the province. When I"
                   + "graduated, I was given the Principal's Award for Student Leadership for my work with the robotics team.";
                   
var tdsbText = "During July 2017, I worked at Gateway Public School's summer school programme, introducing children in grades 1 " 
             + "to 5 by teaching them how to program robots using tablets. I gained and improved upon a number of skills from "  
             + "the experience.<br><br>"
             + "<b><i>Collaboration and Creativity:</i></b> I was hired with 2 other students my age and we had to work "
             + "together to come up with our lessons plans, including challenges for the students to complete. We also had "
             + "to work with the teachers to make sure the lessons were suitable for the age group and also sometimes tie in "
             + "the lesson with concepts the students were learning in math or science class.<br><br>"
             + "<b><i>Teaching:</i></b> Teaching basic programming concepts to children was a good learning experience and "
             + "improved my ability to explain concepts in a clear and concise way.<br><br>"
             + "<b><i>Organization and Management:</i></b> Organizing our own lesson plans was a part of the job as well as "
             + "keeping track of the different students and their progress.<br><br>"
             + "Overall, this was a pretty fun job and I learned a lot, with this being my first official paid position.";

var botCampText = "During July 2018, I got to be a robotics instructor at one of the coolest summer camps in Toronto. My job "
                + "involved teaching students aged 9 to 14 how to design, build and program their own robots using the VEX IQ "
                + "kit in order to have a competition amongst each other at the end of the week. There were a few skills I "
                + "improved upon at this job.<br><br>"
                + "<b><i>Time Management:</i></b> This was my first official job that I worked for 40 hours a week. Having to "
                + "be on time at a specific spot each day and having to bus a long time to get there improved my time "
                + "management ability. I also had to make sure that the children I was in charge of were making timely progress "
                + "throughout the week.<br><br>"
                + "<b><i>Communication:</i></b> I had to report on my students' progress to my supervisor each day as well as "
                + "communicate with the other staff to organize responsibilities such as yard duty.<br><br>"
                + "<b><i>Teaching:</i></b> This was a different sort of teaching experience than my previous job, where I was "
                + "playing more of a mentor role alongside the students. In this role, I had to learn to teach students new "
                + "concepts without doing too much and preventing the students from learning important lessons on their own."
                + "<br><br>This job was a lot more fun than I expected and I learned quite a bit from it.";

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
