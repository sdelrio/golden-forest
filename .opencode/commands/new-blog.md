# /new-blog <title>
Create a new blog post for the digital garden.

## Instructions
1. Ask the user for the post `<title>`.
2. Generate today's date in `YYYY-MM-DD` format.
3. Slugify the title to create the filename suffix.
4. Create `blog/<YYYY-MM-DD>-<slug>.mdx` with this frontmatter:
   ```markdown
   ---
   authors: [sdelrio]
   tags: [digital-garden]
   ---
   # <Title>
   
   Summary here...
   
   <!--truncate-->
   ```
