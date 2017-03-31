import test from "ava";
import fs from "fs";

import helpers from "../src/helpers";

test("prepare()", t => {
  const config = { workingDir: ".whatever" };

  helpers.prepare(config).then(() => {
    t.true(fs.stat(config.workingDir));
    fs.rmdir(config.workingDir);
  });
});

test("writeFont()", t => {
  const content = "hello";
  const destination = ".whatever.txt";

  helpers.writeFont(content, destination).then(() => {
    t.true(fs.stat(destination));
    fs.unlink(destination);
  });
});

test("generateFontFiles()", t => {
  const content = {
    ttf: "font-data"
  };
  const config = { formats: ["otf"], destFilename: ".whatever" };

  helpers.generateFontFiles(content, config).then(() => {
    t.true(fs.stat(`${config.destFilename}.otf`));
    fs.unlink(`${config.destFilename}.otf`);
  });
});
