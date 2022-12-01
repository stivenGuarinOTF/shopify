let shopifyAPI = require('shopify-node-api');
require('dotenv').config();

const { API_KEY, SHOP, ACCESS_TOKEN } = process.env;

const getShopifyConnection = async () => {
    
    const Shopify = new shopifyAPI({
      shop: SHOP, // MYSHOP.myshopify.com
      shopify_api_key: API_KEY, // Your API key
      access_token: ACCESS_TOKEN, // Your API password
      verbose: false //shopify-node-api will automatically console.log all headers and responses
    });

    return Shopify;
}

module.exports = {
    getShopifyConnection
}

