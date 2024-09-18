console.log("Word Counter");
import promptSync from "prompt-sync";
let prompt = promptSync();
while (true) { // using while to make project console interective
  function wordsCounter() {
    let paragraph = prompt("Enter your paragraph: "); // Taking input using prompt 
    let words = paragraph.trim().split(" ");
    console.log(`Total words in your paragraph are: ${words.length}`);
  }
  wordsCounter();
}
