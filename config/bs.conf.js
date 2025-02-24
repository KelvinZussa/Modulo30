import { generalConf } from './general.conf.js'

export let bsConf = { 
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
      
    capabilities: process.env.PLATFORM === "android" ? [
        {
                "platformName": "Android",
                "appium:deviceName": "Samsung Galaxy S22 Ultra",
                "appium:platformVersion": "12.0",
                "appium:automationName": "UIAutomator2",
                "appium:app": "bs://c3b9cd76bfc5b04313e2c4513759d374cba09cec"
        }
    ] : [
        {
                "platformName": "iOS",
                "appium:deviceName": "iPhone 15",
                "appium:platformVersion": "17",
                "appium:automationName": "XCUITest",
                "appium:app": "bs://1333dedf05869ede3cf9fda52cbba46ad9ea685c"
        }

    ],
    commonCapabilities: {
        'bstack:options': {
          projectName: "BrowserStack EBAC",
          buildName: "bstack-demo",
          sessionName: `Test ${process.env.PLATFORM}`,
          //debug: true,
          //networkLogs: true,
          
    },
        
    ...generalConf

}
}
