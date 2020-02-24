const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subsriptions = {};
channel.setMaxListeners(50); //设置最大监听器数量
channel.on('join', function(id, client){ //on方法添加监听器响应join事件
    this.clients[id] = client; //保存用户信息
    this.subsriptions[id] = (senderId, message) => {
        if(id != senderId){
            this.clients[id].write(message);
        }
    };
    this.on('bordercast', this.subsriptions[id]); //当用户join后，添加对此用户bordercast事件监听器

    const welcome = `Welcome! Guest online: ${this.listeners('bordercast').length}`;
    client.write(`${welcome}\n`);
});
channel.on('leave', function(id){ //创建leave事件监听器
    channel.removeListener( //移除指定客户端的bordercast监听器
        'bordercast',
        this.subsriptions[id]
    );
    channel.emit(
        'bordercast', id, `${id} has left the chatroom.\n`
    );
});
channel.on('shutdown', () => {  //创建shutdown事件监听器
    channel.emit('bordercast', '', '\nThe server has shut down.\n');
    channel.removeAllListeners('bordercast');  //移除所有客户端连接
});

const server = net.createServer(client => { //创捷服务器
    const id = `${client.remoteAddress}:${client.remotePort}`;
    channel.emit('join', id, client); //发出join事件
    client.on('data', data => {
        data = data.toString();
        if(data === 'shutdown'){
            channel.emit('shutdown');
        }
        channel.emit('bordercast', id, data); //发出bordercast事件
    });

    client.on('close', () => {
        channel.emit('leave', id);
    });
});
server.listen(8888);