import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "screens/DoorSelect.tsx"),
    route("/landing", "screens/LandingPage.tsx"),
    route("/manual", "screens/ManualControl.tsx"),
    route("/sensor", "screens/SensorView.tsx"),
    route("/constants", "screens/ConstantsDefinition.tsx"), 
] satisfies RouteConfig;
