# Access control

!!! warning "*Changes in v2.4.0*"
    Starting from IRIS v2.4.0 the default access control is `deny_all` for all users. 
    When upgrading, existing users keep their rights on the existing cases.

IRIS offers a granular access control for cases and management features.  
Two types of access control are available : 

- **Permissions (RBAC)**: Allows control the access to specific management features on the platform (adding users, cases etc.)
- **Cases access (ACL)**: Allows segregate cases between users

To ease the access control, users can be managed in : 

- [**Customers**](/operations/access_control/users/#setting-customers): Provides cases and alerts access controls
- [**Groups**](groups): Provides permissions and cases access controls
- [**Users**](users): Provides granular per-user cases access control

A user can be in one or multiple groups and customers. The effective case access control of a user is deduced from its group and customer membership and its own cases access control.  
The effective permissions are deduced from its groups membership.  


## Cases access control overview
Cases access control offer three levels: 

- `deny_all`: No access to the case. The user don't even see the case listed, 
- `read_only`: Read-only access to the case. The user can see everything related to the case but cannot edit,
- `full_access`: Read-write access to the case. The user can see and edit everything related to the case, including closing and deleting the case.  


Cases access control can be applied through customers, groups and users. It starts with the customers, groups and ends with atomic user access control.  

For example, the following configuration gives no access to the user since the atomic user access prevail upon the rest. 

``` mermaid
stateDiagram-v2
    DefaultPermission --> Group_prevail: DenyAll

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
    DefaultPermission --> Group_prevail: DenyAll

    state join_groups <<join>>
    Group1 --> join_groups: ReadOnly
    Group2 --> join_groups: DenyAll
    Group3 --> join_groups: DenyAll
    join_groups --> Group_prevail: ReadOnly

    Effective_ReadOnly: Resulting Read Only access for user
    Group_prevail --> Effective_ReadOnly: ReadOnly 

    User_Access --> Effective_ReadOnly: Not set
```

This notably allows to create groups which can join a set of people from different organisations to work on the same case. 

In the next configuration, the user pertains to a customer, which give automatically Full Access access to all the cases of the customer. 
``` mermaid
stateDiagram-v2
    DefaultPermission --> Customer_prevail: DenyAll
    
    Customer1 --> Customer_prevail: FullAccess
    Group1 --> Effective_FullAccess: Not set

    Effective_FullAccess: Resulting Full Access access for user
    Customer_prevail --> Effective_FullAccess: FullAccess 

    User_Access --> Effective_FullAccess: Not set
```

In case the user pertains to a customer but is also in a group, the group access prevail upon the customer access. 
``` mermaid
stateDiagram-v2
    DefaultPermission --> Customer_prevail: DenyAll
    
    Customer1 --> Customer_prevail: FullAccess
    Group1 --> Group_prevail: ReadOnly

    Customer_prevail --> Group_prevail: FullAccess

    Group_prevail --> Effective_FullAccess: ReadOnly

    Effective_FullAccess: Resulting Read only Access access for user

    User_Access --> Effective_FullAccess: Not set
```

Finally, the atomic user access prevail upon the rest. 
``` mermaid
stateDiagram-v2
    DefaultPermission --> Customer_prevail: DenyAll
    
    Customer1 --> Customer_prevail: FullAccess
    Group1 --> Group_prevail: ReadOnly

    Customer_prevail --> Group_prevail: FullAccess
    
    User_access --> User_prevail: DenyAll
    Group_prevail --> User_prevail: ReadOnly
    User_prevail --> Effective_FullAccess: DenyAll

    Effective_FullAccess: Resulting Deny all Access access for user
```


## Permissions control
Permissions allow to control the access to specific management features on the platform (adding users, cases etc.). 
A set of permissions are available: 

 - `standard_user`: which includes the basic access to the interface and create cases
 - `server_administrator`: which includes managing users, groups
 - `alerts_read`: which includes access to the alerts
- `alerts_write`: which includes access to the alerts and the ability to add new ones
- `alerts_delete`: which includes the ability to delete the alerts
- `search across cases`: which includes the ability to search across cases
- `customers_read`: which includes the ability to read customers
- `customers_write`: which includes the ability to add and edit customers
- `case_templates_read`: which includes the ability to read case templates
- `case_templates_write`: which includes the ability to add and edit case templates
- `activities_read`: which includes the ability to read activities
- `all_activities_read`: which includes the ability to read all activities of all cases
  
