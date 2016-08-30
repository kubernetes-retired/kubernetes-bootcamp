$(function() {

	$('.content__trigger, .header__sider').on('click', function(){
		if($('body').width() > 1000) {
 			$('body').toggleClass('page_desktop_hide');
 		} else {
 			$('body').toggleClass('page_open');
 		}
	});

	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll > 0) {
			$('.scrolltop').addClass('scrolltop_active');
		} else {
			$('.scrolltop').removeClass('scrolltop_active');
		}
	}).scroll();

	$('.scrolltop').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

});


// Ractive quiz
$(function() {

	var quizDataM1 = [{
		text	: 'At its core, Kubernetes is a platform for:',
		answers : [{
			text		: 'Provisioning machines (similar to Puppet, Ansible)',
			note		: 'Kubernetes can schedule workloads on the cluster nodes but it is not a machine provisioning tool.',
			isCorrect	: false
		},{
			text		: 'Running and scheduling container applications on a cluster',
			note		: 'Kubernetes allows you to orchestrate and manage containers on distributed systems',
			isCorrect	: true
		},{
			text		: 'Packaging software in containers',
			note		: 'The tool you’ll use to package your software will be Docker or rkt.',
			isCorrect	: false
		}],
	},{
		text	: 'In Kubernetes, a node is:',
		answers : [{
			text		: 'A tool for starting a kubernetes cluster on a local machine',
			note		: 'You can start a Kubernetes cluster using minikube',
			isCorrect	: false
		},{
			text		: 'A worker machine',
			note		: 'The Kubernetes nodes are the place where we’re going to deploy our applications',
			isCorrect	: true
		},{
			text		: 'A machine that coordinates the scheduling and management of application containers on the cluster',
			note		: 'The Master is coordinating the Kubernetes cluster',
			isCorrect	: false
		}],
	},{
		text	: 'What can you deploy on Kubernetes?',
		answers : [{
			text		: 'Containers',
			note		: 'Kubernetes supports Docker, rkt and other types of containers',
			isCorrect	: true
		},{
			text		: 'Virtual machines',
			note		: 'Kubernetes (on its own) cannot deploy virtual machines',
			isCorrect	: false
		},{
			text		: 'System processes (like sshd, httpd)',
			note		: 'Kubernetes (on its own) cannot deploy system processes',
			isCorrect	: false
		}],
	}]

	var quizDataM2 = [{
		text	: 'Kubectl is:',
		answers : [{
			text		: 'A tool used to start a Kubernetes cluster on a local machine',
			note		: 'You can start a Kubernetes cluster with minikube',
			isCorrect	: false
		},{
			text		: 'A type of Kubernetes host',
			note		: 'The k8s hosts are master and nodes',
			isCorrect	: false
		},{
			text		: 'the Kubernetes cli tool',
			note		: 'kubectl is the Kubernetes cli',
			isCorrect	: true
		}],
	},{
		text	: 'What is a Deployment?',
		answers : [{
			text		: 'A type of container',
			note		: 'Deployments allow application containers  to be redeployed in case of failure',
			isCorrect	: false
		},{
			text		: 'A Deployment is responsible for managing the desired state of your applications',
			note		: 'A Deployment is responsible for creating and updating instances of your application',
			isCorrect	: true
		},{
			text		: 'A type of Kubernetes host',
			note		: 'The Kubernetes hosts are Master and Nodes. Deployments will run on Nodes',
			isCorrect	: false
		}],
	},{
		text	: 'What command would you use to create a Deployment?',
		answers : [{
			text		: '"kubectl get deployments"',
			note		: 'This get command will only list the existing Deployments',
			isCorrect	: false
		},{
			text		: '"kubectl get nodes"',
			note		: 'This get command will only list the available Nodes where you can deploy applications',
			isCorrect	: false
		},{
			text		: '"kubectl run"',
			note		: 'run is the command that will create a new deployment',
			isCorrect	: true
		}],
	}]

		var quizDataM3 = [{
		text	: 'What is a Pod?',
		answers : [{
			text		: 'A host machine where containers are deployed',
			note		: 'The machines where we deploy Pods are called Nodes',
			isCorrect	: false
		},{
			text		: 'A Kubernetes primitive responsible for deploying and scheduling application containers',
			note		: 'A Deployment is responsible for creating and updating the instances of your application containers',
			isCorrect	: false
		},{
			text		: 'A group of one or more application containers that include shared volume and IP address',
			note		: 'In Kubernetes all containers are deployed inside Pods',
			isCorrect	: true
		}],
	},{
		text	: 'What is a Node?',
		answers : [{
			text		: 'A group of one or more containers deployed on Kubernetes',
			note		: 'A Pod is a group of one or more containers deployed on a Node',
			isCorrect	: false
		},{
			text		: 'A Node is a worker machine in Kubernetes',
			note		: 'A node can be VM or physical machines',
			isCorrect	: true
		},{
			text		: 'A Node is a machine that coordinates the cluster',
			note		: 'Masters are the machines that are coordinating the Kubernetes cluster',
			isCorrect	: false
		}],
	},{
		text	: 'What would be  the result of this command: “kubectl exec -ti my_pod_name bash”',
		answers : [{
			text		: 'Get the list of Pods',
			note		: 'To get the list of Pods you need to run the "get pods" command',
			isCorrect	: false
		},{
			text		: 'Open a console on the first container inside the my_pod_name',
			note		: 'Remember that you need to specify the container name in case you have multiple containers on the Pod',
			isCorrect	: true
		},{
			text		: 'Show on what node the pod called my_pod_name is running',
			note		: 'To find out on what node is your Pod running you can use the "describe pod" command',
			isCorrect	: false
		}],
	}]

	var quizDataM4 = [{
		text	: 'What is a Service?',
		answers : [{
			text		: 'A co-located and co-scheduled group of one or more containers that share volume and an IP address',
			note		: 'This is the definition of a Pod',
			isCorrect	: false
		},{
			text		: 'A Service is responsible for creating and updating instances of your containerized applications',
			note		: 'Deployments are managing the lifecycle of your deployed applications',
			isCorrect	: false
		},{
			text		: 'A Kubernetes Service is an abstraction layer which defines a logical set of Pods',
			note		: 'You can use Services to group your Pods',
			isCorrect	: true
		}],
	},{
		text	: 'How can you create a Service?',
		answers : [{
			text		: 'With "kubectl expose"',
			note		: 'Expose is the command you’ll use to expose your Deployments to the outside world',
			isCorrect	: true
		},{
			text		: 'With "kubectl describe"',
			note		: 'This command allows you to view in detail resources configuration',
			isCorrect	: false
		},{
			text		: 'With "kubectl proxy"',
			note		: 'This is an alternative to exposing the Service, but it will create a route only between your terminal and the cluster',
			isCorrect	: false
		}],
	},{
		text	: 'What is a Label in Kubernetes?',
		answers : [{
			text		: 'A way to expose traffic',
			note		: 'To expose your Pods you would use a Service',
			isCorrect	: false
		},{
			text		: 'A type of Deployment',
			note		: 'Deployments generate automatically labels for deployed Pods',
			isCorrect	: false
		},{
			text		: 'A way to group related things using key/value pairs',
			note		: 'You can use labels to group resources that are related (like: web servers, databases)',
			isCorrect	: true
		}],
	}]

	var quizDataM5 = [{
		text	: 'What is the link between Scaling and Deployments?',
		answers : [{
			text		: 'Scaling changes the number of replicas in a Deployment',
			note		: 'Scaling is accomplished by changing the number of replicas in a Deployment',
			isCorrect	: true
		},{
			text		: 'Scaling exposes a Deployment to external network traffic',
			note		: 'A Service will expose Deployments to external network traffic',
			isCorrect	: false
		},{
			text		: 'Scaling creates a new Service',
			note		: 'Scaling will not create a new Service. An Service will load-balance network traffic in case of scaling',
			isCorrect	: false
		}],
	},{
		text	: 'What parameter allows "kubectl run" command to scale Deployments ?',
		answers : [{
			text		: '--image',
			note		: 'The image parameter represents the URL to your container image',
			isCorrect	: false
		},{
			text		: '--label',
			note		: 'The label applies specific key/value to the deployed Pods',
			isCorrect	: false
		},{
			text		: '--replicas',
			note		: 'The replicas parameter enables the deployment of multiple replicas',
			isCorrect	: true
		}],
	},{
		text	: 'What are the  possible states of a Pod replica?',
		answers : [{
			text		: 'DESIRED, UP-TO-DATE or AVAILABLE',
			note		: 'This does not cover how many replicas are running now',
			isCorrect	: false
		},{
			text		: 'DESIRED, CURRENT or UP-TO-DATE',
			note		: 'This doesn’t cover how many replicas can be accessed by the users of the app',
			isCorrect	: false
		},{
			text		: 'DESIRED, CURRENT, UP-TO-DATE or AVAILABLE',
			note		: 'All 4 are valid statuses for a replica',
			isCorrect	: true
		}],
	}]

	var quizDataM6 = [{
		text	: 'What is the scope of a rolling update?',
		answers : [{
			text		: 'To update a Service',
			note		: 'Services will distribute traffic to new deployed Pods',
			isCorrect	: false
		},{
			text		: 'To update a Deployment',
			note		: 'Rolling updates allows Deployments update with zero downtime by incrementally updating Pods instances with new ones',
			isCorrect	: true
		},{
			text		: 'To scale an app',
			note		: 'Rolling updates are performing incremental app updates',
			isCorrect	: false
		}],
	},{
		text	: 'If a Deployment is exposed publicly, what happens with the network traffic during an update?',
		answers : [{
			text		: 'Is dropped',
			note		: 'Rolling updates are rolled out with zero downtime',
			isCorrect	: false
		},{
			text		: 'Is load-balanced only to the old instances',
			note		: 'Services are monitoring all the Pods of a Deployment',
			isCorrect	: false
		},{
			text		: 'Is load-balanced only to available instances (old or new)',
			note		: 'If a Deployment is exposed publicly, the Service will load-balance the traffic only to available Pods during the update',
			isCorrect	: true
		}],
	},{
		text	: 'What kubectl command can be used to do a Deployment update?',
		answers : [{
			text		: '"kubectl set image"',
			note		: '"set image" can be used to update the image of an container',
			isCorrect	: true
		},{
			text		: '"kubectl rollout undo"',
			note		: 'This is the command you would use to roll back  a deployment',
			isCorrect	: false
		},{
			text		: '"kubectl rollout status"',
			note		: 'This is the command you would use to view the current status of  a deployment',
			isCorrect	: false
		}],
	}]

	var template = '<div class="quiz">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
							<div class="carousel-inner" role="listbox">\
								{{#each questions:i}}\
								<div class="item {{ i === 0 ? "active" : "" }}">\
									<div class="row">\
										<div class="col-md-12">\
											<h2>Question {{ i + 1 }}</h2>\
											<p>{{ text }}</p>\
											<p style="color: #3771e3;"><i>Select one answer</i></p>\
										</div>\
									</div>\
									<div class="quiz__list {{ answered ? "quiz__list_open" : "" }}">\
										{{#each answers:j}}\
										<div class="quiz__var {{ isCorrect	? "quiz__var_true" : "quiz__var_false" }} {{ answered ? "quiz__var_open" : "" }}">\
											<div class="quiz__box">{{ text }}</div>\
											<div class="quiz__note">{{ note }}</div>\
										</div>\
										{{/each}}\
									</div>\
								</div>\
								{{/each}}\
							</div>\
							<ol class="carousel-indicators">\
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>\
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>\
							</ol>\
							<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
								<span class="sr-only">Previous</span>\
							</a>\
							<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
								<span class="sr-only">Next</span>\
							</a>\
						</div>\
					</div>';

	var ractive1 = new Ractive({
		el: '#quizTest1',
		template: template,
		data: {
			questions: quizDataM1
		}
	});
	var ractive2 = new Ractive({
		el: '#quizTest2',
		template: template,
		data: {
			questions: quizDataM2
		}
	});
	var ractive3 = new Ractive({
		el: '#quizTest3',
		template: template,
		data: {
			questions: quizDataM3
		}
	});
	var ractive4 = new Ractive({
		el: '#quizTest4',
		template: template,
		data: {
			questions: quizDataM4
		}
	});
	var ractive5 = new Ractive({
		el: '#quizTest5',
		template: template,
		data: {
			questions: quizDataM5
		}
	});
	var ractive6 = new Ractive({
		el: '#quizTest6',
		template: template,
		data: {
			questions: quizDataM6
		}
	});



	$('.quiz__var').on('click', function(){
		var thisVar = $(this);
		var thisVarParent = thisVar.closest('.quiz__list');
		if (!thisVar.parents().hasClass('quiz__list_ready')) {
			thisVar.addClass('quiz__var_open').addClass('quiz__var_active').siblings().removeClass('quiz__var_active');
			if (!thisVar.hasClass('quiz__var_false')) {
				thisVarParent.addClass('quiz__list_ready');
			}
		}
	});

	$('.carousel').carousel({
		interval: false
	})

});


