import React from "react" // not manditory
import {createContext} from "react"

const ThemeContext = createContext(["light", () => {}]);

export default ThemeContext;