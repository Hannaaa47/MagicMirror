/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
    address: "localhost",	// Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out or empty, is "localhost"
    port: 8080,
    basePath: "/",	// The URL path where MagicMirrorÂ² is hosted. If you are using a Reverse proxy
    // you must set the sub path here. basePath must end with a /
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
    httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

    language: "es", // cambio el idioma a español

    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 12, // cambio el formato de horas de 24 a 12 
    units: "metric",

    modules: [
        {
            module: "alert",
            config: {
                welcome_message: "Hola bb"
            }
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left",
            config: {
                timeFormat: 12,
                timezone: "America/Mazatlan",
                displaySeconds: false,
                showWeek: true,
                showMoonTimes: true,
                dateFormat: "dddd, Do MMMM YYYY"
            },
        },
        {
            module: "calendar",
            header: "Calendario",
            position: "top_left",
            config: {
                calendars: [
                    {
                        maximumNumberOfDays: 10,
                        fetchInterval: 24 * 60 * 60 * 1000,
                        dateFormat: "DD/MM/YY",
                        symbol: "calendar-check",
                        url: "https://calendar.google.com/calendar/ical/hanna.amadorholamundo%40gmail.com/private-bfdcd8902d24f8d790b54c3267d4ffdf/basic.ics"
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: "bottom_bar",
            config: {
                remoteFile: 'https://raw.githubusercontent.com/Hannaaa47/MagicMirror/refs/heads/main/src/compliments.json',
                compliments: {
                    "....-03-20": [
                        "funciono!"
                    ]
                }
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Culiacán, Sinaloa",
            config: {
                weatherProvider: "openmeteo", //
                type: "current", //
                lat: 24.8091, //
                lon: -107.3940, //
                units: "metric",
                timeFormat: 12,
                timezone: "America/Mazatlan",
                onlyTemp: false,       // true
                showHumidity: true,
                showWindDirection: true,
                showWindDirectionAsArrow: true,
                showFeelsLike: true,
                useBeaufort: false,
                //lang: "es",         
            }
        },
        {
            module: "MMM-NBA",
            header: "MMM-NBA",
            position: "bottom_left",
            config: {
                animationSpeed: 2000,
                updateInterval: 3600000,
                updateIntervalLive: 6000,
                colored: true,
                focus_on: false,
                timeFormat: "dd. HH:mm",
                showHeaderAsIcons: false,
                showFooter: true,
                numMaxPastGames: 2,
                numMaxFutureGames: 10
            }
        },
        {
            module: 'MMM-Remote-Control',
            position: 'bottom_right', // Required to show URL/QR code on mirror
            // you can hide this module afterwards from the remote control itself
            config: {
                customCommand: {},  // Optional, See "Using Custom Commands" below
                secureEndpoints: true, // Optional, See API/README.md
                // uncomment any of the lines below if you're gonna use it
                // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
                // apiKey: "", // Optional, See API/README.md for details
                // classes: {}, // Optional, See "Custom Classes" below
                // showModuleApiMenu: false, // Optional, disable the Module Controls menu
                // showNotificationMenu: false, // Optional, disable the Notification menu

                // QR Code options (new!)
                // showQRCode: true, // Optional, display QR code for easy mobile access (default: true)
                // qrCodeSize: 150, // Optional, size of QR code in pixels (default: 150)
                // qrCodePosition: "below" // Optional:
                //   "below" - Show URL above, QR code below (default)
                //   "above" - Show QR code above, URL below
                //   "replace" - Show only QR code, no URL text
            }
        }
        /*
        ,{
            module: 'MMM-PIR-Sensor', 
            position: "lower_third", // Remove this line to avoid having an visible indicator
            config: {
                powerSavingDelay: 60, // Turn HDMI OFF after 60 seconds of no motion, until motion is detected again
                presenceIndicator: "fa-eye", // Customizing the indicator
                presenceOffIndicator: "eye-slash", // Customizing the indicator
                presenceIndicatorColor: "#f51d16", // Customizing the indicator
                presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
            }
        },
        */
        /*
        {
            module: 'MMM-EmbedYoutube', // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
            position: 'bottom_center', // This can be any of the regions.
            config: {
            // See 'Configuration options' in README.md for more information.
            video_id: '9bZkp7q19f0',
            loop: true,
            },
        }
        */



    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

