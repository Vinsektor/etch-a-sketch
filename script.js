DEFAULT_SIZE = 16;

const container = document.querySelector('.container');

function grid(n) {
    const row = document.createElement('div');

    for (let i = 0; i < n; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        row.appendChild(item);
    }

    for (let i = 0; i < n; i++) {
        const newRow = row.cloneNode(row);
        newRow.classList.add('row');
        container.appendChild(newRow);
    }

    const allDivs = container.querySelectorAll('div');
    allDivs.forEach((oneDiv) => oneDiv.addEventListener('mouseover', (e) => { e.target.classList.add('painted'); }));
}

grid(DEFAULT_SIZE);
