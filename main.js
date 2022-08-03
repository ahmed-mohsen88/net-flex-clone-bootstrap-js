function show_p(id) {
    let p = document.getElementById(id);
    if (p.style.display === "block") {
      p.style.display = "none";
      console.log("none");
    } else {
      p.style.display = "block";
      console.log("block");
    }
  }