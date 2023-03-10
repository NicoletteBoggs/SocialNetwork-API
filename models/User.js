const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        "email needs to be valid",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual("friendcount").get(function () {
  return this.friends.length;
});
const User = model("user", userSchema);

module.exports = User;
