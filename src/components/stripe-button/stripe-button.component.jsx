import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HkyuxBzm7mbi1im4zgPWeOvOEpsXV7HGYcrdB07YqqlC6YvjZ6YiZZbetLKkqWvu5eYaETpnllpcq5gkxUHitsS00P3dYbLkE';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

return (
    <StripeCheckout
        label = 'Pay Now'
        name = 'Clothing Store'
        billingAddress
        shippingAddress
        image ='https://sendeyo.com/up/d/f3eb2117da'
        description= {`Yout total is $${price}`}
        amount ={priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
);

};

export default StripeCheckoutButton;