function Author(name, nationality) {
  this._id = `Author-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  this.name = name;
  this.nationality = nationality;
}

export default Author;