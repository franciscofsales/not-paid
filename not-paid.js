(function() {
  /* change these variables */
  var due_date = new Date("2020-01-05"); // Last day for payment
  var days_deadline = 30; // Days given before inaccessible
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
    var funcCallback = function() {
      var days_late = days_deadline - days;
      var opacity = (days_late * 100) / days_deadline / 100;
      opacity = opacity < 0 ? 0 : opacity;
      opacity = opacity > 1 ? 1 : opacity;
      if (opacity >= 0 && opacity <= 1) {
        document.getElementsByTagName("BODY")[0].style.opacity = opacity;
      }
    };
    funcCallback();
    setInterval(funcCallback, 3000);
  }
})();
