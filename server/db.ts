import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { AppModel, IApp } from "./models/App.js";
import { ColourGameModel, IColourGame } from "./models/ColourGame.js";
import { RUMMY_APPS } from "../src/data.js";

const DATA_DIR = path.resolve(process.cwd(), "server/data");
const STORE_PATH = path.join(DATA_DIR, "apps-store.json");
const COLOUR_STORE_PATH = path.join(DATA_DIR, "colour-games.json");

let isMongoConnected = false;
let mongoError: string | null = null;

export const DEFAULT_COLOUR_GAMES = [
  {
    id: "91-club",
    name: "91 Club",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/91_club_logo.jpg",
    bonus: "₹500",
    downloads: "1.2M+",
    minWithdrawal: "₹110",
  },
  {
    id: "tiranga-game",
    name: "Tiranga Game",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/tiranga_game_logo.jpg",
    bonus: "₹500",
    downloads: "1.5M+",
    minWithdrawal: "₹110",
  },
  {
    id: "82-lottery",
    name: "82 Lottery",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/82_lottery_logo.jpg",
    bonus: "₹500",
    downloads: "920K+",
    minWithdrawal: "₹110",
  },
  {
    id: "goa-game",
    name: "Goa Game",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/goa_game_logo.jpg",
    bonus: "₹500",
    downloads: "1.1M+",
    minWithdrawal: "₹110",
  },
  {
    id: "veer-game",
    name: "Veer Game",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/veer_game_logo.jpg",
    bonus: "₹500",
    downloads: "850K+",
    minWithdrawal: "₹110",
  },
  {
    id: "ok-win",
    name: "Ok Win",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/ok_win_logo.jpg",
    bonus: "₹500",
    downloads: "780K+",
    minWithdrawal: "₹110",
  },
  {
    id: "maan-win",
    name: "Maan Win",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/maan_win_logo.jpg",
    bonus: "₹500",
    downloads: "640K+",
    minWithdrawal: "₹110",
  },
  {
    id: "diu-win",
    name: "Diu Win",
    inviteLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    loginLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    registerLink: "https://www.junglehaan.vip/share/6IOe3xy=1538",
    vipCode: "1538",
    iconUrl: "/images/diu_win_logo.jpg",
    bonus: "₹500",
    downloads: "590K+",
    minWithdrawal: "₹110",
  },
];

// Initialize local stores if file does not exist
function ensureLocalStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(STORE_PATH)) {
      const initialData = RUMMY_APPS.map((app) => ({
        ...app,
        rating: 4.8,
        reviewCount: 12500,
        slug: app.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
      fs.writeFileSync(STORE_PATH, JSON.stringify(initialData, null, 2), "utf-8");
    }
    if (!fs.existsSync(COLOUR_STORE_PATH)) {
      const initialColour = DEFAULT_COLOUR_GAMES.map((cg) => ({
        ...cg,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
      fs.writeFileSync(COLOUR_STORE_PATH, JSON.stringify(initialColour, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error setting up local apps store:", err);
  }
}

export function readLocalStore(): any[] {
  ensureLocalStore();
  try {
    const raw = fs.readFileSync(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return RUMMY_APPS;
  } catch (err) {
    console.error("Error reading local apps store:", err);
    return RUMMY_APPS;
  }
}

export function writeLocalStore(apps: any[]) {
  ensureLocalStore();
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(apps, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing to local apps store:", err);
  }
}

function readColourStore(): any[] {
  ensureLocalStore();
  try {
    const raw = fs.readFileSync(COLOUR_STORE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading colour store:", err);
    return DEFAULT_COLOUR_GAMES;
  }
}

function writeColourStore(games: any[]) {
  ensureLocalStore();
  try {
    fs.writeFileSync(COLOUR_STORE_PATH, JSON.stringify(games, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing colour store:", err);
  }
}

export async function initDatabase() {
  ensureLocalStore();

  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/rummybonusapps";

  try {
    console.log(`[Database] Attempting connection to MongoDB (${mongoUri.replace(/:[^:@]+@/, ":****@")})...`);
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000,
    });
    isMongoConnected = true;
    mongoError = null;
    console.log("[Database] Connected successfully to MongoDB!");

    // Check if collection is empty, auto-seed with 80+ apps
    const count = await AppModel.countDocuments();
    if (count === 0) {
      console.log(`[Database] Collection is empty. Auto-seeding all ${RUMMY_APPS.length} apps into MongoDB...`);
      await seedDatabaseFromData();
    } else {
      console.log(`[Database] MongoDB contains ${count} apps ready.`);
    }

    // Check Colour Games count
    const colourCount = await ColourGameModel.countDocuments();
    if (colourCount === 0) {
      console.log(`[Database] Seeding ${DEFAULT_COLOUR_GAMES.length} colour games into MongoDB...`);
      await seedColourGames();
    }
  } catch (err: any) {
    isMongoConnected = false;
    mongoError = err.message || "Could not connect to MongoDB server";
    console.warn(`[Database] MongoDB connection notice: ${mongoError}.`);
    console.log(`[Database] Running with persistent local JSON store (${readLocalStore().length} apps + ${readColourStore().length} colour games).`);
  }
}

export async function seedDatabaseFromData(force = false) {
  // Build fresh 83+ apps array from source data
  const defaultDocs = RUMMY_APPS.map((app) => ({
    ...app,
    rating: 4.8,
    reviewCount: 12500,
    slug: app.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));

  // Always write fresh copy to local persistent fallback file
  writeLocalStore(defaultDocs);

  if (isMongoConnected) {
    try {
      if (force) {
        await AppModel.deleteMany({});
      }
      const mongoDocs = defaultDocs.map((app) => ({
        ...app,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      await AppModel.insertMany(mongoDocs, { ordered: false });
    } catch (err) {
      console.warn("[Database] MongoDB bulk insert note:", err);
    }
  }

  return {
    count: defaultDocs.length,
    apps: defaultDocs,
  };
}

export async function seedColourGames(force = false) {
  if (isMongoConnected) {
    if (force) {
      await ColourGameModel.deleteMany({});
    }
    const docs = DEFAULT_COLOUR_GAMES.map((cg) => ({
      ...cg,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await ColourGameModel.insertMany(docs, { ordered: false });
    return docs.length;
  } else {
    const docs = DEFAULT_COLOUR_GAMES.map((cg) => ({
      ...cg,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    writeColourStore(docs);
    return docs.length;
  }
}

export async function getAllApps(query: {
  search?: string;
  category?: string;
  isTrending?: boolean;
  limit?: number;
  skip?: number;
}) {
  if (isMongoConnected) {
    const filter: any = {};
    if (query.category && query.category !== "All") {
      filter.category = query.category;
    }
    if (query.isTrending !== undefined) {
      filter.isTrending = query.isTrending;
    }
    if (query.search) {
      filter.name = { $regex: query.search, $options: "i" };
    }

    const apps = await AppModel.find(filter)
      .sort({ isTrending: -1, updatedAt: -1 })
      .skip(query.skip || 0)
      .limit(query.limit || 200)
      .lean();

    const total = await AppModel.countDocuments(filter);
    return { apps, total };
  } else {
    let apps = readLocalStore();
    if (query.category && query.category !== "All") {
      apps = apps.filter((a) => a.category === query.category);
    }
    if (query.isTrending !== undefined) {
      apps = apps.filter((a) => Boolean(a.isTrending) === query.isTrending);
    }
    if (query.search) {
      const q = query.search.toLowerCase();
      apps = apps.filter((a) => a.name.toLowerCase().includes(q));
    }
    const total = apps.length;
    const skip = query.skip || 0;
    const limit = query.limit || 200;
    apps = apps.slice(skip, skip + limit);
    return { apps, total };
  }
}

export async function getAppById(idOrSlug: string) {
  if (isMongoConnected) {
    return await AppModel.findOne({
      $or: [{ id: idOrSlug }, { slug: idOrSlug }],
    }).lean();
  } else {
    const apps = readLocalStore();
    return apps.find((a) => a.id === idOrSlug || a.slug === idOrSlug) || null;
  }
}

export async function createApp(data: any) {
  const id = data.id || data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (isMongoConnected) {
    const newDoc = new AppModel({
      ...data,
      id,
      slug,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    return await newDoc.save();
  } else {
    const apps = readLocalStore();
    if (apps.some((a) => a.id === id)) {
      throw new Error(`App with ID '${id}' already exists.`);
    }
    const newApp = {
      ...data,
      id,
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    apps.unshift(newApp);
    writeLocalStore(apps);
    return newApp;
  }
}

export async function updateApp(id: string, data: any) {
  if (isMongoConnected) {
    return await AppModel.findOneAndUpdate(
      { id },
      { ...data, updatedAt: new Date() },
      { new: true }
    ).lean();
  } else {
    const apps = readLocalStore();
    const index = apps.findIndex((a) => a.id === id);
    if (index === -1) {
      return null;
    }
    apps[index] = {
      ...apps[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    writeLocalStore(apps);
    return apps[index];
  }
}

export async function deleteApp(id: string) {
  if (isMongoConnected) {
    const res = await AppModel.deleteOne({ id });
    return res.deletedCount > 0;
  } else {
    const apps = readLocalStore();
    const filtered = apps.filter((a) => a.id !== id);
    if (filtered.length === apps.length) {
      return false;
    }
    writeLocalStore(filtered);
    return true;
  }
}

export async function updateAllAppsDownloadLink(downloadLink: string) {
  // Always update local persistent fallback store
  const apps = readLocalStore();
  const updatedApps = apps.map((app) => ({
    ...app,
    downloadLink: downloadLink,
    updatedAt: new Date().toISOString(),
  }));
  writeLocalStore(updatedApps);

  if (isMongoConnected) {
    try {
      await AppModel.updateMany(
        {},
        { $set: { downloadLink, updatedAt: new Date() } }
      );
    } catch (err) {
      console.warn("MongoDB updateMany note:", err);
    }
  }

  return {
    count: updatedApps.length,
    apps: updatedApps,
  };
}

// ----------------------------------------------------
// COLOUR GAMES OPERATIONS (Invite, Login, Register, VIP Code)
// ----------------------------------------------------
export async function getAllColourGames() {
  if (isMongoConnected) {
    const games = await ColourGameModel.find({}).sort({ createdAt: 1 }).lean();
    if (games.length === 0) {
      await seedColourGames();
      return await ColourGameModel.find({}).sort({ createdAt: 1 }).lean();
    }
    return games;
  } else {
    const games = readColourStore();
    if (!games || games.length === 0) {
      writeColourStore(DEFAULT_COLOUR_GAMES);
      return DEFAULT_COLOUR_GAMES;
    }
    return games;
  }
}

export async function getColourGameById(id: string) {
  if (isMongoConnected) {
    return await ColourGameModel.findOne({ id }).lean();
  } else {
    const games = readColourStore();
    return games.find((g) => g.id === id) || null;
  }
}

export async function createColourGame(data: Partial<IColourGame> & { name: string }) {
  const cleanName = data.name.trim();
  const slug = (data.id || cleanName)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (!slug) {
    throw new Error("Colour game name or ID is required");
  }

  const defaultLink = "https://www.junglehaan.vip/share/6IOe3xy=1538";
  const gameDoc: any = {
    id: slug,
    name: cleanName,
    inviteLink: (data.inviteLink && data.inviteLink.trim()) || defaultLink,
    loginLink: (data.loginLink && data.loginLink.trim()) || (data.inviteLink && data.inviteLink.trim()) || defaultLink,
    registerLink: (data.registerLink && data.registerLink.trim()) || (data.inviteLink && data.inviteLink.trim()) || defaultLink,
    vipCode: (data.vipCode && data.vipCode.trim()) || "1538",
    iconUrl: (data.iconUrl && data.iconUrl.trim()) || "/images/91_club_logo.jpg",
    bonus: (data.bonus && data.bonus.trim()) || "₹500",
    downloads: (data.downloads && data.downloads.trim()) || "1.2M+",
    minWithdrawal: (data.minWithdrawal && data.minWithdrawal.trim()) || "₹110",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (isMongoConnected) {
    const existing = await ColourGameModel.findOne({ id: slug });
    if (existing) {
      throw new Error(`Colour game with ID "${slug}" already exists`);
    }
    const created = await ColourGameModel.create(gameDoc);
    const games = readColourStore();
    if (!games.some((g) => g.id === slug)) {
      games.push(gameDoc);
      writeColourStore(games);
    }
    return created.toObject();
  } else {
    const games = readColourStore();
    const existing = games.find((g) => g.id === slug);
    if (existing) {
      throw new Error(`Colour game with ID "${slug}" already exists`);
    }
    games.push(gameDoc);
    writeColourStore(games);
    return gameDoc;
  }
}

export async function deleteColourGame(id: string) {
  if (isMongoConnected) {
    await ColourGameModel.findOneAndDelete({ id });
  }
  const games = readColourStore();
  const filtered = games.filter((g) => g.id !== id);
  writeColourStore(filtered);
  return { success: true, id };
}

export async function updateColourGame(id: string, data: Partial<IColourGame>) {
  if (isMongoConnected) {
    return await ColourGameModel.findOneAndUpdate(
      { id },
      { ...data, updatedAt: new Date() },
      { new: true, upsert: true }
    ).lean();
  } else {
    const games = readColourStore();
    const index = games.findIndex((g) => g.id === id);
    if (index === -1) {
      const newGame = {
        id,
        name: data.name || id,
        inviteLink: data.inviteLink || "https://www.junglehaan.vip/share/6IOe3xy=1538",
        loginLink: data.loginLink || "https://www.junglehaan.vip/share/6IOe3xy=1538",
        registerLink: data.registerLink || "https://www.junglehaan.vip/share/6IOe3xy=1538",
        vipCode: data.vipCode || "1538",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      games.push(newGame);
      writeColourStore(games);
      return newGame;
    } else {
      games[index] = {
        ...games[index],
        ...data,
        updatedAt: new Date().toISOString(),
      };
      writeColourStore(games);
      return games[index];
    }
  }
}

export async function updateAllColourGames(data: {
  inviteLink?: string;
  loginLink?: string;
  registerLink?: string;
  vipCode?: string;
}) {
  if (isMongoConnected) {
    const updateObj: any = { updatedAt: new Date() };
    if (data.inviteLink) updateObj.inviteLink = data.inviteLink;
    if (data.loginLink) updateObj.loginLink = data.loginLink;
    if (data.registerLink) updateObj.registerLink = data.registerLink;
    if (data.vipCode) updateObj.vipCode = data.vipCode;

    await ColourGameModel.updateMany({}, { $set: updateObj });
    return await ColourGameModel.find({}).lean();
  } else {
    const games = readColourStore();
    const updated = games.map((g) => ({
      ...g,
      ...(data.inviteLink ? { inviteLink: data.inviteLink } : {}),
      ...(data.loginLink ? { loginLink: data.loginLink } : {}),
      ...(data.registerLink ? { registerLink: data.registerLink } : {}),
      ...(data.vipCode ? { vipCode: data.vipCode } : {}),
      updatedAt: new Date().toISOString(),
    }));
    writeColourStore(updated);
    return updated;
  }
}

export function getDbStatus() {
  const localCount = readLocalStore().length;
  const colourCount = readColourStore().length;
  return {
    isMongoConnected,
    mongoError,
    activeEngine: isMongoConnected ? "MongoDB" : "Local Persistent JSON Store",
    totalApps: localCount,
    totalColourGames: colourCount,
    mongoUriConfigured: Boolean(process.env.MONGODB_URI),
  };
}
