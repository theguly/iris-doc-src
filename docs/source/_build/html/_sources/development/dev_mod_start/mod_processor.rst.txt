Quick start processor modules
-----------------------------

In this tutorial, we demonstrate the steps to write a basic processor module. It is based on the `IrisCheck <https://github.com/dfir-iris/iris-check-module>`_ , a simple module that logs every hook it receives. 


Project structure
^^^^^^^^^^^^^^^^^
As described in the `development module main page <dev-module-main:>`_ , the module should have the following structure.  
While the module could have only one main file ``IrisCheckInterface.py``, we recommend splitting its configuration into a new configuration file (here ``IrisCheckConfig.py``) to keep the code clear.   

There is no mandatory naming convention for the files or the class or the methods. We chose this one to keep things clear, and we recommend following the same. But it's up to the developer really. 


.. code:: python

  setup.py                # Setup configuration to build the module 
  README.md               # README 
  iris_check_module       # Name of the package 
      __init__.py              # Declaration of the package and main class
      IrisCheckConfig.py       # Configuration of the module to help keep the main file clean 
      IrisCheckInterface.py    # Main class of the module 

We will walk over these files one by one during this tutorial.  


