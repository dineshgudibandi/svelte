var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dineshgudibandi/svelte.git', // Update to point to your repository
        user: {
            name: 'Dinesh Gudibandi', // update to use your name
            email: 'dineshreddyy@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)