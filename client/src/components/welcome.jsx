import React, { Component } from 'react';
class Welcome extends Component {
    

    render(){
        return(
            <div className="welcome w-full h-full p-10 ">
                    <h1 className="text-2xl font-bold text-center">Bienvenue sur HeartShare</h1>
                    <p className="mt-20 text-center text-lg">Vous voulez vous engager en tant que bénévole, faire des dons ou même donnez votre sang ? 
                        HeartShare répertorie toutes les événement
                         et association pour vous aidez à trouver
                          une bonne action qui vous correspond.
                    </p >
                    <p className="mt-20 text-lg text-center">On a besoin d'aide près de chez vous, cliquez <a href="/home" className="font-bold">ici</a> ou cherchez votre ville dans la barre de recherche.</p>
            </div>

        );
    }

}

export default Welcome;