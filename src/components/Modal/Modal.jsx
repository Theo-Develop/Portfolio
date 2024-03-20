import React, { useEffect } from "react";
import PropTypes from "prop-types";
import projectsData from "../../assets/data/projects";

function Modal({ isOpen, onClose, modalType }) {
    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const handleOutsideClick = (event) => {
            if (event.target.classList.contains("modal-overlay")) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keyup", handleKeyUp);
            window.addEventListener("mousedown", handleOutsideClick);
            // Empêcher le scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Autoriser le scrolling
            document.body.style.overflow = 'visible';
        }

        // Nettoyer les écouteurs d"événements à la désactivation du composant
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]); // Dépendances de l"effet

    if (!isOpen) return null;

    const project = projectsData.find(p => `project${p.id}` === modalType);

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button onClick={onClose} className="close-button">×</button>
                    {project && <h3>{project.title}</h3>}
                </div>
                {project ? (
                    <div className="modal-body">
                        <div className="modal-left">
                            <img src={project.pictureLeft} alt={`Image de ${project.title}`} />
                            <h4>RÉALISATION COMPLÈTE</h4>
                            <ul>
                                {project.listSKills.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-right">
                            <img src={project.pictureRight} alt={`Image de ${project.title}`} />
                            <h4>INFOS PROJET</h4>
                            <div className="modal-description">
                                <p>{project.resume}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Projet non trouvé</div>
                )}
                <div className="modal-footer">
                    {project.siteUrl && (
                        <a href={project.siteUrl} className="button" target="_blank" rel="noopener noreferrer">
                            VISITER LE SITE
                        </a>
                    )}
                    {project.codeUrl && (
                        <a href={project.codeUrl} className="button" target="_blank" rel="noopener noreferrer">
                            CONSULTER LE CODE
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    modalType: PropTypes.string.isRequired,
};

export default Modal;
