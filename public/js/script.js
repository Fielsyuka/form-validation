(function(){

	var form = document.getElementById("form");
	var checkbox = document.getElementById("agree");
	var btn = document.getElementById("submit");

	function Validation(id, label) {
		this.dom = $(id);
		this.label = label;
		this.err = this.dom.next();
	}

	Validation.prototype.checkCount = function() {
		var text = this.dom.val();
		if(text.length == 0) {
			this.addErr();
			event.preventDefault();
		} else {
			this.deleteErr();
		}
	}

	Validation.prototype.addErr = function() {
		this.err.html(this.label + "を入力してください。");
		this.dom.addClass('err');
	}

	Validation.prototype.deleteErr = function() {
		this.err.html("");
		this.dom.removeClass('err');
	}

	var checkAgree = function() {
		if(checkbox.checked) {
			btn.removeAttribute('disabled');
		} else {
			btn.setAttribute('disabled', true);
		}
	}

	btn.setAttribute('disabled', true);

	checkbox.addEventListener('click', function() {
		checkAgree();
	});

	btn.addEventListener('click', function() {
		var validation1 = new Validation("#name", "お名前");
		var validation2 = new Validation("#email", "メールアドレス");
		var validation3 = new Validation("#message", "内容");
		validation1.checkCount();
		validation2.checkCount();
		validation3.checkCount();
	});

})();