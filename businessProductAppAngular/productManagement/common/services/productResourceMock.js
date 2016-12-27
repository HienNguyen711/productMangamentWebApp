
(function () {
    "use strict";

    var app = angular
                .module("productResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [
            {
                "productId": 1,
                "productName": "Paljettikirjailtu neule",
                "productCode": "ABC-0011",
                "releaseDate": "March 19, 2016",
                "description": "Ohut puuvillaneule, jossa paljettikirjailtu kuva edessä. Ribbiresori hihansuissa. Sivuhalkiot ja ribbireuna helmassa.",
                "cost": 9.00,
                "price": 19.95,
                "category": "shirt",
                "tags": ["shirt", "kids"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/E00%200449396%20001%2039%201494.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 2,
                "productName": "Neuletakki",
                "productCode": "GXY-0023",
                "releaseDate": "March 18, 2015",
                "description": "Pitkä, pehmeä ja paksu neuletakki. Madalletut olkapäät ja etutaskut. Ei kiinnitystä.",
                "cost": 20.00,
                "price": 32.99,
                "category": "girls",
                "tags": ["girls", "cart", "wheelbarrow"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200390127%20008%2036%202808.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 3,
                "productName": "Oversize-huppari",
                "productCode": "TYE-0048",
                "releaseDate": "May 21, 2016",
                "description": "Kevyesti oversize-kokoinen collegehuppari. Trikoovuorinen huppu, madalletut olkapäät ja etutasku. Resori helmassa ja hihansuissa. Harjattu pehmeä sisäpinta.",
                "cost": 1.00,
                "price": 8.99,
                "category": "hoodie",
                "tags": ["hoodie"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200429451%20003%2034%200004.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 4,
                "productName": "V-aukkoinen satiinipusero",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "V-aukkoinen satiinipusero, jossa lyhyet holkkihihat ja pyöristetty helma.",
                "cost": 6.95,
                "price": 11.55,
                "category": "women",
                "tags": ["garden", "women"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200389542%20006%2028%204484.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[2]&call=url[file:/product/large]"
            },
            {
                "productId": 5,
                "productName": "Pitkähihainen pusero",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2016",
                "description": "Pusero ohutta kangasta. Pitkissä hihoissa leveä kalvosin. Napitettava niskahalkio. Pyöristetty helma on takaa pidempi. Sivuhalkiot.",
                "cost": 2.22,
                "price": 35.95,
                "category": "musta",
                "tags": ["musta", "koko", "shirt"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200421249%20006%2093%204799.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 6,
                "productName": "Toppatakki",
                "productCode": "GHG-0042",
                "releaseDate": "October 15, 2012",
                "description": "Kevyesti muotoonommeltu toppatakki kevyesti kiiltävää kangasta. Pystykaulus ja vuorattu huppu, jossa tekoturkisreuna. Vetoketju edessä. Sivutaskut ja vetoketjulliset käsienlämmitystaskut. Vuori.",
                "cost": 2.22,
                "price": 35.95,
                "category": "kokoopas",
                "tags": ["cold", "lolyesteria", "coat"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200309509%20006%2029%200214.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 7,
                "productName": "Lyhyt mekko",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2016",
                "description": "Lyhyt, kevyesti muotoonommeltu mekko napakkaa trikoota. Lyhyet holkkihihat ja erottuva vetoketju takana. Vyötäröleikkaus ja myötälaskokset. Ei vuoria.",
                "cost": 2.22,
                "price": 35.95,
                "category": "dress",
                "tags": ["dress", "HM", "red"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200439850%20005%2019%204959.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[0]&call=url[file:/product/large]"
            },
            {
                "productId": 8,
                "productName": "Ribbineulepusero",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2017",
                "description": "Vartalonmyötäinen, pitkähihainen pusero ohutta ribbineulosta.",
                "cost": 2.22,
                "price": 35.95,
                "category": "cold",
                "tags": ["high", "grey", "teens"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200437845%20004%2043%202263.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 9,
                "productName": "Ohut neulepusero",
                "productCode": "GMH-0042",
                "releaseDate": "October 15, 2012",
                "description": "Ohut neulepusero pehmeää materiaalia. Suora malli ja pitkät hihat.",
                "cost": 2.22,
                "price": 35.95,
                "category": "roste",
                "tags": ["red", "rose", "girls"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200424495%20002%2098%204192.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&call=url[file:/product/large]"
            },
            {
                "productId": 10,
                "productName": "Ohut neuleponcho",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2016",
                "description": "Ohut ja pehmeä poolokauluksinen neuleponcho. Materiaalissa hieman villaa.",
                "cost": 2.22,
                "price": 35.95,
                "category": "black",
                "tags": ["black", "fors", "girls"],
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/model/2015/B00%200311314%20006%2086%203851.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[3]&call=url[file:/product/large]"
            }
        ];

        var productUrl = "/api/products"

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = {"productId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                // Updated product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
