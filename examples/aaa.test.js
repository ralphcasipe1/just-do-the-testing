describe('Customer classifier', function() {
  describe('WHEN customer spent more than $500', function() {
    before(function() {
      this.customerToClassify = { spend: 505, joined: new Date(), id: 1 };
      this.DBStub = sinon.stub(dataAccess, 'getCustomer').reply({
        id: 1,
        classification: 'regular',
      });
    });

    it('should be classified as premium', function() {
      const actual = CustomClassifier.classify(this.customerToClassify);

      expect(actual).to.equals('premium');
    });
  });
});