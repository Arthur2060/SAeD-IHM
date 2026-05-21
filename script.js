let urlServer = "";
let map = [[]];

const CONNECT_BTN = document.querySelector("#connect-btn");
const UPDATE_TARGET_INPUT_X = document.querySelector("#update-target-input-x");
const UPDATE_TARGET_INPUT_Y = document.querySelector("#update-target-input-y");
const UPDATE_TARGET_BTN = document.querySelector("#update-target-btn");

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

async function updateTarget(params) {
    const resp = await fetch(`http://${urlServer}/target`, {
        method: "PUT",
        headers: {"Content-type": "document/json"},
        body: { UPDATE_TARGET_INPUT_X, UPDATE_TARGET_INPUT_Y }
    });

    if (!resp.ok) {
        window.alert("Erro ao se conectar com o robô!");
    }
}