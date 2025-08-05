//  <script>
//       var tablinks = document.getElementsByClassName("tab-links");
//       var tabcontents = document.getElementsByClassName("tab-contents");
//       function opentab(tabname) {
//         for (tablink of tablinks) {
//           tablink.classList.remove("active-link");
//         }
//         for (tabcontent of tabcontents) {
//           tabcontent.classList.remove("active-tab");
//         }
//         event.currentTarget.classList.add("active-link");
//         document.getElementById(tabname).classList.add("active-tab");
//       }
//     </script>
//     <script>
//       const scriptURL =
//         "https://script.google.com/macros/s/AKfycbyMhjVGQaIKivkxEa04lz38lbCHmFKoBNevAfcLUhi6sPolyCI_S2ysUJAju7PQJIGYyA/exec";
//       const form = document.forms["submit-to-google-sheet"];
//       const msg = document.getElementbyId("msg");

//       form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         fetch(scriptURL, { method: "POST", body: new FormData(form) })
//           .then((response) => console.log("Success!", response))
//           .catch((error) => console.error("Error!", error.message));
//       });
//     </script>

const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");

const skills = document.getElementById("skills");
const edu = document.getElementById("education");
const exp = document.getElementById("experience");

tab1.addEventListener("click", (e) => {
  tab1.classList.add("active-link");
  tab2.classList.remove("active-link");
  tab3.classList.remove("active-link");
  edu.style.display = "none";
  exp.style.display = "none";
  skills.style.display = "grid";
});
tab2.addEventListener("click", async (e) => {
  tab2.classList.add("active-link");
  tab1.classList.remove("active-link");
  tab3.classList.remove("active-link");
  skills.style.display = "none";
  edu.style.display = "none";
  exp.style.display = "grid";
});
tab3.addEventListener("click", (e) => {
  tab3.classList.add("active-link");
  tab2.classList.remove("active-link");
  tab1.classList.remove("active-link");
  skills.style.display = "none";
  exp.style.display = "none";
  edu.style.display = "grid";
});

const home = document.getElementById("item1");
const about = document.getElementById("item2");
const service = document.getElementById("item3");
const portfolio = document.getElementById("item4");
const contact = document.getElementById("item5");

home.addEventListener("click", (e) => {
  e.preventDefault();
  home.classList.add("active");
  about.classList.remove("active");
  service.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  window.location.hash = "#home";
});
about.addEventListener("click", (e) => {
  e.preventDefault();
  about.classList.add("active");
  home.classList.remove("active");
  service.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  window.location.hash = "#about";
});
service.addEventListener("click", (e) => {
  e.preventDefault();
  service.classList.add("active");
  about.classList.remove("active");
  home.classList.remove("active");
  portfolio.classList.remove("active");
  contact.classList.remove("active");
  window.location.hash = "#services";
});
portfolio.addEventListener("click", (e) => {
  e.preventDefault();
  portfolio.classList.add("active");
  about.classList.remove("active");
  service.classList.remove("active");
  home.classList.remove("active");
  contact.classList.remove("active");
  window.location.hash = "#portfolio";
});
contact.addEventListener("click", (e) => {
  e.preventDefault();
  contact.classList.add("active");
  about.classList.remove("active");
  service.classList.remove("active");
  portfolio.classList.remove("active");
  home.classList.remove("active");
  window.location.hash = "#contact";
});

//form data submit

const submitBtn = document.getElementById("submitButton");
const msg = document.getElementById("msg");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (true) {
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    console.log("error occured!");
  }
});

//logic for menu icon and close icon usage

const menu = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("navbar");
const logo = document.getElementById("logo");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "none";
  nav.style.display = "block";
  logo.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "block";
  nav.style.display = "none";
  logo.style.display = "block";
  closeIcon.style.display = "none";
});
