import { readFileSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";

const SUPPORTED_GHES_OPERATIONS = ["3.8", "3.9", "3.10"];
const __dirname = dirname(fileURLToPath(import.meta.url));

function isDeferenced(filename) {
  return /deref/.test(filename);
}

// Updates the operation ID for a specific operation. Useful if you want to maintain
// the function name in `plugin-rest-endpoint-methods.js` when the operation ID has
// been changed in the OpenAPI specification.
//
// Throws an error if an operation is not found for the specified path and HTTP method.
function rewriteOperationId(schema, path, httpMethod, operationId) {
  if (!schema.paths[path]) {
    throw `Path ${path} found not found in schema`;
  }

  if (!schema.paths[path][httpMethod]) {
    throw `HTTP method ${httpMethod} not found for path ${path} in schema`;
  }

  schema.paths[path][httpMethod].operationId = operationId;
}

// Adds an operation to the OpenAPI specification using JSON data stored in a file.
//
// Throws an error if an operation already exists for the specified path and HTTP method.
function addOperation(schema, path, httpMethod, overridePath) {
  if (schema.paths[path] && schema.paths[path][httpMethod]) {
    throw `Operation \`${httpMethod} ${path}\` already exists`;
  }

  if (!schema.paths[path]) {
    schema.paths[path] = {};
  }

  schema.paths[path][httpMethod] = JSON.parse(
    readFileSync(resolve(join(__dirname, overridePath)), "utf8"),
  );
}

// Replaces a given operation using JSON data stored in a file.
//
// Throws an error if an operation is not found for the specified path and HTTP method.
function replaceOperation(schema, path, httpMethod, overridePath) {
  if (!schema.paths[path]) {
    throw `Path ${path} not found in schema`;
  }

  if (!schema.paths[path][httpMethod]) {
    throw `HTTP method ${httpMethod} not found for path ${path} in schema`;
  }

  schema.paths[path][httpMethod] = JSON.parse(
    readFileSync(resolve(join(__dirname, overridePath)), "utf8"),
  );
}

export default function overrides(file, schema) {
  const isGHES = file.startsWith("ghes-");
  const isAE = file.startsWith("github.ae");
  const isDotcom = file.startsWith("api.github.com");
  const ghesVersion = isGHES ? file.match(/(?<=^ghes-)\d+\.\d+/)[0] : null;

  if (isGHES && SUPPORTED_GHES_OPERATIONS.indexOf(ghesVersion) == -1) {
    throw (
      `GHES version ${ghesVersion} is not yet supported. Please check the overrides ` +
      `in \`scripts/overrides/index.js\` to check if they are relevant to this version, ` +
      `and then update \`SUPPORTED_GHES_VERSION\`.`
    );
  }


}
