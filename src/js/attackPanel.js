export default function attackPanel(obj) {
    const { special } = obj;
    const panel = [];
    for (const {
        id, name: specialName, icon, description = 'Описание недоступно',
    } of special) {
        panel.push({
            id,
            name: specialName,
            icon,
            description,
        });
    }

    return panel;
}
