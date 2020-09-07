$("document").ready(function(){
    window.addEventListener('message', function(e) {
        var message = event.data;
        if (message.ui === "inventory") {
            if (message.status == true) {
                $("#container").toggleClass("hidden");
            }
        }
    })

    // Draggable features
    var beingDragged = null;

    $(".item").mousedown(function() {
        console.log($(this).attr('class') + " is being dragged!");
        beingDragged = $(this);
    });
    // function handleDragStart(e) {
    //     this.style.backgroundColor = "yellow";
    // }

    // function handleDragEnd(e) {
    //     this.style.backgroundColor = "red";
    // }
    
    // let items = document.querySelectorAll('.item');
    //     items.forEach(function(item) {
    //     item.addEventListener('dragstart', handleDragStart, false);
    //     item.addEventListener('dragend', handleDragEnd, false);
    // });

    document.onkeyup = function(data) {
        if (data.which == 112) { // F1 key
            $.post('http://sr_inventory/NUIFocusOff', JSON.stringify({}));
            $("#container").toggleClass("hidden");
        }
    };
})