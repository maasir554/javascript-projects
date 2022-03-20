/* Object having data this type of object can be created in MONGODB database and imported here.*/
personData = [
  {
    id: 1,
    name: "Fakir Kha",
    job: "UI designer @ google",
    img: "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "I have been using it since the begining my experience was fantastic. the same timestamp even though time has passed during the computation of every previous callback's workload.you wish to perform an animation and requests that the browser calls a specified function to update an animation. Really Nice website very useful...",
  },
  {
    id: 2,
    name: "Prakash Jha",
    job: "Front End Developer @ IBM",
    img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "Editor groups are now taken into account when navigating in the editor history. Navigating back and forward in editor history will activate and focus editors in exactly those editor groups as they were. When an editor group is removed, all associated history entries are discarded. Pro service offered by website :-)",
  },
  {
    id: 3,
    name: "Sallu Bhai",
    job: "Bhai / dada @ nala supara",
    img: "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "Visual Studio Code supports many features for JavaScript and Node.js development. The features that ship with the downloaded product are the core features: debugging, IntelliSense, code navigation, etc. Very Systematic and well organised web site",
  },
  {
    id: 4,
    name: "PUBG Fanboi",
    job: "Chhapri Gamer @ youtuber's community",
    img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    info: "A true 2x2 OP grid editor layout was OP only possible using the OP View. OP Grid Editor Layout (2x2) command. Now you can get the same OP layout by manually splitting OP editors until you reach a OP 2x2 grid, and the OP grid will automatically lock into a true OP 2x2 layout. Very OP site very OP service very OP every thing OP",
  },
  {
    id: 5,
    name: "Shabana Jackson",
    job: "Music Artist @ Ubisoft",
    img: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    info: "Nice services and excelent support team! anyone can trust this company without any doubt. They are availible 24 x 7 all the time best value for money products and services. 100% secure and data encryped as the app is based on Blockchain Technology!. All Employes , here at Ubisoft use this app and relly appreciate it.",
  },
  {
    id: 6,
    name: "Atonio Rukhsana",
    job: "nano technologist @ intel",
    img: "https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    info: "To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder. A common name for a favicon favicon.ico",
  },
  {
    id: 6,
    name: "Angella Badiwie",
    job: "data analyst @ amazon inc.",
    img: "https://images.pexels.com/photos/2805050/pexels-photo-2805050.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    info: "For most text, the optimal line spacing is between 120% and 145% of the point size. Most word processors, as well as CSS, let you define line spacing as a multiple. Or you can do the math—multiply your point size by the percentage. (The text in this paragraph has line spacing of 110%.)",
  },
  {
    id: 7,
    name: "Babu Rao",
    job: "data Scientist @ facebook inc.",
    img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    info: "Styles in the CSS Backgrounds and Borders module allow filling backgrounds with color or an image (clipped or resized), or modifying them in other ways. These styles can also decorate borders with lines or images, and make them square or rounded. (Additionally, element boxes can be decorated with a shadow.)",
  },

  {
    id: 8,
    name: "Mohammad Maasir",
    job: "Learner @ Web Developer's community",
    img: "https://avatars.githubusercontent.com/u/96122569?v=4",
    info: "this vanilla javascript project was made on 20th of March, 2022, after my final practical exams of class XII board. I wanted to make a Rich Text Editor but ended up making this. And yes, i just readomly picked this 'deeppink' theme for this project as this color came in recommendation by VS code. maybe this project's source code will be used in my future project(s). To add more user data to this review container, just go to the app.js file and add the data to personData array in the form of a simple JavaScript object and it will be automatically populated to this box as the next card. Similar concept can be used with the data from *MongoDB* this idea, i will use in my QUIZ APP of the future JEE project. This project was built with pure HTML, CSS and JavaScript. with no external dependencies. All images  are imported from unsplash and pexels. Favicon copied via CDN from flaticon.com an my profile picture from GitHub. My thanks to freecodecamp.org and John Smilga for the toutorial. inspired from tutorial : https://www.youtube.com/watch?v=3PHXvlpOkf4&t=1122s ; This project was built after completing the TextUtils Project. which i learnt from codewithharry.com. mare projects @ https://github.com/maasir554",
  },
];

// DisplayIndes is ithe index of the object in the array personDetails which have to be populated inside the section

var DisplayPersonIndex = 0;

//pulling ID's of the HTML elements required.(Buttons not imported)

let personImg = document.querySelector("#personImg");
let personName = document.querySelector("#personName");
let personJob = document.querySelector("#personJob");
let personComment = document.querySelector("#personComment");

//populating content of DisplayIndex selected object in the page =>
function PopulateReview() {
  personImg.src = personData[DisplayPersonIndex].img;
  personName.textContent = personData[DisplayPersonIndex].name;
  personJob.textContent = personData[DisplayPersonIndex].job;
  personComment.textContent = personData[DisplayPersonIndex].info;
}
/* function call for the data populaion on site load / reload*/
PopulateReview();

//chaging DisplayPersonIndix on click of buttons (first importing buttons)

NextBtn = document.querySelector("#NextBtn");
PreviousBtn = document.querySelector("#PreviousBtn");

//function for NextBtn

NextBtn.addEventListener("click", function () {
  if (DisplayPersonIndex < personData.length - 1) {
    DisplayPersonIndex++;
    console.log(DisplayPersonIndex);
  } else {
    DisplayPersonIndex = 0;
    console.log(DisplayPersonIndex);
  }
  PopulateReview();
  //ADD ON -- to dispose off the setintrval (autoswapping of review)
  clearInterval(AutoUpdate);
  //ADD ON -- animation
  personDetails.style.opacity = 0;
  setTimeout((personDetails.style.transitionDuration = "0s"), 650);
  setTimeout(function () {
    personDetails.style.transitionDuration = "0.5s";
    personDetails.style.opacity = 1;
  }, 100);
});

// function for previous Button

PreviousBtn.addEventListener("click", function () {
  if (DisplayPersonIndex > 0) {
    DisplayPersonIndex--;
    console.log(DisplayPersonIndex);
  } else {
    DisplayPersonIndex = personData.length - 1;
    console.log(DisplayPersonIndex);
  }
  PopulateReview();
  //ADD ON -- to dispose off the setintrval (autoswapping of review)
  clearInterval(AutoUpdate);
  //ADD ON -- animation for fade-in fade-out fade-out
  personDetails.style.opacity = 0;
  setTimeout((personDetails.style.transitionDuration = "0s"), 650);
  setTimeout(function () {
    personDetails.style.transitionDuration = "0.5s";
    personDetails.style.opacity = 1;
  }, 100);
});

/* EXTRA ADD ON -- the reviews will automatically siwtch until we tap one of the buttons*/

var AutoUpdate = setInterval(function () {
  if (DisplayPersonIndex < personData.length - 1) {
    DisplayPersonIndex++;
    console.log(DisplayPersonIndex);
  } else {
    DisplayPersonIndex = 0;
    console.log(DisplayPersonIndex);
  }
  PopulateReview();
  //ADD ON -- animation for fade-in fade-out...
  personDetails.style.opacity = 0;
  setTimeout((personDetails.style.transitionDuration = "0s"), 650);
  setTimeout(function () {
    personDetails.style.transitionDuration = "0.5s";
    personDetails.style.opacity = 1;
  }, 100);
}, 5000);

// project inspired by : https://www.youtube.com/watch?v=3PHXvlpOkf4&t=1122s
//tutor: John Smilga @freecodecamp.org
//John Smilga's original project : https://github.com/john-smilga/javascript-basic-projects
//more projects: https://github.com/maasir554
