function scuberGreetingForFeet(someNumber){
  if (someNumber<=400){
    return "This is on me!";
  }
  else if (someNumber>400 && someNumber<=2500)
  {
    return 'I will gladly take your thirty bucks.';
 }
 else{
  return "No can do.";
 }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city=== "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous" :
      return "Thank you so much.";
    case "not as generous":
        return "Thank you. ";
        break;
    default:
        return "Bye.";
        break;
  }
}

scuberGreetingForFeet(199)