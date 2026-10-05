import mongoose, { Schema, Document, Model } from "mongoose";

export interface IColourGame extends Document {
  id: string;
  name: string;
  inviteLink: string;
  loginLink: string;
  registerLink: string;
  vipCode: string;
  updatedAt: Date;
  createdAt: Date;
}

const ColourGameSchema = new Schema<IColourGame>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    inviteLink: {
      type: String,
      default: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    },
    loginLink: {
      type: String,
      default: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    },
    registerLink: {
      type: String,
      default: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    },
    vipCode: { type: String, default: "1538" },
  },
  {
    timestamps: true,
  }
);

export const ColourGameModel: Model<IColourGame> =
  mongoose.models.ColourGame ||
  mongoose.model<IColourGame>("ColourGame", ColourGameSchema);
