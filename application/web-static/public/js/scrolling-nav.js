//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
//	console.log("top:  " + ($(".navbar").offset().top));
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//        
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//        
//    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('#mc-text-holder').on('affixed.bs.affix', debounce(function() {
	console.log("\n\nAffixed!! is called");
	moveSearchToNavBar();
}, 250, false));

$('#mc-text-holder').on('affixed-top.bs.affix', debounce(function() {
	console.log("\n\nTop! is called!");
	moveSearchToHero();
}, 250, false));

//
//
//$('#mc-text-holder').on('affixed-top.bs.affix', debounce(function() {
//	$("#mc-text-holder-nav4").detach().appendTo('mc-search-box');
//}, 250, false));

function registerAffixEvent(selector, eventName) {
	$(selector).on(eventName, debounce(function() {
//		$("#mc-search-box").detach().appendTo('#mc-text-holder-nav4');
		
		searchId = "#mc-search-box";
		navId = "#mc-text-holder-nav4";
		holderId = "#mc-text-holder";

	    navBarSearchSelector = navId + " " + searchId;
	    heroSearchSelector = holderId + " " + searchId;
	    

		console.log("Test Value BEFORE switchs:\n" +
				"   " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
				"   " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
		
		$(searchId).detach().appendTo(navId);

	    if ($(navBarSearchSelector).length) {
	    	isNavExists = true;
	    } else {
	    	isNavExists = false;
	    }

	    if ($(heroSearchSelector).length) {
	    	isHolderExists = true;
	    } else {
	    	isHolderExists = false;
	    }
	    
		console.log("Test Value BEFORE switchs:\n" +
				"   " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
				"   " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
		
		console.log("Event Fired...\n" +
				"   event-name:  " + eventName +  "\n" +
				"   selector:  " + selector +  "\n" +
				"   top offset:  " + $(selector).offset().top);
	}, 250, false));
}

function moveSearchToNavBar() {
	console.log("   moveSearchToNavBar    is called!");
	searchId = "#mc-search-box";
	navId = "#mc-text-holder-nav4";
	holderId = "#mc-text-holder";

    navBarSearchSelector = navId + " " + searchId;
    heroSearchSelector = holderId + " " + searchId;
    
    hideHeroHolderClass = "mc-hide-hero-search-holder";

	console.log("   Test Value BEFORE switchs:\n" +
			"      " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
			"      " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
	
	if (selectorExists(heroSearchSelector)) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		$(searchId).detach().appendTo(navId);
		$(holderId).addClass(hideHeroHolderClass);
		$(holderId).removeClass(heroHolderClass);
	}
	
	console.log("   Test Value AFTER switchs:\n" +
			"      " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
			"      " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
	
}

function moveSearchToHero() {
	console.log("   moveSearchToHero    is called!");
	searchId = "#mc-search-box";
	navId = "#mc-text-holder-nav4";
	holderId = "#mc-text-holder";

    navBarSearchSelector = navId + " " + searchId;
    heroSearchSelector = holderId + " " + searchId;
    
    hideHeroHolderClass = "mc-hide-hero-search-holder";
    heroHolderClass = "mc-textbox-holder";

	console.log("   Test Value BEFORE switchs:\n" +
			"      " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
			"      " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
	
	if (selectorExists(navBarSearchSelector)) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		$(searchId).detach().appendTo(holderId);
		$(holderId).addClass(heroHolderClass);
		$(holderId).removeClass(hideHeroHolderClass);
	}
	console.log("   Test Value AFTER switchs:\n" +
			"      " + navBarSearchSelector + ":  " + selectorExists(navBarSearchSelector) + "\n" +
			"      " + heroSearchSelector + ":  " + selectorExists(heroSearchSelector));
	
}

function selectorExists(selector) {
	return $(selector).length > 0;
}

//registerAffixEvent("#mc-text-holder", "affix.bs.affix");
//registerAffixEvent("#mc-text-holder", "affixed.bs.affix");
//registerAffixEvent("#mc-text-holder", "affix-top.bs.affix");
//registerAffixEvent("#mc-text-holder", "affixed-top.bs.affix");
//registerAffixEvent("#mc-text-holder", "affix-bottom.bs.affix");
//registerAffixEvent("#mc-text-holder", "affixed-bottom.bs.affix");


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};