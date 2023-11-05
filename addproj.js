document.getElementById("add-project-button").addEventListener('click', submitform);

function submitform(e) {
    e.preventDefault();

    var pname = getElementVal('project-name');
    var desc = getElementVal('project-description');
    var scope = getElementVal('project-scope');
    var out = getElementVal('project-outcomes');
    var skill = getElementVal('technical-skills');

    saveval(pname, desc, scope, out, skill);
}

const saveval = (pname, desc, scope, out, skill) => {
    var newki = kiDB.push();

    newki.set({
        pname: pname,
        desc: desc,
        scope: scope,
        out: out,
        skill: skill,
    }, (error) => {
        if (error) {
            console.error('Error saving project:', error);
        } else {
            // Data saved successfully, show an alert
            alert('Project added successfully.');
            document.getElementById('project-form').reset();
        }
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};