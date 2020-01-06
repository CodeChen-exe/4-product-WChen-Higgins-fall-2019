// GET MODAL
var modal = document.getElementById("EditorModal");

// GET BUTTON
var btn = document.getElementById("EditorBtn");

// GET <SPAN>
var span = document.getElementsByClassName ("close")[0];

// OPEN
btn.onclick = function() {
    modal.style.display = "block";
}

// CLOSE
span.onclick = function() {
    modal.style.display = "none";
}

// ALSO CLOSE
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}