import { $ } from '@wdio/globals'
import Page from './page.js';

const username = '//android.widget.EditText[@content-desc="test-Username"]';
const password = '//android.widget.EditText[@content-desc="test-Password"]';
const loginbtn = '//android.view.ViewGroup[@content-desc="test-LOGIN"]';
const hamburgurButton = '//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView';
const logoutButton = '//android.widget.TextView[@text="LOGOUT"]';
const errorMessage = '//android.widget.TextView[@text="Sorry, this user has been locked out."]';

class LoginPage extends Page {
    get inputUsername () {
        return $(username);
    }
    get inputPassword () {
        return $(password);
    }
    get btnSubmit () {
        return $(loginbtn);
    }
    get hamburgurButton () {
        return $(hamburgurButton);
    }
    get logoutButton () {
        return $(logoutButton);
    }

    get errorMessage () {
        return $(errorMessage);
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
