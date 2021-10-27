let windows: NodeListOf<HTMLDivElement> = document.querySelectorAll("#Desktop10>.Window")
let winSet = new class {
    drag = false
    left = 0
    top = 0
    currentX = 0
    currentY = 0
    obj: HTMLDivElement
    select: string = undefined
}
windows.forEach(obj => {
    const title: HTMLDivElement = obj.querySelector(".Title")
    title.onmousedown = e => {
        if (e.button == 0) {
            winSet.drag = true;
            winSet.obj = obj;
            winSet.left = obj.offsetLeft;
            winSet.top = obj.offsetTop;
            winSet.currentX = e.clientX;
            winSet.currentY = e.clientY;
            winSet.select = "Window"
        }
    }
})
document.addEventListener("mouseup", e => {
    if (winSet.obj && winSet.select == "Window") {
        if (winSet.obj.offsetTop < 0) {
            winSet.obj.style.top = "0px"
        }
    }
    winSet.drag = false
    winSet.obj = winSet.select = undefined
    winSet.left = winSet.top = winSet.currentX = winSet.currentY = 0
})
document.addEventListener("mousemove", e => {
    if (winSet.drag && winSet.obj && winSet.select == "Window") {
        winSet.obj.style.left = (winSet.left + (e.clientX - winSet.currentX)) + "px";
        winSet.obj.style.top = (winSet.top + (e.clientY - winSet.currentY)) + "px";
    }
})