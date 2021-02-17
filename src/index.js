import Apple from "./test"
import Banana from "./app.jsx"
import ReactDOM from "react-dom"
import "./style.sass"

console.log(Apple())
ReactDOM.render(
    Banana(),
    document.getElementById("root")
)
