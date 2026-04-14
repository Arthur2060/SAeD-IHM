import { useState } from "react";
import { useNavigate } from "react-router";
import * as ROSLIB from "roslib";

export default function LandingPage() {
    const [distance, setDistance] = useState(0);
    const [angle, setAngle] = useState(0);

    let navigate = useNavigate();

  const port = localStorage.getItem("port");
  const ros = new ROSLIB.Ros({ url: `ws//localhost:${port}` });
  const radar_listener = new ROSLIB.Topic({
    ros,
    name: "/radar",
    messageType: "saed_interfaces/Radar",
  });

  ros.on("connection", () => {
    window.alert("Conexão com ROS bem sucedida! Bem-Vindo");
  });

  ros.on("close", () => {
    window.alert("Conexão com ROS interrompida... Adeus!");
    navigate("/");
  });

  radar_listener.subscribe((message: any) => {
    setDistance(message.distance);
    setAngle(message.angle);
  })

  return( 
  <>
    <header>
        <h1 className="impact-text"></h1>    
    </header>  
  </>);
}
