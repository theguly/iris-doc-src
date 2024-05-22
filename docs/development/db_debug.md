# DB Debug 
In case a DB Debug with pgAdmin is needed, you need to follow this step :  

**In a terminal**:

This creates a new virtual environment as required.


    1. sudo mkdir /var/lib/pgadmin
    2. sudo mkdir /var/log/pgadmin
    3. sudo chown $USER /var/lib/pgadmin
    4. sudo chown $USER /var/log/pgadmin
    5. python3 -m venv pgadmin4
    6. source pgadmin4/bin/activate
    7. (pgadmin4) $ pip install pgadmin4
    8. (pgadmin4) $ pgadmin4
    NOTE: Configuring authentication for SERVER mode.

    Enter the email address and password to use for the initial pgAdmin user account:

    Email address: user@domain.com
    Password: 
    Retype password:
    Starting pgAdmin 4. Please navigate to http://127.0.0.1:5050 in your browser.
    * Serving Flask app "pgadmin" (lazy loading)
    * Environment: production
      WARNING: Do not use the development server in a production environment.
      Use a production WSGI server instead.
    * Debug mode: off

Then run, http://127.0.0.1:5050/browser/ in your browser.

Follow the next steps, to add iris_db :

    1. Click right on Servers>New>Server.
    2. Write a name for the server in "General".
    3. In "Connexion" write :
    hostname : localhost
    port : 5432
    database : iris_db
    username : postgres 
    4. To finish click on save.

    