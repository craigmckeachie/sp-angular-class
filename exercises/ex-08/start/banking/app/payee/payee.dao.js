/*
 * In this exercise, you will make changes here and payee.component.js
 * In this file, you will be getting rid of getPayees() and exchanging it for
 * Ajax calls.
 *
 * Start at the factory, add a dependency on $http
 * The RESTful endpoint allows requests for specific payees by payeeId
 * http://localhost:7100/banking/payee/12 (Assuming a payeeId of 12)
 * Alter the get() function to make a request for a specific payee
 * based on the passed payeeId
 *
 * In query, change the function so that it makes a request to the base URL
 * http://localhost:7100/banking/payee
 * but passes along the parameters found in criteria as part of the querystring
 *
 * In both cases, have the functions return the resulting promise. Then go
 * to payee.component.js and follow the directions there.
 *
 */
(function( angular ) {
  angular.module( 'payee.dao', [] )
      .factory( 'payeeDAO', function( $filter ) {

        var dao = {
          get: get,
          query: query
        };

        return dao;

        function get( payeeId ) {
          payeeId = Number( payeeId );
          var foundPayee = null;
          getPayees().some( function( payee ) {
            if ( payee.payeeId === payeeId ) {
              foundPayee = payee;
              return true;
            }
          } );

          return foundPayee;
        }

        function query( criteria ) {
          return $filter( 'filter' )( getPayees(), criteria );
        }

        function getPayees() {
          return [
            {
              "payeeId": 1,
              "payeeName": "DCH Mortgages",
              "categoryId": 9,
              "address": "1285 Rezlog Plaza",
              "city": "Powhatan",
              "state": "RI",
              "zip": "02212",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 2,
              "payeeName": "Ill Communication Telephones",
              "categoryId": 22,
              "address": "1597 Figole Grove",
              "city": "Akron",
              "state": "OH",
              "zip": "66345",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 3,
              "payeeName": "Erol's Internet",
              "categoryId": 22,
              "address": "453 Lomhab Junction",
              "city": "Kansas City",
              "state": "KS",
              "zip": "60019",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 4,
              "payeeName": "Acme Gas and Electric",
              "categoryId": 22,
              "address": "1669 Divided Court",
              "city": "Cheyenne",
              "state": "WY",
              "zip": "48324",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 5,
              "payeeName": "Happiness Gym",
              "categoryId": 8,
              "address": "1569 Falls Rd.",
              "city": "Baltimore",
              "state": "MD",
              "zip": "95306",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 6,
              "payeeName": "Shop-Rite Grocery Store",
              "categoryId": 5,
              "address": "311 St. Paul Ave.",
              "city": "Baltimore",
              "state": "MD",
              "zip": "08697",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 7,
              "payeeName": "Sushi Land",
              "categoryId": 18,
              "address": "808 Calvert St.",
              "city": "Baltimore",
              "state": "MD",
              "zip": "01848",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 8,
              "payeeName": "Worthless Peon Productions",
              "categoryId": 19,
              "address": "125 Scrub Street",
              "city": "Santa Monica",
              "state": "CA",
              "zip": "90111",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 9,
              "payeeName": "The CX Institute",
              "categoryId": 19,
              "address": "1715 Greymalkin Lane",
              "city": "Westchester",
              "state": "NY",
              "zip": "10047",
              "image": null,
              "motto": null
            },
            {
              "payeeId": 10,
              "payeeName": "Gleichner, Lind and Olson, Ltd.",
              "categoryId": 17,
              "address": "142 Wune Street",
              "city": "Deetelu",
              "state": "WV",
              "zip": "80587",
              "image": "/images/animals/9.jpg",
              "motto": "Optimized executive frame"
            },
            {
              "payeeId": 11,
              "payeeName": "Bradtke Brothers, Grocers",
              "categoryId": 7,
              "address": "1076 Dedza Ridge",
              "city": "Mogekheh",
              "state": "GA",
              "zip": "24242",
              "image": "/images/business/10.jpg",
              "motto": "Proactive local function"
            },
            {
              "payeeId": 12,
              "payeeName": "Klein Cars",
              "categoryId": 1,
              "address": "1939 Rolfs Pass",
              "city": "Baltiimore",
              "state": "MD",
              "zip": "97394",
              "image": "/images/technics/4.jpg",
              "motto": "Seamless heuristic process improvement"
            },
            {
              "payeeId": 13,
              "payeeName": "Russel Group",
              "categoryId": 20,
              "address": "218 Utba Terrace",
              "city": "Kapasaw",
              "state": "MA",
              "zip": "50773",
              "image": "/images/technics/4.jpg",
              "motto": "Cloned impactful open system"
            },
            {
              "payeeId": 14,
              "payeeName": "Mitchell-Sporer",
              "categoryId": 6,
              "address": "1249 Hisog Place",
              "city": "Zincote",
              "state": "MD",
              "zip": "76421",
              "image": "/images/nature/8.jpg",
              "motto": "Face to face local collaboration"
            },
            {
              "payeeId": 15,
              "payeeName": "Kerluke Amusements",
              "categoryId": 21,
              "address": "1729 Bozoz Mill",
              "city": "Little Rock",
              "state": "AR",
              "zip": "56053",
              "image": "/images/cats/4.jpg",
              "motto": "Phased reciprocal product"
            },
            {
              "payeeId": 16,
              "payeeName": "Spinka Salon",
              "categoryId": 2,
              "address": "857 Givce Turnpike",
              "city": "Palomar",
              "state": "CA",
              "zip": "99533",
              "image": "/images/cats/10.jpg",
              "motto": "Monitored encompassing workforce"
            },
            {
              "payeeId": 17,
              "payeeName": "Bauch-Stehr Medical Partners",
              "categoryId": 8,
              "address": "671 York Ave",
              "city": "Baltimore",
              "state": "MD",
              "zip": "54952",
              "image": "/images/business/3.jpg",
              "motto": "Versatile optimizing support"
            },
            {
              "payeeId": 18,
              "payeeName": "Legros, Trantow and Kub",
              "categoryId": 4,
              "address": "1189 Tele Highway",
              "city": "Boothbay",
              "state": "ME",
              "zip": "14298",
              "image": "/images/business/3.jpg",
              "motto": "Future-proofed analyzing frame"
            },
            {
              "payeeId": 19,
              "payeeName": "The Senator Theater",
              "categoryId": 15,
              "address": "1689 North York Rd",
              "city": "Baltimore",
              "state": "MD",
              "zip": "48693",
              "image": "/images/business/5.jpg",
              "motto": "Yesterday's movies tomorrow"
            },
            {
              "payeeId": 20,
              "payeeName": "Zieme & Ratke, Pediatrics",
              "categoryId": 14,
              "address": "1873 Razif Loop",
              "city": "Fonzopo",
              "state": "FL",
              "zip": "55902",
              "image": "/images/business/2.jpg",
              "motto": "Multi-lateral grid-enabled toolset"
            },
            {
              "payeeId": 21,
              "payeeName": "Prosacco Day Care",
              "categoryId": 12,
              "address": "503 Fotef Square",
              "city": "Towson",
              "state": "MD",
              "zip": "91797",
              "image": "/images/transport/6.jpg",
              "motto": "User-friendly bottom-line hardware"
            },
            {
              "payeeId": 22,
              "payeeName": "Heathcote Inc",
              "categoryId": 3,
              "address": "798 Defaj Point",
              "city": "Tajuwbi",
              "state": "WI",
              "zip": "88464",
              "image": "/images/business/3.jpg",
              "motto": "Secured web-enabled Graphical Clothing Interface"
            },
            {
              "payeeId": 23,
              "payeeName": "Davis, Muller and Marvin",
              "categoryId": 21,
              "address": "319 Nazmo Road",
              "city": "Sohcutzeh",
              "state": "VT",
              "zip": "09725",
              "image": "/images/technics/1.jpg",
              "motto": "Persevering regional moratorium"
            },
            {
              "payeeId": 24,
              "payeeName": "Boehm, Bernhard and Lebsack",
              "categoryId": 16,
              "address": "1146 Kubo Parkway",
              "city": "Lohsunru",
              "state": "OH",
              "zip": "17404",
              "image": "/images/nature/3.jpg",
              "motto": "Function-based logistical paradigm"
            },
            {
              "payeeId": 25,
              "payeeName": "Kohler, Runolfsdottir and Torp",
              "categoryId": 11,
              "address": "841 Pewuj Court",
              "city": "Nesetvuv",
              "state": "NY",
              "zip": "86629",
              "image": "/images/technics/7.jpg",
              "motto": "Diverse optimizing paradigm"
            },
            {
              "payeeId": 26,
              "payeeName": "Hill-Harvey",
              "categoryId": 21,
              "address": "858 Pekcip Parkway",
              "city": "Olawozpo",
              "state": "NH",
              "zip": "12246",
              "image": "/images/cats/3.jpg",
              "motto": "Synchronised systemic internet solution"
            },
            {
              "payeeId": 27,
              "payeeName": "Deckow-Hand",
              "categoryId": 10,
              "address": "1622 Avena Circle",
              "city": "Nuebaheh",
              "state": "MA",
              "zip": "52038",
              "image": "/images/animals/9.jpg",
              "motto": "Cloned directional attitude"
            },
            {
              "payeeId": 28,
              "payeeName": "Veum Industrial Products",
              "categoryId": 10,
              "address": "587 Ipobak Terrace",
              "city": "Majfazme",
              "state": "CT",
              "zip": "16097",
              "image": "/images/nature/6.jpg",
              "motto": "Operative maximized matrices"
            },
            {
              "payeeId": 29,
              "payeeName": "Watsica Design",
              "categoryId": 10,
              "address": "289 Vaewi Avenue",
              "city": "Dorgaec",
              "state": "WY",
              "zip": "19966",
              "image": "/images/business/5.jpg",
              "motto": "Streamlined full-range budgetary management"
            },
            {
              "payeeId": 32,
              "payeeName": "The Wolf and Tortoise",
              "categoryId": 18,
              "address": "1939 Hetuv Pass",
              "city": "Sekawce",
              "state": "AK",
              "zip": "97394",
              "image": "/images/technics/4.jpg",
              "motto": "Seamless heuristic process improvement"
            },
            {
              "payeeId": 35,
              "payeeName": "Bauch Opicians",
              "categoryId": 14,
              "address": "1729 Bozoz Mill",
              "city": "Jirepovo",
              "state": "AR",
              "zip": "56053",
              "image": "/images/cats/4.jpg",
              "motto": "Phased reciprocal product"
            },
            {
              "payeeId": 38,
              "payeeName": "Legos, Legos, Legos",
              "categoryId": 21,
              "address": "1189 Tele Highway",
              "city": "Obcibadi",
              "state": "ME",
              "zip": "14298",
              "image": "/images/business/3.jpg",
              "motto": "Future-proofed analyzing frame"
            },
            {
              "payeeId": 39,
              "payeeName": "Rau, Kertzmann and Cremin",
              "categoryId": 15,
              "address": "1689 Kefoz Plaza",
              "city": "Podmowed",
              "state": "MD",
              "zip": "48693",
              "image": "/images/business/5.jpg",
              "motto": "Grass-roots composite infrastructure"
            },
            {
              "payeeId": 40,
              "payeeName": "Quigley's Steaks",
              "categoryId": 18,
              "address": "1873 Razif Loop",
              "city": "Fonozpo",
              "state": "FL",
              "zip": "55902",
              "image": "/images/business/2.jpg",
              "motto": "Multi-lateral grid-enabled toolset"
            },
            {
              "payeeId": 43,
              "payeeName": "Wayne Enterprises",
              "categoryId": 10,
              "address": "319 Thomas Wayne Road",
              "city": "Gotham",
              "state": "NY",
              "zip": "10939",
              "image": "/images/technics/1.jpg",
              "motto": "Persevering regional moratorium"
            },
            {
              "payeeId": 44,
              "payeeName": "Stark Electronics",
              "categoryId": 4,
              "address": "1146 Kubo Parkway",
              "city": "Cupertino",
              "state": "CA",
              "zip": "96412",
              "image": "/images/nature/3.jpg",
              "motto": "Function-based logistical paradigm"
            },
            {
              "payeeId": 45,
              "payeeName": "Tyrell Corporation",
              "categoryId": 19,
              "address": "841 Pewuj Court",
              "city": "Netseyev",
              "state": "NY",
              "zip": "86629",
              "image": "/images/technics/7.jpg",
              "motto": "Diverse optimizing paradigm"
            },
            {
              "payeeId": 46,
              "payeeName": "Yoyodyne Propulsion Systems",
              "categoryId": 10,
              "address": "16 Blue Blazer Way",
              "city": "Grover's Mill",
              "state": "NJ",
              "zip": "07561",
              "image": "/images/cats/3.jpg",
              "motto": "Synchronised systemic internet solution"
            },
            {
              "payeeId": 47,
              "payeeName": "Goodman, Lieber, Kurtzberg, Holliway",
              "categoryId": 13,
              "address": "16 W 12 St.",
              "city": "New York",
              "state": "NY",
              "zip": "10015",
              "image": "/images/animals/9.jpg",
              "motto": null
            },
            {
              "payeeId": 48,
              "payeeName": "Rodriguez Computing",
              "categoryId": 4,
              "address": "587 Ipobak Terrace",
              "city": "Majfazme",
              "state": "CT",
              "zip": "16097",
              "image": "/images/nature/6.jpg",
              "motto": "Operative maximized matrices"
            },
            {
              "payeeId": 49,
              "payeeName": "Tower Shields",
              "categoryId": 10,
              "address": "289 Vaewi Avenue",
              "city": "Dorkachek",
              "state": "WY",
              "zip": "19966",
              "image": "/images/business/5.jpg",
              "motto": "Streamlined full-range budgetary management"
            }
          ]
        }
      } )
})( angular );