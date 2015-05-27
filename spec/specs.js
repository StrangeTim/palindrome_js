describe('palindrome', function() {
  it("returns false if a word is not a palindrome", function() {
    expect(palindrome("ir")).to.equal(false);
  });

  it("returns true if a word is a palindrome", function() {
    expect(palindrome("refer")).to.equal(true);
  });

  it("returns true for a sentence palindrome", function() {
    var test_phrase = "Doc, note: I dissent. A fast never prevents a fatness. I diet on cod"
    expect(palindrome(test_phrase)).to.equal(true);
  });

});
