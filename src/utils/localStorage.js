const STORAGE_KEY = "hero_io_installed_apps";

export const getInstalledApps = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const isAppInstalled = (id) => {
  const installed = getInstalledApps();
  return installed.some((app) => app.id === id);
};

export const installApp = (app) => {
  const installed = getInstalledApps();
  if (installed.some((item) => item.id === app.id)) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...installed, app]));
  return true;
};

export const uninstallApp = (id) => {
  const installed = getInstalledApps();
  const updated = installed.filter((app) => app.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};