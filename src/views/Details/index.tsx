import personalData from "../../data/personal.json";
import { Header, Footer } from '../../layout';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const personal = id ? personalData.find(personal => Number(personal.id) === Number(id)) : undefined;

    if (!personal) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold">Personal não encontrado</h1>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-4  text-black min-h-screen dark:bg-gray-900 dark:text-white">
                <img src={personal.image} alt={personal.name} className="w-full md:w-1/3 rounded-lg shadow-lg" />
                <div className="mt-4 md:mt-0 md:ml-8">
                    <h1 className="text-4xl font-bold text-center md:text-left mb-4">{personal.name}</h1>
                    <p className="text-lg leading-relaxed">{personal.description}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;