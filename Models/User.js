const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        comments: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought"
            }
          ],
        friends: {
            ref: "User"
        },
    }
)