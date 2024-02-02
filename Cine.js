function getGender(){
    let mostrarAnuncio = document.getElementById('anuncioId')
    let elPadrino = document.getElementById('ElpadrinoId')
    let nemo = document.getElementById('NemoId')
    let reyLeon = document.getElementById('ReyLeonId')
    let showMan = document.getElementById('ShowmanId')
    let sing = document.getElementById('SingId')
    let sonComoNiños = document.getElementById('SonComoninosId')
    let totoro = document.getElementById('TotoroId')
    let toyStory = document.getElementById('ToystoryId')
    let fiveNigthAtFredys = document.getElementById('fnafId')
    let godzillaKong = document.getElementById('godzillakongId')
    let oppenheimer = document.getElementById('oppenheimerId')
    let zombieland = document.getElementById('zombielandId')
    let secretoenlamontaña = document.getElementById('secretoenlamontañaId')
    let ageValue = document.getElementById('ageUser').value
    let age = +ageValue
    let genderValue = document.getElementById('genderMovie')
    let gender = genderValue.value

    if(age >= 3 && age <= 13){
        switch(gender){
            case 'Comedia':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                toyStory.classList.remove("hidden");
                sing.classList.remove("hidden");

                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break;
            
            case 'Drama':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                nemo.classList.remove("hidden");
                reyLeon.classList.remove("hidden");
                totoro.classList.remove("hidden");

                elPadrino.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break;

            case 'Musical':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                sing.classList.remove("hidden");

                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                
                break

            case 'Crimen':
                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")

        }
    }
    else if(age > 13 && age <18){
        switch(gender){
            case 'Comedia':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                toyStory.classList.remove("hidden");
                sing.classList.remove("hidden");
                sonComoNiños.classList.remove("hidden");

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                totoro.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break;
            
            case 'Drama':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                nemo.classList.remove("hidden");
                reyLeon.classList.remove("hidden");
                totoro.classList.remove("hidden");
                fiveNigthAtFredys.classList.remove("hidden")
                godzillaKong.classList.remove('hidden')
                oppenheimer.classList.remove('hidden')


                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                toyStory.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break;

            case 'Musical':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                sing.classList.remove("hidden");
                showMan.classList.remove("hidden")

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break

            case 'Crimen':
                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
        }
    }
    else if(age >=18){
        switch(gender){
            case 'Comedia':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                sonComoNiños.classList.remove("hidden");
                zombieland.classList.remove("hidden")

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break;
            
            case 'Drama':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                fiveNigthAtFredys.classList.remove("hidden")
                godzillaKong.classList.remove('hidden')
                oppenheimer.classList.remove('hidden')
                secretoenlamontaña.classList.remove("hidden")

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                zombieland.classList.add("hidden")
                break;

            case 'Musical':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                showMan.classList.remove("hidden")

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                elPadrino.classList.add("hidden")
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break

            case 'Crimen':
                mostrarAnuncio.textContent = "Nuestras Recomendaciones son..."
                elPadrino.classList.remove("hidden")

                mostrarAnuncio.textContent = "Lo siento!, no hay Peliculas disponibles para tu edad :)"
                nemo.classList.add("hidden")
                reyLeon.classList.add("hidden")
                showMan.classList.add("hidden")
                sing.classList.add("hidden")
                sonComoNiños.classList.add("hidden")
                totoro.classList.add("hidden")
                toyStory.classList.add("hidden")
                fiveNigthAtFredys.classList.add("hidden")
                godzillaKong.classList.add("hidden")
                oppenheimer.classList.add("hidden")
                zombieland.classList.add("hidden")
                secretoenlamontaña.classList.add("hidden")
                break
        }
    }   
}