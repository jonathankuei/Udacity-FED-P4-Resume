var bio = {
	"name": "Jonathan Kuei Chao",
	"role": "Digital Creative",
	"welcomeMessage": "Hi! My Name is Jon and I'm a Digital Creative based in New York City.",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "jonathankuei@gmail.com",
		"github": "jonathankuei",
		"location": "New York, NY"
	},
	"skills": ["Front-End Development", "Graphic Design", "Digital Marketing"],
	"biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASFAAAAJGI3NWMwZjdlLWQzY2MtNDNjOS05MzgwLTk2ZDViMmZjYzdjZg.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "Tidal New York",
			"title": "E-Commerce Manager",
			"location": "New Rochelle, NY",
			"dates": "October 2015 - Present",
			"description": "Develop an e-commerce platform and lead digital roadmap for an upstart footwear company carried at retailers ranging from high end department stores like Bloomingdale's to specialty boutiques, such as VFILES and The Whitney Museum."
		},
		{
			"employer": "The Foundation Showroom",
			"title": "Freelance Social Media Coordinator",
			"location": "New York, NY",
			"dates": "August 2015 - March 2016",
			"description": "Built a comprehensive social media plan for an industry leading showroom representing emerging and established brands, including Diadora, Under Armour, Spiewak, and Marshall Headphones."
		},
		{
			"employer": "Tanya Taylor",
			"title": "Freelance Graphic Designer",
			"location": "New York, NY",
			"dates": "November 2014 - November 2015",
			"description": "Created graphic assets for launch of new website and e-commerce platform, which was nominated for W Magazine and Decoded Fashion's New e-Store on the Block award."
		},
		{
			"employer": "The Denesh Group",
			"title": "Creative Coordinator",
			"location": "New York, NY",
			"dates": "January 2014 - July 2015",
			"description": "Conducted trend research, created line plans, devised branding, and guided the design team to create new product lines for Billionaire Boys Club, Trapstar London, Tidal New York, 3•W•Y, and private labels for several North American boutiques."
		},
		{
			"employer": "Parke and Ronen",
			"title": "Digital Marketing Associate",
			"location": "New York, NY",
			"dates": "December 2014 - December 2015",
			"description": "Developed and implemented a comprehensive SEM strategy resulting in over 40% increase in the online boutique’s monthly revenue."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "A Ma Maniére",
			"dates": "June 2015",
			"description": "Developed branding for a high-end menswear boutique.",
			"images": ["http://media.gq.com/photos/5639213c233169ad6f35d3da/master/w_800/STORE_LUX_5L2A7981.jpg"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Benjamin N. Cardozo School of Law",
			"location": "New York, NY",
			"degree": "JD",
			"majors": ["Law"],
			"dates": "2010-2013",
			"url": "www.yu.cardozo.edu"
		},
		{
			"name": "Northwestern University",
			"location": "Evanston, IL",
			"degree": "BA",
			"majors": ["Political Science"],
			"dates": "2006-2009",
			"url": "www.northwestern.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "February 2016 - Present",
			"url": "www.udacity.com"
		}
	]
};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	$("ul").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("ul").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("ul").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("ul").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

projects.display = function() {
	for (proj in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[proj].images.length > 0){
			for (image in projects.projects[proj].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	for (onlineCourse in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".onlineClasses-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".onlineClasses-entry:last").append(formattedOnlineDate);
	}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);



