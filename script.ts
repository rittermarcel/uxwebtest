namespace test {
    console.log("haloo");
}
window.addEventListener("load", handleLoad);
function handleLoad(): void {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", buttonOnClick);
}
function buttonOnClick(): void {
    let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");
    text.innerHTML = "Du konntest nicht anders. Du hast den Button geklickt!";
}