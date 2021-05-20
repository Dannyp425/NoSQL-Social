const { ObjectId } = require("bson");
const { Schema, Mongoose } = require("mongoose");

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Mongoose.Schema.ObjectId,
            default: new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
);

reactionSchema.virtual("reactionCount").get(function() {
    return this.reactions.reduce(
      (total, reaction) => total + reaction.replies.length + 1,
      0
    );
  });
  
  const Reaction = model("Reaction", reactionSchema);
  
  module.exports = Reaction;