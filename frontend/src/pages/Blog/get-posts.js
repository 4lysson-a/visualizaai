// get-posts.js
export default async function getPosts() {
    const files = ["v0.3.0.mdx"];

    const posts = await Promise.all(
        files.map(async file => {
            const module = await import(`./posts/${file}`);
            return { file, content: module.default };
        })
    );

    return posts;
}
