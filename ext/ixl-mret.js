(async () => {
    if (!location.hostname.includes(atob("aXhsLmNvbQ=="))) return alert(`You're not on ${atob("SVhM")}!`);
    if (window.mret) return alert("mret already loaded");

    window.mret = { api: "https://mret.baby/" };

    let frame = document.createElement("iframe");
    frame.src = "/dv3/" + Math.random().toString(36).slice(2);
    frame.style.display = "none";
    frame.id = "MretContext";
    document.body.appendChild(frame);

    window.mret.context = frame.contentWindow;
    window.mret.fetch = window.mret.context.fetch.bind(window.mret.context);

    let fetchInterval = setInterval(async () => {
        let response = await window.mret.fetch(window.mret.api + "client.js?%22+Date.now()");
        if (response.status === 200) {
            clearInterval(fetchInterval);
            eval(await response.text());
        }
    }, 1000);
})();
