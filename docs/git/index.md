# Git

Distributed version control system used for building software.

## Personal notes

- If I'm 100% sure my feature branch will get squashed, I'll use merge commits by default and squash commits when merging with development or main branch - but I'm not opinionated on this
  - in my open source projects contributors are allowed to use either merging or rebasing, depending on their preference
  - If a team I work with wants feature branches to be rebased and force pushed rather than merged, I can do that too
- I do a lot of Git operations from Git web interface if there's one available
- I keep forgetting to delete branches
  - On my local machine I periodically clean branches by hand with `git branch -d`
  - On remote I'm a fan of automatic branch deletion after closing the PR
    - On GitHub the process is nice, reversible and I see no downsides to turning it on
    - For reasons I don't understand teams I work with are reluctant to have it on
      - yet once in a while someone has to call out everyone to delete their merged branches
      - what a waste of time and energy

## Git hosting services

- https://github.com/
- https://gitlab.com/
- https://bitbucket.org/
- https://sr.ht/
- https://codeberg.org/

## Self-hosted Git hosting solutions

- https://gitea.io/
- https://about.gitlab.com/install/

## Graphical clients (GUI)

While 90% of Git operations I peform from a command line, there's a small portion of activities that I do once in a while, there's a small portion that I do very infrequently, I can't repeat from muscle memory and requires particular attention to get it right, especially under tight deadlines.

That's where graphical interfaces to GIT come handy.

- https://desktop.github.com/ - GitHub Desktop
- https://www.gitkraken.com/ - GitKraken
- https://tortoisegit.org/ - TortoiseGit
- https://git-scm.com/downloads/guis/ - more Git GUI clients

## Troubleshooting links

- https://git-scm.com/doc - official docs
- https://ohshitgit.com/ - various problematic Git scenarios and ways to solve them
