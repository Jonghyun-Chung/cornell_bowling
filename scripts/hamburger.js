$("#hamburger-btn").click(function () {
    $("#hamburger-content").removeClass("hidden");
    $("#hamburger-close-btn").removeClass("hidden");
    $("#hamburger-btn").addClass("hidden");
});

$("#hamburger-close-btn").click(function () {
    $("#hamburger-content").addClass("hidden");
    $("#hamburger-close-btn").addClass("hidden");
    $("#hamburger-btn").removeClass("hidden");
});
