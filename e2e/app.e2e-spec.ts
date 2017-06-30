import { Ng2StarRaterPage } from './app.po';

describe('ng2-star-rater App', () => {
  let page: Ng2StarRaterPage;

  beforeEach(() => {
    page = new Ng2StarRaterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
