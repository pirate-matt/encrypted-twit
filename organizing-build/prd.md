# Project Requirements Document

Okay, admittedly this is a silly project, but why not choose a life with more whimsy in it? I am styled a pirate after all... Long story short? I'm at a point where I need to post more on professional social media. I don't love this—and never will. I've found that social media can be a monetary benefit, but they are as much as trap as a useful tool. My goals and the design of the software are fairly diametrically opposed. Social media companies want to make money from advertising, meaning they are designed to maximize my time spent on platform. I on the other hand simply want to demonstrate expertise, improve my hiring network, and receive the critques/celebrations of my peers. I guess we share the desire to make money, but still I don't love doing this. At the end of the day? This makes it more fun for me, so I'm doing it.

## Goals

- post strings that are mathematically difficult to decrypt to my twitter account; users without this project implemented will not be able to decrypt my tweets
- publish and/or release a browser extension that allows users to view my tweets decrypted; users with this project will be able to view my tweets decrypted

## Details

_This is a non-exhaustive list of reqs. It's not intended to be; instead it contains things we want to be sure we don't lose track of._

### Dumb/Funny Language Explainer

- Encrypted Twit: what we are all for using this
- Entwit: the act of adding a fellow encrypted twit (necessary to decrypt... somewhat akin to following someone or being their "friend")
- Fellow encrypted twits: what we use in place of "friends", "followers", etc.

### Twit Length Limit

Once encrypted we only have 280 characters, so we need a strategy for how to accomplish this 100% of the time.

Ideas:

- Encrypt and then compress?

### DNS-based Entwiting

Bluesky isn't the first to do something like this, but I like the slant it gives this project; the slant towards web-nerds, doing web-nerd things. Thoughts:

- name: _ec
- account_link (this is what we'll use to identify posts that may be encrypted)
- public_key (this is what we'll use to decrypt posts)
- let's base64 encode this (or simliar) so it's a non-obvious at first glance

## Plan of Attack Project Slicing

The primary measure of progress is working software. A MLP—minimum loveable product—is what we're aiming for, but to decrease devlievery risk we should be as close to releaseable software as we can be. Hence we build slice-by-slice. It may not do everything we're aiming for, but it's working and beneficial. This agile mindset is the key to de-risking delivery and responding to the inevitable change inherent to the industry.

### Slice 0: Annoying setup

- [ ] I want to TDD
  - thinking vite, playwright, testing-library
- [ ] Evaluate plasmo: https://github.com/PlasmoHQ/plasmo (yes/no; now/later)
- [ ] Test drive a hello world
  - [ ] Hello world on extension page
  - [ ] Hello world injected into current page

### Slice 1: Chrome extension POC (Proof of Concept)

Limited to chrome, only encrypt and decrypt your own tweets.

- [ ] setup encryption: click on extension, (re)generate keys, saves private key for encrypting, saves public key for decrypting your own tweets
- [ ] twit encrpyted: click on extension, draft tweet (limited to 280 characters encrypted), twit: copy encrypted twit to clipboard, paste into twitter, tweet, see encrypted version
- [ ] decrypt twits: click on extension, click decrypt twits, find all encrypted twits in DOM and decrypts them
- [ ] real world hello world tweet (encrypted)
- [ ] First pass at README

### Slice 2: Chrome extension MVP (Minimum Viable Product)

- [ ] setup encryption: click on extension, become a fellow enctryped twit, enter your encrypted twit account link, enter domain you'll use to host your public key (optional), (re)generate keys, saves private key for encrypting, copies base64 encoded account link & public key to clipboard, displays instructions to add to domain's DNS record
  - :warning: no longer saves public key automagically, you'll need
- [ ] Entwit (add/update fellow enctryped twit): click on extension, select entwit, either:
  - [ ] enter target domain, app pulls account link & decryption key from DNS TXT record
  - [ ] paste manually shared encrypted twit data (base64 encoded account link & public key)
  - [ ] decode base64 & extract account link & public key, prepend public key to list for account
- [ ] manual data export: click on extension, export data, json file is downloaded
- [ ] manual data import: click on extension, import data, select or drop json file, import, app data is restored
- [ ] Settings:
  - [ ] manual decrypt: when on, you must manually click on each encrypted twit to decrypt it
    - when off, all encrypted twits are automatically decrypted

```psuedocode
decrypt tweet:
  find all posts by entwitted accounts
  for each post:
    check twit is encrypted
    attempt to decrypt encrypted twit for all public keys from most recent to oldest
    render decrypted twit below original encrypted twit

auto-decrypt:
  listen for new tweet added to DOM
  handle checking new tweets for fellow twits
    auto-decrypt? do so
    else append manual decrypt button
```

### Slice 3: Cross-browser extension

- [ ] develop targeted browser list: chrome, firefox, edge, safari, brave, etc.
- Rest TBD

### Slice 4: Polish to MLP (Minimum Lovable Product)

TBD

### Future slices: Drop good ideas for work to do another day here!

_By dropping them here as they get in the way of our current focus, we enable ourselves to stay on target (gold leader). It's a useful TDD technique._

- Draft storage and organization
- account names, descriptions, etc. can be encrypted/decrypted
- DNS record