function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    var xb = document.getElementById("myHidden");
    // console.log(xb.className.includes("d-none"));
    const hid = document.getElementById("hid");

  function myFunctionHidden() {
    // if (window.getComputedStyle(xb).display === "none") {
    //   x.style.display = "block";
    // }
    if(xb.className.includes("d-none")){
        xb.classList.remove("d-none");
    }
  }

  const menu = document.getElementById("menu")

  function HomeMenu(){
    if(menu.class.remove("AllForMenu", "d-none")){
        menu.classList.remove("AllForMenu")
    }
  }
  function gameMode(){
    if()
  }

  document.getElementById("okButton").addEventListener(
    "click",
    () => {
      document.getElementById("menu").hidden = true;
      document.getElementById("awesome").hidden = false;
    },
    false,
  );
//   function hid(){
//     if(hid.classList.display){

//     }
//   }

//   myFunctionHidden();