import { $ } from '@wdio/globals'
import Page from './page.js';

const securePageLocator = '//android.widget.TextView[@text="PRODUCTS"]';

class SecurePage extends Page {

    get securePageLocator () {
        return $(securePageLocator);
    }
}

export default new SecurePage();
