var form=document.getElementById('formulario')
var linhas=''
var soma=0
var materias=0
var medias=0


form.addEventListener('submit',function(e){
    e.preventDefault()

    let nome=document.getElementById('nome').value;
    let nota=document.getElementById('nota').value;
    var tabela= document.querySelector('tbody');
    var tabela2=document.querySelector('tfoot')
    var linha2=''
    var linha='';
    linha='<tr>';
    linha+=`<td> ${nome} </td>`;
    linha+=`<td> ${nota}</td>`;
    materias+=1
    soma+=parseInt(nota)
    medias=soma/materias

    if(nota>=7){
        linha+='<td><img src="images/aprovado.png" alt=""></td>'
    }else{
        linha+='<td><img src="images/reprovado.png" alt=""></td>'
    }

    linhas+=linha;
    linha2='<tr>';
    linha2+=`<td>Materia </td>`;
    linha2+=`<td> ${medias}</td>`;
    if(medias>=7){
        linha2+='<td><span class="resultado aprovado">Aprovado</span> </td>'
    }else{
        linha2+='<td><span class="resultado reprovado">Aprovado</span> </td>'
    }

    tabela.innerHTML=linhas;
    tabela2.innerHTML=linha2

});