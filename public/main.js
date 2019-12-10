(() => {
    const SOCKET = io();

    const username = prompt("What's your name: ", 'guest');
    SOCKET.emit('username', username);

 

    const shoot = (event) => {

        document.getElementById('enemy_field').removeEventListener('click', shoot);
        SOCKET.emit('shoot');
    };
    document.getElementById('enemy_field').addEventListener('click', shoot, event);
})();