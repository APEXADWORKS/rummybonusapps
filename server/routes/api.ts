import { Router, Request, Response } from "express";
import {
  getAllApps,
  getAppById,
  createApp,
  updateApp,
  deleteApp,
  updateAllAppsDownloadLink,
  seedDatabaseFromData,
  getDbStatus,
  getAllColourGames,
  getColourGameById,
  updateColourGame,
  updateAllColourGames,
  seedColourGames,
  readLocalStore,
} from "../db.js";

export const apiRouter = Router();

// GET /api/health - Database connection health check
apiRouter.get("/health", async (req: Request, res: Response) => {
  try {
    const status = getDbStatus();
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      database: status,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Health check failed" });
  }
});

// GET /api/stats - Overview stats for 80+ apps
apiRouter.get("/stats", async (req: Request, res: Response) => {
  try {
    const { apps } = await getAllApps({ limit: 1000 });
    const topCategoryCount = apps.filter((a) => a.category === "Top").length;
    const newCategoryCount = apps.filter((a) => a.category === "New").length;
    const highBonusCount = apps.filter((a) => a.category === "High Bonus").length;
    const trendingCount = apps.filter((a) => a.isTrending).length;

    res.json({
      totalApps: apps.length,
      categories: {
        Top: topCategoryCount,
        New: newCategoryCount,
        "High Bonus": highBonusCount,
      },
      trendingApps: trendingCount,
      dbStatus: getDbStatus(),
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/apps - List apps with query filters
apiRouter.get("/apps", async (req: Request, res: Response) => {
  try {
    const { search, category, trending, limit, skip } = req.query;

    const queryOptions: any = {};
    if (typeof search === "string" && search.trim()) {
      queryOptions.search = search.trim();
    }
    if (typeof category === "string" && category !== "All") {
      queryOptions.category = category;
    }
    if (trending !== undefined) {
      queryOptions.isTrending = trending === "true" || trending === "1";
    }
    if (limit) {
      queryOptions.limit = parseInt(limit as string, 10);
    }
    if (skip) {
      queryOptions.skip = parseInt(skip as string, 10);
    }

    const result = await getAllApps(queryOptions);
    res.json({
      success: true,
      total: result.total,
      count: result.apps.length,
      apps: result.apps,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to fetch apps" });
  }
});

// GET /api/apps/:id - Get single app
apiRouter.get("/apps/:id", async (req: Request, res: Response) => {
  try {
    const app = await getAppById(req.params.id);
    if (!app) {
      res.status(404).json({ error: "App not found" });
      return;
    }
    res.json({ success: true, app });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/apps - Create new app
apiRouter.post("/apps", async (req: Request, res: Response) => {
  try {
    const { name, bonus, downloads, minWithdrawal, downloadLink, iconUrl, category, isTrending } = req.body;

    if (!name || typeof name !== "string") {
      res.status(400).json({ error: "App 'name' is required" });
      return;
    }

    const created = await createApp({
      name: name.trim(),
      bonus: bonus || "Rs.51",
      downloads: downloads || "100K+",
      minWithdrawal: minWithdrawal || "₹100",
      downloadLink: downloadLink || "#",
      iconUrl: iconUrl || "/images/default_app.png",
      category: category || "Top",
      isTrending: Boolean(isTrending),
    });

    res.status(201).json({ success: true, app: created });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to create app" });
  }
});

// PUT /api/apps/:id - Update existing app
apiRouter.put("/apps/:id", async (req: Request, res: Response) => {
  try {
    const updated = await updateApp(req.params.id, req.body);
    if (!updated) {
      res.status(404).json({ error: "App not found to update" });
      return;
    }
    res.json({ success: true, app: updated });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to update app" });
  }
});

// DELETE /api/apps/:id - Delete app
apiRouter.delete("/apps/:id", async (req: Request, res: Response) => {
  try {
    const success = await deleteApp(req.params.id);
    if (!success) {
      res.status(404).json({ error: "App not found" });
      return;
    }
    res.json({ success: true, message: `App '${req.params.id}' deleted successfully` });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/apps/update-all-links - 1-Click bulk update all 83+ apps download link
apiRouter.post("/apps/update-all-links", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const { downloadLink } = req.body;
    if (!downloadLink || typeof downloadLink !== "string") {
      res.status(400).json({ error: "downloadLink is required" });
      return;
    }
    const result = await updateAllAppsDownloadLink(downloadLink.trim());
    res.json({
      success: true,
      message: `Successfully updated download link for all ${result.count} apps`,
      count: result.count,
      apps: result.apps,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to bulk update links" });
  }
});

// POST & GET /api/apps/seed - Re-seed initial 80+ apps from local store / data
const handleSeedAppsEndpoint = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const force = req.body?.force === true;
    const result = await seedDatabaseFromData(force);
    res.status(200).json({
      success: true,
      message: `Successfully seeded ${result.count} apps into database`,
      count: result.count,
      apps: result.apps,
    });
  } catch (err: any) {
    console.error("Seed route caught exception:", err);
    const fallbackApps = readLocalStore();
    res.status(200).json({
      success: true,
      message: `Loaded ${fallbackApps.length} apps from local fallback store`,
      count: fallbackApps.length,
      apps: fallbackApps,
    });
  }
};

apiRouter.post("/apps/seed", handleSeedAppsEndpoint);
apiRouter.get("/apps/seed", handleSeedAppsEndpoint);

// ====================================================
// COLOUR GAMES (Invite link, Login link, Register link, VIP Code)
// ====================================================

// GET /api/colour-games - List all colour games
apiRouter.get("/colour-games", async (req: Request, res: Response) => {
  try {
    const games = await getAllColourGames();
    res.json({ success: true, count: games.length, games });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to fetch colour games" });
  }
});

// GET /api/colour-games/:id - Get specific colour game
apiRouter.get("/colour-games/:id", async (req: Request, res: Response) => {
  try {
    const game = await getColourGameById(req.params.id);
    if (!game) {
      res.status(404).json({ error: "Colour game not found" });
      return;
    }
    res.json({ success: true, game });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/colour-games/:id - Update inviteLink, loginLink, registerLink, vipCode
apiRouter.put("/colour-games/:id", async (req: Request, res: Response) => {
  try {
    const { inviteLink, loginLink, registerLink, vipCode, name } = req.body;
    const updated = await updateColourGame(req.params.id, {
      name,
      inviteLink,
      loginLink,
      registerLink,
      vipCode,
    });
    res.json({ success: true, game: updated });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to update colour game" });
  }
});

// POST /api/colour-games/update-all - Batch update all colour games
apiRouter.post("/colour-games/update-all", async (req: Request, res: Response) => {
  try {
    const { inviteLink, loginLink, registerLink, vipCode } = req.body;
    const updatedGames = await updateAllColourGames({
      inviteLink,
      loginLink,
      registerLink,
      vipCode,
    });
    res.json({
      success: true,
      message: "All colour games updated successfully",
      games: updatedGames,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/colour-games/seed - Re-seed default colour games
apiRouter.post("/colour-games/seed", async (req: Request, res: Response) => {
  try {
    const force = req.body.force === true;
    const count = await seedColourGames(force);
    res.json({
      success: true,
      message: `Successfully seeded ${count} colour games into database`,
      count,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
