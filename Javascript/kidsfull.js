function change1() {
    document.getElementById("pic").src = "./Images/Kids/Kids22.webp";
  }
  function change2() {
    document.getElementById("pic").src = "./Images/Kids/Kids23.webp";
  }
  function change3() {
    document.getElementById("pic").src = "./Images/Kids/Kids24.webp";
  }
  function change4() {
    document.getElementById("pic").src = "./Images/Kids/Kids25.webp";
  }
  function change5() {
    document.getElementById("pic").src = "./Images/Kids/kids26.webp";
  }

  function change7() {
    document.getElementById("pic").src = "./Images/Kids/Kids21.webp";
  }
  
  

  function changecolor(event){
    document.getElementById("inputdiv").style.color=event.target.value;
  }

  const image_input = document.querySelector("#inputimage");
  var uploaded_image = "";
  
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector(
        "#ImageShown"
      ).style.backgroundImage = `url(${uploaded_image})`;
      document.querySelector("#ImageShown").style.backgroundSize = "100px 100px";
      document.querySelector("#ImageShown").style.backgroundRepeat = "no-repeat";
      document.querySelector("#ImageShown").style.backgroundPosition =
        "center center";
    });
    reader.readAsDataURL(this.files[0]);
  });
  function changeFont(font) {
    document.getElementById("inputdiv").style.fontFamily = font.value;
  }

  
function saveImage() {
  var imageSrc = document.getElementById("pic").src;
  localStorage.setItem("selectedImage", imageSrc);
  alert("Image Saved Successfully");
}

// Event listener for the "Save Image" button
var saveButton = document.getElementById("SaveButton2");
saveButton.addEventListener("click", saveImage);

function saveInputValue() {
  var inputText = document.getElementById("inputdiv").innerHTML;
  var selectedColor = document.getElementById("inputdiv").style.color;
  localStorage.setItem("inputText", inputText);
  localStorage.setItem("selectedColor", selectedColor); 


  // Retrieve the image source

}


function changeFont2() {
  var selectedFont = document.getElementById("select_font").value;
  localStorage.setItem("selectedFont", selectedFont);
}
// Function to retrieve and apply the saved font from local storage
function applySavedFont() {
  var savedFont = localStorage.getItem("selectedFont");
  if (savedFont) {
      document.getElementById("inputdiv").style.fontFamily = savedFont;
      document.getElementById("select_font").value = savedFont;
  }
}

// Call the function to apply the saved font when the page loads
window.addEventListener("load", applySavedFont);

function changecolor(event){
  document.getElementById("inputdiv").style.color=event.target.value;
}

  

function saveImage() {
  var imageSrc = document.getElementById("pic").src;
  localStorage.setItem("selectedImage", imageSrc);
  alert("Image Saved Successfully");
}

// Event listener for the "Save Image" button
var saveButton = document.getElementById("SaveButton2");
saveButton.addEventListener("click", saveImage);

function myFunction() {
  var x = document.getElementById("input").value;
  document.getElementById("inputdiv").innerHTML = x;
  document.getElementById("inputdiv").style = 
  "display:flex ; justify-content : center ;  font-size:40px ; margin-top:10px  ; text-align : center ; color:blue ; font-weight:bold" ;
}

function saveInputValue() {
  var inputText = document.getElementById("inputdiv").innerHTML;
  var selectedColor = document.getElementById("inputdiv").style.color;
  localStorage.setItem("inputText", inputText);
  localStorage.setItem("selectedColor", selectedColor); 


  // Retrieve the image source

}


function changeFont2() {
  var selectedFont = document.getElementById("select_font").value;
  localStorage.setItem("selectedFont", selectedFont);
}
// Function to retrieve and apply the saved font from local storage
function applySavedFont() {
  var savedFont = localStorage.getItem("selectedFont");
  if (savedFont) {
      document.getElementById("inputdiv").style.fontFamily = savedFont;
      document.getElementById("select_font").value = savedFont;
  }
}

// Call the function to apply the saved font when the page loads
window.addEventListener("load", applySavedFont);

function changecolor(event){
  document.getElementById("inputdiv").style.color=event.target.value;
}

function Revert1() {
  document.getElementsByTagName(pic).height="100"; 
  document.getElementsByTagName(pic).width="100";
}
function changeFont(font) {
  document.getElementById("inputdiv").style.fontFamily = font.value;
}
