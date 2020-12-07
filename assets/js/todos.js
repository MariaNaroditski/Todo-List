// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "#trash", function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

// 
$("input[type='text']").keypress(function(e){ 
    if(e.which === 13){
        var todoText =  $(this).val();
        $(this).val("");
        $("ul").append("<li><span id='trash'><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});

