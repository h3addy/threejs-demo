# threejs-demo

webpack tuts + threeJS tuts

So we're using webpack to bundle our modular application which yields a deployable /dist directory. Once the contents of /dist have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic. However, it can also cause headaches when you need new code to be picked up.

Webpack provides a method of templating the filenames using bracketed strings called substitutions. The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.
