let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportIvan = {...passport};
passportIvan.name = "Ivan";

console.log(passportIvan.name);
console.log(passport.name);