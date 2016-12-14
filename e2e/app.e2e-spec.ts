import { OfficialRouterDemoPage } from './app.po';

describe('official-router-demo App', function() {
  let page: OfficialRouterDemoPage;

  beforeEach(() => {
    page = new OfficialRouterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
