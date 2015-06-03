

var bio = {
	"name" : "Ontima Chung",
	"role" : "Web Developer",
	"contacts" : {
		"email": "ontima@gmail.com",
		"mobile": "646-872-4905",
		"github" : "ontima",
		"location" : "New York"
	},
	"welcomeMsg" : "Hello",
	"picture" : "http://lorempixel.com/400/200/",
	"skills" : ["Programming", "Software Integration", "Project Management"],
	display : function () {
		//Format and display name & role
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedMsg);


		//Format and display contacts
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);


		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
			}
		}
	}
};


var work = {
	"jobs": [
		{
			"employer": "Morgan Stanley Adisory Production Management Team",
			"title": "Integration Engineer",
			"dates": "2/2010 - 12/2014",
			"description": "Implemented third party products integration.",
			"location": "New York"
		},
		{
			"employer": "Morgan Stanley Research Techology Team",
			"title": "Project Manager",
			"dates": "5/2008 - 2/2010",
			"description": "Coordinated product deployments.  Designed and built tools to manage business risk and automate tasks.",
			"location": "New York"
		},
		{
			"employer": "Morgan Stanley Listed Derivatives Technology Team",
			"title": "Developer",
			"dates": "12/2001 - 5/2008",
			"description": "Designed and implemented multiple applications used for derivatives trading and processing.  Technologies used included Java, JSP, Perl.",
			"location": "New York"
		}
	],
	display : function () {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
		{
			"title": "Listed Derviatives Reconciliation System",
			"dates": "12/2001 - 5/2008",
			"description": "Desgined and built exchange and client reconciliation systems to eliminated manual reconciliation processes while improved operational workflow and reduced risk.",
			"images" : ["http://lorempixel.com/400/200/"]
		},
		{
			"title": "Research Systems Integration",
			"dates": "2/2010 - 12/2014",
			"description": "Integrated numerous third party products into Morgan Stanley systems, including IBM SPSS, Tableau, Tibco Spotfire.",
			"images" : ["http://lorempixel.com/400/200/"]
		}
	],
	display : function() {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

		}
	}
}


var education = {
	"schools": [
		{
			"name": "Stanford University",
			"location": "Stanford, CA",
			"degree": "M.S.",
			"major": "Management Science and Engineering",
			"dates": 2001
		},
		{
			"name": "Stanford University",
			"location": "Stanford, CA",
			"degree": "B.S.",
			"major": "Computer Science",
			"dates": 2000
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	display : function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

		}
		$("#education").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);

