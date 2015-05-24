$(document).ready(function() {
	$('li.function').addClass('plusimageapply');
	$('li.function').children().hide();
	$('span.brace').show();
	$('li.function').each(function(column) {
	  $(this).click(function(event) {
		if (this == event.target) {
		  if($(this).is('.plusimageapply')) {
			$(this).children().show();
			$(this).find('span.brace').hide();
			$(this).find('.plusimageapply span.brace').show();
			$(this).removeClass('plusimageapply');
			$(this).addClass('minusimageapply');
		  } else {
			$(this).children().hide();
			$(this).find('span.brace').show();
			$(this).find('span.function-inner').show();
			$(this).removeClass('minusimageapply');
			$(this).addClass('plusimageapply');
		  };
		};
	  });
	 });
});