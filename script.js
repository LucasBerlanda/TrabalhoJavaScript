//Adicione a class 'erro' para todos os span que possuem a class 'problema', e adicione a class
// 'sucesso' em todos os span que possuem a class 'ok'
$('.problema').addClass('erro');
$('.ok').addClass('sucesso');

// 2 - Crie um comando para remover a class 'erro' dos span de dentro da div com id #div-filha

$('#div-filha .erro').removeClass();

//3 Crie um comando para criar os div conforme o padrão, limitando o número de divs 
//conforme o atributo 'data-max' do button. Deve-se seguir a numeracão dos div.
// NÃO COLOQUE ALERTAS NEM MENSAGENS, o corretor pode considerar como incorreto. 
//Programe o comando com intuito de que o número máximo possa ser diferente do que está no HTML.
let count = 5;
$('#create-me-btn').click(function(){
   let nElement= $('#create-me-btn').attr('data-max'); 
   if(count <= nElement){
    $("#create-me").append('<div>'+count+' - Elemento número ' +count+'</div>');
    count++;
    }
});
// 4 - Crie um comando para copiar todo o conteúdo do div id #origem para 
//     a div id #destino ao clicar no botão
$('#copy-me-btn').click(function(){
    let textoPrincipal = $('#origem').html();
    let textoCopia = $('#destino');
    textoCopia.html(textoPrincipal);
});
// 5 - Faça um comando que calcule o total de cada produto e insira o texto na 
//    coluna referente. Considere que o corretor irá adicionar uma linha com 
//   valores variados e aleatórios para verificar o cálculo.

var tr = $('#tabela-totais tbody tr');
var tds = $('#tabela-totais tbody td');
let qtd = 1;
let unitario= 2;
let total = 0;

    $.each(tr, function(index){
        total = $(tds[qtd]).text() * $(tds[unitario]).text();
        $('.total', tr[index]).append((total));
        qtd += 4;
        unitario +=4;
    });


    var tr2 = $('#tabela-totais-2 tbody tr');
    var tds2 = $('#tabela-totais-2 tbody td');
    let qtd2 = 1;
    let unitario2= 2;
    let total2 = 0;
    let totalgeral = 0;

        $.each(tr2, function(index){
            total2 = $(tds2[qtd2]).text() * $(tds2[unitario2]).text();
            $('.total', tr2[index]).append((total2));
            qtd2 += 4;
            unitario2 +=4;
            totalgeral = totalgeral + total2;
        })
        $('#total-geral').append(totalgeral.toFixed(2));
