describe('product reviews', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it('changing rating of specify product review', () => {
    // Click in product reviews in side menu
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    // Type in value input to search for specify product review
    cy.get('[id="criteria_title_value"]').type('voluptatem');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last product review
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit product review rating
    cy.get('[for="sylius_product_review_rating_4"]').scrollIntoView().click();
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that product review has been updated
    cy.get('body').should('contain', 'Product review has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[id="criteria_title_type"]').select('Equals')
    cy.get('[id="criteria_title_value"]').type('aspernatur quo voluptas');
    cy.get('*[class^="ui yellow labeled icon button"]').click();
    cy.get('body').should('contain', 'Review has been succesfuly rejected');
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[id="criteria_title_type"]').select('Equals')
    cy.get('[id="criteria_title_value"]').type('assumenda aut modi');
    cy.get('*[class^="ui loadable green labeled icon button"]').click();
    cy.get('body').should('contain', 'Review has been succesfuly accepted');
  });
  it('test case 4', () => {
    // Implement your test case 4 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[id="criteria_title_type"]').select('Equals')
    cy.get('[id="criteria_title_value"]').type('consequatur quis tempore');
    cy.get('*[class^="ui red labeled icon button"]').last().click();
    cy.get('[id="configuration-button"]').click();
    cy.get('body').should('contain', 'Product review has been succesfuly deleted');
  });
  it('test case 5', () => {
    // Implement your test case 5 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.clickInFirst('a[href="/admin/product-reviews/?limit=50"]');
    cy.get('*[class^="ui red labeled icon button"]').last().click();
    cy.get('[id="configuration-button"]').click();
    cy.get('body').should('contain', 'Product review has been succesfuly deleted');
  });
  it('test case 6', () => {
    // Implement your test case 6 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[data-js-bulkk-checkboxes=".bulk-select-checkbox"]').click();
    cy.get('*[class^="ui red labeled icon button"]').first().click();
    cy.get('[id="configuration-button"]').click();
    cy.get('body').should('contain', 'Product_reviews have been succesfuly deleted');
  });
  it('test case 7', () => {
    // Implement your test case 7 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[id="criteria_title_type"]').select('Equals')
    cy.get('[id="criteria_title_value"]').type('iste non impedit');
    cy.get('*[class^="ui labeled icon button "]').click();
    cy.get('[id="sylius_product_review_title"]').clear();
    cy.get('[id="sylius_product_review_title"]').type('novus titulus')
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    cy.get('body').should('contain', 'Product review has been successfully updated.');
  });
  it('test case 8', () => {
    // Implement your test case 8 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
  });
  it('test case 9', () => {
    // Implement your test case 9 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
  });
  it('test case 10', () => {
    // Implement your test case 10 code here
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    cy.get('[id="criteria_title_type"]').select('Equals')
    cy.get('[id="criteria_title_value"]').type('magnam ut sed');
    cy.get('*[class^="ui labeled icon button"]').click();
    cy.get('[id="sylius_product_review_comment"]').clear();
    cy.get('[id="sylius_product_review_comment"]').type('comentarius deletium')
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();
    cy.get('body').should('contain', 'Product review has been successfully updated.');
  });
});
