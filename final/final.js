let volume = 0;
const volSlider = document.getElementById("volume-slider");
const volDisplay = document.getElementById("volDisplay");
const volDisp = document.getElementById("volumeDisp");
const seal = document.getElementById("seal");
const unseal = document.getElementById("unseal");
const cl = document.getElementById("close");
const op = document.getElementById("open");
const vslabel = document.getElementById("vslabel");
const vdlabel = document.getElementById("vdlabel");
const vdslabel = document.getElementById("vdsplabel");
const br1 = document.getElementById("br1");
const br2 = document.getElementById("br2");
let valPrev = 0;
let valNext = 0;
let delta = 0;
let sealed = false;
seal.addEventListener("click", function() {
    sealed = true;
});
unseal.addEventListener("click", function() {
    sealed = false;
});
cl.addEventListener("click", function() {
    volSlider.style.display = "none";
    volDisplay.style.display = "none";
    volDisp.style.display = "none";
    seal.style.display = "none";
    unseal.style.display = "none";
    cl.style.display = "none";
    op.style.display = "inline-block";
    vslabel.style.display = "none";
    vdlabel.style.display = "none";
    vdslabel.style.display = "none";
    br1.style.display = "none";
    br2.style.display = "none";
});
op.addEventListener("click", function() {
    volSlider.style.display = "";
    volDisplay.style.display = "";
    volDisp.style.display = "";
    seal.style.display = "";
    unseal.style.display = "";
    cl.style.display = "";
    op.style.display = "";
    vslabel.style.display = "";
    vdlabel.style.display = "";
    vdslabel.style.display = "";
    br1.style.display = "";
    br2.style.display = "";
});
function loop() {
    valNext = volSlider.value;
    delta = valNext - valPrev;
    if (!sealed) {
        if (delta < 0) {
            volume += (-delta) / 30;
        }
        if (volume < 0) {
            volume = 0;
        }
        else if (volume > 100) {
            volume = 100;
        }
        //console.log(document.getElementById("a").value);
        volDisplay.innerText = volume;
        volDisp.value = volume;
        volume -= 0.2
    }
    valPrev = valNext;



    requestAnimationFrame(loop);
}
loop();