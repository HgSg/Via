window.onload = function(){
    // initial 
}
var searchengiecurrent="google";

function openNav() {
    document.getElementById("navSidebar").style.width = "200px";
}
function closeNav() {
    document.getElementById("navSidebar").style.width = "0";
}
function whatBrowser() {
    var Name = navigator.appName; 
    var Version = navigator.appVersion; 
    var Code = navigator.appCodeName; 
    var Agent = navigator.userAgent; 
    var newwindow = window.open();
    newwindow.document.write('<html><head><title>User Agent</title></head>');
    newwindow.document.write('<body style="width: 100%; font-size:40px; margin: 40px"><h1>浏览器标识(UserAgent)</h1><tr><td> appName: </td><td> ');
    newwindow.document.write(Name+'</br></br></td></tr><tr><td> appVersion:</td><td>');
    newwindow.document.write(Version+'</br></br></td></tr><tr><td> appCodeName: </td><td></td>');
    newwindow.document.write(Code+'</br></br></td></tr><tr><td> userAgent:</td><td></td>');
    newwindow.document.write(Agent+'</br></br></td></tr></body></html>');
}

function opensearchbarlist() {
  // var listid = document.getElementById("searchbarlist").style.display="block";
  var listid = document.getElementById("searchbarlist");
  if (listid.style.display == "block"){
    listid.style.display = "none";
  }
  else {
    listid.style.display = "block";
  }
}

document.addEventListener('click', (e)=> {
  // var currentId = e.target.getAttribute('id');
  var currentId = e.target;
  var searchlistId = document.getElementById("searchbarlist");
  var searchiconId= document.getElementById("searchbaricon");
  var listid = document.getElementById("searchbarlist");
  var sidebarbtn = document.getElementById("checkbox");
  // alert(currentId.id);
  if ( (currentId.id != "searchbaricon") || (currentId.id != "searchbarlist")) {
    searchlistId.style.display = 'none';
  } 
  if (currentId.id == 'searchbaricon'){
    if (listid.style.display == "block"){
      listid.style.display = "none";
    }
    else {
      listid.style.display = "block";
    }
  }
  if (sidebarbtn.checked == true && (currentId.id == "navbarbtn" || currentId.id == "checkbox" || currentId.id == "navbaricon")){
    sidebarbtn.checked = false;
  } else {
    sidebarbtn.checked = true;
  }
})


function searchbar_google() {
  document.getElementById("searchbaricon").src='/Via/img/google.png';
  document.getElementById("searchbarlist").style.display="none";
  document.getElementById("searchbarform").action = "https://www.google.com/search";
  document.getElementById("searchcontent").name = "q";
  searchengiecurrent="google";
}
function searchbar_bing() {
  document.getElementById("searchbaricon").src='/Via/img/bing.png';
  document.getElementById("searchbarlist").style.display="none";
  document.getElementById("searchbarform").action = "https://www.bing.com/search";
  document.getElementById("searchcontent").name = "q";
  searchengiecurrent="bing";
}
function searchbar_baidu() {
  document.getElementById("searchbaricon").src='/Via/img/baidu.png';
  document.getElementById("searchbarlist").style.display="none";
  document.getElementById("searchbarform").action = "https://www.baidu.com/s";
  document.getElementById("searchcontent").name = "wd";
  searchengiecurrent="baidu";
}
function searchbar_duckgo() {
  document.getElementById("searchbaricon").src='/Via/img/duckgo.png';
  document.getElementById("searchbarlist").style.display="none";
  document.getElementById("searchbarform").action = "https://duckduckgo.com/";
  document.getElementById("searchcontent").name = "q";
  searchengiecurrent="duckgo";
}

// function searchto(){
//   var searchValue = document.getElementById("searchcontent").value;
//   var formstate = document.getElementById("searchbarform");
//     switch (searchengiecurrent) {
//       case "google":
//         window.location.href="https://www.google.com/search?q="+searchValue;
//         break;
//       case "bing":
//         window.location.href="https://www.bing.com/search?q="+searchValue;
//       case "baidu":
//         window.location.href="https://www.baidu.com/s?wd="+searchValue;
//       case "duckgo":
//         window.location.href="https://duckduckgo.com/?q="+searchValue;
//       default:
//         break;
//     }

// }


var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
]

document.addEventListener('DOMContentLoaded', function() {
  var _hours = document.querySelectorAll('.hours');
  var _minutes = document.querySelectorAll('.minutes');
  var _seconds = document.querySelectorAll('.seconds');
  
  setInterval(function() {
    var date = new Date();
    var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();  
    
    setNumber(_hours[0], Math.floor(hours/10), 1);
    setNumber(_hours[1], hours%10, 1);

    setNumber(_minutes[0], Math.floor(minutes/10), 1);
    setNumber(_minutes[1], minutes%10, 1);

    setNumber(_seconds[0], Math.floor(seconds/10), 1);
    setNumber(_seconds[1], seconds%10, 1);
  }, 1000);
});

var setNumber = function(digit, number, on) {
  var segments = digit.querySelectorAll('.segment');
  var current = parseInt(digit.getAttribute('data-value'));

  // only switch if number has changed or wasn't set
  if (!isNaN(current) && current != number) {
    // unset previous number
    digitSegments[current].forEach(function(digitSegment, index) {
      setTimeout(function() {
        segments[digitSegment-1].classList.remove('on');
      }, index*45)
    });
  }
  
  if (isNaN(current) || current != number) {
    // set new number after
    setTimeout(function() {
      digitSegments[number].forEach(function(digitSegment, index) {
        setTimeout(function() {
          segments[digitSegment-1].classList.add('on');
        }, index*45)
      });
    }, 250);
    digit.setAttribute('data-value', number);
  }
}
