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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Empêche le clic de se propager au modal-overlay */}
                <button onClick={onClose} className="close-button">×</button>
                {project ? (
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.picture} alt={`Image de ${project.title}`} />
                    </div>
                ) : (
                    <div>Projet non trouvé</div>
                )}
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
