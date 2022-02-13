// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


//evento todas as páginas
ga('send', {
    hitType: 'pageview'
  })

//contato
$( "#contato" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
});


//download
$( "#download" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
});

//analise_btn_Lorem

$( "#btn_lorem" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais”',
        eventLabel: 'Lorem'
      });
});

//analise_btn_Ipsum

$( "#btn_ipsum" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais”',
        eventLabel: 'Ipsum'
      });
});

//analise_btn_Dolor

$( "#btn_dolor" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais”',
        eventLabel: 'Dolor'
      });
});

//FORMULÁRIO///////////////////////////////////////////////////////
//sobre_nome

$( "#nome" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'nome',
        eventLabel: 'preencheu'
      });
});

//sobre_email

$( "#email" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'email',
        eventLabel: 'preencheu'
      });
});

//sobre_telefone

$( "#telefone" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'telefone',
        eventLabel: 'preencheu'
      });
});

//sobre_aceito

$( "#aceito" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'aceito',
        eventLabel: 'preencheu'
      });
});

//sobre_btn_enviar

$( "#btn_enviar" ).click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
      });
});