import { TabMenu } from "primereact/tabmenu"

function MainMenu() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Le mie schede', icon: 'pi pi-fw pi-calendar'}
    ];

    return (
        <TabMenu model={items} />
    )
}

export default MainMenu;

