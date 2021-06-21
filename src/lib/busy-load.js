import {BusyLoad} from './class.BusyLoad.js';
import defaults from './defaults.js';


export function busyLoadSetup(settings) {
    jQuery.extend(true, defaults, settings);
}


export function busyLoad(action, options) {
    
    return this.each(function () {
        let bl = new BusyLoad(jQuery(this), JSON.parse(JSON.stringify(defaults)), options);

        switch (action) {
            case "show":
                bl.show();
                break;
            case "hide":
                bl.hide();
                break;
            default:
                throw `don't know action '${action}'`
        }
    });
}


export function busyLoadFull(action, options) {

    let $body = jQuery('body');
    let bl = new BusyLoad($body, JSON.parse(JSON.stringify(defaults)), options);


    switch (action.toLowerCase()) {
        case "show":
            $body.addClass("no-scroll");
            bl.caller = $body;
            bl.extendSettings({
                fullScreen: true
            });
            bl.show();

            break;

        case "hide":
            bl.hide();
            $body.removeClass("no-scroll");
            break;
    }

    return $body;

}

 