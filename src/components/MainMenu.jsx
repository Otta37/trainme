import { TabMenu } from "primereact/tabmenu";
import { useNavigate } from "react-router-dom";
import { UtenteContext } from "../stores/UtenteContext";
import { useContext, useState } from "react";

function MainMenu() {
  const { index, setIndex } = useContext(UtenteContext);

  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/home"),
    },
    {
      label: "Le mie schede",
      icon: "pi pi-fw pi-calendar",
      command: () => navigate("/schede"),
    },
  ];

  return (
    <TabMenu
      model={items}
      activeIndex={index}
      onTabChange={(e) => setIndex(e.index)}
    />
  );
}

export default MainMenu;
