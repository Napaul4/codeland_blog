$(document).ready(function() {
    $('.bi.bi-heart').click(function () {
        
        if ($(this).hasClass("bi-heart")) {
            $(this).removeClass("bi-heart").addClass("bi-heart-fill");
        } else {
            $(this).removeClass("bi-heart-fill").addClass("bi-heart");
        }
    })

    $("input").on('input', function() {
        var searchTerm = $(this).val().toLowerCase();

        $('.card').each(function() {
            var cardText = $(this).text().toLowerCase();

            
            $(this).toggle(cardText.includes(searchTerm));
        })

    })
})

