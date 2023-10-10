const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const {Select} = require('selenium-webdriver')

describe('product reviews', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    driver.manage().deleteAllCookies();
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.get('http://localhost:9990/admin');
    // await driver.get('http://150.165.75.99:9990/admin');
    await driver.findElement(By.id('_username')).sendKeys('sylius');
    await driver.findElement(By.id('_password')).sendKeys('sylius');
    await driver.findElement(By.css('.primary')).click();
    // await driver.sleep(1000);
  });

  // Remove .only and implement others test cases!
  it('changing rating of specify product review', async () => {
    // Click in product reviews in side menu
    await driver.findElement(By.linkText('Product reviews')).click();

    // Type in value input to search for specify product review
    await driver.findElement(By.id('criteria_title_value')).sendKeys('voluptatem');

    // Click in filter blue button
    await driver.findElement(By.css('*[class^="ui blue labeled icon button"]')).click();

    // Click in edit of the last product review
    const buttons = await driver.findElements(By.css('*[class^="ui labeled icon button "]'));
    await buttons[buttons.length - 1].click();

    // Edit product review rating
    await driver.findElement(By.css('[for="sylius_product_review_rating_4"]')).click();

    // Click on Save changes button
    await driver.findElement(By.id('sylius_save_changes_button')).click();

    // Assert that product review has been updated
    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product review has been successfully updated.'));
  });

  it('test case 2', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const select = await driver.findElement(By.id('criteria_title_type'));
    const selection = new Select(select);

    selection.selectByVisibleText('Equal');

    await driver.findElement(By.id('criteria_title_value')).sendKeys('aspernatur quo voluptas');

    await driver.findElement(By.css('*[class^="ui loadable yellow labeled icon button"]')).click();

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Review has been successfully rejected.'));
  });

  it('test case 3', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const select = await driver.findElement(By.id('criteria_title_type'));
    const selection = new Select(select);

    selection.selectByVisibleText('Equal');

    await driver.findElement(By.id('criteria_title_value')).sendKeys('assumenda aut modi');

    await driver.findElement(By.css('*[class^="ui loadable green labeled icon button"]')).click();

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Review has been successfully accepted.'));
  });

  it('test case 4', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const select = await driver.findElement(By.id('criteria_title_type'));
    const selection = new Select(select);

    selection.selectByVisibleText('Equal');

    await driver.findElement(By.id('criteria_title_value')).sendKeys('consequatur quis tempore');

    const deleteButtons = await driver.findElements(By.css('*[class^="ui red labeled icon button"]'));
    deleteButtons[deleteButtons.length - 1].click()

    // await driver.findElement(By.css('*[class^="ui red labeled icon button"]')).click();

    await driver.findElement(By.id('confirmation-button')).click();

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product review has been successfully deleted.'));
  });

  it('test case 5', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();
    const button = await driver.findElement(By.css('a[href="/admin/product-reviews/?limit=50"]'));

    button.click()

    const deleteButtons = await driver.findElements(By.css('*[class^="ui red labeled icon button"]'));
    
    deleteButtons[deleteButtons.length - 1].click();

    await driver.findElement(By.id('confirmation-button')).click();

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product review has been successfully deleted.'));
    assert(!bodyText.includes('similique eum nulla'));
  });

  it('test case 6', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const checkbox = await driver.findElement(By.css('*[data-js-bulk-checkboxes=".bulk-select-checkbox"]'));
    checkbox.click();

    const deleteButtons = await driver.findElements(By.css('*[class^="ui red labeled icon button"]'));
    deleteButtons[0].click();

    await driver.findElement(By.id('confirmation-button')).click();

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert(bodyText.includes('Product_reviews have been successfully deleted.'));
  });

  it('test case 7', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const select = await driver.findElement(By.id('criteria_title_type'));
    const selection = new Select(select);

    selection.selectByVisibleText('Equal');

    const textField = await driver.findElement(By.id('criteria_title_value'));
    textField.sendKeys('iste non impedit');

    const editButton = await driver.findElement(By.css('*[class^="ui labeled icon button "]'));
    editButton.click();

    const titleField = await driver.findElement(By.css('*[value*="occaecati minima quis"]'));
    titleField.clear();
    titleField.sendKeys('Novus titulus');

     // Click on Save changes button
     await driver.findElement(By.id('sylius_save_changes_button')).click();

     // Assert that product review has been updated
     const bodyText = await driver.findElement(By.tagName('body')).getText();
     assert(bodyText.includes('Product review has been successfully updated.'));
  });

  // it('test case 8', async () => {
  //   await driver.findElement(By.linkText('Product reviews')).click();

  //   const select = await driver.findElement(By.id('criteria_title_type'));
  //   const selection = new Select(select);

  //   selection.selectByVisibleText('Equal');

  //   await driver.findElement(By.id('criteria_title_value')).sendKeys('consequatur quis tempore');

  //   await driver.findElement(By.css('*[class^="ui red labeled icon button"]')).click();

  //   await driver.findElement(By.id('confirmation-button')).click();

  //   const bodyText = await driver.findElement(By.tagName('body')).getText();
  //   assert(bodyText.includes('Product review has been successfully deleted.'));
  // });

  // it('test case 9', async () => {
  //   await driver.findElement(By.linkText('Product reviews')).click();

  //   const select = await driver.findElement(By.id('criteria_title_type'));
  //   const selection = new Select(select);

  //   selection.selectByVisibleText('Equal');

  //   await driver.findElement(By.id('criteria_title_value')).sendKeys('consequatur quis tempore');

  //   await driver.findElement(By.css('*[class^="ui red labeled icon button"]')).click();

  //   await driver.findElement(By.id('confirmation-button')).click();

  //   const bodyText = await driver.findElement(By.tagName('body')).getText();
  //   assert(bodyText.includes('Product review has been successfully deleted.'));
  // });

  it.only('test case 10', async () => {
    await driver.findElement(By.linkText('Product reviews')).click();

    const select = await driver.findElement(By.id('criteria_title_type'));
    const selection = new Select(select);

    selection.selectByVisibleText('Equal');

    const textField = await driver.findElement(By.id('criteria_title_value'));
    textField.sendKeys('magnam ut sed');

    const editButton = await driver.findElement(By.css('*[class^="ui labeled icon button "]'));
    editButton.click();

    let titleField = await driver.findElement(By.css('*[id*="sylius_product_review_comment"]'));
    // await driver.findElement(By.css('*[id*="sylius_product_review_comment"]')).clear()
    // await driver.findElement(By.css('*[id*="sylius_product_review_comment"]')).sendKeys('Comentarius deletium');
    await
    titleField.clear();
    titleField.sendKeys('Comentarius deletium');

     // Click on Save changes button
     await driver.findElement(By.id('sylius_save_changes_button')).click();

     // Assert that product review has been updated
     const bodyText = await driver.findElement(By.tagName('body')).getText();
     assert(bodyText.includes('Product review has been successfully updated.'));
  });

});
