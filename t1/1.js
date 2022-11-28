const div = document.querySelector('#target');
const html =
    `<ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        </ul>`;
div.classList.add('my-list')
div.innerHTML = html;
