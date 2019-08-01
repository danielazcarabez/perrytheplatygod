var header1= $(".header");
var button = $('.button');
var header2= $('.header2')
button.on("click", doSomething);

function doSomething() {
  console.log("you clicked the button!");
  header1.text("Perry the platypus is our leader and savior.");
  var name=$('.name-input')
  header2.text(`Welcome to the army,  ${name.val()}. You are now a servant to our savior Perry The Platypus. Do not attempt to resist, there is no point in resisting. From now on you will devote your life to the PlatyGod.`);

}
