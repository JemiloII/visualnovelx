$('input[name="users_create_account"]').click(function(){
	if($('input[name="users_create_account"]:checked').val() === 'yes'){
		$('input[type="submit"][value="Connect"]').toggleClass('hide');
		$('.form-group').find('input').removeAttr('disabled').attr('required','');
		$('.create_account').toggleClass('hide');
		$('.form-group').toggleClass('hide');
		height = $('section').height();
		newHeight = height + 45;
		$('aside').height(newHeight);
	}else{
		$('input[type="submit"][value="Connect"]').toggleClass('hide');
		$('.form-group').find('input').removeAttr('required').attr('disabled', '');
		$('.create_account').toggleClass('hide');
		$('.form-group').toggleClass('hide');
		height = $('section').height();
		newHeight = height + 45;
		$('aside').height(newHeight);
	}
});
$('button[name="users_cancel"]').click(function(){
	$('input[name="users_create_account"][value="no"]').click();
});

$(function(){
	var height = $('section').height();
	newHeight = height + 45;
	$('aside').height(newHeight);
});