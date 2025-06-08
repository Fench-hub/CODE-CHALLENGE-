// Use readline for Node.js input
const readline = require('readline');

function calculateBodaFare() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Unafika wapi Mkubwa? Kilometer ngapi?: ', (answer) => {
        let distanceInKm = Number(answer);
        const baseFare = 50;
        const chargePerKm = 15;
        let totalFare = baseFare + (distanceInKm * chargePerKm);
        console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
        console.log(`Total: KES ${totalFare}`);
        console.log('Panda Pikipiki!');
        rl.close();
    });
}

// Call the function to run the program
calculateBodaFare();