import React, { useState } from "react";
import Modal from "../../components/Modal/Modal"; // Vérifiez le chemin d"accès
import projectsData from "../../assets/data/projects"; // Importez les données de votre projet

function Realization() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="réalisation" className="realization">
            <div className="container">
                <h2>MES TRAVAUX</h2>
                <div className="works-cards">
                    {projectsData.map(project => (
                        <article key={project.id} className="card" onClick={() => openModal(`project${project.id}`)}>
                            <div className="card-content">
                                <img src={project.picture} alt={`Image du ${project.title}`} />
                                <div className="text">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
        </section>
    );
}

export default Realization;
