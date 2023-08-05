function prikazi(){
    var x = document.getElementById("pregled");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function prikaziPretragu(){
    var x = document.getElementById("myInput");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}



$('#dodajForm').submit(function(){
    event.preventDefault();
    console.log("Dodaj je pokrenuto");
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


$('#btn-izmeni').click(function(){
    const $checked = $("input[name=checked-donut]:checked");

    request = $.ajax({
        url : 'handler/get.php',
        type: 'post',
        data: {id: $checked.val()},
        dataType: 'json'
    });

    request.done(function(response, textStatus, jqXHR){
        $('#predmet').val(response[0]['predmet'].trim());
        console.log(response[0]['predmet']);
        $('#katedra').val(response[0]['katedra'].trim());
        console.log(response[0]['katedra']);
        $('#sala').val(response[0]['sala'].trim());
        console.log(response[0]['sala']);
        $('#datum').val(response[0]['datum'].trim());
        console.log(response[0]['datum']);

        $('#id').val($checked.val());

        console.log(response);
    })

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error("Sledeca greska se desila: " + textStatus, errorThrown);
    })
})



$('#izmeniForm').submit(function(){
    event.preventDefault();
    console.log("Izmeni je pokrenuto");
    const $form = $(this);
    const $inputs = $form.find('input','button','select','textarea');
    const serijalizacija = $form.serialize();

    console.log(serijalizacija);

    request = $.ajax({
        url : 'handler/update.php',
        type : 'post',
        data: serijalizacija
    });

    request.done(function(response, textStatus, jqXHR){
        if(response === "Success"){
            alert("Kolokvijum je izmenjen");
            console.log("Uspesna izmena kolokvijuma");
            location.reload();
        }
        else{
            console.log("Neuspesna izmena kolokvijuma " + response);
        }
        console.log(response);
    })

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error("Sledeca greska se desila " + textStatus, errorThrown);
    })
})


$('#btn-obrisi').click(function(){
    const checked = $("input[type=radio]:checked");

    request = $.ajax({
        url: 'handler/delete.php',
        type: 'post',
        data: {id: checked.val()}
    });

    request.done(function(response, textStatus, jqXHR){
        if(response === "Success"){
            alert("Kolokvijum je obrisan");
            console.log("Uspesno obrisan kolokvijum");
            location.reload();
        }
        else{
            console.log("Neuspesno brisanje kolokvijuma: " + response);
        }
        console.log(response);
    })
    
    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error("Sledeca greska se desila " + textStatus, errorThrown);
    })
    
})