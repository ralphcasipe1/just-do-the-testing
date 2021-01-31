describe('ProductRepository', function() {
  describe('Add new product', function () {
    it('When no price is specified, then the product status is pending', function() {
      const product = new ProductRepository().add({});

      expect(product).to.have.property('status', 'PENDING');
    });
  });
});