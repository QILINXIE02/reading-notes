# Readings: AWS: Events

## AWS SQS vs SNS

- **Difference between SQS and SNS**: SQS (Simple Queue Service) is a message queuing service that decouples the components of a distributed system by allowing them to communicate asynchronously. It stores messages in a queue, and multiple consumers can pull messages from the queue. On the other hand, SNS (Simple Notification Service) is a pub/sub messaging service that allows publishers to send messages to multiple subscribers simultaneously. It delivers messages in real-time to endpoints such as HTTP, email, SMS, and Lambda functions.
- **Use Cases**:
  - SQS: Use SQS when you need to decouple and scale microservices, handle asynchronous tasks, and ensure reliable message delivery.
  - SNS: Use SNS when you need to send notifications or broadcast messages to multiple subscribers, such as mobile app users, email recipients, or other services.

## AWS SNS and SQS

- **Fanout Pattern**: In a fanout pattern, you can use SNS to publish messages to multiple SQS queues subscribed to the topic. This allows you to broadcast messages to multiple consumers (SQS queues) simultaneously.
- **Push Notifications with SNS**: SNS enables push notifications by allowing you to publish messages to mobile app endpoints (iOS, Android) or other supported endpoints. When a message is published, SNS delivers it to the registered endpoints, triggering actions such as displaying a notification on a mobile device.

## SQS and SNS Basics

- **Large Scale Distributed Application**: In a large-scale, distributed application, SQS can be used to manage message queues between different components or services. For example, you can use SQS to handle incoming requests, process background tasks, or coordinate tasks between microservices.

## Bookmark and Review

- [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
- [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

## Reflection

After reading and reviewing the class README, my learning goals include understanding the use cases and best practices for utilizing AWS SQS and SNS in distributed systems, mastering the concepts of event-driven architectures, and learning how to implement efficient message processing and event handling in AWS environments.
