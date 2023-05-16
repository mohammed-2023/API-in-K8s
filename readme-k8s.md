## Assumptions
1- Docker desktop is installed
2- node.js is installed
3- minikube installed
[minikube start | minikube (k8s.io)](https://minikube.sigs.k8s.io/docs/start/)



## Steps

1- download related docker compose file:
[API-in-K8s/deployment.yaml at main · mohammed-2023/API-in-K8s · GitHub](https://github.com/mohammed-2023/API-in-K8s/blob/main/deployment.yaml)
2- download json file of index:
[API-in-K8s/index.js at main · mohammed-2023/API-in-K8s · GitHub](https://github.com/mohammed-2023/API-in-K8s/blob/main/index.js)
3- download json for package lock:
[API-in-K8s/package-lock.json at main · mohammed-2023/API-in-K8s · GitHub](https://github.com/mohammed-2023/API-in-K8s/blob/main/package-lock.json)
4- download json file of package:
[API-in-K8s/package.json at main · mohammed-2023/API-in-K8s · GitHub](https://github.com/mohammed-2023/API-in-K8s/blob/main/package.json)
5- run the following command:
 

    Minikube start
(Install minikube)

    Minikube status
(Gets the status of a local Kubernetes cluster)

    Docker ps
(To shows the running containers)

    Kubectl get nodes
(For look for existing nodes)

    Kubectl get pods -A
   (For look for existing Pods)
   

    minikube docker-env | Invoke-Expression
note:
The command `minikube docker-env` is used to configure your local Docker environment to use the Docker daemon inside the Minikube virtual machine.

The  `| Invoke-Expression`  part of the command is used to execute the output of the  `minikube docker-env`  command as  shell commands  in the current shell. This sets the necessary environment variables to point Docker commands to the Docker daemon running inside the Minikube virtual machine.

So, when you run  `minikube docker-env | Invoke-Expression`, the output of  `minikube docker-env`  is passed as input to the  `Invoke-Expression`  command, which executes the output as shell commands in the current shell. This sets up the necessary environment variables to use the Docker daemon inside the  Minikube virtual machine.

    docker build -t apiv1 

(Used to build a Docker image and tag it with a specific name and optional tag)

    Kubectl get svc

(sed to retrieve information about the Kubernetes services that are currently running in a Kubernetes cluster)

    minikube service my-api
    
   (Used to expose a Kubernetes service running inside a local Minikube cluster and open a web browser to access it)
