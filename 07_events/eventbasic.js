// document.querySelector("#owl").onclick = () => {
//   alert("Owl clicked");
// }; the above approach is old we will not use this much


// notes
// type , timestamp, defaultPrevented 
// target, srcElement, toElement, currentTarget
// clientX, clientY, screenX, screenY, offset
// altkey, ctrlkey, shiftkey, keyCode

document.querySelector("#images").addEventListener('click',(e)=>{
    console.log("cliked inide ul ");

})
document.querySelector("#owl").addEventListener('click',(e)=>{
    e.stopPropagation();  //stops event bubbling
    console.log("owl clicked");
 },false)    // the parameter is false its by default hence most people dont write it but some application needs third paramter value false and true to run


 document.querySelector("#google").addEventListener('click',(e)=>{
    e.preventDefault(); //prevents the default event
    e.stopPropagation();
    console.log("clicked google")
 })


 document.querySelector("#images").addEventListener('click',(e)=>{
    console.log(e.target.parentNode);
    console.log(e.target);
    if(e.target.id==="owl") {
        // document.body.style.backgroundColor="blue";
    }
    else{
        document.body.style.backgroundColor="#414141";
    }
 });

document.querySelector("#images").addEventListener('click', (e) => {
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    removeIt.parentNode.removeChild(removeIt); //same method as above  /
});