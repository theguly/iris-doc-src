# Case templates

!!! info "Introduced in IRIS v2.1.0"

Case templates are a way to pre-configure a case with a set of predefined informations.  
The case templates can be managed in `Advanced` > `Case templates`.   

!!! info
    This section is only available for users with the administrator role. 


Case templates are made of a set of informations that will be used to pre-fill the case creation form. The following elements can be set: 

- **Title prefix**: A prefix to add to case title,
- **Summary**: content to prefill the summary,
- **Classification**: The classification of the case. Should be a lowercase name matching an existing classification in IRIS,
- **Tags**: A list of case tags,
- **Tasks**: A list of dictionaries defining tasks. Tasks are defined by title (required), description, and list of tags,
- **Notes**: A list of dictionaries defining note directories. Note directories are defined by title (required), and list of notes. Notes have title (required) and content


!!! info "Looking for case templates?"
    We are providing a set of case templates in the [IRIS Resources repository](https://github.com/dfir-iris/iris-resources/tree/main/Case%20templates). 

## Structure of templates
The following defines the structure of a case template: 

```json 
{
    "name": "ransomware_infection",
    "display_name": "Ransomware Infection Template",
    "description": "This case template describes first-response tasks to handle information system compromised by a ransomware.",
    "author": "DFIR-IRIS",
    "classification": "malicious-code:ransomware",
    "title_prefix": "[RANS]",
    "summary": "# Context \n\n\n# Contact \n\n\n# Actions \n\n\n",
    "tags": ["ransomware","malware"],
    "tasks": [
        {
            "title": "Identify the perimeter",
            "description": "The perimeter of compromise must be identified",
            "tags": ["identify"]
        },
        {
            "title": "Collect compromised hosts",
            "description": "Deploy Velociraptor and start collecting evidence",
            "tags": ["collect", "velociraptor"]
        },
        {
            "title": "Containment"
        }
    ],
    "note_directories": [
        {
            "title": "Identify",
            "notes": [
                {
                    "title": "Identify the compromised accounts",
                    "content": "# Observations\n\n"
                }
            ]
        },
        {
            "title": "Collect",
            "notes": [
                {
                    "title": "Velociraptor deployment"
                },
                {
                    "title": "Assets collected",
                    "content": "# Assets collected\n\n# Assets not collected"
                }
            ]
        }
    ]
}
```


## Using case templates
Case templates can be used when creating a new case. On the UI, when creating a case, select the case template to use in the `Case template` dropdown. The case will then automatically use the informations defined in the template.  

