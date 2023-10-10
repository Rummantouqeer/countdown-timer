import { DateTime } from 'luxon';
import inquirer from 'inquirer';
function countdown_timer(target_date) {
    const current_time = DateTime.now();
    const time_difference = target_date.diff(current_time);
    if (time_difference.milliseconds <= 0) {
        console.log('Countdown complete!');
        return;
    }
    console.log(`Time remaining: ${time_difference.days} days, ${time_difference.hours} hours, ${time_difference.minutes} minutes, and ${time_difference.seconds} seconds.`);
    setTimeout(() => {
        countdown_timer(target_date);
    }, 1000);
}
inquirer
    .prompt([
    {
        type: 'input',
        name: 'target_date',
        message: 'Enter the target date (YYYY-MM-DD):',
    },
])
    .then((answers) => {
    const target_date = DateTime.fromISO(answers.target_date);
    countdown_timer(target_date);
});
