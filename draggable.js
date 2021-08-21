$(function () {
	//Get initial value
	var initialState = $('.left-box').html()
	// Maintain initial position of each block
	var leftBoxItems = []
	var rightBoxItems = []
	$('.left-box li').each(function(){
	    leftBoxItems.push($(this).attr('rel'))
	})
	$('.right-box li').each(function(){
	    rightBoxItems.push($(this).attr('rel'))
	})

	// For drag and drop elements
	$(".left-box, .right-box").sortable({
		connectWith: ".sortable-box",
		delay: 100,
		cursor: "move",
		update: function( event, ui ) {
			if (!ui.sender) {
				//Handle position after movement for each block
				if($(this).attr("id") == "block1") {
					leftBoxItems.splice(leftBoxItems.indexOf(ui.item.attr('rel')), 1)
					rightBoxItems.push(ui.item.attr('rel'))
				} else {
					rightBoxItems.splice(rightBoxItems.indexOf(ui.item.attr('rel')), 1)
					leftBoxItems.push(ui.item.attr('rel'))
				}
		    }
		}
	}).disableSelection()

	$('#delete-button').click(function(){
        if($('ul#block2 li').length >= 1) {
        	//remove all li from right box
	        $('.right-box').html('')
	       	// set initial position of left box
	        $('.left-box').html(initialState)
        }

    })
})