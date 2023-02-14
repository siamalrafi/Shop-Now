
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { post: post.id.toString() },
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
    const post = await res.json()

    return { props: { post } }
};


function id({ post }) {
    console.log(post);
    return (
        <div>
            <p className="text-center text-3xl">{post.id}</p>
            <h4 className="text-center"> Title{post.title}</h4>


            Enter
        </div>
    );
}

export default id;
