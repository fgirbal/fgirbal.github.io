function pubMetaLine(pub) {
    let venue = pub.venueHref
        ? `<a href="${pub.venueHref}">${pub.venue}</a>`
        : pub.venue;

    let meta = venue;
    if (pub.award) {
        meta += ` <span class="pub-award">&middot; ${pub.award}</span>`;
    }

    return meta;
}

function pubLinksLine(pub) {
    return pub.links
        .map(link => `<a class="pub-link" href="${link.href}">${link.label}</a>`)
        .join('<span class="pub-sep">&middot;</span>');
}

function renderPublication(pub) {
    const links = pub.links.length
        ? `<p class="pub-links">${pubLinksLine(pub)}</p>`
        : '';

    return `
        <article class="pub">
            <h3 class="pub-title">${pub.title}</h3>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-meta">${pubMetaLine(pub)}</p>
            ${links}
        </article>
    `;
}

function renderHighlights() {
    const container = document.getElementById('pub-highlights');
    if (!container) return;

    const highlights = PUBLICATIONS.filter(p => p.highlight);
    container.innerHTML = highlights.map(renderPublication).join('');
}

function renderTagLine(containerId, label, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dot = ' <span class="dot">&middot;</span> ';
    const values = items.map(i => i.toLowerCase()).join(dot);
    container.innerHTML = `<b>${label}</b>${dot}${values}`;
}

function renderSkills() {
    renderTagLine('skills-list', 'interests', SKILLS);
}

function renderTools() {
    renderTagLine('tools-list', 'toolbox', TOOLS);
}

function renderHonors() {
    const container = document.getElementById('honors-list');
    if (!container) return;

    container.innerHTML = HONORS.map(h => `
        <li class="honor">
            <span class="honor-title">${h.title}</span>
            <span class="honor-org">${h.org}</span>
            <span class="honor-year">${h.year}</span>
        </li>
    `).join('');
}

function initPublicationsPage() {
    const list = document.getElementById('pub-list');
    if (!list) return;

    const searchInput = document.getElementById('pub-search');
    const yearSelect = document.getElementById('pub-year');
    const countLabel = document.getElementById('pub-count');

    const years = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a, b) => b - a);
    yearSelect.innerHTML = '<option value="">all years</option>' +
        years.map(y => `<option value="${y}">${y}</option>`).join('');

    function apply() {
        const query = searchInput.value.trim().toLowerCase();
        const year = yearSelect.value;

        const filtered = PUBLICATIONS.filter(p => {
            const matchesQuery = !query ||
                p.title.toLowerCase().includes(query) ||
                p.authors.toLowerCase().includes(query);
            const matchesYear = !year || String(p.year) === year;
            return matchesQuery && matchesYear;
        });

        list.innerHTML = filtered.length
            ? filtered.map(renderPublication).join('')
            : '<p class="pub-empty">No publications match that search.</p>';

        countLabel.textContent = `${filtered.length} of ${PUBLICATIONS.length}`;
    }

    searchInput.addEventListener('input', apply);
    yearSelect.addEventListener('change', apply);
    apply();
}

function initNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    function setOpen(open) {
        links.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.tagName === 'A') setOpen(false); });
    document.addEventListener('click', e => {
        if (!links.classList.contains('open')) return;
        if (!links.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderHighlights();
    renderSkills();
    renderTools();
    renderHonors();
    initPublicationsPage();
    initNavToggle();

    const year = document.getElementById('copyright-year');
    if (year) year.textContent = new Date().getFullYear();
});
