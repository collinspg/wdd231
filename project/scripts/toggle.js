document.addEventListener('DOMContentLoaded', () => {
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const productGrid = document.getElementById('productGrid');
    const serviceGrid = document.getElementById('serviceGrid');

    gridViewButton.addEventListener('click', () => {
        productGrid.classList.remove('list-view');
        serviceGrid.classList.remove('list-view');
    });

    listViewButton.addEventListener('click', () => {
        productGrid.classList.add('list-view');
        serviceGrid.classList.add('list-view');
    });
});
