import "bootstrap";
import "./style.css";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "That"];
  let subject = ["clown", "drone", "puppy", "grandma"];
  let action = ["stole", "ate", "hid", "lost", "took"];
  let whose = ["my", "your"];
  let possetion = ["car keys", "tablet", "shoes", "folder"];
  let where = [
    "on the street",
    "in the bus",
    "at the parking lot",
    "in front of my house"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whoseIndex = Math.floor(Math.random() * whose.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    whose[whoseIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
