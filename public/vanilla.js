const counter = document.createElement("button");

let count = 0;

counter.textContent = `Vanilla JS: You clicked the button ${count} times.`;

counter.addEventListener("click", () => {
  // udpate state
  count = count + 1;

  console.log(count);

  // rerender the visual components
  counter.textContent = `Vanilla JS: You clicked the button ${count} times.`;
});

document.body.append(counter);
