import { readFile, access } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowed = new Set(['schemaVersion', 'projectName', 'visionId', 'organizationName']);
export function normalizeProjectBinding(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || Object.keys(value).some(key => !allowed.has(key)) || value.schemaVersion !== 1
    || !uuid.test(value.visionId || '')
    || !['projectName', 'organizationName'].every(key => typeof value[key] === 'string'
      && value[key].trim().length > 0 && value[key].length <= 160)) return null;
  return {
    schemaVersion: 1, projectName: value.projectName.trim(),
    visionId: value.visionId.toLowerCase(), organizationName: value.organizationName.trim(),
  };
}

// Read-only. Stop at this repository root; never inherit another project's
// association above it. No network, environment, auth stores or subprocesses.
export async function readProjectBinding(projectPath) {
  let directory = resolve(projectPath);
  while (true) {
    try {
      const source = await readFile(join(directory, '.visionboard/project.json'), 'utf8');
      if (source.length > 4096) return { state: 'invalid_binding' };
      const binding = normalizeProjectBinding(JSON.parse(source));
      return binding ? { state: 'verify_access', binding } : { state: 'invalid_binding' };
    } catch (error) {
      if (error.code !== 'ENOENT') return { state: 'invalid_binding' };
    }
    try {
      await access(join(directory, '.git'));
      return { state: 'discover_vision' };
    } catch (error) {
      if (error.code !== 'ENOENT') return { state: 'unavailable' };
    }
    const parent = dirname(directory);
    if (parent === directory) return { state: 'discover_vision' };
    directory = parent;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  if (!process.argv[2]) {
    process.stderr.write('Provide the project directory. This helper is read-only.\n');
    process.exitCode = 1;
  } else {
    process.stdout.write(JSON.stringify(await readProjectBinding(process.argv[2])) + '\n');
  }
}
