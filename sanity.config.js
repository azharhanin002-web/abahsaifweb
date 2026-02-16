import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Abah Saif Studio',
  projectId: 'v9y48nrd',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema.types,
  },
});