export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { product: post.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.product}`)
    const product = await res.json()

    return { props: { product } }
}


function product({ product }) {
    const { title, price, category, description, image, rating } = product;

    return (
        <div className="grid justify-items-center">
            <div className="card bg-base-100 shadow-xl  ">
                <figure><img src={image} alt="product.img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}!
                        <div className="badge badge-secondary">RATING: {rating.rate}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{price}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default product;