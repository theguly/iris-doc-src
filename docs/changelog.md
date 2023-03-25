# Changelog

For upgrades instructions, please see the [Upgrades page](/operations/upgrades). 
!!! danger "Please read [upgrades instructions](https://docs.dfir-iris.org/operations/upgrades/#v141) if you are upgrading from v1.3.1 or lower." 

## [v2.0.0](https://github.com/dfir-iris/iris-web/releases/tag/v2.0.0) <small>_ April 1, 2023 _</small> 

### What's Changed

In addition to the features listed below, we are changing the way we are issuing releases. From now on, IRIS follows the [Semantic Versioning 2.0](https://semver.org/) guidelines.   
The code ready for production is always tagged with a version number. 
``alpha`` and ``beta`` versions are **not** production-ready.   

Do not use the ``master`` branch in production.  

A website with the current development version is also provided and freely accessible. It serves as a beta before public releases.   

**Added** 

* Groups management 
* Case access control and basic permissions
* Comments support on a call objects
* Markdown editors in all case objects 
* Customers dedicated pages with additional informations and cases statistiques 
* LDAP authentication 
* Markdown reporting
* Case owners, classifications, outcome and tags
* Possibility to update case basic infornations 
* Case overview page 
* Unique UUID on all case objects 
* Multiple assignees support in case tasks 
* Deletion confirmation prompt on all case objects as an option
* IOC in events plus optional synchronization with assets
* Events flagging in the timeline
* MD links on every case objects

**Improved**

* Dark mode
* Uniformity of modals
* Overall UI and UX 
* Compromised status in assets 
* Error reporting in the UI 

**Fixed** 

* Manual call of modules when multiple modules are availables 
* Multiples bugs fixes 
* Security fixes 

[Full Changelog](https://github.com/dfir-iris/iris-web/compare/v1.4.5...v2.0.0)  

## [v1.4.5](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.4) <small>_ June 9, 2022 _</small> 

**What's Changed**

* Added a datastore in [#115](https://github.com/dfir-iris/iris-web/pull/115), fixes [#30](https://github.com/dfir-iris/iris-web/issues/30) : 
    * Upload and store any files on IRIS 
    * Password protect them as an option 
    * Download
    * Add to IOC and/or evidences automatically 
    * Reference to files in notes, summary or any textual input 
    * Copy/paste of images directly in notes and summary 
    * Virtual folders to arrange files
* Ability to configure password policy in [#117](https://github.com/dfir-iris/iris-web/pull/117), fixes [#116](https://github.com/dfir-iris/iris-web/issues/116)
* Dark mode improved, flickering removed 
* Multiples bugs fixes 
* Security fixes 

[Full Changelog](https://github.com/dfir-iris/iris-web/compare/v1.4.4...v1.4.5)  

**Notes**: Changes are made to the Nginx docker to allow upload of big files, hence specific upgrades are needed and auto-updates is not yet supported for this version. Please see the [upgrades instruction](https://docs.dfir-iris.org/operations/upgrades/#v145) for more details. 

## [v1.4.4](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.4) <small>_ May 18, 2022 _</small> 

**What's Changed**

- Implementation of bulk events editing by @sebastiandemmer in [#110](https://github.com/dfir-iris/iris-web/pull/110)
- Fixes context switch button doesn't load cases by @DevJoost in [#112](https://github.com/dfir-iris/iris-web/pull/112)
- Fixes multiple minor bugs 

[Full Changelog](https://github.com/dfir-iris/iris-web/compare/v1.4.3...v1.4.4)


## [v1.4.3](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.3) <small>_ May 13, 2022 _</small> 

**What's changed**

- Managed IRIS updates from itself
- Custom icons for assets - fixes [#44](https://github.com/dfir-iris/iris-web/issues/44) by @sebastiandemmer
- IOCs link in timeline and graph - fixes [#50](https://github.com/dfir-iris/iris-web/issues/50) 
- History of modifications in timeline
- User id in timeline export as an option - fixes [#65](https://github.com/dfir-iris/iris-web/issues/65) 
- Backup of database from the interface 
- Minimisation of modals in cases 
- New UI improvements in timeline 
- New minimal notifications for almost all activities
- Improved overall responsiveness and speed 
- Improved error feedbacks to users
- Improved load of tasks results by x10
- Code cleaning
- Multiple bug fixes

[Full Changelog](https://github.com/dfir-iris/iris-web/compare/v1.4.2...v1.4.3)

## [v1.4.2](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.2) <small>_ April 22, 2022 _</small> 

**Improvements** :   

* Possibility to duplicates events in timeline - [#91](https://github.com/dfir-iris/iris-web/pull/91)  
* Possibility to filter timeline with basic query - [#94](https://github.com/dfir-iris/iris-web/issues/94)   

**Fixes** :   

* Integer limit on file size in evidences - [#89](https://github.com/dfir-iris/iris-web/issues/89)  
* Gradient in closed cases   
* on-preload hooks list handling - [#92](https://github.com/dfir-iris/iris-web/issues/92)   
* tags issue - [#88](https://github.com/dfir-iris/iris-web/pull/88)   
* Case info modal from case - [#93](https://github.com/dfir-iris/iris-web/issues/93)   
* Multiple UI issues   

## [v1.4.1](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.1) <small>_ April 8, 2022 _</small> 
 
* Fixes a [scrolling issue](https://github.com/dfir-iris/iris-web/pull/86) of the timeline when events are being popped 

## [v1.4.0](https://github.com/dfir-iris/iris-web/releases/tag/v1.4.0) <small>_ April 6, 2022 _</small> 
*A bug fixe exists for this version. See v1.4.3* 

* Hooks, adding the ability for modules to react on almost anything happening on the plateform in [#75](https://github.com/dfir-iris/iris-web/pull/75)
* New type of modules that can handles hooks 
* VirusTotal beta integration as a processor module 
* MISP beta integration as a processor module 
* Custom attributes on all case objects allowing to extend the default fields 
* A compact timeline view for better visbility 
* Premises of a dark theme
* Resiliency of docker volume in [#80](https://github.com/dfir-iris/iris-web/pull/80)
* Minor improvements in [#69](https://github.com/dfir-iris/iris-web/pull/69), [#79](https://github.com/dfir-iris/iris-web/pull/79)
* Bug fixes in [#70](https://github.com/dfir-iris/iris-web/pull/70), [#73](https://github.com/dfir-iris/iris-web/pull/73), [#77](https://github.com/dfir-iris/iris-web/pull/77)
* Security fixes 


## [v1.3.1](https://github.com/dfir-iris/iris-web/releases/tag/v1.3.1) <small>_ March 19, 2022 _</small> 

- Fixes wheel issue preventing proper build of the docker, as described in [#83](https://github.com/dfir-iris/iris-web/pull/83)

## [v1.3.0](https://github.com/dfir-iris/iris-web/releases/tag/v1.3.0) <small>_ January 24, 2022 _</small> 

* Added the ability to batch upload IOC from a CSV file in  [#26](https://github.com/dfir-iris/iris-web/pull/26)
* Added the ability to batch upload assets from a CSV
* Screenshot - Export contents of any case pages as PNG in [#35](https://github.com/dfir-iris/iris-web/pull/35)
* Export timeline as CSV in [#47](https://github.com/dfir-iris/iris-web/pull/47)
* Improved timeline loading time by x10 - loads thousands of events in a sec 
* New auto parsing of dates in events addition/updates
* Brand new timeline visualisations 
* Improved assets loading time 
* Shared links - easily share any case objects with your collaborators
* Right panel now offers last activities for user's current case
* Added assets tags in [#37](https://github.com/dfir-iris/iris-web/pull/37)
* New API endpoints in [#53](https://github.com/dfir-iris/iris-web/pull/53)
* Auto migration of database for next releases
* Indication of mandatory fields in forms 
* General bug fixes, stability and UI improvement 

## [v1.2.1](https://github.com/dfir-iris/iris-web/releases/tag/v1.2.1) <small>_ December 31, 2021 _</small> 

* Added ATT&CK tactics by @ecapuano in [#9](https://github.com/dfir-iris/iris-web/pull/9)
* Added screenshot and video link in readme in [#12](https://github.com/dfir-iris/iris-web/pull/12)
* Fixed duplicated path to add customer in [#4](https://github.com/dfir-iris/iris-web/pull/4)
* Fixed asset description data validation client side in [#7](https://github.com/dfir-iris/iris-web/pull/7)
* Fixed tooltip in [#10](https://github.com/dfir-iris/iris-web/pull/10)
* Add a per-column filtering field in the case view by in [#15](https://github.com/dfir-iris/iris-web/pull/15)