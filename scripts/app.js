function initializeLiquidGL() {
    glassEffect = LiquidGL({
        snapshot: "body",
        target: ".liquid",
        refraction: 0.01,
        bevelDepth: 0.01,
        bevelWidth: 0.10,
        frost: 8,
        shadow: true,
        specular: true,
        reveal: "fade",
    });
}

let glassEffect; 

document.addEventListener("DOMContentLoaded", () => {
    initializeLiquidGL(); // Call immediately on DOM ready      
});