const reactElement = {
  type: "a",
  props: {
    href: "http://www.google.com",
    target: "_blank",
  },
  children: "Click to visit Haven",
};

const reactContainer = document.getElementById("root");

// react container is needed to show the place where data will be displayed.
// meathod--> which will have what to display,where to display
//<a href="google.com">gooogle click me</a>
