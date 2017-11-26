import { AppPage } from './app.po';

describe('digital App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should do login', () => {
    page.navigateTo();
    page.setUsername('kike');
    page.setPassword('111');
    page.clickLogin();


  });
  it('should load headerBar and display label DASHBOARD', () => {
    page.navigateTo();
    page.setUsername('kike');
    page.setPassword('111');
    page.clickLogin();
    expect(page.getHeaderDashboard().getText()).toContain('DASHBOARD');
  });
  it('should load , go to movies and click over first movie favorite button and display a start in that movie', () => {
    page.navigateTo();
    page.navigateTo();
    page.setUsername('kike');
    page.setPassword('111');
    page.clickLogin();
    page.clickMovies();
    page.clickFavorite();

    expect(page.getstar().getAttribute('class')).toMatch('favorite');
  });


});
