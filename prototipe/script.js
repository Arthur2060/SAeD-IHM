let ws;

document.getElementById("connect-btn").addEventListener("click", tryToConnect);

const tryToConnect = () => {
    let urlServer = document.getElementById("server-url").value;

    ws = new WebSocket(`ws://${urlServer}/ws`);

    ws.addEventListener("open", (event) => {
        window.alert("Conexão WEB Socket bem sucedida!");
    });

    ws.addEventListener("message", (event) => {
        const resp = JSON.parse(event.data);

        document.getElementById("message-content").innerText = resp.msg;
    });

    ws.addEventListener("close", (event) => {
        window.alert("Conexão WEB Socket descontinuada...");
    });
}