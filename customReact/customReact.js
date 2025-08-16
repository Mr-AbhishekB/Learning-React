function customRender(reactElement, container)
{
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.child;

    for (const prop in reactElement.props) {
            domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    child: 'Click to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)
