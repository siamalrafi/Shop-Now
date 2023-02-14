export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    return { paths,
         fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const post = await res.json()

    return { props: { post } }
}


function product() {
    return (
        <div>
            Enter
        </div>
    );
}

export default product;