$(function(){

    $('body').scrollspy({target: '#navbar'});

});

function scrollScreen(tabName) {
			// It neater if we get the target from the href of the link
			var targetHref = $(tabName).attr("href");
			// The location of the target div layer in relation to the browser window
			var targetPostion = $(targetHref).offset().top;
			// The speed of the animation in millisenconds
			var speed = 350;
			var selector = "html:not(:animated),body:not(:animated)"; 
			// We then use the animation function to scroll the main window. Offset 80 pixels for the navigation bar.
			$(selector).animate({ scrollTop: targetPostion}, speed);
}
