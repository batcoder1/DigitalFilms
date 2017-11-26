import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderDashboard() {
    return element(by.id('dashboard'));
  }
  getHeaderMovies() {
    return element(by.id('movies'));
  }
  getstar() {
    return element.all(by.id('star')).get(0);
  }

  setUsername(username: string) {
    element(by.id('username')).clear();
    element(by.id('username')).sendKeys(username);
  }
  setPassword(pass: string) {
    element(by.id('password')).clear();
    element(by.id('password')).sendKeys(pass);
  }

  clickLogin() {
    element(by.id('login')).click();
  }
  clickFavorite() {
    element.all(by.id('btnFavorite')).first().click();
  }
  clickMovies() {
    element(by.id('movies')).click();
  }
}
