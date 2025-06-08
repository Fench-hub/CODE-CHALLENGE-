const readline = require('readline');

function calculateChaiIngredients() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (answer) => {
        let numberOfCups = Number(answer);
        // Constants for ingredients per cup
        const waterPerCup = 200; // ml
        const milkPerCup = 50; // ml
        const teaLeavesPerCup = 1; // tablespoons
        const sugarPerCup = 2; // teaspoons
        // Calculate total ingredients
        let totalWater = numberOfCups * waterPerCup;
        let totalMilk = numberOfCups * milkPerCup;
        let totalTeaLeaves = numberOfCups * teaLeavesPerCup;
        let totalSugar = numberOfCups * sugarPerCup;
        // Output results to console
        console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
        console.log(`Water: ${totalWater} ml`);
        console.log(`Milk: ${totalMilk} ml`);
        console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
        console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
        console.log("Enjoy your Chai Bora!");
        rl.close();
    });
}

// Call the function to run the program
calculateChaiIngredients();