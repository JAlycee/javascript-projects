// Initialize Variables below
let hyphen = "--------------------------------"
let date = "Monday 2019-03-18";
let time = "10:05:34";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maxFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftoff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("This mission cannot have this many astronauts");
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== 'ready') {
    console.log("");
    preparedForLiftoff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    console.log("");
    preparedForLiftoff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <minimumFuelTemp || fuelTempCelsius > maxFuelTemp) {
    preparedForLiftoff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== '100%') {
    preparedForLiftoff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus !== 'clear') {
    preparedForLiftoff = false;
}
//Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff) {
    console.log("All Systems Are A Go! Initiating Launch Sequence...");
    console.log(hyphen);
    console.log(date);
    console.log("Astronaut Count: " , astronautCount);
    console.log("Crew MAss: " , crewMassKg);
    console.log("Fuel Mass" , fuelLevel);
    console.log("Shuttle Mass" , shuttleMassKg , "kg");
    console.log("Fuel Temp: ", fuelTempCelsius , "C");
    console.log("Weather Status" , weatherStatus);
    console.log(hyphen);
    console.log("Wish Your Astronauts A Safe Flight!");
}  else {
    console.log("Abort Mission. Check ALL Systems and Conditions.");
}