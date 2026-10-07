import mongoose, { Schema, Document, Model } from "mongoose";

export interface IColourGame extends Document {
  id: string;
  name: string;
  inviteLink: string;
  loginLink: string;
  registerLink: string;
  vipCode: string;
  iconUrl?: string;
  bonus?: string;
  downloads?: string;
  minWithdrawal?: string;
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
    iconUrl: { type: String, default: "/images/91_club_logo.jpg" },
    bonus: { type: String, default: "₹500" },
    downloads: { type: String, default: "1.2M+" },
    minWithdrawal: { type: String, default: "₹110" },
  },
  {
    timestamps: true,
  }
);

export const ColourGameModel: Model<IColourGame> =
  mongoose.models.ColourGame ||
  mongoose.model<IColourGame>("ColourGame", ColourGameSchema);
