const profileNameElements = document.querySelectorAll(".profile_name");
const profileRoleElements = document.querySelectorAll(".profile_role");
const profileImageElements = document.querySelectorAll(".profile_img");

const profiles = [
   { name: "Wayne Barnett", role: "Founder & CEO", imgPath: "assets/img/wayne-barnett-founder-ceo.jpg" },
   { name: "Angela Carol", role: "Chief Editor", imgPath: "assets/img/angela-caroll-chief-editor.jpg" },
   { name: "Walter Gordon", role: "Office Manager", imgPath: "assets/img/walter-gordon-office-manager.jpg" },
   { name: "Angela Lopez", role: "Social Media Manager", imgPath: "assets/img/angela-lopez-social-media-manager.jpg" },
   { name: "Scott Estrada", role: "Developer", imgPath: "assets/img/scott-estrada-developer.jpg" },
   { name: "Barbara Ramos", role: "Graphic Designer", imgPath: "assets/img/barbara-ramos-graphic-designer.jpg" }
];

// print info for each profile object
profiles.forEach(profile => {
   console.log(`${profile.name} ${profile.role} ${profile.imgPath}`);
});

loadProfiles(profileNameElements, profileRoleElements, profileImageElements);

function loadProfiles(profileNameElements, profileRoleElements, profileImageElements) {
   const showProfilesDelay = 350;
   const eleFadeInTime = 10;
   const eleInitialOpacity = "0";
   const eleTxtOpacity = "0.65";

   profileNameElements.forEach((nameElement, index) => {
      const { name } = profiles[index];
      nameElement.innerHTML = name;
      nameElement.style.opacity = eleInitialOpacity;
      setTimeout(() => fadeIn(nameElement, eleFadeInTime, eleTxtOpacity), index * showProfilesDelay);
   });

   profileRoleElements.forEach((roleElement, index) => {
      const { role } = profiles[index];
      roleElement.innerHTML = role;
      roleElement.style.opacity = eleInitialOpacity;
      setTimeout(() => fadeIn(roleElement, eleFadeInTime, eleTxtOpacity), index * showProfilesDelay);
   });

   profileImageElements.forEach((imgElement, index) => {
      const { imgPath } = profiles[index];
      imgElement.src = imgPath;
      imgElement.style.opacity = eleInitialOpacity;
      setTimeout(() => fadeIn(imgElement, eleFadeInTime, 1), index * showProfilesDelay);
   });
}

function fadeIn(element, fadeInTime, endOpacity) {
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
