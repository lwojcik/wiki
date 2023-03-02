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
2. In the `History` tab, select commits you want to squash.
3. Right-click on them, select `Squash X commits`
4. Confirm your selection by clicking `Begin Squash`
5. Click `Force push origin` to update your branch upstream.

## Cherry-picking with GitHub Desktop

1. Ensure your branch is has no pending changes.
2. In the `History` tab, select commits you want to cherry-pick
3. Right-click on them, select `Cherry-pick X commits`
4. If you want to cherry-pick into an existing branch, select it from the list.
5. If you want to cherry-pick into a new branch:
    - click `New Branch`
    - type its name
    - click `Create Branch and Cherry-pick`
6. 