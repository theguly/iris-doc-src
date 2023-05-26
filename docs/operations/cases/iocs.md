# IOCs

IOCs are observables that were identified during the investigation, or that led to the case creation upon monitoring activities.

## Add an IoC

An IoC object could be created by going to `Case` > `IOC`. Clicking on `Add IOC` in the top right corner brings up a new window for the IoC creation.

![IOCS](/_static/iocs/create_ioc.png){ align=center }

A new window appears, requesting additional information. The following information is required:

- **Type**: Type of the IOC. This will have an impact on available modules.
- **IOC Value**: The actual IoC.
- **TLP**: Traffic Light Protocol value. (`Amber` by default)

The following information is optional:

- Description: A .md formatted description of the IoC.
- Task tags: List of tags.

![IOCS](/_static/iocs/create_ioc2.png){ align=center }

Once `Save` is clicked, the ioc is created.

## Update an IoC

IoC object data can be updated by clicking on the IoC value in the `Case` > `IOC` table. A popup appears and allows to change required and non-required fields.

![IOCS](/_static/iocs/update_ioc.png){ align=center }

Once `Update` is clicked, the IoC is updated.

## Enrich an IoC

IoC objects can be enriched in order to add valuable information to it. 

### Comment an IoC

To comment an IoC, one can right click on it, in the `Case` > `IOC` menu, and select `Comment`. A new pop-up appears and allows to leave comments. This is also achievable by clicking on the IoC value in the `Case` > `IOC` table, and by clicking on the `Comment` button.

![IOCS](/_static/iocs/comment_ioc.png){ align=center }

### Launch a module on an IoC

!!! info "To have more information about modules, see the [Modules](/docs/operations/modules/) section."

A set of modules can be launched to enrich IoCs. To do so, one can right click on the IoC , in the `Case` > `IOC` table, and select the module of choice.    
This is also achievable by clicking on the IoC value in the `Case` > `IOC` table, by clicking the `Option` button, and selecting the desired module.

![IOCS](/_static/iocs/launch_module_ioc.png){ align=center }

The results of the module will appear in newly created tabs, in the IoC details. To view the tabs, click on the the IoC value.

![IOCS](/_static/iocs/enrichment_info.png){ align=center }

## Delete an IoC

!!! warning  "This will permanently delete the IoC and its attributes"

To delete an IoC, one could either right click on the IoC, and select `Delete`, or click on the IoC value, and click on the `Delete` button.

![IOCS](/_static/iocs/delete_ioc.png){ align=center }


!!! note "The IOC is only unlinked from the case if it references other cases"