import { Inventory.ClientPage } from './app.po';

describe('inventory.client App', () => {
  let page: Inventory.ClientPage;

  beforeEach(() => {
    page = new Inventory.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
