# Logging
All components of IRIS offers by-default logging in the docker instances.  
Depending on the OS of the hosts, the location of these logs may differ.  

For Debian-based distributions, the logs are usually in `/var/lib/docker/containers/`.   
The usually interesting logs in IRIS are the following: 

- `iriswebapp_app` : Contains the logs of core of IRIS, including major stack traces and access control output 
- `iriswebapp_worker`: Contains the logs of the worker and output of modules
- `iriswebapp_nginx`: Contains the logs of the reverse proxy. Every request to IRIS is logged there.  

## Setting up forwarding
Logs of IRIS can be forwarded to a SIEM for monitoring. Below is discussed how to setup Splunk forwarding. Other drivers are available and detailed on the [docker website](https://docs.docker.com/config/containers/logging/configure/).    

1. Enable HEC and get an HEC token from Splunk. See the [Splunk documentation](https://docs.splunk.com/Documentation/Splunk/9.0.3/Data/UsetheHTTPEventCollector)
2. On the host where docker is running, create a file `/etc/docker/daemon.json` and specify the following content: 
    ```json 
    {
        "log-driver": "splunk",
        "log-opts": {
            "splunk-insecureskipverify": "true", 
            "splunk-index": "iris",
            "splunk-token": "YOUR HEC TOKEN",
            "splunk-url": "https://SPLUNK_SERVER:8088"
        }
    }
    ```
3. Reload the docker daemon: `systemctl reload docker`. The logs should appear in the Splunk instance.

