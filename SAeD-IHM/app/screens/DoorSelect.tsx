import { useState } from "react";
import { useNavigate } from "react-router";
import "../app.css";

export default function DoorSelect() {
    const [port, setPort] = useState(0);

    let navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem("port", port.toString());
        setPort(0);

        return navigate("/landing");
    }

    const handlePort = (event: any) => {
        setPort(event.target.value);
    }

  return (
    <>
      <div className="w-full h-screen bg-(--terciary-color) grid place-items-center">
        <form className="flex flex-col rouded-sm size-fit bg-(--primary-color) text-(--terciary-color)">
          <h1 className="text-center font-bold">Informe a porta aqui:</h1>
          <input
            type="number"
            placeholder="9090"
            value={port}
            onChange={handlePort}
            className="bg-(--terciary-color) text-(--secondary-color) text-center"
            required
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-(--terciary-color) text-(--secondary-color) rounded-xs"
          >
            Conectar
          </button>
        </form>
      </div>
    </>
  );
}
