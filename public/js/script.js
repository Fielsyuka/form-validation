
// UI
const form = $('#form');
const checkbox = $('#agree');
const btn = $('#submit');

// Function
const checkAgree = () => {
	if(checkbox.prop('checked')) {
		btn.prop('disabled', false);
	} else {
		btn.prop('disabled', true);
	}
}

const checkCount = (id, label) => {
	const target = $(id);
	const text = target.val();
	const errContainer =target.next();

	if(text.length == 0) {
		errContainer.html(label + 'を入力してください。');
		target.addClass('err');
		event.preventDefault();
	} else {
		errContainer.html('');
		target.removeClass('err');
	}
}

// Main
btn.prop('disabled', true);

checkbox.on('click', function() {
	checkAgree();
});

btn.on('click', function() {
 checkCount('#name', 'お名前');
 checkCount('#email', 'メールアドレス');
 checkCount('#message', '内容');
});

