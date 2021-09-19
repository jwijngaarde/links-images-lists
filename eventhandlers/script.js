mybutton.addEventListener(
    "click",
    function() {
        alert("button clicked");
    },
    true
);

mybutton2.addEventListener(
    "click",
    function choice() {
        this.classList.toggle("blue-background");
        this.classList.toggle("red-background");
    },
    true
);
