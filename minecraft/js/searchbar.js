$(document).ready(function() {
    $('#search-bar').on('keyup', function() {
        var query = $(this).val().toLowerCase();
        $('.filter-button').each(function() {
            var buttonText = $(this).text().toLowerCase();
            if (buttonText.indexOf(query) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
