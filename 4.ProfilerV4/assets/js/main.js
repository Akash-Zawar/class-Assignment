import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { FIREBASE_CONFIG } from "./firebase.config.local.js";

import {
  getAuth,
  GoogleAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const app = initializeApp(FIREBASE_CONFIG);
const provider = new GoogleAuthProvider();
const auth = getAuth();

let userDetails = null;

export const renderUserDetails = () => {
  if (!userDetails) {
    return null;
  }

  const headerUserInfoElem = document.getElementById("user");
  const headerUserName = document.getElementById("userName");
  const headerUserPic = document.getElementById("userPic");
  const headerUserEmail = document.getElementById("email");

  headerUserName.innerText = userDetails.displayName;
  headerUserEmail.innerText = userDetails.email;

  headerUserPic.src = userDetails.photoURL;
  headerUserPic.style.width = "60px";
  headerUserPic.style.height = "60px";
  headerUserPic.style.borderRadius = "50%";
  headerUserPic.style.objectFit = "cover";

  headerUserInfoElem.style.display = "flex";
  headerUserInfoElem.style.gap = "12px";
};

export const validateUserDetails = () => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "./login.html";
      return;
    }
    userDetails = user;
    console.log(userDetails);
    renderUserDetails();
    // Extract data from session
  });
};

export const onLogOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "./login.html";
    })
    .catch((error) => {
      // An error happened.
      alert("Bhai nahi hua, tu dekh le");
    });
};

let p = "";
let repo = document.getElementById("myRepoList");

const searchBarElem = document.getElementById("searchBar");
searchBarElem.addEventListener("keyup", (e) => {
  let keyEvent = e.target.value;

  console.log(keyEvent);
  p = keyEvent;

  const gitUser = fetch(`https://api.github.com/users/${p}/repos`);

  gitUser
    .then(function (repoData) {
      return repoData.json();
    })
    .then(function (gitRepoData) {
      const gitData = gitRepoData;
      renderUI(gitData);
    });
});

function renderUI(data) {
  for (let i = 0; i < data.length; i++) {
    const currentRepo = data[i];
    const repoName = document.createElement("p");
    repoName.className = "repoItem";
    repoName.innerText = currentRepo.name;
    console.log(repoName);
    repoName.style.color = "red";
    repoName.style.backgroundColor = "silver";
    repoName.style.fontSize = "24px";
    repo.appendChild(repoName);
  }
}
