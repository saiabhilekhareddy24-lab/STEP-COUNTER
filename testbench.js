const StepCounter = require("./stepCounter");

function testStepCounter() {
console.log("===== STEP COUNTER TESTBENCH =====");

const counter = new StepCounter(10000);

// Test 1: Initial step count
console.log("\nTest 1: Initial Steps");
console.log("Expected: 0");
console.log("Actual:", counter.getSteps());

// Test 2: Add steps
console.log("\nTest 2: Add Steps");
counter.addSteps(3000);
console.log("Expected: 3000");
console.log("Actual:", counter.getSteps());

// Test 3: Add more steps
console.log("\nTest 3: Add More Steps");
counter.addSteps(4000);
console.log("Expected: 7000");
console.log("Actual:", counter.getSteps());

// Test 4: Check goal
console.log("\nTest 4: Daily Goal");
console.log("Expected: false");
console.log("Actual:", counter.goalReached());

// Test 5: Reach goal
console.log("\nTest 5: Reach Daily Goal");
counter.addSteps(3000);
console.log("Expected: 10000");
console.log("Actual:", counter.getSteps());
console.log("Goal Reached:", counter.goalReached());

// Test 6: Reset
console.log("\nTest 6: Reset Counter");
counter.reset();
console.log("Expected: 0");
console.log("Actual:", counter.getSteps());

console.log("\n===== TESTBENCH COMPLETED =====");


}

testStepCounter();
