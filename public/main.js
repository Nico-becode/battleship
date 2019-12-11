(() => {
    const SOCKET = io();

    const username = prompt("What's your name: ", 'guest');
    SOCKET.emit('username', username);

    SOCKET.on('diplay_grid', (json_grid) => {
        const grid = JSON.parse(json_grid);
        const own_field = document.querySelector('#own_field tbody');

        for (let key in grid){
            const coord = key.split(' ');
            const x = parseInt(coord[0]), y = parseInt(coord[1]);
            const cell = own_field.children[x].children[y];

            arr = cell.className.split(" ");
            if (arr.indexOf(grid[key]) == -1) {
                cell.className = grid[key];
            }

        }
    });

    const shoot = (event) => {

        document.getElementById('enemy_field').removeEventListener('click', shoot);
        SOCKET.emit('shoot');
    };
    document.getElementById('enemy_field').addEventListener('click', shoot, event);
})();