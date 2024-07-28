
// import io from 'socket.io-client';

// const SOCKET_URL = 'http://192.168.100.12:5000/createRoom'; // Replace with your server URL

// class SocketService {
//   constructor() {
//     this.socket = io(SOCKET_URL, {
//       transports: ['websocket'], // Use WebSocket for better performance
//     });
//   }

//   connect() {
//     this.socket.connect();
//   }

//   disconnect() {
//     this.socket.disconnect();
//   }

//   on(event, callback) {
//     this.socket.on(event, callback);
//   }

//   emit(event, data) {
//     this.socket.emit(event, data);
//   }
// }

// export default new SocketService();