Custom Attributes 
==================

All the case objects can be extended with custom attributes. These attributes can be added by : 

* Administrators via the GUI 
* Modules (for instance, the VT module adds a ``VT Report`` attribute to each it analyses)


This section only describes how an administrator can add or delete attributes to an object.  

Management page
----------------

Custom attributes can be changed in the ``Advanced`` > ``Objects Attributes`` section on the left panel. 

.. image:: ../_static/Attributes_menu.png


The page lists the objects for which custom attributes can be added or modified. 
  - Cases 
  - Evidences 
  - Notes
  - Tasks
  - Assets
  - Events 
  - IOC 

Attributes taxonomy 
--------------------

Attributes are defined in JSON which describes tabs and fields that makes the attributes.    

.. code-block:: json

  {
      "Tab Name 1": {                     // Defines a new tab 
          "Field 1": {                    // Defines a new field within the Tab Name 1
              "type": "input_string",     // Defines the type of field, here a standard string input
              "mandatory": true,          // Indicates whether the field is mandatory upon saving
              "value": ""                 // Default value if any, else empty
          },
          "Field 2": {                    // Defines a second field within the tab Tab Name 1
              "type": "input_checkbox",   // Defines an input checkbox
              "mandatory": false,         // Indicates whether the field is mandatory upon saving
              "value": ""                 // Default value if any, else empty
          }
      },
      "VT report": {                      // Defines a second tab named VT report
          "Content": {                    // Defines a new field Content within the VT Report
              "type": "html",             // Defines an HTML interpreted content
              "value": ""                 // Default value if any, else empty
          }
      }
  }


The code above would be rendered as : 

.. image:: ../_static/attributes_rendering.png

With : 

#. The native information of the object. This cannot be changed or updated
#. The new attribute ``Tab Name 1`` 
#. The other new attribute ``VT report``