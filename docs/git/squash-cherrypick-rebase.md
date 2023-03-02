# Squashing, cherry-picking, rebasing commits

If I can't squash  / cherry-pick / rebase commits via Git web interface (e.g. GitHub), I resort to using a GUI tool.

[GitHub Desktop](https://desktop.github.com/) is my favorite.

The reason I prefer to do that with GUI rather than command line:

- rebasing / squashing is not a natural way to use Git for me
  - I've been using merge commits for a long time
  - I squashing commits only on merging the PR with main branch
  - rewriting change history doesn't sit well with me but I can't explain why
- I often do that under time pressure
- interactive rebasing in command line isn't intuitive to me
  - Git as a whole was initially developed by Linux kernel developers to replace the tool they didn't like
    - which means a bunch of nerds that spent lifetime in the command line built a tool with legacy and conventions that may not be as readable to me to the same degree as to them
    - while I do have my experience with Linux, including command line, I loathe unintuitive tools using unfamiliar conventions
    - I don't use all Git features equally often
      - Some of them I'm comfortable to use in my command line
      - Some of them I use infrequently and I have no way to make them my muscle memory

I try doing some Git operations with a command line if I'm not under time pressure. But I don't have enough confidence to ditch GUI tools yet.

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
6. If you want to squash your commits, follow the steps from earlier instruction
7. If not, click `Publish branch`.
