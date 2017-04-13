var tempFah = 70;
var celcius = (tempFah-32)/1.8;
var bck2Fah = (celcius*1.8+32);

console.log( "The temprature in Celcius is " + celcius + " degrees. This program takes the temperature in Fahrenheit, subtracts 32, and then takes that number and devides it by 1.8. Good Times.")
if (celcius >=32){
	console.log("whoa... Too hot:/")
} else if (celcius >=15){
  console.log("yeeeeah!!");
} else {
	console.log("meh.. :(")
}
console.log("This converts Celcius back to Fahrenheit. Which should be "+bck2Fah)
