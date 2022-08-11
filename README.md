# 22-Final-project
 
 
2nd Year 2nd Semester BSc. (Hons) Final Examination 2020
Institute of Information Technology
       Jahangirnagar University 
         Savar, Dhaka-1342
ICT 2200: Course Viva
Group: 16


## Student Management System Using Node JS


Submitted To:
Md. Fazlul Karim Patwary
Professor
 Institute of Information Technology 
Jahangirnagar University
 


## DECLARATION

This project report is submitted to the Institute of Information Technology, Jahangirnagar University, Savar, Dhaka in partial fulfillment of the requirements for having the B.Sc (Hons.) degree in ICT. This is also needed to certify that the project work is under the 1st Year 1nd Semester course of the IIT “ICT-2200: Course Viva”. So, we are here declaring that this project report has not been submitted elsewhere for the requirement of any kind of degree, diploma or publication.



Md. Shakil Hossain (192340)               Mahabubur Rahman (192341)                     Nahidul Islam (192345)
                                                              

	                              






 
## ACCEPTANCE
                                  
This project report is submitted to the Institute of Information Technology, Jahangirnagar University, Savar, Dhaka in partial fulfilment of the requirements for having the B.Sc. (Hons.) degree in ICT.   






Md. Fazlul Karim Patwary
Professor
Institute of Information Technology
Jahangirnagar University
Savar, Dhaka-1342, Bangladesh





 
## ACKNOWLEDGEMENTS

First of all we would like to thank the Almighty for giving us the opportunity to complete this work successfully. Our acknowledgement is meant to express our sincere gratitude to all those people who have been associated with this project and have helped us with it and by sharing their experiences and valuable opinions through which we received the required information crucial for our project. We are thankful to our parents for their relentless support. Most importantly we are grateful to our honourable supervisor who took time out to guide us and provide us with all the necessary materials and sufficient knowledge that was the major requirement.
Finally, we convey our regards to our honourable teacher Professor Md. Fazlul Karim Patwary.
 Sir for giving us the opportunity to learn the subject particularly practically.


 
## ABSTRACT

Student Information Management System (SIMS) provides a simple interface for the maintenance of student information. It can be used by educational institutes or colleges to maintain the records of students easily. The creation and management of accurate, up-to-date information regarding a students’ academic career are critically important in the university as well as colleges. Student information system deals with all kinds of student details, academic-related reports, college details, course details, curriculum, batch details, placement details, and other resource-related details too. It tracks all the details of a student from day one to the end of the course which can be used for all reporting purposes, tracking of attendance, progress in the course, completed semesters, years, coming semester year curriculum details, exam details, project or any other assignment details, final exam result and all these will be available through a secure, online interface embedded in the college’s website. It will also have faculty details, batch execution details, students’ details in all aspects, the various academic notifications to the staff and students updated by the college administration. It also facilitates us to explore all the activities happening in the college, Different reports and Queries can be generated based on vast options related to students, batch, course, faculty, exams, semesters, certification, and even for the entire college.


 

## CONTENTS

### INTRODUCTION	7
1.1 What is Node js :	7

1.2   System Requirement:	8

1.3 Technology overview:	9

1.4 Objectives:	11

### METHODOLOGY	12
2.1 Project Description	12

2.2   Entity Relation Model:	13

2.3   System Hierarchy:	14

2.4    Snapshot :	15

2.5   Future Planning :	18

### CONCLUSION	19
3.1  Conclusion:	19

REFERENCES	20


 
## Chapter 1

### INTRODUCTION

 #### 1.1 What is Node JS?:
 
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. 
Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[1]

 
#### 1.2   System Requirement:

Technologies Used:

	Front End (Designing): 

•	HTML
•	CSS
•	Handlebar

	Client side scripting:

•	JavaScript 
•	jQuery 
•	Bootstrap

	Back End: 

•	Runtime – Node JS
•	Database – MySQL

Software Requirements:

	Operating system  : Windows 7/8/10/11
	Node 17.8.0
	APACHE HTTP Server

Hardware Requirements:

	 Intel Core i3 processor or higher
	 512 MB Ram or Higher
	 20 GB HDD or Higher
	 Network Connectivity
 
#### 1.3 Technology Overview:

HTML

HTML is a hypertext markup language that is in reality a backbone of any website. Every website can’t be structured without the knowledge of HTML. If we make our web page only with the help of HTML, then we can’t add many of the effective features in a web page, for making a web page more effective we use various platforms such as CSS. So here we are using this language to make our web pages more effective as well as efficient. And to make our web pages dynamic we are using Javascript.[2]

CSS

CSS Stands for "Cascading Style Sheet." Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML. The basic purpose of CSS is to separate the content of a web document (written in any markup language) from its presentation (that is written using Cascading Style Sheets). There are lots of benefits that one can extract through CSS like improved content accessibility, better flexibility moreover, CSS gives a level of control over various presentation characteristics of the document. It also helps in reducing the complexity and helps in saving overall presentation time. CSS gives the option of selecting various style schemes and rules according to the requirements and it also allows the same HTML document to be presented in more than one varying style.[3]

JAVA SCRIPT

JavaScript is considered to be one of the most famous scripting languages of all time. JavaScript, by definition, is a Scripting Language of the World Wide Web. The main usage of JavaScript is to add various Web functionalities, Webform validations, browser detections, creation of cookies, and so on. JavaScript is one of the most popular scripting languages and that is why it is supported by almost all web browsers available today like Firefox, We used the browser Opera or Internet Explorer. JavaScript is considered to be one of the most powerful scripting languages in use today. It is often used for the development of client-side web development. JavaScript is used to make web pages more interactive and dynamic. JavaScript is a lightweight programming language and it is embedded directly into the HTML code. JavaScript, as the name suggests, was influenced by many languages, especially Java.[4]



HANDLEBARS

Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions. A handlebars expression is a {{, some contents, followed by a }}. When the template is executed, these expressions are replaced with values from an input object.[5]

SQL

SQL stands for Structured Query Language. SQL lets us access and manipulate databases. SQL is an ANSI (American National Standards Institute) standard. SQL can execute queries against a database, retrieve data from a database, insert records in a database, update records in a database, delete records from a database, create new databases, create new tables in a database, create stored procedures in a database, create views in a database, set permissions on tables, procedures, and views.[6]
 
#### 1.4   Objectives:

♦	Add Student Records

♦	Maintenance of student records

♦	Searching student records

♦	Delete Student Records

♦	Update Student Records

♦	View Student Records
 
## Chapter 2

### METHODOLOGY

#### 2.1 Project Description 

Schools and Universities are the foundation of knowledge and an educational body on which students rely upon. Therefore, they need to maintain a proper database of its students to keep all the updated records and easily share information with students. Most schools and Universities count on an advanced software tool knows as 'Student Information System (SIS)' to keep all their student records and administrative operations including, examinations, attendance, and other activities. Over the recent years, the performance and efficiency of the education industry have been enhanced by using the Student Management System. This tool has productively taken over the workload of the admin department with its well-organized, easy, and reliable online school management software.
Student Information Management System can be used by education institutes to maintain the records of students easily. Achieving this objective is difficult using a manual system as the information is scattered, can be redundant and collection relevant information may be very time consuming. All these problems are solved using this project.

Features:

The Website provides following functionalities to the users:
Administrator:
 Login/Logout
 View student information
 Edit Student Information
 Enable/disable student accounts
 Search students

 
#### 2.2   Entity Relation Model:



	

			








                                                                             


Figure:  Entity Relation Model in Student Management System.

 
#### 2.3   System Hierarchy:












Figure:  System Hierarchy in Student Management System.
 
2.4    Snapshot:

 
Figure:  Login page.


 
Figure:  Login page.





 
Figure:  Home page.


 
Figure:  Add New Student page.




 
Figure:  All Results page.


 
Figure:  Single Student All Semester Result.

 
#### 2.5   Future Planning: 

The Student Information Management System (SIMS) can be enhanced to

♦	Include some other functionality like marks, attendance management.

♦	Talent management of students based on their performance evaluation can be added.

♦	Social networking can also be added wherein students can interact with each other.

♦	Online Tracker functionality can be added.

♦	Can evolve as an online institution.

♦	Functionality of chat and messages can be added.

♦	Online Character functionality can be added.

♦	Online resume builder functionality can also be added.


 
## Chapter 3

### CONCLUSION

#### 3.1  Conclusion:

The Student Management System for Reed Music Studio is a web application which is capable of storing and maintaining different types of user accounts, keeping track of the inventories and orders database, managing the teaching and learning schedules as well as the payments made by students. It also allows studio’s managers to generate reports about all the information related to inventories and orders database. 

The system was designed to capture all vital information needed to improve the management of workflow inside the studio. The system helps the managers reduce most of the manual steps and organize data more efficiently. Many of the data entry tasks are automated and save a significant amount of time for users. It also provides a consistent interface to the application data that is enforced by referential integrity constraints specified in the database. 

In conclusion, the Student Management System for Reed Music Studio promises to be a fast, easy, cost efficient and effective tool to address most of the studio’s issues as well as being a really good alternative to replace the current manual workflow in the studio.
 
### REFERENCES

[1]"NodeJS About | Node.js", Node.js, 2022. [Online]. Available: https://nodejs.org/en/about/. [Accessed: 25- Mar- 2022].

[2]"Home", Html.com, 2022. [Online]. Available: https://html.com/. [Accessed: 25- Mar 2022].

[3]"CSS", W3schools.com, 2022. [Online]. Available: https://www.w3schools.com/css/css_intro.asp. [Accessed: 25- Mar- 2022].

[4]"JavaScript", Javascript.com, 2022. [Online]. Available: https://www.javascript.com/. [Accessed: 22- Mar- 2022].

[5]"Handlebars", Handlebarsjs.com, 2022. [Online]. Available: https://handlebarsjs.com/. [Accessed: 23- Mar- 2022].

[6]"SQL", En.wikipedia.org, 2022. [Online]. Available: https://en.wikipedia.org/wiki/SQL. [Accessed: 24- Mar- 2022].


