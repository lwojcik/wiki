# Markdown

Syntax language I often use for writing and formatting. It looks legible on its own but it can be converted to other formats as well.

Various apps and services use various flavors of Markdown. While the most used features remain mostly the same, there may be differences in supported features (e.g. lack of image linking).

If Markdown doesn't offer a feature I need (e.g. attributes for hyperlinks), switch back to HTML if the implementation I use allows for using HTML inside Markdown.

Notes in this wiki use Markdown that gets converted to HTML so that web browsers can display them. I use Visual Studio Code which has excellent Markdown support, including syntax highlighting and previews. But I'm capable of using *any* editor for Markdown, even the most barebones.

I also use [markdownlint](https://github.com/DavidAnson/markdownlint) to highlight possible problems enforce conventions whenever something can be achieved in more than one way.

Markdownlint config used on this wiki: [`.markdownlint.json`](../../.markdownlint.json)

## Features I commonly use

I use them whenever they are available on the platform I use.

Headings:

```markdown
# Top-level heading
## Second-level heading
### Third-level heading
...
###### The smallest sixth-level heading (I usually need 3 at most)
```

Text formatting:

```markdown
**bold**

_italic_ or *italic*

***bold and italic***

~~strikethrough~~

> Quote.
> Can also be used in non-semantic way to get some nice formatting (e.g. on npmjs.org)
```

Hyperlinking. If possible, I try to use relative links so that they still work outside of the target platform (e.g. while looking at them on GitHub repository):

```markdown
[Local link text](../some-folder/some-markdown-page.md)

[External link text](https://example.org)
```

If I need specific attributes and the project allows for HTML in Markdown, I revert to HTML:

```markdown
Some text <a href="https://example.org" lang="pl">Some link</a> more text
```

Embedding images:

```markdown
![alt text](path/to/image.png "Optional image title")

// without image title:

![alt text](path/to/image.png)
```

Embedding and linking images. This is a bit tricky so here's the sequence of steps:

```markdown
1. Create a link with blank text (square brackets empty):

[](https://example.org)

2. Create an image:

![alt text](/path/to/image.png)

3. Put the image where link text should go (inside square brackets):

[![alt text](/path/to/image.png)](https://example.org)
```

Ordered lists. In most Markdown implementations you can just type `1.` and it will number items properly.

```markdown
1. First item
1. Second item
1. Third item
```

Multi-line ordered lists - I use tab spacing and blank lines for formatting. Unfortunately I haven't figured out how to make automatic numbering work, so I revert to numbering items manually.

``````markdown
1. First item

  ```bash
  git commit -am "Some git message"
  ```

2. Second item

  ```bash
  git push
  ```

3. Third item
``````

Unordered lists (multi-line works in the same fashion as ordered lists minus numbering):

```markdown
- First item
- Second item
- Third item
```

Code blocks with indication of language used so that syntax highlighting can be used:

``````markdown
```javascript
console.log('Hello world!')
```

```bash
rm -rf some_folder
```

```BASIC
PRINT "ATARI RULEZ"
```
``````

Inline code blocks:

```markdown
Lorem ipsum `this is inline code` dolor sit amet
```

Fenced code blocks:

``````markdown

Some text flowing nicely

```javascript
console.log('Some JavaScript goes here');
```

Some more text after the code block

``````

Tables - screw this noise, I prefer using a tool for that.

[Tables Generator](https://www.tablesgenerator.com/markdown_tables) is a nice one.

```markdown
I mean, if you **really** want to waste time putting those dashes
and spaces by hand, be my guest:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
| Data 7   | Data 8   | Data 9   |
```

## Docs, references, cheat sheets

- https://commonmark.org/help/ - Markdown reference
- https://www.markdownguide.org/cheat-sheet/ - Markdown cheatsheet
- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax - Markdown on GitHub
- https://help.twitch.tv/s/article/markdown-basics - Markdown on Twitch.tv
