const shopify = require('./model/shopify');

(async ()=>{

    try {

        const connShopify = await shopify.getShopifyConnection();

        let request = 'GET';

        switch (request) {

        case 'GET':

            connShopify.get('/admin/products.json', function(err, data, headers){
                console.log(data.products[0]); // Data contains product json information
                // console.log(headers); // Headers returned from request
            });

        break;

        case 'POST':
            
            let post_data = {
                "product": {
                "title": "Pantalon",
                "body_html": "<strong>¡Excelente pantalon!</strong>",
                "vendor": "Arturo Calle",
                "product_type": "Ropa",
                "variants": [
                    {
                    "option1": "Primero",
                    "price": "10000",
                    "sku": 123
                    },
                    {
                    "option1": "Segundo",
                    "price": "20000",
                    "sku": "124"
                    }
                ]
                }
            }

            connShopify.post('/admin/products.json', post_data, function(err, data, headers){
            console.log(data);
            });

        break;

        case 'PUT':
            let put_data = {
                "product": {
                    "title": "Zapato"
                }
            }
                
            connShopify.put('/admin/products/8062042931519.json', put_data, function(err, data, headers){
            console.log(data);
            });

        break;

        case 'DELETE':

            connShopify.delete('/admin/products/8062042931519.json', function(err, data, headers){
                console.log(data);
            });
        break;
        }
        
    } catch (error) {
        console.log(error);
    }

})();

