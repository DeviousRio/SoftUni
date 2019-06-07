function attachEvents() {
    $('#submitBtn').on('click', submit);
    $('.hyperlink-notification').on('click', function (e) {
        // Prevent the href from redirecting directly
        e.preventDefault();
        let url = $(this).attr('href');
        warnBeforeRedirect(url);
    });


    function submit(e) {
        warnBeforeSend();
        e.preventDefault();
        e.stopPropagation();

        // Clear input fields
        $('.input').val('');
        $('.dropify-clear').click();
    }
}

function warnBeforeRedirect(url) {
    swal({
        title: "Leave this site?",
        text: "If you click 'OK', you will be redirected to " + url,
        type: "warning",
        showCancelButton: true
    }, function () {
        // Redirect the user
        window.location.href = url;
    });
}

function warnBeforeSend() {
    swal("Good job!", "You are registered", "success");
}

attachEvents();
$('.dropify').dropify()