$(document).ready(function() {
    function updateVisibility() {
        var isChecked = $("#mobileCheckbox").is(":checked");
        if (isChecked) {
            $("#desktopVersion18").hide();
            $("#mobileVersion18").show();
            $("#desktopVersion152").hide();
            $("#mobileVersion152").show();
            $("#desktopVersion19").hide();
            $("#mobileVersion19").show();
        } else {
            $("#desktopVersion18").show();
            $("#mobileVersion18").hide();
            $("#desktopVersion152").show();
            $("#mobileVersion152").hide();
            $("#desktopVersion19").show();
            $("#mobileVersion19").hide();
        }
    }

    function updateLinks() {
        $(".version-link").each(function() {
            var url = $(this).data("url");
            $(this).attr("href", url);
        });
    }

    $("#mobileCheckbox").on("change", function() {
        updateVisibility();
        updateLinks();
    });

    updateVisibility();
});
