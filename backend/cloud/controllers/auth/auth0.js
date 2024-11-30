Parse.Cloud.define("auth0", async (request) => {
    const axios = require('axios');

    console.log('oi')

    const { code } = request.params;
    const auth0ClientID = process.env.AUTH0_CLIENT_ID;
    const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
    const auth0Domain = process.env.AUTH0_DOMAIN;

    // Realiza a troca do código de autorização por tokens
    try {
        const response = await axios.post(`https://${auth0Domain}/oauth/token`, {
            client_id: auth0ClientID,
            client_secret: auth0ClientSecret,
            code: code,
            redirect_uri: 'SUA_REDIRECIONAMENTO_URI',
            grant_type: 'authorization_code',
        });

        const { access_token, id_token } = response.data;

        // Decodifica o id_token para obter as informações do usuário
        const jwt = require('jsonwebtoken');
        const decoded = jwt.decode(id_token);

        if (decoded.email_verified) {
            // Se o e-mail foi verificado, cria o usuário no seu sistema
            await createUserInSystem(decoded);
            return { success: true, message: "Usuário criado com sucesso!" };
        } else {
            return { success: false, message: "O e-mail do usuário não foi verificado." };
        }

    } catch (error) {
        return { success: false, message: error.message };
    }
});
