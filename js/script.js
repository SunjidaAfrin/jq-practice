

$(document).ready(function(){

  alert("Welcome");
});
$(document).ready(function(){
	$('.btnc').dblclick(function(){
      alert("Hello World")
	});
});
$(document).ready(function(){

  //hide
  $('#hide').click(function(){
     $('h2').hide("slow");
  })
  //show
  $('#show').click(function(){
     $('h2').show(2000);
  })
  //Toggle
  $('#toggle').click(function(){
     $('h2').toggle(2000);
  })
});
$(document).ready(function(){

  //slide
  $('#slidedown').mouseenter(function(){
     $('h2').slideDown("slow");
  })
  //show
  $('#slideup').mouseenter(function(){
     $('h2').slideUp("slow");
  })
  //Toggle
  $('#slidetoggle').mouseenter(function(){
     $('h2').slideToggle("slow");
  })
  
});
$(document).ready(function(){

  //slide
  $('#fadeout').mouseenter(function(){
     $('h2').fadeOut(2000);
  })
  //show
  $('#fadein').mouseenter(function(){
     $('h2').fadeIn(2000);
  })
  //Toggle
  $('#fadetoggle').mouseenter(function(){
     $('h2').fadeToggle(2000);
  })
  $('#fadeto').mouseenter(function(){
     $('h2').fadeTo(2000,.5);
  })
  
});
$(document).ready(function(){

  //slide
  $('.panel').mouseup(function(){
     $('.content').slideToggle(1000);
  });
});

$(document).ready(function(){

  //draggable
 $( "#dragg" ).draggable();
});

$(document).ready(function(){

  //draggable
 $( "#draggable" ).draggable();
    $( "#droppable" ).droppable();
     
});
$(document).ready(function(){
 $( "#resizable" ).resizable();
 });
$(document).ready(function(){
	$( "#selectable" ).selectable();
});
$(document).ready(function(){
	
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});