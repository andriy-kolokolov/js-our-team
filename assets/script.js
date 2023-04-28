const eleListProfileNames = document.querySelectorAll(".profile_name");
const eleListProfileRoles = document.querySelectorAll(".profile_role");
const eleListProfileImages = document.querySelectorAll(".profile_img");

// create profile objects 
const profile1 = {name: "Wayne Barnett", role: "Founder & CEO", imgPath: "assets/img/wayne-barnett-founder-ceo.jpg"};
const profile2 = {name: "Angela Carol", role: "Chief Editor", imgPath: "assets/img/angela-caroll-chief-editor.jpg"};
const profile3 = {name: "Walter Gordon", role: "Office Manager", imgPath: "assets/img/walter-gordon-office-manager.jpg"};
const profile4 = {name: "Angela Lopez", role: "Social Media Manager", imgPath: "assets/img/angela-lopez-social-media-manager.jpg"};
const profile5 = {name: "Scott Estrada", role: "Developer", imgPath: "assets/img/scott-estrada-developer.jpg"};
const profile6 = {name: "Barbara Ramos", role: "Graphic Designer", imgPath: "assets/img/barbara-ramos-graphic-designer.jpg"};
// add objects to list
listProfiles = [profile1, profile2, profile3, profile4, profile5, profile6];

// print in log objects info 
listProfiles.forEach(
    profile => console.log(profile.name + " " + profile.role + " " + profile.imgPath)
);

loadProfiles(eleListProfileNames, eleListProfileRoles, eleListProfileImages);

console.log("xui test")
function loadProfiles(eleListProfileNames, eleListProfileRoles, eleListProfileImages) {
   const showProfilesDelay = 350;  // delay between fade-in and show each profile
   const eleFadeInTime = 10; // elements fade in timing
   const eleInitialOpacity = "0";  // elements initial opacity
   const eleEndOpacity = "0.65"  //ele end opacity
   
   // load and show profile name
   eleListProfileNames.forEach((nameElement, index) => {
      nameElement.innerHTML = `${listProfiles[index].name}`;
      nameElement.style.opacity = eleInitialOpacity;
      setTimeout(() => {
         unFade(nameElement, eleFadeInTime, eleEndOpacity);
      }, index * showProfilesDelay);
   });
   // load and show profile role
   eleListProfileRoles.forEach((roleElement, index) => {
      roleElement.innerHTML = `${listProfiles[index].role}`;
      roleElement.style.opacity = eleInitialOpacity;
      setTimeout(() => {
         unFade(roleElement, eleFadeInTime, eleEndOpacity);
      }, index * showProfilesDelay);
   });
   // load and show profile image
   eleListProfileImages.forEach((imgElement, index) => {
      imgElement.src = `${listProfiles[index].imgPath}`;
      imgElement.style.opacity = eleInitialOpacity;
      setTimeout(() => {
         unFade(imgElement, eleFadeInTime, 1);
      }, index * showProfilesDelay);
   });
}

function unFade(element, fadeInTime, endOpacity) {
   let op = 0.1;  // initial opacity
   let timer = setInterval(function () {
      if (op >= endOpacity) {
         clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
   }, fadeInTime);
}

function showTypingAnimation() {
   
}