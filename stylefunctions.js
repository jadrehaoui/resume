$("#openContact").hover(function(){
  $("#closeContactInfo").removeClass("hidden").addClass("visible");
  $("#contactInfo").removeClass("hidden").addClass("visible");
})
$("#contactInfo").mouseleave(function(){
  var el = $("#contactInfo");
  console.log(el);
  $("#closeContactInfo").removeClass("visible").addClass("hidden");
  $("#contactInfo").removeClass("visible").addClass("hidden");
})
function openDesc(el){
  $(".expDesc").addClass("hidden");
  $(el).find(".expDesc").removeClass("hidden");
}
function closeDesc(el){
  $(el).addClass("hidden");
}
function imageViewer(image){
  $("#overlay").css("display","block")
  var imagePlace = $("#overlay").children("div").children(".achImg");
  var textPlace = $("#overlay").children("div").children(".achDesc");
  imagePlace.css("background","white url('"+image+"') no-repeat")
  imagePlace.css("background-position-x","center");
  imagePlace.css("background-position-y","center");
  // textPlace.find("h3").text("hello");
  // textPlace.find("p").text("haosljkfabsfkas jkasdjklasdmn nas djkasmd mnsadbnaksldn asdhnaskdm asbdnas,dm");
}
function exit(){
  $("#overlay").css("display","none")
}
