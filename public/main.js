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

    SOCKET.on('display_shoot', (json_shot) => {
        const shot = JSON.parse(json_shot);
        display_shot(shot);
    });

    SOCKET.on('your_turn', (json_data) => {
        const data = JSON.parse(json_data);
        turn = data.turn;
    });

    SOCKET.on('enemy_shot', (json_data) => {
        const shot = JSON.parse(json_data);
        const own_field = document.querySelector('#own_field tbody');
        for (let key in shot){
            const coord = key.split(' ');
            const x = parseInt(coord[0]), y = parseInt(coord[1]);
            const cell = own_field.children[x].children[y];
            switch(shot[key]){
                case 'miss':
                    cell.className = 'miss';
                    break;
                case 'destroy':
                    cell.className = 'destroy';
                    break;
            }
        }
    });

    SOCKET.on('win', (name) => {
        alert(`${name} win`);
    });

    const shoot = (x, y) => {
        const coordinate = `${x} ${y}`
        SOCKET.emit('shot', coordinate);
    };

    const display_shot = (shot) => {
        const own_field = document.querySelector('#enemy_field tbody');
        for (let key in shot){
            const coord = key.split(' ');
            const x = parseInt(coord[0]), y = parseInt(coord[1]);
            const cell = own_field.children[x].children[y];
            switch(shot[key]){
                case 'miss':
                    cell.className = 'miss';
                    break;
                case 'destroy':
                    cell.className = 'destroy';
                    break;
            }
        }
    };

    let turn = true;
    $('#enemy_field').on('click', (event) => {
        try {
            
            const $td = $(event.target).closest('td');
            const $tr = $(event.target).closest('tr')
            const x = $tr[0].rowIndex;
            const y = $td[0].cellIndex;
            if (turn) {
                turn = false;
                shoot(x, y);
            }
        }
        catch(e){
            //do nothing
        }
        
        
        
    });
})();