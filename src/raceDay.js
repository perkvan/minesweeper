let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
} else {
  raceNumber;
}

if (runnerAge > 18 && earlyRegister === true) {
  console.log(`Race starts at 9:30 am. Your bib number is ${raceNumber}`);
} else if (runnerAge > 18 && earlyRegister === false) {
  console.log(`Late adults run at 11:00 am. Your bib number is ${raceNumber}`)
} else if (runnerAge = 18) {
  console.log(`Please see the registration desk. We don't understand 18 years old..........`);
} else {
  console.log(`Youth registratns run at 12:30 pm (regardless of registration). Your bib number is ${raceNumber}`);
}
