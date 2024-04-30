// what to make in a customReact
// 1. a hyper link displaying to visit site and a h1 tag saying this is made to enhance custom customReact
// 2. for hyper link we need a elemet a tag  and for h1 tag we need h tag
// 3. we have to make a place where to display  instanceof
// 4. a method to how to display it
// 5.a funtion to make the funtioning of the tag displayed

function customRender(reactElement, customContainer) {
  const domEle = document.createElement(reactElement.type);
  domEle.innerHTML = reactElement.children;
  domEle.setAttribute("href", reactElement.props.href);
  customContainer.appendChild(domEle);
}

const reactElement = {
  type: "a",
  props: {
    href: "htttp//www.google.com",
  },
  children: "Click here",
};

const customContainer = document.querySelector("#root");

customRender(reactElement, customContainer);
