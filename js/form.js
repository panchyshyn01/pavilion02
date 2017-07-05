$(function(){
   $('#applicationButton').click(sentForm); 
});

function sentForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/yuriy.panchyshyn01@gmail.com", 
        method: "POST",
        data: {
            name: $('#applicationName').val(),
            phone: $('#applicationTelephone').val(),
            email: $('#applicationEmail').val(),
            messege: $('#applicationMessege').val()
        },
        dataType: "json"
    })
    .done(function() {
       $('#application').html('<img src="images/like.svg" class="img-like"><p class="p-like">Надіслено!</p>');
    })
}

