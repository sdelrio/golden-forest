# /new-doc <category> <title>
Create a new Docusaurus document in the `docs/` directory.

## Instructions
1. Ask the user for the `<category>` (subdirectory in `docs/`) and the `<title>`.
2. Slugify the title to create the filename (e.g., "My New Doc" -> `my-new-doc.mdx`).
3. Ensure the target directory `docs/<category>/` exists.
4. Create the file `docs/<category>/<filename>` with the following frontmatter:
   ```markdown
   ---
   id: <slug>
   title: <Title>
   sidebar_label: <Title>
   ---
   ```
5. Inform the user once the file is created.
