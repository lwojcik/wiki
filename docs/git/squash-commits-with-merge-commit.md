# Squash commits including at least one merge commit

For reasons I never dug into, Git won't allow for straightforward commit squashing if selected commits contain at least one merge commit.

In that scenario, I do the following sequence of steps:

## Steps

1. Create a temporary branch from the one my feature branch targets (usually `develop`):

```bash
git checkout -b temp develop
```

2. Squash my feature branch

```bash
git merge --squash my_feature_branch
```

3. Commit the changes. Edit the commit message to contain only the description of the feature, without the list of squashed commits.

```bash
git commit
```

4. Go back to my feature branch and point to the `temp` branch

```bash
git checkout my_feature_branch
git reset --hard temp
```

5. Push changes

```bash
git push --force
```

6. Delete the temporary branch

```bash
git branch -d temp
```

## Source

- https://stackoverflow.com/questions/30136558/how-to-squash-commits-which-have-merge-commit-in-between
