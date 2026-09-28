<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the five institutional pages as separate TanStack routes with shared site chrome in __root.tsx, because each page needs a stable URL and its own metadata.
- Store the solution catalogue and news links in src/lib/site-content.ts, because the same verified content appears across multiple pages.
- Keep existing news articles linked to their original URLs until their full text is available locally, because excerpt-only recreations would lose content.
