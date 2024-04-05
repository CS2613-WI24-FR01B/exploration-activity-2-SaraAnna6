const fs = require('fs');
const bcrypt = require('bcrypt');


const inputFilePath = 'passwords.txt';
const passwords = fs.readFileSync(inputFilePath, 'utf-8').split('\n').map(password => password.trim());


const saltRounds = [8, 10, 12]; // number of salt rounds used to make the hashed password the highre the more secure the password.And the longer it takes to encrypt


const hashedPasswords = {};// Object to store hashed passwords, parse later with JSON


saltRounds.forEach(saltRound => {
  passwords.forEach((password, index) => {
    if (!hashedPasswords[index]) {
        hashedPasswords[index] = {};
    }
    console.time(`Hashing password ${index + 1} with ${saltRound} salt rounds`);
    bcrypt.hash(password, saltRound, (err, hash) => {

      console.timeEnd(`Hashing password ${index + 1} with ${saltRound} salt rounds`);
      hashedPasswords[index][saltRound] = hash;
      if (index === passwords.length - 1 && saltRound === saltRounds[saltRounds.length - 1]) {
        // Write hashed passwords to output file
        const outputFilePath = 'hashed_passwords.txt';
        fs.writeFileSync(outputFilePath, JSON.stringify(hashedPasswords, null, 1), { flag: 'w' });

      }
    });
  });
});
