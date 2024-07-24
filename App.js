/*
<div id="parent">
    <div id="child">
    <h1>I am h1 tag</h1>
    <h1>I am h2 tag</h1>
    </div>
    <div id="child2">
    <h1>I am h1 tag</h1>
    <h1>I am h2 tag</h1>
    </div>

</div>


*/

//React element is an object
// createlement is creating an object
// when ur render its getting converted into html

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h3 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h3 tag"),
    ]),
]);



// created h1 tag using createelement

// 2 nd is attributes
// 3rd one is children
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

console.log(parent); // its just returns object

// get root by using reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// thats why jsx exist , if u write code like this is looks more complicated
