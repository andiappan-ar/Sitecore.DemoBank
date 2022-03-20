// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("input[name=BranchAndATMRadios]").change(function () {
    var value = $(this).filter(':checked').val();
    const url = new URL(location.href);
    url.searchParams.set("bA_FacilityType", value);
    history.pushState(null, '', url);
    window.location.reload();

});

