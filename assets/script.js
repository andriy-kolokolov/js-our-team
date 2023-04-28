const listProfileNames = document.querySelectorAll(".profile_name");
const listProfileRoles = document.querySelectorAll(".profile_role");
const listProfileImages = document.querySelectorAll(".profile_img");

// profile objects 
const profile1 = {name: "Wayne Barnett", role: "Founder & CEO", imgPath: "assets/img/wayne-barnett-founder-ceo.jpg"};
const profile2 = {name: "Angela Carol", role: "Chief Editor", imgPath: "assets/img/angela-caroll-chief-editor.jpg"};
const profile3 = {name: "Walter Gordon", role: "Office Manager", imgPath: "assets/img/walter-gordon-office-manager.jpg"};
const profile4 = {name: "Angela Lopez", role: "Social Media Manager", imgPath: "assets/img/angela-lopez-social-media-manager.jpg"};
const profile5 = {name: "Scott Estrada", role: "Developer", imgPath: "assets/img/scott-estrada-developer.jpg"};
const profile6 = {name: "Barbara Ramos", role: "Graphic Designer", imgPath: "assets/img/barbara-ramos-graphic-designer.jpg"};
// db (list)
listProfiles = [profile1, profile2, profile3, profile4, profile5, profile6];

// print in log objects info 
listProfiles.forEach(
    profile => console.log(profile.name + " " + profile.role + " " + profile.imgPath)
);

listProfileNames.forEach((nameElement, index) => {
   nameElement.innerHTML =  `${listProfiles[index].name}`;
});

listProfileRoles.forEach((roleElement, index) => {
   roleElement.innerHTML =  `${listProfiles[index].role}`;
});

listProfileImages.forEach((imgElement, index) => {
   imgElement.src = `${listProfiles[index].imgPath}`;
});
