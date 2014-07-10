var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var name = prompt('Hello! What is your name? ');

var home = [];
var play = [];
var school = [];

console.log(chalk.red("Welcome to "+name+"'s Task Manager!"));
var response = prompt('Which category would you like to edit: (h)ome, (p)lay, (s)chool, or (q)uit and view your tasks? ');

while(response != 'q'){
  if(response ==='h'){
    var addH = prompt(chalk.green('Add to home: '));
    home.push(addH);
    response = prompt('What next? (h,p,s,q): ');
  }
  if(response === 'p'){
    var addP = prompt(chalk.magenta('Add to play: '));
    play.push(addP);
    response = prompt('What next? (h,p,s,q): ');
  }
  if(response === 's'){
    var addS = prompt(chalk.blue('Add to school: '));
    school.push(addS);
    response = prompt('What next? (h,p,s,q): ');
  }
}

if(response === 'q'){
  console.log(chalk.red(name+"'s Task Manager"));
  console.log(chalk.green('Home: '+home));
  console.log(chalk.magenta('Play: '+play));
  console.log(chalk.blue('School: '+school));
}
