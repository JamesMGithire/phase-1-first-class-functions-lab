// Code your solution in this file!
const returnFirstTwoDrivers = (arrayD)=>[arrayD[0], arrayD[1]];

const returnLastTwoDrivers = (arrayD)=>[arrayD[(arrayD.length) - 2], arrayD[(arrayD.length)-1]];

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return ((fare) => 4 * fare + fare);
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, func){
    return(func(arrayOfDrivers));
}