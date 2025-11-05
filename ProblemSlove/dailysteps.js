const dailySteps = [5021, 7503, 4987, 10050, 8010, 6500, 7899];
let totalSteps = 0;
for( let i = 0 ; i < dailySteps.length ; i++){
    totalSteps += dailySteps[i];
}

console.log(`Total Steps for the week:${totalSteps}`);