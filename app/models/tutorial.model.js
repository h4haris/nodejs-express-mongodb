module.exports = mongoose => {
  //Mongoose model represent table in MongoDB
  //Following fields will be generated
  //_id, title, description, published, createdAt, updatedAt, __v.
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );

  //To user id field instead of _id
  //override toJSON method that map default object to a custom object
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id; // using only id field, __v will be removed
    return object;
  });


  const Tutorial = mongoose.model("tutorial", schema);
  
  return Tutorial;
};