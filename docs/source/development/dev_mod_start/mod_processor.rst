Quick start processor modules
-----------------------------

In this tutorial, we demonstrate the steps to write a basic processor module which subscribes to a hook, and log what it receives when the hook is triggered. We will add 
a configuration setting to offer our users the ability disable this feature.  

We'll call it ``IrisDummyModule``.  


Project structure overview 
^^^^^^^^^^^^^^^^^^^^^^^^^^^
As described in the `development module main page <dev-module-main:>`_ , the module should have the following structure.  

.. code:: python

  setup.py                # Setup configuration to build the module 
  README.md               # README 
  iris_dummy_module       # Name of the package 
      __init__.py              # Declaration of the package and main class
      IrisDummyConfig.py       # Configuration of the module to help keep the main file clean 
      IrisDummyInterface.py    # Main class of the module 


While the module could have only one main file ``IrisDummyInterface.py``, we recommend splitting its configuration into a new configuration file (here ``IrisDummyConfig.py``) to keep the code clear.   

There is no mandatory naming convention for the files or the class or the methods. We chose this one to keep things clear, and we recommend following the same. But it's up to the developer really. 

We will walk over these files one by one during this tutorial.  


Creating the interface
^^^^^^^^^^^^^^^^^^^^^^^

The interface is the code that talks with IRIS. It implements methods that call and are called by the server. It needs to inherit  `IrisModuleInterface class <https://github.com/dfir-iris/iris-module-interface/blob/master/iris_interface/IrisModuleInterface.py>`_ from the `IrisModuleInterface package <https://github.com/dfir-iris/iris-module-interface>`_.  This module handles most of the methods needed by IRIS to recognize, set up and call the module.  By inheriting this class in our interface, we avoid writing that part ourselves.  

Let's write our basic interface class.  The name of the file has to be the name of the main class, that's the only constraint. We'll see later on why.  

.. code-block:: python
    :caption: iris_dummy_module/IrisDummyInterface.py 

    #!/usr/bin/env python3
    
    # Import the IrisInterface class
    from iris_interface.IrisModuleInterface import IrisModuleInterface

    # Create our module class
    class IrisDummyModule(IrisModuleInterface):
        pass 

That's it ! Actually this class is not doing anything right now. We'll need to add a few methods to register our hook later.  

But first we need to indicate to IRIS what is our main interface class. Remember, there is no convention restriction, so IRIS has no way to know which class it should instantiate to call our module.  

To do so, we need to set a specific variable in our `__init__.py`.  

.. code-block:: python
    :caption: iris_dummy_module/__init__.py 
    
    # Set the __iris_module_interface variable to the name of our main class. 
    # When IRIS instantiate the python module, it looks for "module.__iris_module_interface"
    # And then tries to instantiate the class "__iris_module_interface.__iris_module_interface", here 'IrisDummyModule.IrisDummyModule'. 
    # That's why the python file must have the same name as the class.  
    __iris_module_interface = "IrisDummyModule"


Our module is now recognizable by IRIS ! Pretty simple right ? 


Writing the configuration 
^^^^^^^^^^^^^^^^^^^^^^^^^ 
The next step is to describe what the module is doing, its name, it's configuration, etc. 
This is done by overwriting predefines variables of the ``IrisModuleInterface`` class.   

Let's create our Python configuration file and go through each variables.  


.. code-block:: python
    :caption: iris_dummy_module/IrisDummyConfig.py
    
    # Import the module types list,  so we can indicate the type of our module 
    from iris_interface.IrisModuleInterface import IrisModuleTypes 

    # Human name displayed in the GUI Manage > Modules. This can be anything, 
    # but try to put something meaningful, so users recognize your module. 
    module_name = "IrisDummy"

    # Description displayed when editing the module configuration in the UI. 
    # This can be anything, 
    module_description = "Provides a dummy module that replies to one hook"

    # Set the interface version used. This needs to be the version of 
    # the IrisModuleInterface package. This version is check by the server to
    # to ensure our module can run on this specific server 
    interface_version = 1.1

    # The version of the module itself, it can be anything 
    module_version = 1.0

    # The type of the module, here processor 
    module_type = IrisModuleTypes.module_processor

    # Our module is a processor type, so it doesn't offer any pipeline 
    pipeline_support = False

    # Provide no pipeline information as our module don't implement any 
    pipeline_info = {}

    # The configuration of the module that will be displayed and configurable 
    # by administrators on the UI. This describes every parameter that can 
    # be set. 
    module_configuration = [
        {
            "param_name": "check_log_received_hook",

            "param_human_name": "Log received hook",

            "param_description": "Logs a message upon hook receiving if set to true. Otherwise do nothing.",

            "default": True,

            "mandatory": True,

            "type": "bool"
        }
    ]

The module configuration parameters are the following : 
    - ``param_name`` : The internal parameter name. This will be used by the module itself to fetch the value when needed.
    - ``param_human_name`` : The name displayed on the UI for this specific parameter
    - ``param_description``: A description explaining what this parameter is doing to help administrators
    - ``default``: The default value of our parameter. Here we set to True, so after install our module is already configured and ready to log the hook. 
    - ``mandatory``:  Indicates whether the parameter is mandatory or not. If set to True  and no value is provided (either by admin or by default), the module is automatically disabled by IRIS
    - ``type``: The type of parameter. Here a boolean, which will be rendered under the form of a checkbox.  

A module can have as many parameters as it needs.  

We now need to update our main class to set this configuration.  


.. code-block:: python
    :caption: iris_dummy_module/IrisDummyInterface.py 

    #!/usr/bin/env python3
    
    # Import the IrisInterface class
    from iris_interface.IrisModuleInterface import IrisModuleInterface

    # Create our module class
    class IrisDummyModule(IrisModuleInterface):
        # Set the configuration
        _module_name = interface_conf.module_name
        _module_description = interface_conf.module_description
        _interface_version = interface_conf.interface_version
        _module_version = interface_conf.module_version
        _pipeline_support = interface_conf.pipeline_support
        _pipeline_info = interface_conf.pipeline_info
        _module_configuration = interface_conf.module_configuration
        _module_type = interface_conf.module_type

        pass 


Done ! The module is now providing enough information to IRIS, so it knows exactly what our module do and what needs to be called to run it.  

However, our module is still doing nothing. Let's make it subscribe to an IRIS hook.  



Subscribing to a hook 
^^^^^^^^^^^^^^^^^^^^^
Hooks allow to be notified by IRIS when a specific event occurs (IOC creation, deletion, etc). For a comprehensive description of hooks, please see the `Hooks section <dev-iris-hooks>`_ of this documentation.  

The registration (or subscription) to a hook occurs at two moments during the life of a module : 
    - When the module is added to IRIS 
    - When the configuration of the module is changed by an Admin. This allows dynamic subscription and deregistration of hooks depending on the config. 

These registration/deregistration events are triggered by IRIS, and are propagated to modules through the IrisModuleInterface method ``register_hooks`` (`ref <https://github.com/dfir-iris/iris-module-interface/blob/d63b358b1861e4545e983b67d9530469e3a87918/iris_interface/IrisModuleInterface.py#L389>`_).  

To register to a hook, we simply need to override this method.  


