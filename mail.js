const firebaseConfig = {
    apiKey: "AIzaSyChkVj8CxmcIWbDtZ8_SlkCNTr6FgCHEcs",
    authDomain: "collabprojplatform.firebaseapp.com",
    databaseURL: "https://collabprojplatform-default-rtdb.firebaseio.com",
    projectId: "collabprojplatform",
    storageBucket: "collabprojplatform.appspot.com",
    messagingSenderId: "210101419215",
    appId: "1:210101419215:web:d96fb0a9ebe26fd03fcbba",
    measurementId: "G-9GNFRSCZ14"
  };

  firebase.initializeApp(firebaseConfig);

  var kiDB = firebase.database().ref("ki");

  document.getElementById("add-project-button").addEventListener('submit', submitform);

  function submitform(e){
    e.preventDefault();

    var name = getElementVal('project-name');
    var desc = getElementVal('project-description');
    var scope = getElementVal('project-scope');
    var out = getElementVal('project-outcomes');
    var skill =  getElementVal('technical-skills');

    saveval(name, desc, scope, out, skill);
  }

  const saveval = (name, desc, scope, out, skill) => {
    var newki = kiDB.push();

    newki.set({
        name : name,
        desc : desc,
        scope : scope,
        out : out,
        skill : skill,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };