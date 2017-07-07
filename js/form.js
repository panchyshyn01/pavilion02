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
            massege: $('#applicationMassege').val()
        },
        dataType: "json"
    })
    .done(function() {
       $('#application').html($('#thank-container'));
    })
}

