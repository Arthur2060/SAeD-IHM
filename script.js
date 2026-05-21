let urlServer = "";
let map = [[]];

const CONNECT_BTN = document.querySelector("#connect-btn");

CONNECT_BTN.addEventListener("click", (event) => {
    event.preventDefault();
    urlServer = CONNECT_BTN.value;
    


    CONNECT_BTN.value = "";
});

async function getMap() {
    const resp = await fetch(`http://${urlServer}/map`);

    if (!resp.ok) {
        window.alert("Erro ao se conectar com o robô!");
    }

    const data = await resp.json();

    let actualLine = 0;
    let actualCollumn = 0;

    data.array.forEach(line => {
        actualLine++;
        map.length = actualLine;
        line.forEach(cell => {
            map[actualLine][actualCollumn] = cell;
        });
        actualCollumn++;
    });
}