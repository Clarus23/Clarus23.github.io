import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = ({ title, description, tags, githubLink, demoLink }) => {
    return (
        <div style={styles.card}>
            <div style={styles.top}>
                <div style={styles.folder}>
                    {/* Folder Icon or Image */}
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={styles.folderIcon}>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div style={styles.links}>
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                            <FaGithub />
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
            <h3 style={styles.title}>{title}</h3>
            <div style={styles.description}>
                <p>{description}</p>
            </div>
            <ul style={styles.tags}>
                {tags.map((tag, i) => (
                    <li key={i} style={styles.tag}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: 'var(--color-bg-light)',
        padding: '2rem 1.75rem',
        borderRadius: '4px',
        transition: 'var(--transition)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
        cursor: 'pointer',
        position: 'relative',
        top: 0,
        outline: 'none',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '35px'
    },
    folderIcon: {
        width: '40px',
        height: '40px',
        color: 'var(--color-secondary)'
    },
    links: {
        display: 'flex',
        gap: '10px',
        color: 'var(--color-text-secondary)',
        fontSize: '1.2rem'
    },
    iconLink: {
        transition: 'var(--transition)'
    },
    title: {
        margin: '0 0 10px',
        color: 'var(--color-text-primary)',
        fontSize: '1.4rem'
    },
    description: {
        color: 'var(--color-text-secondary)',
        fontSize: '1rem',
        marginBottom: '20px',
        flex: 1
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        fontSize: '0.8rem',
        color: 'var(--color-text-secondary)',
        fontFamily: 'var(--font-mono)'
    },
    tag: {
        marginRight: '5px'
    }
};

export default Card;
