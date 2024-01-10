function clearElement(element) {
    const prev = element.querySelectorAll('*');
    if (prev !== null) {
        prev.forEach((elmt) => elmt.remove());
    }
}

function capitalize(word) {
    const str2 = word.charAt(0).toUpperCase() + word.slice(1);
    return str2;
}

export { clearElement, capitalize };
