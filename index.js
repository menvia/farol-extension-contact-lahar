module.exports = (extension) => {
  const controller = {};

  const request = require('request');

  controller.send = () => {
    const options = {
      method: 'POST',
      url: 'https://app.lahar.com.br/api/conversions',
      headers: {
        'Content-Type': 'application/json',
      },
      formData: {
        token_api_lahar: extension.settings.token_api_lahar,
        nome_formulario: 'Eventelis',
        url_origem: 'https://www.eventelis.com',
        email_contato: 'felipe+1@plets.me',
        nome_contato: 'Felipe Plets',
        nome_empresa: 'Eventelis',
      },
    };
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  };

  return controller;
};
