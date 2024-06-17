import Cards_1 from "@/components/Cards_1"
import Header from "@/components/Header"
import Main from "@/components/Main"
import "./Home.scss"


const Home = () => {
  return (
    <>
      <div className="Home">
        <header><Header/></header>
        <Cards_1 className="mt-[-5rem] activities gap-5 m-auto w-[80%] flex flex-wrap justify-center"/>
        <main><Main/></main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Home