async function rewriteCSS(main, callback) {
    if (!main) return;
    let target = "main";
    const CSS_TEXT = await fetch(main, { method: "GET", mode: "cors" }).then(i => i.text()).catch(async () => {
        if (callback) {
            target = "callback";
            return await fetch(callback, { method: "GET", mode: "cors" }).then(i => i.text())
        } else {
            return false;
        };
    });
    const CSS_RESULT = target == "main" ? main.replace(/result\.css$/, "") : callback.replace(/result\.css$/, "");
    document.head.appendChild(
        document.createElement("style")
    ).textContent = CSS_TEXT?.replace(
        /url\(['"]?.\/([^'")]+)['"]?\)/g,
        `url("${CSS_RESULT}$1")`
    );
};

rewriteCSS(
    "https://fontsapi.zeoseven.com/292/main/result.css",
    "https://fontsapi-storage.zeoseven.com/292/main/result.css"
);

/* font-family: "LXGW WenKai" */
