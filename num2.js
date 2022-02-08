let allemail = ["mail1@mail.ru", "mail2@mail.ru", "mail3@mail.ru", "mail4@mail.ru", "mail5@mail.ru", "mail6@mail.ru", "mail7@mail.ru"]
let blackemail = ["mail5@mail.ru", "mail6@mail.ru", "mail7@mail.ru"]

function filter(allemail, blackemail) {
let getEmails = [];
  for (email of allemail) {
    for (black of blackemail) {
       if (black.length == email.length) {
            console.log("email в Черном списке"); 
            break;
       } else if (!getEmails.includes(email)) {
        getEmails.push(email);
       }
     } 
  }
  console.log(getEmails);
}

filter(allemail, blackemail);
