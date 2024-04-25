# Readings: Socket.io

## Introduction

Socket.io is a JavaScript library that enables real-time, bidirectional communication between web clients and servers over the WebSocket protocol.

## Reading

### Web Sockets

- A Web Socket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection between the client and the server.
- During the Web Socket handshake, the client sends an HTTP upgrade request to the server, indicating its desire to upgrade the connection to a WebSocket. Once the server accepts the request, the connection is established, and both parties can send data back and forth.
- Web Sockets provide a standardized way for the server to send content to a client without first receiving a request from that client.

### Socket.io Tutorial

- The event handler `io.on()` in Socket.io is used to listen for incoming events on the server-side. It allows developers to define actions to be taken when specific events occur.
- Possible proof of life or proof that the code works as expected in Socket.io can include logging messages to the console, emitting events to clients, and handling client interactions.
- `socket.emit()` in Socket.io is used to emit events from the server to the client. It sends a specified event along with optional data to the connected client.

### Socket.io vs Web Sockets

- WebSocket is a communication protocol, while Socket.IO is a library that provides WebSocket-like functionality along with additional features such as automatic reconnection, broadcasting, and room support.
- Socket.IO is typically used when developers need a robust, cross-browser solution for real-time communication with features like fallback mechanisms and auto-reconnection. WebSocket is suitable for scenarios where a simple, low-level communication protocol is sufficient.

### Videos

#### OSI Model Explained

- Key takeaways from this video include understanding the layers of the OSI model, their functionalities, and how data flows through the network stack.

#### TCP Handshakes Explained

- In simple terms, the TCP handshake is like a conversation starter between two devices on a network. It involves a series of steps to establish a connection, including sending synchronization packets and acknowledging them.

### Bookmark and Review

- [Socket.io Documentation](https://socket.io/docs/)
- [Socket.io Server API](https://socket.io/docs/server-api/)
- [Socket.io Client API](https://socket.io/docs/client-api/)
- [Socket Testing Tool](https://socket.io/docs/testing/)

## Reflection

After reading and reviewing the class README, my learning goals include mastering the concepts and implementation of real-time communication using Socket.io, understanding the intricacies of Web Sockets and their integration with Node.js, and gaining proficiency in building interactive, collaborative web applications with Socket.io.
