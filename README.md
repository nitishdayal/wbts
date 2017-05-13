# Webpack Documentation Pull Request #969

Master branch has webpack config as recommended by documentation, kkamali branch has
 webpack config as recommended by @kkamali.

Running webpack with the recommended config fails; the configuration doesn't provide a valid
 loader for typescript. And the recommended config isn't presented as a snippet, or as a piece of
 a config to add to an existing, functioning config, it's presented as a full, ready-to-go
 configuration.

Running webpack with @kkamali's config outputs a valid bundle which, when loaded and inspected
  in the browser, shows that source-mapping is configured correctly as well.

## Instructions

1.  Clone repo
2.  Move to desired branch: `git checkout master` \|\| `git checkout kkamali`
3.  npm install/yarn
4.  npm start/yarn start
