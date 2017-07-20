import { AngularOaPage } from './app.po';

describe('angular-oa App', () => {
  let page: AngularOaPage;

  beforeEach(() => {
    page = new AngularOaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
