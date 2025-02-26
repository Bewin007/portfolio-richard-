// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 50,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


let rosProgress = document.querySelector(".ros"),
  rosValue = document.querySelector(".ros-progress");

let rosStartValue = 1, // Reset from 95 to 0 for animation
  rosEndValue = 95,
  rosspeed = 30;

let progressros = setInterval(() => {
  rosStartValue++;

  rosValue.textContent = `${rosStartValue}%`;
  rosProgress.style.background = `conic-gradient(#6f34fe ${
    rosStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (rosStartValue >= rosEndValue) {
    clearInterval(progressros);
  }
}, rosspeed); // Fixed typo here


let issacSimProgress = document.querySelector(".issac-sim"),
  issacSimValue = document.querySelector(".issac-sim-progress");

let issacSimStartValue = 0, // Start from 0 for animation
  issacSimEndValue = 75, // Set end value to 75%
  issacSimSpeed = 30;

let progressIssacSim = setInterval(() => {
  issacSimStartValue++;

  issacSimValue.textContent = `${issacSimStartValue}%`;
  issacSimProgress.style.background = `conic-gradient(#6f34fe ${
    issacSimStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (issacSimStartValue >= issacSimEndValue) {
    clearInterval(progressIssacSim);
  }
}, issacSimSpeed);


let openrmfFleetProgress = document.querySelector(".openrmf-fleet"),
  openrmfFleetValue = document.querySelector(".openrmf-fleet-progress");

let openrmfFleetStartValue = 0, // Start from 0 for animation
  openrmfFleetEndValue = 75, // Set end value to 75%
  openrmfFleetSpeed = 30;

let progressOpenrmfFleet = setInterval(() => {
  openrmfFleetStartValue++;

  openrmfFleetValue.textContent = `${openrmfFleetStartValue}%`;
  openrmfFleetProgress.style.background = `conic-gradient(#6f34fe ${
    openrmfFleetStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (openrmfFleetStartValue >= openrmfFleetEndValue) {
    clearInterval(progressOpenrmfFleet);
  }
}, openrmfFleetSpeed);

let slamProgress = document.querySelector(".slam"),
  slamValue = document.querySelector(".slam-progress");

let slamStartValue = 0, // Start from 0 for animation
  slamEndValue = 85, // Set end value to 85%
  slamSpeed = 30;

let progressSlam = setInterval(() => {
  slamStartValue++;

  slamValue.textContent = `${slamStartValue}%`;
  slamProgress.style.background = `conic-gradient(#6f34fe ${
    slamStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (slamStartValue >= slamEndValue) {
    clearInterval(progressSlam);
  }
}, slamSpeed);


let navigationProgress = document.querySelector(".navigation"),
  navigationValue = document.querySelector(".navigation-progress");

let navigationStartValue = 0, // Start from 0 for animation
  navigationEndValue = 85, // Set end value to 85%
  navigationSpeed = 30;

let progressNavigation = setInterval(() => {
  navigationStartValue++;

  navigationValue.textContent = `${navigationStartValue}%`;
  navigationProgress.style.background = `conic-gradient(#6f34fe ${
    navigationStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (navigationStartValue >= navigationEndValue) {
    clearInterval(progressNavigation);
  }
}, navigationSpeed);

let fusion360Progress = document.querySelector(".fusion360"),
  fusion360Value = document.querySelector(".fusion360-progress");

let fusion360StartValue = 0, // Start from 0 for animation
  fusion360EndValue = 70, // Set end value to 70%
  fusion360Speed = 30;

let progressFusion360 = setInterval(() => {
  fusion360StartValue++;

  fusion360Value.textContent = `${fusion360StartValue}%`;
  fusion360Progress.style.background = `conic-gradient(#6f34fe ${
    fusion360StartValue * 3.6
  }deg, #ededed 0deg)`;

  if (fusion360StartValue >= fusion360EndValue) {
    clearInterval(progressFusion360);
  }
}, fusion360Speed);


let aiMLProgress = document.querySelector(".ai-ml"),
  aiMLValue = document.querySelector(".ai-ml-progress");

let aiMLStartValue = 0, // Start from 0 for animation
  aiMLEndValue = 50, // Set end value to 50%
  aiMLSpeed = 30;

let progressAiML = setInterval(() => {
  aiMLStartValue++;

  aiMLValue.textContent = `${aiMLStartValue}%`;
  aiMLProgress.style.background = `conic-gradient(#6f34fe ${
    aiMLStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (aiMLStartValue >= aiMLEndValue) {
    clearInterval(progressAiML);
  }
}, aiMLSpeed);


function animateProgress(selector, endValue) {
  let progressElement = document.querySelector(`.${selector}`),
    progressValue = document.querySelector(`.${selector}-progress`);

  let startValue = 0,
    speed = 30;

  let progressInterval = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressElement.style.background = `conic-gradient(#6f34fe ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue >= endValue) {
      clearInterval(progressInterval);
    }
  }, speed);
}

// Animate progress for each skill
animateProgress("plc-programming", 80);
animateProgress("docker", 85);
animateProgress("git", 85);
animateProgress("moveit", 70);
animateProgress("embedded-systems", 80);
animateProgress("python", 50);
animateProgress("cpp", 50);
animateProgress("isaacros", 70);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});