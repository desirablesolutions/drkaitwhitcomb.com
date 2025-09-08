// Aggregates Keystatic-managed content pages into the shape previously provided by pages.json
// Source files: src/content/pages/*.json (each file may define one or more top-level page keys)
import { getCollection, getEntry } from 'astro:content';

const pages = await getCollection("pages");
const modules = import.meta.glob<{ default: Record<string, any> }>(
  "/src/content/pages/*.json",
  { eager: true }
);

function basename(path: string) {
  const name = path.split("/").pop() || ""; // eslint-disable-line
  return name.replace(/\.json$/i, "");
}

function mergePages() {
  const out: Record<string, any> = {};
  for (const [path, mod] of Object.entries(modules)) {
    const data = (mod as any).default || {};
    // Document-style: { metadata/metaData?, data? }
    if (data && (data.metadata || data.metaData || data.data)) {
      const key = basename(path);
      out[key] = {
        metadata: data.metadata ?? data.metaData ?? {},
        data: data.data ?? {}
      };
      continue;
    }
    // Map-style: { home: {...}, about: {...}, ... }
    for (const [k, v] of Object.entries(data)) {
      out[k] = v;
    }
  }
  return out;
}

const Tpages = mergePages();
export default Tpages;
