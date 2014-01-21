# Jekyll Migration Checklist

This is what we need to do to migrate oss.sapo.pt to Jekyll

## Basics

    - [x] Create jekyll branch
    - [x] Merge ghink.cc for basic themeing
    - [ ] Remove as much legacy junk as possible
    - [ ] Sanitize CSS to remove custom fonts
    - [ ] Build hero layout
    - [ ] Build a standard top navigation bar
    - [ ] Section layout 
    - [ ] Figure out how to do breadcrumbs/section nav
    - [ ] Page layout
    - [ ] Remove Google Analytics
    - [ ] Add SAPO Analytics
    - [ ] Check every single syntax highlighting invocation
    - [ ] Move pages to their right place inside _pages
    - [ ] Add suitable front matter to every page
    - [ ] Figure out TOCs (global and subsection)
    - [ ] Populate it with the TOC
    - [ ] Generate a sitemap
    - [ ] Run minifier from `utils`
    - [ ] Make triply sure we don't rely on JavaScript for anything important
    - [ ] Move in any new content that may have appeared in the meantime
    - [ ] Run aspell on the lot
    - [ ] Check title tags, footer, outbound links, etc.
    - [ ] Run ImageOptim on the lot
    - [ ] Rewrite README for site-specific instructions
    - [ ] Merge to master and publish

## Policy:

    - [ ] Decide whether we need the blog or prefer to direct people to another site
    - [ ] Decide whether we need comments or prefer to direct people to each project's issue page
    - [ ] Remove Disqus code if so

## Investigate:

    - [ ] Client-side search
    - [ ] Useful data we might get from the Github API

## OTT:

    - [ ] Responsive font scaffolding from InK develop branch (soon 3.0)
    - [ ] Whatever else is fashionable these days


Note: Github, in their ultimate wisdom, decided that [task lists][tlp] are only available in some contexts -- hence the indenting above.

[tlp]: https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments
