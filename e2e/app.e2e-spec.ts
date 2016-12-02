import { ScoreKeeperPage } from './app.po';

describe('score-keeper App', function() {
  let page: ScoreKeeperPage;

  beforeEach(() => {
    page = new ScoreKeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
