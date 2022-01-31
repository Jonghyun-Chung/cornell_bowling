// expectations content
$("#open-expectations").click(function () {
  $("#expectation-content").removeClass("hidden");
  $("#collapse-expectations").removeClass("hidden");
  $("#open-expectations").addClass("hidden");
});

$("#collapse-expectations").click(function () {
  $("#expectation-content").addClass("hidden");
  $("#collapse-expectations").addClass("hidden");
  $("#open-expectations").removeClass("hidden");
});

// fees+dues content
$("#open-dues").click(function () {
  $("#dues-content").removeClass("hidden");
  $("#collapse-dues").removeClass("hidden");
  $("#open-dues").addClass("hidden");
});

$("#collapse-dues").click(function () {
  $("#dues-content").addClass("hidden");
  $("#collapse-dues").addClass("hidden");
  $("#open-dues").removeClass("hidden");
});

//perks content
$("#open-perks").click(function () {
  $("#perks-content").removeClass("hidden");
  $("#collapse-perks").removeClass("hidden");
  $("#open-perks").addClass("hidden");
});

$("#collapse-perks").click(function () {
  $("#perks-content").addClass("hidden");
  $("#collapse-perks").addClass("hidden");
  $("#open-perks").removeClass("hidden");
});

//competitive Team
$("#open-competitive-team").click(function () {
  $("#competitive-team-content").removeClass("hidden");
  $("#collapse-competitive").removeClass("hidden");
  $("#open-competitive-team").addClass("hidden");
});

$("#collapse-competitive").click(function () {
  $("#competitive-team-content").addClass("hidden");
  $("#collapse-competitive").addClass("hidden");
  $("#open-competitive-team").removeClass("hidden");
});
