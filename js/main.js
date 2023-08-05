$('#dodajForm').submit(function(){
    event.preventDefault();
    console.log("Dodaj se pokrenuo");
    const $form=$(this);
    const $inputs=$form.find('input','button','select','textarea');
    const serijalizacija=$form.serialize();

    console.log(serijalizacija);

    request=$.ajax({
        url:'handler/add.php',
        type:'post',
        data:serijalizacija
    });

    request.done(function(response, textStatus, jqXHR){
        if(response==="Success"){
            alert("Kolokvijum je uspesno zakazan");
            console.log("Uspesno zakazivanje");
            location.reload();
        }
        else{
            console.log("Kolokvijum nije zakazan " + response);
        }
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error("Sledeca greska se desila: " + textStatus, errorThrown);
    });


})