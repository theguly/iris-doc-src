# Configuration 
Since v2.0.0 the entire configuration is done through the `.env` file at the root of the IRIS directory.  

## Default configuration 
The default configuration is provided through a `.env.model` file at the root of the IRIS directory. One need to copy this file to `.env` and modify it if needed.  

The default configuration is suitable for testing only. The following parameters need to be changed for production:  

- `IRIS_SECRET_KEY`: Key used by Flask to secure the session cookies. Needs to be random. 
- `IRIS_SECURITY_PASSWORD_SALT`: A salt used for password encryption in the DB. Needs to be random and different from `IRIS_SECRET_KEY`. 

One can use `python -c 'import secrets; print(secrets.token_hex())'` to generate a theses values. 

## Available settings

| Key | Section | Optionnal | Description | 
|-----|---------|-----|------|
| `SERVER_NAME` | Nginx | No | Passed to the server_name in NGINX configuration | 
| `KEY_FILENAME` | Nginx | No | SSL Cert key filename passed to the NGINX configuration | 
| `CERT_FILENAME` | Nginx | No | SSL Cert filename passed to the NGINX configuration | 
| `INTERFACE_HTTPS_PORT`| Nginx | Yes | Listening interface of IRIS | 
| `POSTGRES_USER` | DB | No | Name of the POSTGRES user | 
| `POSTGRES_PASSWORD` | DB | No | Password of the POSTGRES user | 
| `POSTGRES_ADMIN_USER` | DB | No | Name of the admin user | 
| `POSTGRES_ADMIN_PASSWORD` | DB | No | Password of the ADMIN user | 
| `POSTGRES_DB` | DB | No | Name of the DB used by IRIS | 
| `POSTGRES_SERVER` | DB | No | Hostname or IP of the DB | 
| `POSTGRES_PORT` | DB | No | Port of the DB server | 
| `DOCKERIZED` | IRIS | Yes | Set to `1` when using dockers (default) | 
| `IRIS_SECRET_KEY` | IRIS | No | Secret key used tp secure sessions - needs to be random | 
| `IRIS_SECURITY_PASSWORD_SALT` | IRIS | No | Secret used to salt the passwords in DB - needs to be random | 
| `IRIS_UPSTREAM_SERVER` | IRIS | No | WebApp upstream server - used to configure nginx reverse proxy | 
| `IRIS_UPSTREAM_PORT` | IRIS | No | WebApp upstream server port - used to configure nginx reverse proxy | 
| `IRIS_ORGANISATION_NAME`| IRIS | No | Name of the company / organisation. Used on the UI | 
| `IRIS_UPLOADED_PATH` | IRIS | No | Path to store uploaded data. | 
| `IRIS_BACKUP_PATH` | IRIS | No | Path to store backup files. | 
| `IRIS_TEMPLATES_PATH` | IRIS | No | Path of the templates | 
| `IRIS_DATASTORE_PATH` | IRIS | No | Path of the datastore files | 
| `IRIS_DEMO_ENABLED`| Demo | No | Set to True to switch IRIS to Demo mode | 
| `IRIS_DEMO_DOMAIN` | Demo | No | URL of the demonstration server | 
| `IRIS_DEMO_USER_SEED`| Demo | No | Random seed to generate demo users | 
| `IRIS_DEMO_ADM_SEED` | Demo | No | Random seed to generate admin users for demo | 
| `CELERY_BROKER` | Celery | No | Broker URL used to handle IRIS tasks | 
| `IRIS_AUTHENTICATION_TYPE` | Auth | No | IRIS auth mode : `local` or `ldap` | 
| `IRIS_ADM_PASSWORD` | Auth | Yes | Set to use as initial password of the administrator account. Only works for the very first run of IRIS. Needs to match the passowrd policy | 
| `IRIS_ADM_API_KEY` | Auth | Yes | Set to use as initial API Key of the administrator | 
| `IRIS_ADM_EMAIL` | Auth | Yes | Set to use as initial email of the administrator | 
| `IRIS_ADM_USERNAME`| Auth | Yes | Set to use as initial username of the administrator | 
| `LDAP_SERVER`| Auth | Yes | LDAP server IP or domain | 
| `LDAP_PORT`| Auth | Yes| LDAP server port | 
| `LDAP_USER_PREFIX`| Auth | Yes | Prefix to search the users within  | 
| `LDAP_USER_SUFFIX`| Auth | Yes | Suffix to search the users within |
| `LDAP_USE_SSL`| Auth | Yes | Set to True to use LDAPS |
| `LDAP_VALIDATE_CERTIFICATE` | Auth | Yes | Set to True to verify the server certificate validity | 
| `LDAP_TLS_VERSION` | Auth | Yes | TLS version to use LDAPS | 
| `LDAP_SERVER_CERTIFICATE`| Auth | Yes | Path of the LDAP server certificate | 
| `LDAP_PRIVATE_KEY`| Auth | Yes | Path of the LDAP private certificate | 
| `LDAP_PRIVATE_KEY_PASSWORD`| Auth | Yes | Passowrd of the private key | 