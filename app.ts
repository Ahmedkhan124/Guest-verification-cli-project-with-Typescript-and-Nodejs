import inquirer from "inquirer"

// printing message before starting the program
console.log("welcome to khan house");

// if condition is true,
let condition = true;

let guestInvited: string[] = ['ahmed', 'alam', 'arbaz', 'ali','zainab','rida', 'asiya'];

// using while loop
while(condition){

    // asking question from the user to enter the name of a guest
    let anser = await inquirer.prompt(
        [
            {
                name: "user",
                type: "input",
                message:" Please enter your name?"

            }
        ]
    );

    // store the answer of the user in a guest variable.
    let guest = anser.user;

    let lowerGuestName = guest.toLowerCase();

    // checking if the guest is in the list or not
    if(guestInvited.includes(lowerGuestName)){
     console.log(`Mr ${guest}, you are in my guests list thank you!`);
     condition = false;
    }
    else{
        console.log(`Ops! Mr ${guest}, your name is not present in my guest list\n`);

   // asking again from user to enter another username 
    let askAgain = await inquirer.prompt(
            [
                {
                    type: "confirm",
                    name: "user2",
                    message: "Do you want to enter another name?",
                    default: false
                }
            ]
        );

    if(askAgain.user2 === false){
     condition = false;

   // printing message to the last of the program
      console.log("Sorry! you are not allowed to enter the name again. Thank you.");
            
        }
    }
}







