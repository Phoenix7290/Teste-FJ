import { Header, Footer } from "../../layout";
import video from "../../assets/video/gym.mp4";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <div className="relative w-full h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video}
                    autoPlay
                    loop
                    muted
                />
                <div className="relative z-10 flex flex-col items-center p-4 bg-white bg-opacity-75 text-black dark:bg-gray-900 dark:bg-opacity-75 dark:text-white">
                    <h1 className="text-4xl font-bold text-center mb-8">Bem-vindo à FJ Personal CT</h1>
                </div>
            </div>
            <article className="flex flex-col justify-center bg-white text-black dark:bg-gray-900 dark:text-white py-10">
                <h2 className="text-4xl font-bold text-center mb-8">Veja mais:</h2>
                <div className="flex flex-wrap justify-center gap-8 p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
                    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px] md:max-w-[600px]">
                        <h3 className="text-2xl font-semibold mb-4">Nossos Serviços</h3>
                        <ul className="list-disc list-inside">
                            <li>Treinamento Personalizado</li>
                            <li>Aulas em Grupo</li>
                            <li>Planos de Nutrição</li>
                            <li>Coaching Online</li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px] md:max-w-[600px]">
                        <h3 className="text-2xl font-semibold mb-4">Por Que Nos Escolher?</h3>
                        <p>No FJ Personal CT, estamos dedicados a ajudar você a alcançar seus objetivos de fitness. Nossos treinadores experientes e programas abrangentes são projetados para atender a todos os níveis de condicionamento físico.</p>
                    </section>
                    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px] md:max-w-[600px]">
                        <h3 className="text-2xl font-semibold mb-4">Nossos Personais:</h3>
                        <Link to="/personal" className="text-blue-500">Conheça nossos personais</Link>
                    </section>
                    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px] md:max-w-[600px]">
                        <h3 className="text-2xl font-semibold mb-4">Mais informações? Nossos contatos</h3>
                        <p>Telefone: (11) 9999-9999</p>
                        <p>Email: generic@gmail.com</p>
                    </section>
                </div>
            </article>
            <Footer />
        </>
    );
}

export default Home;