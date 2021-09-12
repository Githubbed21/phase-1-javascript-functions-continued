function saturdayFun(a= 'roller-skate') {
    return (`This Saturday, I want to ${a}!`);
}
function mondayWork(b= 'go to the office') {
    return (`This Monday, I will ${b}.`);
}
function wrapAdjective(adjective = '*') {
    const innner = function (byDefault = "special") {
    return `You are ${adjective}${byDefault}${adjective}!`;
    }
    return innner;
}