/**
 * Helper to generate base-aware paths for internal links and assets.
 * Works seamlessly both in root production (/) and in PR subpath previews (/pr-preview/pr-XX/).
 */
export function toHref(path: string): string {
    const rawBase = import.meta.env.BASE_URL || '/';
    const cleanBase = rawBase.replace(/\/$/, '');
    if (!path.startsWith('/')) {
        return path;
    }
    if (cleanBase && path.startsWith(cleanBase)) {
        return path;
    }
    return `${cleanBase}${path}`;
}
