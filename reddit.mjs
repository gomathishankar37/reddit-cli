#! /usr/bin/env node
//? importing Packages
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

// ? parse env vars
const { argv } = yargs(process.argv);

// ? init fetch to reddit api
const res = await fetch('https://reddit.com/.json');
const data = await res.json();
const randomPost = Math.floor(Math.random() * data.data.children.length);

// ? random post from reddit api response
const post = data.data.children[randomPost];

// ? log if --print flag
if (argv.print) {
    console.log(`
        ✨Your Random Reddit Digest 🚀...\n
        📜 title: ${post.data.title}\n
        🔗 link: https://reddit.com${post.data.permalink}
    `)
}
else {
    // ? open in default browser
    console.log(`
    🌐 Opening.... "${post.data.title}" on Reddit
    `)
    open(`https://reddit.com${post.data.permalink}`)
}