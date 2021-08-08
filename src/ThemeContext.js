import { createContext } from "react";
// want to always give default values and we put an empty function as the second param because the 2nd item in an array is always a function (in use State)
const ThemeContext = createContext("green", () => {});

export default ThemeContext;
