# Case operations
## Opening a case
To open a case anywhere, press the `+` button in the top right corner.  
A popup appears and allows to fill the basic information of the new case.

![Cases](/_static/cases/open_case_button.png){ align=center }

A new window appears, requesting additional information. The following information are required:  

- **Customer**: Name of the customer the case is related to
- **Case name**: Name of the case 
- **Short description**: Short description of the case - this will be set as the summary of the case

The following information is optional:

- **Case template**: Template to use for the case. If not set, the case will be created empty 
- **Case classification**: The classfication of the case 
- **SOC ticket ID**: The ID of the ticket in the SOC ticketing system

![Cases](/_static/cases/open_case.png){ align=center }

Once `Create` is clicked, the case is created and a popup ask whether to the get redirected to the case or to add a new one.  

## Switching between cases
Each case has its own context. To switch between cases/context, either click on the name of the current case at the top left, or click on the switch button on the top right.

![Cases](/_static/cases/switch_case.png){ align=center }

A popup appears and allows to select the case to switch to. By default the last 100 cases are displayed. To look further in the past, one can use the search bar.  
Press `Save` to validate the switch. The page reloads with the new context. 

![Cases](/_static/cases/do_switch_context.png){ align=center }

## Updating a case 
A case metadata can be updated by going switching the case context and heading to `Case` > `Summary`.   
Clicking on `Manage` brings up a new window with the case metadata. The right pencil button allows to edit the metadata.  

![Cases](/_static/cases/update_case_meta.png){ align=center }

The following information can be updated: 

- **Case name**: Name of the case
- **SOC ticket ID**: The ID of the ticket in the SOC ticketing system
- **Case classification**: The classfication of the case 
- **Case owner**: The owner of the case - by default set to the user who created the case
- **Case state**: State of the case - by default set to `Open`. This defines the state of the case (open, closed, etc.). 
- **Case outcome**: Outcome of the case - by default set to `Unknown`. This defines if the case is a true positive, false positive, etc. 
- **Case customer**: Customer of the case 
- **Case reviewer**: Reviewer of the case 
- **Case severity**: Severity of the case - by default set to `Medium`
- **Case tags**: Tags of the case - by default set to `Open`
- **Protagonists**: Protagonists of the case - by default none. Those are the actors involved in the case.  

## Updating the access of a case 
The access of a case can be updated by going to `Case` > `Summary` > `Manage`, and from the popup, clicking on the `Access` tab. 

![Cases](/_static/cases/update_case_access.png){ align=center }

Changes of access are immediately applied.  

## Closing a case 
A case can be closed by going to `Case` > `Summary` > `Manage`, and from the popup, clicking on the `Close case` button.  
Closing a case doesn't delete it and it can be reopened at any time. The case can also be modified after it has been closed.  

![Cases](/_static/cases/close_case.png){ align=center }

## Getting modifications history of a case
The modifications history of a case can be retrieved by going to `Case` > `Summary` > `Manage`, and from the popup, clicking on the history icon next to the case name.   

![Cases](/_static/cases/case_history.png){ align=center }