function checar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtyear = window.document.getElementById('txtano')
    var msg = window.document.getElementById('res_text')
    var img = window.document.getElementById('res_img')
    var corpo = window.document.body
    

    if (txtyear.value.length == 0 || Number(txtyear.value) > ano ){

        msg.style.textAlign  = 'center'
        msg.style.fontStyle = 'normal'
        msg.style.color = 'red'
        msg.innerHTML = "[ERRO] verifique o seu ano de nascimento!"
        corpo.style.background = ' rgb(211, 194, 164)'

    }else{
        
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(txtyear.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        msg.style.color = 'black'
        msg.style.textAlign  = 'center'
        img.style.height = '260px'
        img.style.width = '260px'
        img.style.borderRadius = '50%'

        if (fsex[0].checked){

            genero = 'Homem'

            if(idade >= 0 && idade <= 3){
                
                //bebe
                img.setAttribute('src', '../img/bebe_m.png')

            }else if (idade >= 4 && idade < 13 ){

                //criança
                img.setAttribute('src', '../img/crianca_m.png')

            }else if(idade < 20){

                //adolescente
                img.setAttribute('src', '../img/jovem_m.png')

            }else if (idade < 50){

                //adulto
                img.setAttribute('src', '../img/adulto_m.png')

            }else{
                //idoso
                img.setAttribute('src', '../img/idoso_m.png')
            }
        }

        else if (fsex[1].checked){
            
            genero = 'Mulher'

            if(idade >= 0 && idade <= 3){
                
                //bebe
                img.setAttribute('src', '../img/bebe_f.png')

            }else if (idade >= 4 && idade < 13 ){

                //criança
                img.setAttribute('src', '../img/crianca_f.png')

            }else if(idade < 20){

                //adolescente
                img.setAttribute('src', '../img/jovem_f.png')
            }else if (idade <50){

                //adulto
                img.setAttribute('src', '../img/adulto_f.png')
            }else{
                //idoso
                img.setAttribute('src', '../img/idoso_f.png')
            }
            
        }
        
        if (genero == 'Mulher'){

            corpo.style.background = '#DA70D6'
        }else{

            corpo.style.background = '#87CEFA'
        }
        msg.innerHTML = `Você é <strong>${genero}</strong> com <strong>${idade}</strong> anos`
        msg.appendChild(img)

        
    }   
}