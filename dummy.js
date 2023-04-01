function handleMouseOver() {
    const elem = item.querySelectorAll(".word");
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: elem.length > 100 ? 0.02 : 0.03,
        duration: elem.length > 100 ? 0.65 : 0.75,
        ease: "easeOut",
    });
}

function handleMouseLeave() {
    const elem = item.querySelectorAll(".word");

    gsap.to(elem, {
        yPercent: -100,
        opacity: 0,
        rotateX: 90,
        stagger: elem.length > 100 ? 0.02 : 0.03,
        duration: elem.length > 100 ? 0.35 : 0.4,
        ease: "easeIn",
    });
}

if (SCNime) {
    SCNime.addEventListener("mouseover", handleMouseOver);
} else {
    SCNime.addEventListener("mouseleave", handleMouseLeave);
}

// 1
// mOver.forEach((item) => {
//     const line = Splitting({
//         target: item,
//         by: "lines",
//     });
//     line.forEach((splitResult) => {
//         const wrappedLines = splitResult.words
//             .map(
//                 (wordsArr) => `
//                    <span class="word_wrap">
//                          ${wordsArr.outerHTML}
//                     </span>`
//             )
//             .join("");
//         splitResult.el.innerHTML = wrappedLines;
//     });

//     gsap.set(item.querySelectorAll(".word"), {
//         yPercent: 105,
//         opacity: 0,
//         rotateX: 50,
//         transformStyle: "preserve-3d",
//     });

//     SCNime.addEventListener("mouseover", () => {
//         const elem = item.querySelectorAll(".word");
//         gsap.to(elem, {
//             yPercent: 0,
//             opacity: 1,
//             rotateX: 0,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.65 : 0.75,
//             ease: "easeOut",
//         });
//     });

//     SCNime.addEventListener("mouseleave", () => {
//         const elem = item.querySelectorAll(".word");

//         gsap.to(elem, {
//             yPercent: -100,
//             opacity: 0,
//             rotateX: 90,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.35 : 0.4,
//             ease: "easeIn",
//         });
//     });
// });
// 2
// mOverr.forEach((item) => {
//     const line = Splitting({
//         target: item,
//         by: "lines",
//     });
//     line.forEach((splitResult) => {
//         const wrappedLines = splitResult.words
//             .map(
//                 (wordsArr) => `
//                    <span class="word_wrap">
//                          ${wordsArr.outerHTML}
//                     </span>`
//             )
//             .join("");
//         splitResult.el.innerHTML = wrappedLines;
//     });

//     gsap.set(item.querySelectorAll(".word"), {
//         yPercent: 105,
//         opacity: 0,
//         rotateX: 50,
//         transformStyle: "preserve-3d",
//     });

//     SCNimee.addEventListener("mouseover", () => {
//         const elem = item.querySelectorAll(".word");
//         gsap.to(elem, {
//             yPercent: 0,
//             opacity: 1,
//             rotateX: 0,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.65 : 0.75,
//             ease: "easeOut",
//         });
//     });

//     SCNimee.addEventListener("mouseleave", () => {
//         const elem = item.querySelectorAll(".word");

//         gsap.to(elem, {
//             yPercent: -100,
//             opacity: 0,
//             rotateX: 90,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.35 : 0.4,
//             ease: "easeIn",
//         });
//     });
// });
// 3
// mOverrr.forEach((item) => {
//     const line = Splitting({
//         target: item,
//         by: "lines",
//     });
//     line.forEach((splitResult) => {
//         const wrappedLines = splitResult.words
//             .map(
//                 (wordsArr) => `
//                    <span class="word_wrap">
//                          ${wordsArr.outerHTML}
//                     </span>`
//             )
//             .join("");
//         splitResult.el.innerHTML = wrappedLines;
//     });

//     gsap.set(item.querySelectorAll(".word"), {
//         yPercent: 105,
//         opacity: 0,
//         rotateX: 50,
//         transformStyle: "preserve-3d",
//     });

//     SCNimeee.addEventListener("mouseover", () => {
//         const elem = item.querySelectorAll(".word");
//         gsap.to(elem, {
//             yPercent: 0,
//             opacity: 1,
//             rotateX: 0,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.65 : 0.75,
//             ease: "easeOut",
//         });
//     });

//     SCNimeee.addEventListener("mouseleave", () => {
//         const elem = item.querySelectorAll(".word");

//         gsap.to(elem, {
//             yPercent: -100,
//             opacity: 0,
//             rotateX: 90,
//             stagger: elem.length > 100 ? 0.02 : 0.03,
//             duration: elem.length > 100 ? 0.35 : 0.4,
//             ease: "easeIn",
//         });
//     });
// });
