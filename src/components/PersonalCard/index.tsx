import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface Personal {
    id: string;
    image: string;
    name: string;
    description: string;
}

const PersonalCard = (personal: Personal) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white dark:bg-gray-800 transition-opacity duration-1000 ease-in-out ${
                inView ? 'opacity-100' : 'opacity-0'
            }`}
            id={personal.id}
        >
            <Link to={`/details/${personal.id}`}>
                <img className="w-full h-64 object-cover" src={personal.image} alt={personal.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{personal.name}</div>
                    <p className="text-gray-700 dark:text-gray-300 text-base mt-2">{personal.description}</p>
                </div>
            </Link>
        </div>
    );
}

export default PersonalCard;