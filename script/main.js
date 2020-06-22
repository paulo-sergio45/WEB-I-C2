document.addEventListener('DOMContentLoaded', function () {
  let options = {
    coverTrigger: false,
    closeOnClick: false
  };
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
  let options;
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, options);
});

document.querySelector("#dropdownp").addEventListener("blur", function (event) {
  document.querySelector("#dropdownlabel").classList.toggle("active");
  event.preventDefault();

})
