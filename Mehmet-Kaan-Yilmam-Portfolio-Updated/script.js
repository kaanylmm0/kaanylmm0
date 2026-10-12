(()=>{
 const d=window.PORTFOLIO||{};
 const $=id=>document.getElementById(id);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const set=(id,v)=>{const n=$(id);if(n)n.textContent=v||''};
 set('heroName',d.name);set('heroRole',d.role);set('heroBio',d.bio);set('aboutLead',d.aboutLead);set('aboutDetail',d.aboutDetail);set('brand',(d.name||'Portfolio').split(' ')[0]);set('footerName',`© ${new Date().getFullYear()} ${d.name||'Portfolio'}`);
 set('photoInitials',(d.name||'Your Name').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase());document.title=`${d.name||'Portfolio'} | ${d.role||'Software Engineer'}`;
 if(d.photo){const pic=document.createElement('img');pic.src=d.photo;pic.alt=`Portrait of ${d.name}`;pic.onerror=()=>pic.remove();$('heroPhoto').prepend(pic)}
 for(const id of ['cvHero','cvAbout']){const a=$(id);if(d.cv){a.href=d.cv}else{a.removeAttribute('href');a.classList.add('disabled');a.title='CV coming soon'}}
 function link(id,url){const a=$(id);if(url){a.href=url}else{a.hidden=true}}
 for(const id of ['githubTop','githubBottom'])link(id,d.github);
 for(const id of ['linkedinTop','linkedinBottom'])link(id,d.linkedin);
 for(const id of ['emailButton','emailLink'])link(id,d.email?'mailto:'+d.email:'');
 $('skillsGrid').innerHTML=(d.skills||[]).map(x=>`<article class="skill-card"><h3>${esc(x.title)}</h3><div class="skill-tags">${(x.items||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div></article>`).join('');
 $('projectsGrid').innerHTML=(d.projects||[]).map((p,i)=>{const variants=['violet','blue','orange','pink','green'];const accent=variants.includes(p.accent)?p.accent:'violet';const buttons=[['appStore','App Store ↗'],['github','GitHub ↗'],['website','Website ↗']].filter(([key])=>p[key]).map(([key,label])=>`<a href="${esc(p[key])}" target="_blank" rel="noopener noreferrer">${label}</a>`).join('');return `<article class="project-card"><div class="project-image ${accent}">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy" onerror="this.remove()" />`:''}<span class="project-monogram">${esc(p.initials||p.name.slice(0,2))}</span><span class="project-count">${String(i+1).padStart(2,'0')}</span></div><div class="project-content"><span class="project-category">${esc(p.category)}</span><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="skill-tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>${buttons?`<div class="project-links">${buttons}</div>`:''}</div></article>`}).join('');
 $('activitiesList').innerHTML=(d.activities||[]).map(a=>`<article class="activity"><div class="activity-date">${esc(a.date)}</div><div><h3>${esc(a.title)}</h3><p class="activity-org">${esc(a.organization)}</p><p>${esc(a.description)}</p></div>${a.image?`<a class="activity-certificate" href="${esc(a.image)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(a.imageLabel||'View activity image')}"><img src="${esc(a.image)}" loading="lazy" alt="${esc(a.title)} certificate"/><span>${esc(a.imageLabel||'View image')} ↗</span></a>`:`<div class="activity-symbol" aria-hidden="true">↗</div>`}</article>`).join('');
 const menu=$('menuToggle'),nav=$('navigation');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
})();
