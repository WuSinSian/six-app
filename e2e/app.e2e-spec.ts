import { SixAppPage } from './app.po';

describe('six-app App', () => {
  let page: SixAppPage;

  beforeEach(() => {
    page = new SixAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
