# Readings: AWS: Cloud Servers

## AWS EC2

- **What is an EC2 Instance?**: An EC2 (Elastic Compute Cloud) instance is a virtual server provided by Amazon Web Services (AWS) that allows users to run applications on the AWS infrastructure.
- **Use Cases for EC2**:
  1. Hosting websites and web applications.
  2. Running backend services and databases.

- **Reason to Use ECS**: ECS (Elastic Container Service) provides greater flexibility and control over containerized applications compared to platforms like Heroku, Digital Ocean, or Render.com. With ECS, users have more customization options for container orchestration and deployment.

## EC2 For Humans

- **Location of EC2 on AWS Console**: EC2 can be found under the "Compute" section of the AWS Management Console.
- **Difference Between T2 Micro and XL**: T2 Micro and XL are instance types offered by EC2, with T2 Micro being a smaller, low-cost instance suitable for lightweight applications, while XL refers to extra-large instances with higher computational power and resources.
- **Compute Cycle Explanation**: A compute cycle refers to the process of executing computational tasks on a computer system. It involves fetching instructions from memory, executing them using the CPU, and storing the results back in memory. This process repeats for each instruction in a program.

## Elastic Beanstalk

- **What is Elastic Beanstalk?**: Elastic Beanstalk is a platform-as-a-service (PaaS) offering from AWS that simplifies the deployment and management of web applications and services. It automatically handles the provisioning, scaling, and monitoring of infrastructure components, allowing developers to focus on writing code.
- **Relationship Between EC2 and Elastic Beanstalk**: Elastic Beanstalk utilizes EC2 instances as the underlying infrastructure to run applications. It abstracts away the complexities of managing EC2 instances directly and provides a managed environment for deploying and scaling applications.
- **Benefits of Using Elastic Beanstalk**:
  1. Simplified deployment process.
  2. Automatic scaling based on application demand.
  3. Built-in monitoring and health checks.

## Conclusion

Understanding AWS EC2 and related services like Elastic Beanstalk is essential for deploying and managing applications in the cloud efficiently. These services provide scalable and reliable infrastructure for hosting a wide range of applications, from small websites to large-scale enterprise solutions.

