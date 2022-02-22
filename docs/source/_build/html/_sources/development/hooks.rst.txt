.. _dev-iris-hooks:


IRIS Hooks 
----------

Hooks are a mean for modules to react on specific events that occurs on IRIS. By subscribing to a hook, a module is automatically notified when the associated event occurs.  This offers a multitude of possibilities, from adding insight to IRIS objects, to pushing information to another platform or even changing how IRIS works.  

Types
^^^^^ 

There are 3 types of hooks. 
 - ``On preload`` : Triggered before an object is processed and committed to database. Most of the time it is triggered right after a request is received, and the data associated with the hook is the request content itself.  
 - ``On postload``: Triggered after an object is processed and committed to database. Most of the time it is triggered after IRIS processed the request and the data associated with the hook is a list of SqlAlchemy objects (such as IOC, Assets, etc).  
 - ``Manual``: Triggered by manual action of a user. When a module subscribes to these hooks, it needs to provide a "menu option name" which will be display to users. When they click this option, the associated hook is triggered for this module only.  


Available hooks
^^^^^^^^^^^^^^^^
The following hooks are natively available for subscription.  


.. csv-table:: Hooks list 
   :header: "Hook name", "Description"
   
    on_preload_case_create,"Triggered on case creation, before commit in DB"
    on_postload_case_create,"Triggered on case creation, after commit in DB"
    on_preload_case_delete,"Triggered on case deletion, before commit in DB"
    on_postload_case_delete,"Triggered on case deletion, after commit in DB"
    on_preload_asset_create,"Triggered on asset creation, before commit in DB"
    on_postload_asset_create,"Triggered on asset creation, after commit in DB"
    on_preload_asset_update,"Triggered on asset update, before commit in DB"
    on_postload_asset_update,"Triggered on asset update, after commit in DB"
    on_preload_asset_delete,"Triggered on asset deletion, before commit in DB"
    on_postload_asset_delete,"Triggered on asset deletion, after commit in DB"
    on_manual_trigger_asset,"Triggered upon user action"
    on_preload_note_create,"Triggered on note creation, before commit in DB"
    on_postload_note_create,"Triggered on note creation, after commit in DB"
    on_preload_note_update,"Triggered on note update, before commit in DB"
    on_postload_note_update,"Triggered on note update, after commit in DB"
    on_preload_note_delete,"Triggered on note deletion, before commit in DB"
    on_postload_note_delete,"Triggered on note deletion, after commit in DB"
    on_manual_trigger_note,"Triggered upon user action"
    on_preload_ioc_create,"Triggered on ioc creation, before commit in DB"
    on_postload_ioc_create,"Triggered on ioc creation, after commit in DB"
    on_preload_ioc_update,"Triggered on ioc update, before commit in DB"
    on_postload_ioc_update,"Triggered on ioc update, after commit in DB"
    on_preload_ioc_delete,"Triggered on ioc deletion, before commit in DB"
    on_postload_ioc_delete,"Triggered on ioc deletion, after commit in DB"
    on_manual_trigger_ioc,"Triggered upon user action"
    on_preload_event_create,"Triggered on event creation, before commit in DB"
    on_postload_event_create,"Triggered on event creation, after commit in DB"
    on_preload_event_update,"Triggered on event update, before commit in DB"
    on_postload_event_update,"Triggered on event update, after commit in DB"
    on_preload_event_delete,"Triggered on event deletion, before commit in DB"
    on_postload_event_delete,"Triggered on event deletion, after commit in DB"
    on_manual_trigger_event,"Triggered upon user action"
    on_preload_evidence_create,"Triggered on evidence creation, before commit in DB"
    on_postload_evidence_create,"Triggered on evidence creation, after commit in DB"
    on_preload_evidence_update,"Triggered on evidence update, before commit in DB"
    on_postload_evidence_update,"Triggered on evidence update, after commit in DB"
    on_preload_evidence_delete,"Triggered on evidence deletion, before commit in DB"
    on_postload_evidence_delete,"Triggered on evidence deletion, after commit in DB"
    on_manual_trigger_evidence,"Triggered upon user action"
    on_preload_task_create,"Triggered on task creation, before commit in DB"
    on_postload_task_create,"Triggered on task creation, after commit in DB"
    on_preload_task_update,"Triggered on task update, before commit in DB"
    on_postload_task_update,"Triggered on task update, after commit in DB"
    on_preload_task_delete,"Triggered on task deletion, before commit in DB"
    on_postload_task_delete,"Triggered on task deletion, after commit in DB"
    on_manual_trigger_task,"Triggered upon user action"
    on_preload_global_task_create,"Triggered on global task creation, before commit in DB"
    on_postload_global_task_create,"Triggered on global task creation, after commit in DB"
    on_preload_global_task_update,"Triggered on task update, before commit in DB"
    on_postload_global_task_update,"Triggered on global task update, after commit in DB"
    on_preload_global_task_delete,"Triggered on task deletion, before commit in DB"
    on_postload_global_task_delete,"Triggered on global task deletion, after commit in DB"
    on_manual_trigger_global_task,"Triggered upon user action"
    on_preload_report_create,"Triggered on report creation, before generation in DB"
    on_postload_report_create,"Triggered on report creation, before download of the document"
    on_preload_activities_report_create,"Triggered on activities report creation, before generation in DB"
    on_postload_activities_report_create,"Triggered on activities report creation, before download of the document"


