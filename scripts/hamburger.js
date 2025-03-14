$(document).ready(function() {
    if ($(document).width() < 940) {
        $("#hamMenu").removeClass("hidden")
        $("#topNav").addClass("hidden")
      } else {
          $("#hamMenu").addClass("hidden")
          $("#topNav").removeClass("hidden")
      }
  });

$(window).resize(function() {
    if ($(document).width() < 940) {
      $("#hamMenu").removeClass("hidden")
      $("#topNav").addClass("hidden")
    } else {
        $("#hamMenu").addClass("hidden")
        $("#topNav").removeClass("hidden")
        $("#pageLinks").addClass("hidden");
    }
  });

  $("#hamMenu").click(function() {
    if ($("#pageLinks").hasClass("hidden")) {
        $("#pageLinks").removeClass("hidden");
      } else {
        $("#pageLinks").addClass("hidden");
      }
  });
