const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    // Fetch post data from a database or other source
    const postData = {
        title: 'Sample Post',
        content: 'This is a sample blog post content.',
    };
    res.render('post', { post: postData });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
