import React from "react";
import Loading from "../../components/Loading";
import SettingsGuest from "./SettingsGuest";
import SettingsUser from "./SettingsUser";

export default function SettingsScreen() {
  const userLogg = false;

  //if (!userLogg) return <Loading isVisible={true} text="Cargando..." />

  return userLogg ? <SettingsUser/> : <SettingsGuest/>;
}
