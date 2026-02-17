try {
    await import('./src/styles/theme.js');
    console.log('Theme loaded');
} catch (e) {
    console.error('Theme failed', e);
}

try {
    await import('./src/data/projects.js');
    console.log('Projects loaded');
} catch (e) {
    console.error('Projects failed', e);
}

try {
    await import('./src/data/skills.js');
    console.log('Skills loaded');
} catch (e) {
    console.error('Skills failed', e);
}

try {
    await import('./vite.config.js');
    console.log('Config loaded');
} catch (e) {
    console.error('Config failed', e);
}
