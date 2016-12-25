describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Sample Application';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <root>', () => {
    let subject = element(by.css('root')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have buttons', () => {
    let subject = element(by.css('button')).getText();
    let result  = 'Submit';
    expect(subject).toEqual(result);
  });

  it('entity page should have an image', () => {
    browser.get('/entity');
    let hasImage = element(by.css('img')).isPresent();
    expect(hasImage).toEqual(true);
  });

});
