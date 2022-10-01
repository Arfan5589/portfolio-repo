function changeactivecls(btnid, sectionid) {
  var element = document.getElementById(btnid);
  var select = document.getElementsByClassName("activebtn");
  //   ===========================
  var sectionid = document.getElementsByClassName(sectionid);
  var sectionselect = document.getElementsByClassName("activesection");
  //   ========================
  sectionselect[0].classList.remove("activesection");
  sectionid[0].classList.add("activesection");
  select[0].classList.remove("activebtn");
  element.classList.add("activebtn");
}
