

// Write Loading Animation
var myVar;

function myFunction(){
	myVar = setTimeout(showPage, 4000);
}

function showPage(){
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
}

$(function(){
	$('#sharing-nav').on('onmouseover', function(){
		$('#sharing-nav').addClass('animate shake');

});
});

$('#sharing-nav a').addClass('animated bounceOutLeft');

//Wishlist btn Change Color
// function changeColor(e)
// {
// e.style.backgroundColor="gray";
// }

$(document).ready(function(){
    $("button").click(function(){
        $('#wish-btn').addClass("wish-btn", function(backgroundColor:gray));
    });
});


