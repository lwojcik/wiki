# Squash all commits on branch

If I know how many commits I have on a branch, I can just do

```bash
git rebase -i HEAD~[number of commits]
```

But what if I don't? Can I just squash **all** commits on the branch?

`my_branch` - the branch I'm squashing

`develop` - branch I derived `my_branch` from

## Method 1

```bash
git checkout my_branch
git reset $(git merge-base develop $(git branch --show-current))
git add -A
git commit -m "Commit message on my_branch"
```

## Method 2

```bash
git switch my_branch
git reset --soft $(git merge-base develop HEAD)
git commit -m "Commit message on my_branch"
```

## Source

- https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch
