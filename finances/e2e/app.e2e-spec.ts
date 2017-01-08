import { FinancesReduxPage } from './app.po';

describe('finances-redux App', function() {
  let page: FinancesReduxPage;

  beforeEach(() => {
    page = new FinancesReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
