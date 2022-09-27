# Access control

!!! tip "*Introduced in v1.5.0*"

IRIS offers a granular access control for cases and management features.  
Two types of access control are available : 

- **Permissions (RBAC)**: Allows control the access to specific management features on the platform (adding users, cases etc.)
- **Cases access (ACL)**: Allows segregate cases between users

To ease the access control, users can be managed in : 

- [**Organisations**](organisations): Provides a security boundary and includes case access controls and users segregation
- [**Groups**](groups): Provides permissions and cases access controls
- [**Users**]: Granular per-user cases access control

A user can be in one or multiple organisations and/or groups. The effective case access control of a user is deducted from its organisations and groups membership, as well as its own cases access control.  
The effective permissions are deducted from its groups membership.

## Cases access control overview
Cases access control offer three levels: 

- `deny_all`: No access to the case. The user don't even see the case listed, 
- `read_only`: Read-only access to the case. The user can see everything related to the case but can't change anything,
- `full_access`: Read-write access to the case. The user can see and change everything related to the case. He cannot close it or delete it unless he is granted the `manage_cases` permission.  

!!! attention "Important" 
    The behavior by default is implicit access denied. This means if a case is not linked to an organisation, group and user, the access is denied for all users belonging to this organisation and group. 

As mentioned above, cases access control can be applied to organisations, groups and users. It starts with the organisations, goes to groups and ends with atomic user access control.  

For example, the following configuration gives no access to the user since the atomic user access prevail upon the rest. 

``` mermaid
stateDiagram-v2
    state join_orgs <<join>>
    Org1 --> join_orgs: DenyAll
    Org2 --> join_orgs: FullAccess
    Org3 --> join_orgs: DenyAll
    join_orgs --> Group_prevail: FullAccess

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
    state join_orgs <<join>>
    Org1 --> join_orgs: FullAccess
    Org2 --> join_orgs: FullAccess
    join_orgs --> Group_prevail: ReadOnly

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
