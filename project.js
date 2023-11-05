// Reference to the Firebase database node where project data is stored
var projectDataRef = firebase.database().ref('projects');

// Reference to the HTML element where project details will be displayed
var projectDetailsDiv = document.getElementById('project-details');

// Fetch project data from Firebase
projectDataRef.once('value', function (snapshot) {
    // Loop through the projects in the database
    snapshot.forEach(function (childSnapshot) {
        var projectData = childSnapshot.val();

        // Create HTML elements to display project details
        var projectDiv = document.createElement('div');
        projectDiv.className = 'project-container';

        var projectName = document.createElement('h3');
        projectName.innerText = projectData.name;

        var projectDescription = document.createElement('p');
        projectDescription.innerText = projectData.desc;

        var projectScope = document.createElement('p');
        projectScope.innerText = projectData.scope;

        var projectOutcomes = document.createElement('p');
        projectOutcomes.innerText = projectData.out;

        var projectSkills = document.createElement('p');
        projectSkills.innerText = projectData.skill;

        // Append the project details to the projectDiv
        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectScope);
        projectDiv.appendChild(projectOutcomes);
        projectDiv.appendChild(projectSkills);

        // Append the projectDiv to the projectDetailsDiv
        projectDetailsDiv.appendChild(projectDiv);
    });
});
