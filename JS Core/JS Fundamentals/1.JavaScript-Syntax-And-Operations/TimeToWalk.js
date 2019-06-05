function solve(steps, footprints, kmPerHour) {
    let distance = (steps * footprints) / 1000;
    let rest = Math.floor((distance * 1000) / 500);

    let timeInSeconds = Math.ceil((distance / kmPerHour) * 60 * 60) + (rest * 60);

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60);
    timeInSeconds -= minutes * 60;

    let result = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + timeInSeconds).slice(-2);
    console.log(result);
}

solve(4000, 0.60, 5);