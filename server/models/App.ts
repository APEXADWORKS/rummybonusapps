import mongoose, { Schema, Document, Model } from "mongoose";

export interface IApp extends Document {
  id: string;
  name: string;
  bonus: string;
  downloads: string;
  minWithdrawal: string;
  downloadLink: string;
  iconUrl: string;
  category: "Top" | "New" | "High Bonus";
  isTrending: boolean;
  rating?: number;
  reviewCount?: number;
  slug?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppSchema = new Schema<IApp>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    bonus: { type: String, default: "Rs.51" },
    downloads: { type: String, default: "100K+" },
    minWithdrawal: { type: String, default: "₹100" },
    downloadLink: { type: String, default: "#" },
    iconUrl: { type: String, default: "/images/default_app.png" },
    category: {
      type: String,
      enum: ["Top", "New", "High Bonus"],
      default: "Top",
      index: true,
    },
    isTrending: { type: Boolean, default: false, index: true },
    rating: { type: Number, default: 4.8 },
    reviewCount: { type: Number, default: 12500 },
    slug: { type: String, index: true },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to ensure slug is generated if missing
AppSchema.pre("save", function () {
  if (!this.slug && this.name) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
});

export const AppModel: Model<IApp> =
  mongoose.models.App || mongoose.model<IApp>("App", AppSchema);
