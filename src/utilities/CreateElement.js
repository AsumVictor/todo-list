export const createElement = (element, id ,actionType, action, content) => {
    let el = document.createElement(element);
    el.innerHTML = content
    el.id = id;
    el.addEventListener(`${actionType}`, action)
    return el
    }