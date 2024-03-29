import Layout from "../../components/Layout";

export default function detailPost({data}) {
  return (
      <Layout>
        <h1>Lista de blogs</h1>
            {
                
                <div>
                    <h3>{data.id} - {data.title}</h3>
                    <p>{data.body}</p>
                </div>
                
            }
      </Layout>
  );
}

export async function getStaticPaths(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        const paths = data.map(({id}) => ({params:{id: `${id}`}}))
        return{
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}


export async function getStaticProps({params}){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
        const data = await res.json();
        return {
            props:{
                data,
            },
            
        };
    } catch (error) {
        console.log(error);
    }
}