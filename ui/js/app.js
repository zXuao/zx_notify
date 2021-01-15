zxNotify.settings({
    timeout: 10000,
    resetOnHover: true,
    transitionIn: 'fadeInLeft',
	transitionOut: 'fadeOutRight',
	position: "topRight",
	progressBar: false,
	close: false
});

$(document).ready(function() {
	window.addEventListener("message",function(event) {
		if(event.data.css == "sucesso") {
			zxNotify.success({
				title: false,
				message: event.data.mensagem,
				icon: 'fas fa-check-circle'
			});
		} else if (event.data.css == "negado") {
			zxNotify.error({
				title: false,
				message: event.data.mensagem,
				icon: 'fas fa-ban'
			});
		} else if (event.data.css == "aviso") {
			zxNotify.warning({
				title: false,
				message: event.data.mensagem,
				icon: 'fas fa-exclamation-triangle'
			});
		} else {
			zxNotify.info({
				title: false,
				message: event.data.mensagem,
				icon: 'fas fa-exclamation-triangle'
			});
		}
	});
});