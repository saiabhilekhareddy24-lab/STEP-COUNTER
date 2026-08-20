class StepCounter {
constructor(dailyGoal = 10000) {
this.steps = 0;
this.dailyGoal = dailyGoal;
}

addSteps(count) {
    if (count < 0) {
        throw new Error("Steps cannot be negative");
    }

    this.steps += count;
}

getSteps() {
    return this.steps;
}

reset() {
    this.steps = 0;
}

goalReached() {
    return this.steps >= this.dailyGoal;
}

getProgress() {
    return Math.min((this.steps / this.dailyGoal) * 100, 100);
}


}

// Simulation
const counter = new StepCounter(10000);

counter.addSteps(2000);
console.log("Morning Steps:", counter.getSteps());

counter.addSteps(3000);
console.log("Afternoon Steps:", counter.getSteps());

counter.addSteps(2500);
console.log("Evening Steps:", counter.getSteps());

console.log("Total Steps:", counter.getSteps());
console.log("Goal Reached:", counter.goalReached());
console.log("Progress:", counter.getProgress().toFixed(2) + "%");
