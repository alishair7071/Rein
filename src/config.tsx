import serverConfig from "./server-config.json";

/**
 * Server vs client settings:
 * - Server settings (server-config.json): host, frontendPort, address, mouseInvert, mouseSensitivity.
 *   Updated only when user clicks Save Config.
 * - Client settings (localStorage only): e.g. rein_ip, rein-theme. Never in server-config.json.
 */
export const APP_CONFIG = {
	SITE_NAME: "Rein",
	SITE_DESCRIPTION: "Remote controller for your PC",
	REPO_URL: "https://github.com/imxade/rein",
	THEME_STORAGE_KEY: "rein-theme",
};

export const THEMES = {
	LIGHT: "cupcake",
	DARK: "dracula",
	DEFAULT: "dracula",
};

/** Server-only config (from server-config.json). Do not add client-only keys here. */
export const CONFIG = {
	FRONTEND_PORT: serverConfig.frontendPort,
	MOUSE_INVERT: serverConfig.mouseInvert ?? false,
	MOUSE_SENSITIVITY: serverConfig.mouseSensitivity ?? 1.0,
};
