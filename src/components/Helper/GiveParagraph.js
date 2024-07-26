import { useSelector } from "react-redux";
import { word } from "../../TextData/TextData";


export default function GiveParagraph(text) {

  if (text == "hard") {
    const randomNumber = Math.floor(Math.random() * word.hard.length);
    return word.hard[randomNumber];
  } else if (text == "normal") {
    const randomNumber = Math.floor(Math.random() * word.normal.length);
    return word.normal[randomNumber];
  } else {
    const randomNumber = Math.floor(Math.random() * word.easy.length);
    return word.easy[randomNumber];
  }
}
