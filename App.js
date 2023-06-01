require("./App.css");
var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdom = require("react-dom");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








function $c2c9ca6bd7831966$export$43660d87cb080eb(propIsDark, propSetIsDark, styleRoot) {
    var sheet = document.styleSheets[0];
    console.log(propIsDark);
    console.log(propSetIsDark);
    if (propIsDark.propIsDark === true) {
        document.documentElement.style.setProperty("--backgroundWhite", "#303030");
        document.documentElement.style.setProperty("--defaultBlack", "#FFFFFF");
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "modes",
            onClick: ()=>{
                console.log("A");
                propIsDark.propSetIsDark(false);
            },
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                    children: "Modo claro"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    alt: "imagen_sol",
                    id: "sol"
                })
            ]
        });
    } else if (propIsDark.propIsDark === false) {
        document.documentElement.style.setProperty("--backgroundWhite", "#D9D9D9");
        document.documentElement.style.setProperty("--defaultBlack", "#000000");
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "modes",
            onClick: ()=>{
                propIsDark.propSetIsDark(true);
            },
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                    children: "Modo oscuro"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    alt: "imagen_luna",
                    id: "luna"
                })
            ]
        });
    }
}


function $702dc9f8a79b028d$var$padTime(time) {
    return time.toString().padStart(2, "0");
}
const $702dc9f8a79b028d$var$Pomodoro = (styleRoot)=>{
    const [title, setTitle] = (0, $9WItx$react.useState)("Cron\xf3metro");
    const [timeLeft, settimeLeft] = (0, $9WItx$react.useState)(1500);
    const [isRunning, setisRunning] = (0, $9WItx$react.useState)(false);
    const [isDark, setIsDark] = (0, $9WItx$react.useState)(false);
    const minutes = $702dc9f8a79b028d$var$padTime(Math.floor(timeLeft / 60));
    const seconds = $702dc9f8a79b028d$var$padTime(Math.floor(timeLeft - minutes * 60));
    const startTimer = ()=>{
        setTitle("Concentrate!!");
        setisRunning(true);
    };
    const stopTimer = ()=>{
        setTitle("Esperamos...");
        setisRunning(false);
    };
    const resetTimer = ()=>{
        setTitle("Inicia el contador para comenzar");
        setisRunning(false);
        settimeLeft(1500);
    };
    (0, $9WItx$react.useEffect)(()=>{
        let interval;
        if (isRunning) interval = setInterval(()=>{
            settimeLeft((time)=>{
                return time - 1;
            });
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        isRunning
    ]);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $c2c9ca6bd7831966$export$43660d87cb080eb), {
                propSetIsDark: setIsDark,
                propIsDark: isDark,
                styleRoot: styleRoot
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                children: title
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                        className: "textSpan",
                        children: minutes
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                        className: "textSpan",
                        children: ":"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                        className: "textSpan",
                        children: seconds
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "buttons-container",
                children: [
                    !isRunning && /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        onClick: startTimer,
                        children: "Iniciar"
                    }),
                    isRunning && /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        onClick: stopTimer,
                        children: "Detener"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        onClick: resetTimer,
                        children: "Resetear"
                    })
                ]
            })
        ]
    });
};
var $702dc9f8a79b028d$export$2e2bcd8739ae039 = $702dc9f8a79b028d$var$Pomodoro;


const $da11a1101b2a894a$var$styleRoot = document.querySelector(":root");
const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $702dc9f8a79b028d$export$2e2bcd8739ae039), {
        styleRoot: $da11a1101b2a894a$var$styleRoot
    });
};
(0, $9WItx$reactdom.render)(/*#__PURE__*/ (0, ($parcel$interopDefault($9WItx$react))).createElement($da11a1101b2a894a$var$App), document.getElementById("root"));


//# sourceMappingURL=App.js.map
