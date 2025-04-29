import React from 'react';
// area de execução (até o retorno)

const JsxExamples = () => {
    const userName = "Carlos";

    const user = {
        name: "Ana",
        lastName: "Souza",
    };

    function getGreeting(userName){
        return `Olá ${userName}`;
    }

    return (
        <div>
            <h2>Conteúdo que o usuário vai ver</h2>
            <p>O nome do usuário é: {userName}</p>

            <p>
                Usuário: {user.name} {user.lastName}
            </p>
            <p>{2 + 2}</p>
            <p>{getGreeting(userName)}</p>
        </div>
    );
};

export default JsxExamples;
