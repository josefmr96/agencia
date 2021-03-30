import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: 'TEST-4329415140267504-010202-03daebbfe8dd3f1493158939dc2adac2-344815873'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)