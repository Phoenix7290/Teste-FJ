import { Footer, Header } from "../../layout";
import { PersonalCard } from "../../components";
import personalData from "../../data/personal.json";

const Personal = () => {
    return (
        <div className="dark:bg-slate-900">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8">Personal Trainers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {personalData.map(personal => (
                        <PersonalCard
                            key={personal.id}
                            id={personal.id}
                            image={personal.image}
                            name={personal.name}
                            description={personal.description}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Personal;