# Squashing, cherry-picking, rebasing commits

If I can't squash  / cherry-pick / rebase commits via Git web interface (e.g. GitHub), I resort to using a GUI tool.

GitHub desktop is my favorite.

The reason I prefer to do that with GUI rather than command line:

- rebasing / squashing is not a natural way to use Git for me
  - I've been using merge commits for a long time
  - Squashing commits only on merging the PR with main branch
- I often do that under time pressure
- interactive rebasing in command line isn't intuitive to me

I try doing that with a command line if I'm not under time pressure, but I don't have enough confidence to ditch GUI tools yet.

## Squashing with GitHub Desktop

1. Ensure your branch is has no pending changes.
1. In the `History` tab, select commits you want to squash.
2. Right-click on them, select `Squash X commits` or `Cherry pick X commit`
3. In the window that opens, create a new branch to move the commits to or select an existing branch
4. 