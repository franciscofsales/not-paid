(function() {
  /* change these variables */
  var due_date = new Date("2020-01-05"); // Last day for payment
  var days_deadline = 30; // Days given before inaccessible
  var support_email = "youremail@domain.com" // email to add to the notice
  /* stop changing here */

  var current_date = new Date();
  var utc1 = Date.UTC(
    due_date.getFullYear(),
    due_date.getMonth(),
    due_date.getDate()
  );
  var utc2 = Date.UTC(
    current_date.getFullYear(),
    current_date.getMonth(),
    current_date.getDate()
  );
  var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var funcCallback = function(addNotice = false) {
      var days_late = days_deadline - days;
      var opacity = (days_late * 100) / days_deadline / 100;
      opacity = opacity < 0 ? 0 : opacity;
      opacity = opacity > 1 ? 1 : opacity;
      if (opacity >= 0 && opacity <= 1) {
        document.getElementsByTagName("BODY")[0].style.opacity = opacity;
        if (addNotice) {
          var notice = document.createElement("div");
          notice.innerHTML = "Please contact <a href=\"mailto:" + support_email + "\">" + support_email + "</a>";
          notice.style =
            "position: absolute; top: 10px; left: 10px; z-index: 10000";
          notice.style.opacity = 1 - opacity;
          document.getElementsByTagName("HTML")[0].appendChild(notice);
        }
      }
    };
    funcCallback(true);
    setInterval(funcCallback, 5000);
  }
})();
