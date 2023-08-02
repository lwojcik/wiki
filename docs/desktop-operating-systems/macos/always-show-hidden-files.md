# Always show hidden files in Finder

Confirmed to work in macOS Ventura.

In command line, use the following command:

```
defaults write com.apple.finder AppleShowAllFiles True; killall Finder 
```

To revert that:

```
defaults write com.apple.finder AppleShowAllFiles False; killall Finder
```

`killall Finder` may look a bit scary but it's not - unlike Windows Explorer, Finder should reload without any unexpected side effects.  

## Links

- https://discussions.apple.com/thread/3863728
