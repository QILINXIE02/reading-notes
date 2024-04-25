# Readings: Message Queues

## Introduction

Message queues are a crucial component in building distributed systems, allowing for asynchronous communication between different parts of an application.

## Reading

### Socket.io Chat Example

- The Socket.io Chat Example demonstrates a simple chat application built using Socket.io. It enables real-time communication between multiple clients and a server, allowing them to exchange messages instantly.
- Proof of life on the backend from the above app includes logging messages, emitting events to clients, handling incoming messages, and managing user connections.
- To send a message to everyone except for a certain emitting socket using Socket.IO's `io.emit()` method, you would use the `broadcast` flag.

### Rooms

- A room in Socket.io is a virtual channel that allows you to group connected clients together based on a specific criterion, such as a chat room or a topic of interest. Rooms are useful for organizing and managing communication between subsets of clients.
- To join a room in Socket.io, a client can use the `socket.join()` method, specifying the room name as a parameter.
- To leave a room in Socket.io, a client can use the `socket.leave()` method, specifying the room name as a parameter.

### Namespaces

- A Namespace in Socket.io allows you to create separate communication channels within the same WebSocket connection. It provides a way to segment the communication and define different behaviors or features for different parts of the application.
- Each namespace potentially has its own event listeners, emitters, and rooms.
- A possible use case for separate namespaces is in a multi-tenant application where different namespaces represent different tenants or user groups, each with its own set of functionalities and communication channels.

### Bookmark and Review

- [Socket.io Emit Cheatsheet](https://socket.io/docs/emit-cheatsheet/)

## Reflection

After reading and reviewing the class README, my learning goals include gaining a deeper understanding of how message queues work, exploring advanced features and best practices for using Socket.io, and mastering the implementation of real-time communication in distributed systems.
