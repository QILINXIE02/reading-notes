# Reading: Access Control (ACL)

## Introduction

This reading explores Access Control Lists (ACL) and Role-Based Access Control (RBAC), focusing on their principles and implementation.

## 5 Steps to RBAC

### Role-Based Access Control (RBAC)

RBAC is a method of restricting system access to authorized users. It assigns roles to users based on their job responsibilities and grants access rights accordingly.
We care about RBAC because it provides a systematic and scalable approach to managing access to resources within an organization, enhancing security and reducing administrative overhead.

### Role/Permission Hierarchy

A Role/Permission hierarchy in RBAC defines the relationship between roles and permissions. For example, an admin role might have permissions for full system access, while a regular user role might have limited permissions.
Roles are assigned permissions, and users are assigned roles based on their responsibilities.

### Implementation Approach

To implement RBAC, one might start by identifying roles and permissions within the system. Then, roles are assigned to users, and permissions are granted to roles. Finally, access control checks are implemented based on the user's assigned roles and permissions.

## Wiki - RBAC

### Authorization

Authorization determines what actions an authenticated user is allowed to perform within the system after successful authentication.

### Primary Rules for RBAC

Three primary rules defined for RBAC are:
1. Role assignment: Users are assigned roles based on their responsibilities.
2. Role authorization: Roles are assigned permissions based on the tasks they need to perform.
3. Permission authorization: Users are granted access to resources based on their assigned roles and permissions.

### Describing RBAC

RBAC can be described to a non-technical friend as a system that controls who can access what within an organization. It assigns roles to users, each with specific permissions, ensuring that users only have access to the resources they need to perform their job responsibilities.

## RBAC Tutorial

### Associated Access Rights

Access rights are associated with roles in RBAC. Users are assigned roles, and roles are granted permissions, so access rights are ultimately associated with roles.

### Activation of Authorization

Authorization is activated after a user successfully authenticates and is assigned roles and permissions based on their job responsibilities.

### Benefits of RBAC

RBAC benefits a business by improving security, reducing the risk of unauthorized access, simplifying access management, and enhancing compliance with regulatory requirements.

## Reflection

After reading and reviewing the class README on Access Control (ACL), my learning goals include gaining a deeper understanding of RBAC principles and implementation strategies.
I aim to explore RBAC frameworks and tools to effectively design and implement access control mechanisms in various software applications.
