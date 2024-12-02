import Header from '../components/Header';

function homePage(){
    return (
        <>
        <Header />
        <main className="flex flex-col sm:flex-row justify-between md:gap-8"></main>
        <section className="w=full md:w-3/4 bg-blue-400 "></section>
        </>
    )
}