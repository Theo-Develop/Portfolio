import React from 'react';
import skillsData from "../../assets/data/skills";

function Skills() {
    // Regrouper les compétences par catégorie
    const skillsByCategory = skillsData.reduce((acc, skill) => {
        const { category } = skill;
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <section id="compétences" className="skills">
            <div className="container">
                <h2>MES COMPETENCES</h2>
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <div key={category} className="skills-category">
                        <h3>{category}</h3>
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index} className="skill-item">
                                    <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
