# Access control

!!! tip "*Introduced in v2.0.0*"

IRIS offers a granular access control for cases and management features.  
Two types of access control are available : 

- **Permissions (RBAC)**: Allows control the access to specific management features on the platform (adding users, cases etc.)
- **Cases access (ACL)**: Allows segregate cases between users

To ease the access control, users can be managed in : 

- [**Groups**](groups): Provides permissions and cases access controls
- [**Users**](users): Provides granular per-user cases access control

A user can be in one or multiple groups. The effective case access control of a user is deduced from its groups membership and its own cases access control.  
The effective permissions are deduced from its groups membership.  


## Cases access control overview
Cases access control offer three levels: 

- `deny_all`: No access to the case. The user don't even see the case listed, 
- `read_only`: Read-only access to the case. The user can see everything related to the case but cannot edit,
- `full_access`: Read-write access to the case. The user can see and edit everything related to the case, including closing and deleting the case.  


As mentioned above, cases access control can be applied to groups and users. It starts with the groups and ends with atomic user access control.  

For example, the following configuration gives no access to the user since the atomic user access prevail upon the rest. 

``` mermaid
stateDiagram-v2
    DefaultPermission --> Group_prevail: FullAccess

    state join_groups <<join>>
    Group1 --> join_groups: ReadOnly
    Group2 --> join_groups: DenyAll
    join_groups --> Group_prevail: ReadOnly
    Group_prevail --> Effective_DenyAll: ReadOnly 
    
    Effective_DenyAll: Resulting Deny All access for user
    User_Access --> Effective_DenyAll: DenyAll
```

In the next configuration,  the user has Read Only access to the case because the atomic user access is not set, so the access is inherited from the group ownership. 
``` mermaid
stateDiagram-v2
    state join_groups <<join>>
    Group1 --> join_groups: ReadOnly
    Group2 --> join_groups: DenyAll
    Group3 --> join_groups: DenyAll
    join_groups --> Group_prevail: ReadOnly

    Effective_ReadOnly: Resulting Read Only access for user
    Group_prevail --> Effective_ReadOnly: ReadOnly 

    User_Access --> Effective_ReadOnly: Unset
```

This notably allows to create groups which can join a set of people from different organisations to work on the same case. 


## Permissions control
Permissions allow to control the access to specific management features on the platform (adding users, cases etc.). 
Two permissions are available: 

 - `standard_user`: which includes: creating cases, searching across cases, read activity feed and read DIM tasks
 - `server_administrator`: which includes all the permissions of `standard_user` as well as managing users, modules, customers, case objects, custom attributes, report templates and server settings. 
 
  
