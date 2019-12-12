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

    const shoot = (x, y) => {
        const coordinate = `${x} ${y}`
        SOCKET.emit('shoot', coordinate);
    };

    let turn = true;
    $('#enemy_field').on('click', (event) => {
        if (turn) {
            turn = false;
            const $td = $(event.target).closest('td');
            const $tr = $(event.target).closest('tr')
            const x = $tr[0].rowIndex;
            const y = $td[0].cellIndex;
            console.log($td, y);
            console.log($tr, x);
            shoot(x, y);
        }
        
    });
})();