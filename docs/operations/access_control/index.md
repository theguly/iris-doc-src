# Introduction

!!! tip "*Introduced in v1.5.0*"

IRIS offers a granular access control for cases and management features.  
Two types of access control are available : 

- Permissions (RBAC): Allows control the access to specific management features on the platform (adding users, cases etc.)
- Cases access (ACL): Allows segregate cases between users

To ease the access control, users can be managed in : 

- Organisations: Offers cases access controls
- Groups: Offers permissions and cases access controls
- Users: Granular per user cases access control

A user can be in one or multiple organisations and/or groups. The effective case access control of a user is deducted from its organisations and groups membership, as well as its own cases access control.  
The effective permissions are deducted from its groups membership.

## Cases access control 
Cases access control offer three levels: 

- `deny_all`: No access to the case. The user don't even see the case listed, 
- `read_only`: Read only access to the case. The user can see everything related to the case but can't change anything,
- `full_access`: Read-write access to the case. The user can see and change everything related to the case. He cannot close it or delete it unless he is granted the `manage_cases` permission.  

!!! attention Important 
    The behavior by default is implicit access denied. This means if a case is not linked to an organisation, group and user, the access is denied for all users belonging to this organisation and group. 

As mentioned above, cases access control can be applied to organisations, groups and users. The effective case access is computed as follow.  

``` mermaid
stateDiagram-v2
    state join_orgs <<join>>
    Organisations1 --> join_orgs
    Organisation2 --> join_orgs
    Organisation.. --> join_orgs
    join_orgs --> Combined_orgs_access
    Combined_orgs_access --> Combined_groups_and_orgs_access

    state join_groups <<join>>
    Group1 --> join_groups
    Group2 --> join_groups
    Group.. --> join_groups
    join_groups --> Combined_groups_and_orgs_access
    Combined_groups_and_orgs_access --> Resulting_Access 

    User_Access --> Resulting_Access
```

It means that an organisation can give a case access to a set of users, but one of them can have explicit `deny_all` on this case, which would result in the user being unable to access it. Case access control starts with the organisations as a base, goes to groups and ends with user access control.  
This notably allows to create groups which can join a set of people from different organisations to work on the same case. We give a set of use cases to help apprehend cases access control. 


## Permissions control
