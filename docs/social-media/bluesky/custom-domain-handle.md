# Custom domain as Bluesky handle

How to replace your default username (`username.bsky.social`) with your own domain (eg. `example.org`).

Note: when switching to a custom domain, previous handle returns back to the pool of unused username. Any tags or mentions with the old handle will still point to your account.

## Steps

Can be done either in the mobile app or desktop.

- acquire a domain with a registrar of your choice (e.g. OVH or Namecheap)
- go to Settings (on desktop: https://bsky.app/settings) and scroll to Advanced
- click `Change handle`
- click `I have my own domain`
- enter the domain you want to use in the form (e.g. `example.org`)
- log in to your domain registrar. Add a TXT record named `_atproto.` with provided value to your domain DNS zone
- click `Verify DNS Record`
- if you see the message `Domain verified!`, you can now click the button `Update to example.org`
- done!

## Links

- https://blueskyweb.xyz/blog/3-6-2023-domain-names-as-handles-in-bluesky - Domain Names as Handles in Bluesky
- https://blueskyweb.xyz/blog/4-28-2023-domain-handle-tutorial - How to set your domain as your handle
