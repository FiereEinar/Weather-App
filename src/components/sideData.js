export default function sideDataCard(element, parent, data) {
    element.innerHTML = `
        <img src="${data.icon}">
        <div>
            <p>${data.title}</p>
            <h4>${data.info}</h4>
        </div>
    `;
    parent.appendChild(element);
}
