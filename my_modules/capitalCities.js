const dayjs = require('dayjs');
//^import plugins
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
require('dayjs/locale/fr');
dayjs.locale('fr');

//^My object
const cities = {
    capitalCities: [{
            name: "Paris",
            tz: "Europe/Paris"
        },
        {
            name: "Londres",
            tz: "Europe/London"
        },
        {
            name: "Washington",
            tz: "US/Eastern"
        },
        {
            name: "Beijing",
            tz: "Asia/Shanghai"
        },
        {
            name: "Moscou",
            tz: "Europe/Moscow"
        },
        {
            name: "Alaska",
            tz: "America/Metlakatla"
        },
        {
            name: "Singapore",
            tz: "Asia/Singapore"
        },
        {
            name: "Tasmania",
            tz: "Australia/Hobart"
        }
    ],
    //~
    timezone: function () {
        let date = {};
        for (city of this.capitalCities) {
            date[city.name.toLowerCase()] = dayjs().tz(city.tz).format('dddd, HH[h]mm');
        }
        return date;
    }
};


// On exporte notre module afin qu'il soit accessible depuis l'exterieur
module.exports = cities;