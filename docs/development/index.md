# Development 
!!! info "This section is under construction and more elements will be added over time"

This documentation is not a detailed how-to develop IRIS. It gives some insights to help understand the basic code of the project and how to contribute.  

## General repositories conventions
### Branches 
We are using the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) to manage our git branches.  
In a nutshell :  

 - `master` contains only "production-ready" code
 - `develop` contains the major development code. When ready it is tagged and merged into `master`
 - The sub-branches of `develop` contains either : 
    - A new feature in development, in which case the naming convention is `new_feature`
    - An issue fixe, in which case the name convention is `iXX_issue_title`, with XX being the issue number 


### Commits 
The commits convention is the following : 

 - Create commits as small as possible, i.e atomic commits  
 - If it's not related to an issue, the format `[action] Commit message` is used, with `action` being a 3 letters action related to the commit, eg `ADD`for additions, `DEL` for deletions, `IMP` for improvements, etc.
 - If it's related to an issue, prepend with the issue ID, i.e `[#issue_id][action] Commit message` 


## Sections
The following sections are available in this documentation : 

- [Structure overview](structure/) : general structure of IRIS code 
- [Environment setup](environment/) : guide to setup a development environment 
- [Coding tips](code-tips/) :  basic codes hints
- [DB migration](db-migration/) : things to consider if the code changes the DB schema 
- [Hooks](hooks/) : an introduction to IRIS hooks 
- [Modules](modules/) : a guide to develop modules 
