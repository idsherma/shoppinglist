$(document).ready(function() {
    $(document).on('click', '.add', function(){
        var toAdd = $('input[name=checkListItem]').val();
        if (toAdd !== ""){	
        $('#groceryList').append('<li class="list-item"><button class="checkbox">✓</button><span class="list">' + toAdd + '</span><button class="delete">x</button></li>');
        $('input[name=checkListItem]').val('');
       } 
    });
    $(document).on('click', '.reset', function(){
       $('#groceryList').empty();
    });
    $(document).on('click', '.checkbox', function(){
    	$(this).parent().animate({opacity: 0.5});
    }); 
    $(document).on('click', '.delete', function(){
    	$(this).parent().remove();
    });   
});


