# odin-restaurant-page
A webpage for a fictional restaurant, made as part of The Odin Project.<br/>
Watch it live on [GitHub Pages](https://skorzany.github.io/odin-restaurant-page/).<br/><br/>
The goal of the project was to practice <em>ES6 modules</em>, <em>named/default imports</em> <br/>
and working with <em>bundlers</em>. (<em>webpack</em>, to be precise)<br/><br/>
At start, using bundlers might look like unnecessary hassle, as they require <br/>
additional work (<em>entry points</em>, config files, installing packages with npm etc.), <br/>
but once everything is set up correctly, bundlers will do a lot of good for us: <br/>
by combining all files into one automatically, they allow developers to work <br/>
in a more structured environment, improving the workflow and codebase readability.<br/><br/>
Bundlers shine when we want to share our code: if there are tools/modules that <br/>
our project depends on (both for development and usage), we do not need to provide <br/>
code for each of those tools. We simply provide a <em>json</em> file with module names <br/>
and their expected versions. <br/>
Using a simple command, webpack will download those dependencies which are missing, <br/>
or update those which version does not match. This means we share only a part <br/>
of the project (called a <em>source</em>), saving time and bandwidth, allowing other users <br/>
to compile and work with our project wherever they want.