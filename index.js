// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(lastTwoDrivers){
    return lastTwoDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    };
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers);
} 

function returnFirstTwoDrivers1(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers1(drivers){
    return drivers.slice(-2);
}