import Link from "next/link";

function Card({ data }) { 

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={data?.image} className='h-44 w44' alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}!</h2>
                    <small>{data?.description.slice(0, 100)}</small>
                    <p className="text-center">Category: {data?.category}</p>
                    <p className="text-center font-semibold">Price: {data?.price}</p>
                    <p className="text-center font-semibold">Rating: {data?.rating?.rate}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/products/${data?.id.toString()}`}>
                            < button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;