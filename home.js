// Reference to the "projects" node in the database
var projectsRef = database.ref('ki');

// Listen for changes to the "projects" node
projectsRef.on('value', function (snapshot) {
    // Clear existing project listings
    var projectListings = document.getElementById('project-listings');
    projectListings.innerHTML = projectContainer;

    // Iterate through the snapshot of projects
    snapshot.forEach(function (projectSnapshot) {
        var projectData = projectSnapshot.val();

        // Create a container for each project
        var projectContainer = document.createElement('div');
        projectContainer.className = 'project-container';

        // Populate the container with project data
        var projectName = document.createElement('h3');
        projectName = snapshot.val().pname;
        projectContainer.appendChild(projectName);

        var projectDescription = document.createElement('p');
        projectDescription.textContent = projectData.desc;
        projectContainer.appendChild(projectDescription);

        var requiredSkills = document.createElement('h4');
        requiredSkills.textContent = 'Required Skills:';
        projectContainer.appendChild(requiredSkills);

        var skillsList = document.createElement('ul');
        var skillsArray = projectData.skill.split(', ');
        skillsArray.forEach(function (skill) {
            var skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
        projectContainer.appendChild(skillsList);

        // Add project container to the project listings
        projectListings.appendChild(projectContainer);
    });
});
