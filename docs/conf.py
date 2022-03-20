# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys

# sys.path.insert(0, os.path.abspath('.'))
roo = os.path.abspath('.')
sys.path.insert(0, roo + '/../../../dfir-iris-client')
print(roo)

# -- Project information -----------------------------------------------------

project = 'IRIS - Incident Response Platform'
copyright = '2022, Airbus CyberSecurity'
author = 'DFIR-IRIS Team'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
  'sphinx.ext.todo',
  'sphinx.ext.githubpages',
  'sphinxcontrib.httpdomain', 
  'sphinx.ext.autodoc'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

html_static_path = ['_static']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

master_doc = 'index'
pygments_style = 'sphinx'
# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_book_theme'
import sphinx_book_theme
html_theme_path = [sphinx_book_theme.get_html_theme_path()]

html_logo = '_static/logo_blue.png'
html_title = ''
html_show_copyright = True
html_favicon = '_static/logo.ico'

