echo '#!/bin/bash' >> ~/.bin/minikube
echo '' >> ~/.bin/minikube
echo 'case "$1" in' >> ~/.bin/minikube
echo ' "start")' >> ~/.bin/minikube
echo ' echo "Starting local Kubernetes cluster..."' >> ~/.bin/minikube
echo ' docker run --name minikube -d --hostname=localhost --volume=/:/rootfs:ro --volume=/sys:/sys:rw --volume=/var/lib/docker:/var/lib/docker:rw --volume=/var/lib/kubelet:/var/lib/kubelet:rw --volume=/var/run:/var/run:rw --net=host --pid=host --privileged gcr.io/google_containers/localkube-amd64:v1.3.0 /localkube start --apiserver-insecure-address=0.0.0.0 --apiserver-insecure-port=8080 --logtostderr=true --containerized > /dev/null' >> ~/.bin/minikube
echo ' id=$(docker inspect --format="{{.Config.Hostname}}" minikube)' >> ~/.bin/minikube
echo ' docker exec minikube bash -c "echo \"127.0.0.1 $id\" >> /etc/hosts"' >> ~/.bin/minikube
echo ' curl -so ~/.bin/kubectl http://storage.googleapis.com/kubernetes-release/release/v1.3.0/bin/linux/amd64/kubectl > /dev/null' >> ~/.bin/minikube
echo ' chmod u+x ~/.bin/kubectl > /dev/null' >> ~/.bin/minikube
echo ' until $(curl -s host01:8080 &> /dev/null); do' >> ~/.bin/minikube
echo ' sleep 1' >> ~/.bin/minikube
echo ' done' >> ~/.bin/minikube
echo ' echo "Kubernetes is available at https://[[HOST_SUBDOMAIN]]-8080-[[KATACODA_HOST]].environments.katacoda.com"' >> ~/.bin/minikube
echo ' echo "Kubectl is now configured to use the cluster."' >> ~/.bin/minikube
echo ' export KUBERNETES_MASTER=http://host01:8080' >> ~/.bin/minikube
echo ' ;;' >> ~/.bin/minikube
echo ' "stop")' >> ~/.bin/minikube
echo ' echo "Stopping local Kubernetes cluster..."' >> ~/.bin/minikube
echo ' docker rm -f minikube > /dev/null' >> ~/.bin/minikube
echo ' echo "Kubernetes cluster stopped."' >> ~/.bin/minikube
echo ' ;;' >> ~/.bin/minikube
echo ' "version")' >> ~/.bin/minikube
echo ' echo "minikube version: v0.6.0-katacoda"' >> ~/.bin/minikube
echo ' ;;' >> ~/.bin/minikube
echo ' *)' >> ~/.bin/minikube
echo ' echo "Minikube is a CLI tool that provisions and manages single-node Kubernetes clusters optimized for development workflows."' >> ~/.bin/minikube
echo ' echo ""' >> ~/.bin/minikube
echo ' echo "Usage:"' >> ~/.bin/minikube
echo ' echo " minikube [command]"' >> ~/.bin/minikube
echo ' echo ""' >> ~/.bin/minikube
echo ' echo "Available Commands:"' >> ~/.bin/minikube
echo ' echo "start Starts a local kubernetes cluster."' >> ~/.bin/minikube
echo ' echo "stop Stops a running local kubernetes cluster."' >> ~/.bin/minikube
echo ' echo "version Print the version of minikube."' >> ~/.bin/minikube
echo ' exit 1' >> ~/.bin/minikube
echo 'esac' >> ~/.bin/minikube
chmod +x ~/.bin/minikube
echo 'export KUBERNETES_MASTER=http://host01:8080' >> ~/.bashrc
~/.bin/minikube start
kubectl run kubernetes-bootcamp --image=docker.io/jocatalin/kubernetes-bootcamp:v1 --port=8080