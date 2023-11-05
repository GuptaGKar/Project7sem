// Initialize Firebase with your configuration
//firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
var database = firebase.database();
var projectsRef = database.ref('ki');

// Function to create and append a project container
function createProjectContainer(projectData) {
    var projectDisplay = document.querySelector('.project-display');

    // Create a new project container
    var projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    // Populate the container with project details
    var projectName = document.createElement('h3');
    projectName.textContent = projectData.pname;
    projectContainer.appendChild(projectName);

    var projectDescription = document.createElement('p');
    projectDescription.textContent = projectData.desc;
    projectContainer.appendChild(projectDescription);

    var projectScope = document.createElement('p');
    projectScope.textContent = projectData.scope;
    projectContainer.appendChild(projectScope);

    var projectOutcomes = document.createElement('p');
    projectOutcomes.textContent = projectData.out;
    projectContainer.appendChild(projectOutcomes);

    var projectSkills = document.createElement('p');
    projectSkills.textContent = projectData.skill;
    projectContainer.appendChild(projectSkills);

    // Append the project container to the display section
    projectDisplay.appendChild(projectContainer);
}

// Function to fetch and display project data
function displayProjects() {
    projectsRef.on('value', function (snapshot) {
      //  projectDisplay.innerHTML = ''; // Clear existing containers before populating
        snapshot.forEach(function (childSnapshot) {
            var projectData = childSnapshot.val();
            createProjectContainer(projectData);
        });
    });
}

// Call the displayProjects function to populate the project containers
displayProjects();
