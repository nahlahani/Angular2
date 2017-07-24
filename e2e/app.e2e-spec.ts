import { CrapPage } from './app.po';

describe('crap App', () => {
  let page: CrapPage;

  beforeEach(() => {
    page = new CrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
