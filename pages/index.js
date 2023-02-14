import Card from "@/components/Shared/Card";

export const getStaticProps = async (ctx) => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const posts = await res.json();
  return {
    props: {
      datas: posts,
    }
  }
}


export default function Home({ datas }) {



  return (

    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1 className="text-center my-10 text-2xl font-bold">Our All Products</h1>
{/* 
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {datas?.map((data, i) => <Card key={i} data={data}></Card>)}
      </div> */}



    </>
  )
}
