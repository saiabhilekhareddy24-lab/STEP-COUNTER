const StepCounter = require("./stepCounter");

const counter = new StepCounter(10000);

console.log("===== STEP COUNTER SIMULATION =====\n");

counter.addSteps(2000);
console.log("Morning : 2000 steps");
console.log("Total :", counter.getSteps(), "steps\n");

counter.addSteps(3000);
console.log("Afternoon : 3000 steps");
console.log("Total :", counter.getSteps(), "steps\n");

counter.addSteps(2500);
console.log("Evening : 2500 steps");
console.log("Total :", counter.getSteps(), "steps\n");

console.log("Daily Goal:", counter.dailyGoal, "steps");
console.log("Total Steps:", counter.getSteps(), "steps");
console.log("Progress:", counter.getProgress().toFixed(2) + "%");
console.log("Goal Reached:", counter.goalReached());

console.log("\n===== SIMULATION COMPLETED =====");
