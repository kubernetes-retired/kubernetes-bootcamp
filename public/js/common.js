$(function() {

	$('.content__trigger, .header__sider').on('click', function(){
		$('body').toggleClass('page_open');
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

	var quizMockData = [{
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

	var ractive = new Ractive({
		el: '#quizTest',
		template: template,
		data: {
			questions: quizMockData
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


