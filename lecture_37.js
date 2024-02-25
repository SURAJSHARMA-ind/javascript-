//.............................'beforeEnd''afterEnd''beforeBegin''afterBegin' .remove()................................


let first = document.getElementById("first")

first.insertAdjacentHTML('beforeend',`<div id ="test"> I am before end</div> `);

first.insertAdjacentHTML('beforebegin', '<div class="test">I am beforebegin</div>');

first.insertAdjacentHTML('afterend',"<h1>I am after end </h1>")

first.insertAdjacentHTML("afterbegin","<h1>I am after begin</h1>")

// first.remove(); // to remove node









