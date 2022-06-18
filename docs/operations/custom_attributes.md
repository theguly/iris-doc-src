# Custom Attributes 

!!! tip "*Introduced in IRIS v1.4.0*"

All the case objects can be extended with custom attributes. These attributes can be added by : 

- Administrators via the GUI 
- Modules (for instance, the VT module adds a ``VT Report`` attribute to each objects it analyses)

Attributes offer the ability to :

- Add inputs for analysts to fill additional details 
- Add static/dynamic content such as HTML/JS for enhanced possibilities.  

This section only describes how an administrator can add or delete attributes to an object.  

!!! tip 
    We have publish a detailed article of custom attributes with advanced usage on [our blog](https://blog.dfir-iris.org/deep_dives/custom_attributes_dive/). 

## Management page

Custom attributes can be changed in the ``Advanced`` > ``Custom Attributes`` section on the left panel. 

![Attributes menu](../_static/Attributes_menu.png)


The page lists the objects for which custom attributes can be added or modified. 

- Cases 
- Customers
- Evidences 
- Notes
- Tasks
- Assets
- Events 
- IOC 

## Attributes structure 

Attributes are defined in JSON which describes tabs and fields that makes the attributes.    

``` json

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
              "value": false              // Default value - must be set for booleans
          }
      },
      "VT report": {                      // Defines a second tab named VT report
          "Content": {                    // Defines a new field Content within the VT Report
              "type": "html",             // Defines an HTML interpreted content
              "value": ""                 // Default value if any, else empty
          }
      }
  }
```

The code above would be rendered as : 

![Attributes rendering](../_static/attributes_rendering.png)

With : 

1. The native information of the object. This cannot be changed or updated
2. The new attribute ``Tab Name 1`` 
3. The other new attribute ``VT report``


## Attributes taxonomy 
The available fields type are available for rendering : 

- ``input_string``: Standard input text
- ``input_textfield``: Standard input textfield
- ``input_checkbox``: Standard checkbox
- ``input_date``: Standard date input
- ``input_datetime``: Standard date and time input
- ``input_select``: Standard select input. Need "options" tag to describe the available options, as a list of string. 
- ``raw``: A static content rendered in raw text. HTML is not be interpreted.
- ``html``: A static content rendered as HTML. This is by nature prone to abuse, but at the same time allows adding custom JS scripts. 


## Updating / resetting attributes 

When an attribute is updated, it will try to update all the existing objects with the new attributes. To prevent any data loss from previous attributes and attributes pushed by modules, the update is only made on attributes which don't have any values set or are type-compatibles (ie string to textfield).  

The migration of an attribute can however be forced in two ways, both resulting in potential attributes data loss.  

!!! tip "Good to know"
    Migrating or overwriting attributes never change the native information of an object. It only applies to custom attributes.  


``Partial overwrite`` basically resets all the values of every target objects that matches the current attribute definition. All associated values are lost. This does not impact attributes pushed by modules or previous configuration.

``Complete overwrite`` resets all attributes of every target objects, including the ones created by modules, and then applies the current attributes. All associated values are lost.


## Example 
Custom attributes can be more complex than what presented above. With the `html` type, it is possible to build almost anything.  
Below is an example of the custom attributes used in the IrisVT module. The ``{{ }}`` are used withing the module to generates the page with data received from VT.  

**Note** : This example won't work as is, the value field is expanded here for reability.  


```json title="IrisVT default custom attribute"
{
    "VT report": {                      
        "Content": {                    
            "type": "html",             
            "value": "<div class='row'>
                    <div class='col-12'>
                        <h3>Basic information</h3>
                        <dl class='row'>
                            {% if results.as_owner %}
                            <dt class='col-sm-3'>AS owner</dt>
                            <dd class='col-sm-9'>{{ results.as_owner }}</dd>
                            {% endif %}
                            
                            {% if country %}
                            <dt class='col-sm-3'>Country</dt>
                            <dd class='col-sm-9'>{{ results.country }}</dd>
                            {% endif %}
                        </dl>
                    </div>
                </div>    

                {% if nb_detected_urls %}
                <div class='row'>
                    <div class='col-12'>
                        <h3>Detected URLS</h3>
                        <dl class='row'>
                            <dt class='col-sm-3'>Total detected URLs</dt>
                            <dd class='col-sm-9'>{{ nb_detected_urls }}</dd>
                            
                            <dt class='col-sm-3'>Average detection ratio</dt>
                            <dd class='col-sm-9'>{{ avg_urls_detect_ratio }}</dd>
                        </dl>
                    </div>
                </div>    
                {% endif %}

                {% if nb_detected_samples %}
                <div class='row'>
                    <div class='col-12'>
                        <h3>Detected communicating samples</h3>
                        <dl class='row'>
                            <dt class='col-sm-3'>Total detected samples</dt>
                            <dd class='col-sm-9'>{{ nb_detected_samples }}</dd>
                            
                            <dt class='col-sm-3'>Average detection ratio</dt>
                            <dd class='col-sm-9'>{{ avg_samples_detect_ratio }}</dd>
                        </dl>
                    </div>
                </div>    
                {% endif %}

                <div class='row'>
                    <div class='col-12'>
                        <div class='accordion'>
                            <h3>Additional information</h3>

                            {% if results.resolutions %}
                            <div class='card'>
                                <div class='card-header collapsed' id='drop_res' data-toggle='collapse' data-target='#drop_resolutions' aria-expanded='false' aria-controls='drop_resolutions' role='button'>
                                    <div class='span-icon'>
                                        <div class='flaticon-file'></div>
                                    </div>
                                    <div class='span-title'>
                                        Resolutions history
                                    </div>
                                    <div class='span-mode'></div>
                                </div>
                                <div id='drop_resolutions' class='collapse' aria-labelledby='drop_res' style=''>
                                    <div class='card-body'>
                                        <ul>
                                            {% for resolution in results.resolutions %} 
                                            <li>{{ resolution.hostname }} ( Last resolved on {{resolution.last_resolved}} )</li>
                                            {% endfor %}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {% endif %}
                            
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-12'>
                        <div class='accordion'>
                            <h3>Raw report</h3>

                            <div class='card'>
                                <div class='card-header collapsed' id='drop_r' data-toggle='collapse' data-target='#drop_raw' aria-expanded='false' aria-controls='drop_raw' role='button'>
                                    <div class='span-icon'>
                                        <div class='flaticon-file'></div>
                                    </div>
                                    <div class='span-title'>
                                        Raw report
                                    </div>
                                    <div class='span-mode'></div>
                                </div>
                                <div id='drop_raw' class='collapse' aria-labelledby='drop_r' style=''>
                                    <div class='card-body'>
                                        <div id='vt_raw_ace'>{{ results| tojson(indent=4) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <script>
                var vt_in_raw = ace.edit('vt_raw_ace',
                {
                    autoScrollEditorIntoView: true,
                    minLines: 30,
                });
                vt_in_raw.setReadOnly(true);
                vt_in_raw.setTheme('ace/theme/tomorrow');
                vt_in_raw.session.setMode('ace/mode/json');
                vt_in_raw.renderer.setShowGutter(true);
                vt_in_raw.setOption('showLineNumbers', true);
                vt_in_raw.setOption('showPrintMargin', false);
                vt_in_raw.setOption('displayIndentGuides', true);
                vt_in_raw.setOption('maxLines', 'Infinity');
                vt_in_raw.session.setUseWrapMode(true);
                vt_in_raw.setOption('indentedSoftWrap', true);
                vt_in_raw.renderer.setScrollMargin(8, 5);
                </script>"                 
        }
    }
}
```
