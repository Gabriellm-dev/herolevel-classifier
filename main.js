const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your XP: ', (xp) => {
        xp = parseInt(xp);

        let level = '';

        if (xp < 1000) {
            level = 'iron';
        } else if (xp >= 1001 && xp < 2000) {
            level = 'bronze';
        } else if (xp >= 2001 && xp < 5000) {
            level = 'silver';
        } else if (xp >= 5001 && xp < 7000) {
            level = 'gold';
        } else if (xp >= 7001 && xp < 8000) {
            level = 'platinum';
        } else if (xp >= 8001 && xp < 9000) {
            level = 'ascending';
        } else if (xp >= 9001 && xp < 10000) {
            level = 'immortal';
        } else if (xp >= 10001) {
            level = 'radiant';
        } else {
            console.log('Invalid XP.');
            rl.close();
            return;
        }

        console.log(`The Hero named **${name}** is at **${level}**`);
        rl.close();
    });
});
