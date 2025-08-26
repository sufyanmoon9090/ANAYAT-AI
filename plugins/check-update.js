// check.update.js
const { cmd } = require("../command");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const { setCommitHash, getCommitHash } = require("../data/updateDB");

cmd({
    pattern: "update",
    alias: ["upgrade", "sync"],
    react: "🆕",
    desc: "Update the bot to the latest version.",
    category: "misc",
    filename: __filename
}, async (client, message, args, { reply, isOwner }) => {
    if (!isOwner) return reply("❌ Only the bot owner can run this command.");

    try {
        await reply("🔍 Checking for updates...");

        // ✅ GitHub repo details (changed to Anayat-ai)
        const repoOwner = "Anayat-ai"; // <-- tumhara GitHub username / org
        const repoName = "Anayat-ai";  // <-- tumhara repo name

        // 🔄 Latest commit hash from GitHub
        const { data: commitData } = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`);
        const latestCommitHash = commitData.sha;

        // 🗂️ Current commit hash from DB
        const currentHash = await getCommitHash();

        if (latestCommitHash === currentHash) {
            return reply("✅ Your Anayat-AI bot is already up-to-date!");
        }

        await reply("🚀 New update found! Updating the bot...");

        // 📥 Download repo zip
        const zipPath = path.join(__dirname, "latest.zip");
        const { data: zipData } = await axios.get(
            `https://github.com/${repoOwner}/${repoName}/archive/refs/heads/main.zip`,
            { responseType: "arraybuffer" }
        );
        fs.writeFileSync(zipPath, zipData);

        // 📦 Extract zip
        const extractPath = path.join(__dirname, "latest");
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, true);

        // ⚡ Correct extracted folder name
        const sourcePath = path.join(extractPath, `${repoName}-main`);
        const destinationPath = path.join(__dirname, "..");

        // 🔄 Copy new files but skip config.js and app.json
        copyFolderSync(sourcePath, destinationPath);

        // ✅ Save latest commit hash
        await setCommitHash(latestCommitHash);

        // 🧹 Cleanup
        fs.unlinkSync(zipPath);
        fs.rmSync(extractPath, { recursive: true, force: true });

        await reply("✅ Update complete! Restarting bot...");
        process.exit(0);
    } catch (error) {
        console.error("❌ Update Error:", error);
        reply("⚠️ Update failed. Please try again later.");
    }
});

// 📂 Helper function to copy folders while skipping some files
function copyFolderSync(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    const items = fs.readdirSync(source);
    for (const item of items) {
        const srcPath = path.join(source, item);
        const destPath = path.join(target, item);

        // 🚫 Skip important custom files
        if (["config.js", "app.json"].includes(item)) {
            console.log(`Skipping ${item} to preserve custom settings.`);
            continue;
        }

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolderSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
