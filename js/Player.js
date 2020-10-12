class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param     {number}    num - Number of token objects to be created
   * @returns   {Array}     An array of the newly created token objects
   */
  createTokens(num) {
    let tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Token(this, i);
      tokens.push(token);
    }
    console.log(tokens)
    return tokens;
  }

  get unusedTokens() {
      return this.tokens.filter(token => !token.dropped);
  }

  checkTokens() {
    return this.unusedTokens == 0 ? false : true;
  }

  get activeToken() {
    return this.unusedTokens[0];
  }
}
