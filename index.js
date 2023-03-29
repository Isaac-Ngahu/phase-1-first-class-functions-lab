// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=function(){
    
    const newArray=drivers.slice(0,2);
    return newArray;
}
const returnLastTwoDrivers=function(){
const newArray=drivers.slice(-2);
return newArray;
}

 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
 function createFareMultiplier(integer){
    return ((integer)=>integer*5);
 }
 const fareMultiplier=createFareMultiplier();
 const fareDoubler=function(fare){
return fare*2;
 }
 const fareTripler=function(fare){
    return fare*3;
 }
function selectDifferentDrivers(arrayofdrivers,fname){
    return fname();
}
