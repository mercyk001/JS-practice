function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Kmph = 1;
    const maxDemeritPoints = 12;

    console.log(`Speed: ${speed}`); 

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Demerit Points: ${demeritPoints}`); 
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}


const speed = 80; 
speedDetector(speed);