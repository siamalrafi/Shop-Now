function Card({ data }) {
    console.log(data);

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={data?.image} className='h-44 w44' alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}!</h2>
                    <small>{data?.description.slice(0, 100)}</small>
                    <p>Category: {data?.category}</p>
                    <p>Price: {data?.price}</p>
                    <p>Rating: {data?.rating?.rate}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;