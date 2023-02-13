export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id },
    }));

    // return { paths, fallback: false }

    return {
        paths: [],
        fallback: false
    }
};

export const getStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}


function product() {
    return (
        <div>
            <h1>Lorem ipsum dolor sit.</h1>
        </div>
    );
}

export default product;