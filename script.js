// Attach the draggable and droppable events to the divs.
document.querySelectorAll(".draggable").forEach(div => {
  div.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/html", div.innerHTML);
  });

  div.addEventListener("drop", e => {
    const draggedDiv = e.target;
    const droppedDiv = div;

    // Swap the contents of the dragged and dropped divs.
    draggedDiv.innerHTML = droppedDiv.innerHTML;
    droppedDiv.innerHTML = e.dataTransfer.getData("text/html");
  });
});
