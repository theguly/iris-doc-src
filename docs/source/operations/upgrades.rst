.. role:: text-danger

Upgrades
*********

Most of the time, Iris handles upgrades of the database automatically when a new version is started, thus no specific actions are required.  
Please use the table below to assess if a manual action is required or not. 


.. csv-table:: Versions upgrades
   :file: _rsrcs/versions_upgrades.csv
   :header-rows: 1
   :class: longtable


.. admonition::  Caution
  :class: warning
  
  For production environments, it is highly recommended to make backups of the DB in case any issues occur during upgrades.  

Backing-up DB
--------------
Only if you run in production and data is critical. 

1. List the current running docker containers `docker container list`
2. Spot the IRIS DB container name or ID, and execute the backup

.. code:: bash 

  docker exec <container> pg_dump -U postgres iris_db | gzip > ../iris_db_backup.gz


Upgrading
----------

1. Stop the dockers ``docker-compose stop``
2. Remove the application dockers ``docker-compose rm app worker``
3. Get the last version of Iris ``git checkout master`` - or any tagged versions
4. Build the new versions ``docker-compose build app worker --no-cache``
5. Run IRIS again. The app will handle the DB migration ``docker-compose up``


Rolling back
-------------
In case something went wrong, you can rollback to your previous version and restore data. 

1. Remove the faulty docker DB ``docker-compose down db --volumes``
2. Checkout to the previous version working of IRIS 
3. Rebuild the images ``docker-compose build --no-cache``
4. Spin up the docker DB, and ONLY this one. ``docker-compose up db``
5. Get the ID or name of the docker DB ``docker container list``
6. Restore the DB data ``zcat ../iris_db_backup.gz | docker exec -i <container> psql -U postgres -d iris_db``
7. Spin up the rest of the dockers ``docker-compose up``
8. Your data should back.



Version specific upgrades
**************************

.. _upgrade_to_v1_4_0:

v1.4.0
-------
v1.4.0 brings breaking changes in the DB docker by adding a named volume. This implies that previous existing database is scrapped
if not manual migration is done. To prevent this, please **strictly follow the guide below**. 

1. Fetch the current db volume ID with ``docker inspect <iris_db>``
2. Stop the DB docker : ``docker-compose stop db``
3. Create a new empty volume : ``docker volume create --name iris-web_db_data`` 
4. Run a volume copy via a dummy image : ``docker run --rm -it -v <previous_db_volume_id> /from:ro -v iris-web_db_data:/to alpine ash -c "cd /from ; cp -av . /to``
5. Rebuild and restart docker DB : ``docker compose build db, docker compose up db``
6. The data is normally successfully transferred.

